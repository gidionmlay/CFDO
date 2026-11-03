import { Suspense, lazy, useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../sections/Hero'
import { Introduction } from '../sections/Introduction'
import { Programmes } from '../sections/Programmes'
import { Method } from '../sections/Method'
import { Consultancy } from '../sections/Consultancy'
import { CommunityStories } from '../sections/CommunityStories'
import { FeaturedWork } from '../sections/FeaturedWork'
import { Voices } from '../sections/Voices'
import { News } from '../sections/News'
import { GetInvolved } from '../sections/GetInvolved'
import { Footer } from '../components/Footer'
import { FloatingEnquiryPanel } from '../components/FloatingEnquiryPanel'

// Code-split secondary pages for fast initial bundle and maximum performance
const AboutPage = lazy(() => import('../sections/AboutPage').then((m) => ({ default: m.AboutPage })))
const OurWorkPage = lazy(() => import('../sections/OurWorkPage').then((m) => ({ default: m.OurWorkPage })))
const HowWeWorkPage = lazy(() => import('../sections/HowWeWorkPage').then((m) => ({ default: m.HowWeWorkPage })))
const ConsultancyPage = lazy(() => import('../sections/ConsultancyPage').then((m) => ({ default: m.ConsultancyPage })))
const TermsAndConditionsPage = lazy(() => import('../sections/TermsAndConditionsPage').then((m) => ({ default: m.TermsAndConditionsPage })))
const NewsArticlePage = lazy(() => import('../sections/NewsArticlePage').then((m) => ({ default: m.NewsArticlePage })))
const NotFoundPage = lazy(() => import('../sections/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

function RouteFallback() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-heading)',
        fontSize: 'var(--text-cta)',
        letterSpacing: 'var(--tracking-cta)',
        textTransform: 'uppercase',
        opacity: 0.6,
      }}
      aria-busy="true"
      aria-label="Loading page content"
    >
      <span>Loading CFDO...</span>
    </div>
  )
}

function scrollToHash(hash: string, instant = false) {
  if (!hash) return
  const targetId = decodeURIComponent(hash.replace(/^#/, ''))
  if (!targetId) return

  let attempts = 0
  function attemptScroll() {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: instant ? ('instant' as ScrollBehavior) : 'smooth' })
    } else if (attempts < 8) {
      attempts++
      requestAnimationFrame(attemptScroll)
    }
  }
  requestAnimationFrame(attemptScroll)
}

export function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') || '/' : '/'
  )

  useEffect(() => {
    function handleAnchorClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const anchor = (event.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || anchor.hasAttribute('download')) {
        return
      }

      if (anchor.target && anchor.target !== '_self') {
        return
      }

      const url = new URL(anchor.href, window.location.origin)
      if (url.origin !== window.location.origin) {
        return
      }

      event.preventDefault()

      const newPath = url.pathname.replace(/\/+$/, '') || '/'
      const isSamePath = newPath === currentPath

      if (isSamePath) {
        if (url.hash) {
          window.history.pushState(null, '', url.pathname + url.search + url.hash)
          scrollToHash(url.hash, false)
        } else {
          window.history.pushState(null, '', url.pathname + url.search)
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
      } else {
        window.history.pushState(null, '', url.pathname + url.search + url.hash)
        setCurrentPath(newPath)
        if (url.hash) {
          scrollToHash(url.hash, false)
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
        }
      }
    }

    function handlePopState() {
      const newPath = window.location.pathname.replace(/\/+$/, '') || '/'
      setCurrentPath(newPath)
      if (window.location.hash) {
        scrollToHash(window.location.hash, true)
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    window.addEventListener('popstate', handlePopState)

    // Handle initial hash on page load
    if (window.location.hash) {
      scrollToHash(window.location.hash, true)
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [currentPath])

  const newsSlug = currentPath.startsWith('/news/') ? currentPath.slice('/news/'.length) : null

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header currentPath={currentPath} />
      <main id="main" className="app-stage" tabIndex={-1}>
        <Suspense fallback={<RouteFallback />}>
          {currentPath === '/' ? (
            <>
              <Hero />
              <Introduction />
              <Programmes />
              <Method />
              <Consultancy />
              <CommunityStories />
              <FeaturedWork />
              <Voices />
              <News />
              <GetInvolved />
            </>
          ) : currentPath === '/about' ? (
            <AboutPage />
          ) : currentPath === '/our-work' ? (
            <OurWorkPage />
          ) : currentPath === '/how-we-work' || currentPath === '/method' ? (
            <HowWeWorkPage />
          ) : currentPath === '/consultancy' ? (
            <ConsultancyPage />
          ) : currentPath === '/terms-and-conditions' ? (
            <TermsAndConditionsPage />
          ) : newsSlug !== null ? (
            <NewsArticlePage slug={newsSlug} />
          ) : (
            <NotFoundPage />
          )}
        </Suspense>
      </main>
      <Footer currentPath={currentPath} />
      <FloatingEnquiryPanel />
    </>
  )
}
