import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import './FloatingEnquiryPanel.css'

export type ServiceOption =
  | 'Entrepreneurship Consultation'
  | 'Business Advisory & Mentoring'
  | 'Project Planning & Management'
  | 'IT Services'
  | 'Partnership or Other Enquiry'

export type EnquiryType = 'A business' | 'An organization' | 'An individual'

interface FormData {
  service: ServiceOption | ''
  enquiryType: EnquiryType
  name: string
  organization: string
  email: string
  message: string
}

const SERVICE_OPTIONS: ServiceOption[] = [
  'Entrepreneurship Consultation',
  'Business Advisory & Mentoring',
  'Project Planning & Management',
  'IT Services',
  'Partnership or Other Enquiry',
]

const ENQUIRY_TYPES: EnquiryType[] = ['A business', 'An organization', 'An individual']

/**
 * Determine a contextual default service based on current route or hash
 */
function getContextualService(): ServiceOption | '' {
  if (typeof window === 'undefined') return ''
  const path = window.location.pathname
  const hash = window.location.hash.toLowerCase()

  if (hash.includes('entrepreneurship') || (path.includes('consultancy') && hash.includes('01'))) {
    return 'Entrepreneurship Consultation'
  }
  if (hash.includes('advisory') || hash.includes('mentoring') || (path.includes('consultancy') && hash.includes('02'))) {
    return 'Business Advisory & Mentoring'
  }
  if (hash.includes('project') || (path.includes('consultancy') && hash.includes('03'))) {
    return 'Project Planning & Management'
  }
  if (hash.includes('it-services') || hash.includes('tech') || (path.includes('consultancy') && hash.includes('04'))) {
    return 'IT Services'
  }
  if (path.includes('consultancy')) {
    return 'Entrepreneurship Consultation'
  }
  if (path.includes('our-work') || hash.includes('partner') || hash.includes('get-involved')) {
    return 'Partnership or Other Enquiry'
  }
  return ''
}

export function FloatingEnquiryPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>(() => ({
    service: getContextualService(),
    enquiryType: 'A business',
    name: '',
    organization: '',
    email: '',
    message: '',
  }))

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const firstInputRef = useRef<HTMLSelectElement>(null)

  const titleId = useId()
  const descId = useId()

  // Listen for global custom events to open the panel with an optional preset service
  useEffect(() => {
    function handleOpenEvent(event: Event) {
      const customEvent = event as CustomEvent<{ service?: ServiceOption }>
      if (customEvent.detail?.service) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail.service! }))
      } else {
        const contextual = getContextualService()
        if (contextual) {
          setFormData((prev) => ({ ...prev, service: prev.service || contextual }))
        }
      }
      setIsOpen(true)
    }

    window.addEventListener('open-cfdo-enquiry', handleOpenEvent)
    return () => window.removeEventListener('open-cfdo-enquiry', handleOpenEvent)
  }, [])

  // Auto-detect service context on route/hash changes if not already modified
  useEffect(() => {
    const contextual = getContextualService()
    if (contextual && !formData.name) {
      setFormData((prev) => ({ ...prev, service: contextual }))
    }
  }, [isOpen])

  // Focus trap, Escape key handling, and background scroll locking
  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Move focus into the panel
    const timeout = window.setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus()
      } else if (firstInputRef.current) {
        firstInputRef.current.focus()
      }
    }, 50)

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closePanel()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )

      if (!focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(timeout)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  function openPanel() {
    setIsOpen(true)
  }

  function closePanel() {
    setIsOpen(false)
    // Restore focus to trigger button
    window.requestAnimationFrame(() => {
      triggerRef.current?.focus()
    })
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.service) {
      newErrors.service = 'Please choose what you need help with'
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setSubmitError(null)

    if (!validate()) {
      // Focus first error field
      const firstErrorKey = Object.keys(errors)[0] as keyof FormData
      const element = panelRef.current?.querySelector(`[name="${firstErrorKey}"]`) as HTMLElement
      element?.focus()
      return
    }

    setIsSubmitting(true)

    try {
      // Integration point for CFDO backend or form service provider
      // (e.g., Formspree, Formkeep, CFDO API endpoint)
      const apiUrl = import.meta.env.VITE_ENQUIRY_API_URL

      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            sourcePath: window.location.pathname,
          }),
        })

        if (!response.ok) {
          throw new Error(`Submission failed with status: ${response.status}`)
        }
      } else {
        // Safe, clean simulated submission when no external endpoint is configured
        // Log in dev environment for verification without exposing credentials
        await new Promise((resolve) => setTimeout(resolve, 800))
        console.info('[CFDO Enquiry] Form submission captured locally:', formData)
      }

      setIsSuccess(true)
    } catch (err) {
      console.error('[CFDO Enquiry Submission Error]', err)
      setSubmitError('We could not send your request at this time. Please try again or reach out directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleReset() {
    setIsSuccess(false)
    setSubmitError(null)
    setErrors({})
    setFormData({
      service: getContextualService(),
      enquiryType: 'A business',
      name: '',
      organization: '',
      email: '',
      message: '',
    })
  }

  return (
    <>
      {/* 1. COLLAPSED: Colored vertical floating tab attached to right edge */}
      <button
        ref={triggerRef}
        type="button"
        className={`cfdo-floating-tab ${isOpen ? 'is-active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="cfdo-enquiry-drawer"
        aria-label="Connect with CFDO — Open consultation and enquiry panel"
        onClick={openPanel}
      >
        <span className="cfdo-tab-icon" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M17 10H3M11 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="cfdo-tab-text">Connect with CFDO</span>
        <span className="cfdo-tab-badge" aria-hidden="true" />
      </button>

      {/* 2. BACKDROP OVERLAY */}
      {isOpen && (
        <div
          className="cfdo-enquiry-backdrop"
          onClick={closePanel}
          aria-hidden="true"
        />
      )}

      {/* 3. EXPANDED: Slide-in enquiry panel (Mint-Yellow theme) */}
      <aside
        ref={panelRef}
        id="cfdo-enquiry-drawer"
        className={`cfdo-enquiry-panel ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        aria-hidden={!isOpen}
      >
        {/* Top yellow accent indicator bar */}
        <div className="cfdo-panel-accent-strip" aria-hidden="true" />

        <div className="cfdo-panel-inner">
          {/* Header */}
          <div className="cfdo-panel-header">
            <div className="cfdo-panel-eyebrow-wrap">
              <span className="cfdo-panel-eyebrow">CFDO · LET'S CONNECT</span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              className="cfdo-panel-close"
              onClick={closePanel}
              aria-label="Close enquiry panel"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="cfdo-panel-title-area">
            <h2 id={titleId} className="cfdo-panel-heading">
              How can we support you?
            </h2>
            <p id={descId} className="cfdo-panel-desc">
              Tell us a little about what you need. We'll use your enquiry to understand how CFDO may be able to help.
            </p>
          </div>

          {/* Form or Success State */}
          <div className="cfdo-panel-body">
            {isSuccess ? (
              <div className="cfdo-enquiry-success" role="status" aria-live="polite">
                <div className="cfdo-success-badge" aria-hidden="true">✓</div>
                <h3 className="cfdo-success-heading">Thank you for reaching out.</h3>
                <p className="cfdo-success-msg">
                  Your enquiry has been submitted successfully. Thank you for connecting with CFDO.
                </p>

                <div className="cfdo-success-recap">
                  <div>
                    <span className="cfdo-recap-label">Submitted by</span>
                    <span className="cfdo-recap-value">{formData.name}</span>
                  </div>
                  {formData.service && (
                    <div>
                      <span className="cfdo-recap-label">Interest area</span>
                      <span className="cfdo-recap-value">{formData.service}</span>
                    </div>
                  )}
                  <div>
                    <span className="cfdo-recap-label">Response email</span>
                    <span className="cfdo-recap-value">{formData.email}</span>
                  </div>
                </div>

                <div className="cfdo-success-actions">
                  <button
                    type="button"
                    className="cfdo-btn-primary"
                    onClick={closePanel}
                  >
                    Return to Website
                  </button>
                  <button
                    type="button"
                    className="cfdo-btn-secondary"
                    onClick={handleReset}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="cfdo-enquiry-form" onSubmit={handleSubmit} noValidate>
                {submitError && (
                  <div className="cfdo-error-banner" role="alert">
                    <span aria-hidden="true">!</span>
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Field 1: Service selection */}
                <div className={`cfdo-form-group ${errors.service ? 'has-error' : ''}`}>
                  <label htmlFor="cfdo-enquiry-service" className="cfdo-label">
                    What do you need help with? <span className="cfdo-req" aria-hidden="true">*</span>
                  </label>
                  <div className="cfdo-select-wrapper">
                    <select
                      ref={firstInputRef}
                      id="cfdo-enquiry-service"
                      name="service"
                      value={formData.service}
                      aria-invalid={errors.service ? 'true' : undefined}
                      aria-describedby={errors.service ? 'cfdo-err-service' : undefined}
                      onChange={(e) => {
                        const val = e.target.value as ServiceOption | ''
                        setFormData((prev) => ({ ...prev, service: val }))
                        if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }))
                      }}
                    >
                      <option value="">Select a service or focus area...</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.service && (
                    <span id="cfdo-err-service" className="cfdo-error-msg" role="alert">
                      {errors.service}
                    </span>
                  )}
                </div>

                {/* Field 2: Enquiry type */}
                <div className="cfdo-form-group">
                  <label className="cfdo-label" id="cfdo-enquiry-type-label">
                    I'm reaching out as
                  </label>
                  <div
                    className="cfdo-segmented-group"
                    role="radiogroup"
                    aria-labelledby="cfdo-enquiry-type-label"
                  >
                    {ENQUIRY_TYPES.map((type) => {
                      const isSelected = formData.enquiryType === type
                      return (
                        <button
                          key={type}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className={`cfdo-segment-btn ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => setFormData((prev) => ({ ...prev, enquiryType: type }))}
                        >
                          {type}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Field 3: Name */}
                <div className={`cfdo-form-group ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="cfdo-enquiry-name" className="cfdo-label">
                    Your name <span className="cfdo-req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cfdo-enquiry-name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    autoComplete="name"
                    value={formData.name}
                    aria-invalid={errors.name ? 'true' : undefined}
                    aria-describedby={errors.name ? 'cfdo-err-name' : undefined}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
                    }}
                  />
                  {errors.name && (
                    <span id="cfdo-err-name" className="cfdo-error-msg" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Field 4: Business or organization */}
                <div className="cfdo-form-group">
                  <label htmlFor="cfdo-enquiry-org" className="cfdo-label">
                    Business or organization <span className="cfdo-opt">(optional)</span>
                  </label>
                  <input
                    id="cfdo-enquiry-org"
                    name="organization"
                    type="text"
                    placeholder="Organization name"
                    autoComplete="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData((prev) => ({ ...prev, organization: e.target.value }))}
                  />
                </div>

                {/* Field 5: Email */}
                <div className={`cfdo-form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="cfdo-enquiry-email" className="cfdo-label">
                    Email address <span className="cfdo-req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cfdo-enquiry-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={formData.email}
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={errors.email ? 'cfdo-err-email' : undefined}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                    }}
                  />
                  {errors.email && (
                    <span id="cfdo-err-email" className="cfdo-error-msg" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Field 6: Message */}
                <div className="cfdo-form-group">
                  <label htmlFor="cfdo-enquiry-msg" className="cfdo-label">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="cfdo-enquiry-msg"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe what you would like support with..."
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                {/* Primary CTA Button (Warm Yellow Accent) */}
                <div className="cfdo-form-actions">
                  <button
                    type="submit"
                    className="cfdo-btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="cfdo-btn-loading">
                        <span className="cfdo-spinner" aria-hidden="true" />
                        <span>Sending enquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="cfdo-panel-footer-note">
                  CFDO operates across Tanzania Mainland, providing both community development and professional consultancy.
                </p>
              </form>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
