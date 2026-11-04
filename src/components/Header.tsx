import { useEffect, useId, useRef, useState } from 'react'

const futureAreas = [
  { number: '01', title: 'About us', href: '/about' },
  { number: '02', title: 'Our work', href: '/our-work' },
  { number: '03', title: 'How we work', href: '/how-we-work' },
  { number: '04', title: 'Consultancy', href: '/consultancy' },
  { number: '05', title: 'Impact Gallery', href: '/#gallery' },
  { number: '06', title: 'Get involved', href: '#get-involved' },
]

function PathwayMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M5 29C11 29 12 23 17 23s5-9 14-16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="5" cy="29" r="2.5" fill="currentColor" />
      <circle cx="17" cy="23" r="2.5" fill="currentColor" />
      <circle cx="31" cy="7" r="2.5" fill="currentColor" />
    </svg>
  )
}

export function Header({ currentPath }: { currentPath?: string } = {}) {
  const path = currentPath ?? (typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') || '/' : '/')
  const onHomePage = path === '/'
  const currentPage = path
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!focusable?.length) return
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

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  return (
    <>
      <header className={`site-header ${open ? 'menu-open' : ''}`}>
        <a className="brand" href="/" aria-label="CFDO home" onClick={() => open && closeMenu()}>
          <PathwayMark />
          <span className="brand-short">CFDO</span>
          <span className="brand-long">Community for Future Development Organization</span>
        </a>
        <div className="header-actions">
          <button
            ref={triggerRef}
            className="menu-trigger"
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-trigger-label">{open ? 'Close' : 'Menu'}</span>
            <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </header>

      {open && <button className="menu-backdrop" type="button" aria-label="Close menu" onClick={closeMenu} />}
      <aside
        ref={panelRef}
        id={panelId}
        className={`menu-panel ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal={open ? 'true' : undefined}
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="menu-panel-top">
          <span className="eyebrow">Explore CFDO</span>
          <button ref={closeRef} className="panel-close" type="button" onClick={closeMenu} aria-label="Close menu">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav className="menu-nav" aria-label="Primary navigation">
          <a className={`menu-link ${onHomePage ? 'active' : ''}`} href="/" aria-current={onHomePage ? 'page' : undefined} onClick={closeMenu}><span>00</span> Home <span aria-hidden="true">↗</span></a>
          {futureAreas.map((area) => area.href ? (
            <a className={`menu-link ${currentPage === area.href ? 'active' : ''}`} href={area.href.startsWith('#') && !onHomePage ? `/${area.href}` : area.href} key={area.number} aria-current={currentPage === area.href ? 'page' : undefined} onClick={closeMenu}>
              <span>{area.number}</span> {area.title} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <div className="menu-link planned" key={area.number}>
              <span>{area.number}</span> {area.title}
            </div>
          ))}
        </nav>
        <div className="menu-panel-bottom">
          <p className="menu-description">Building pathways to a sustainable future.</p>
        </div>
      </aside>
    </>
  )
}
