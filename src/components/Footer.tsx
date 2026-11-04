import { getInvolvedContent } from '../content/getInvolved'
import './Footer.css'

const footerLinks = [
  { label: 'About CFDO', href: '/about' },
  { label: 'Our programmes', href: '/our-work' },
  { label: 'How we work', href: '/how-we-work' },
  { label: 'Consultancy', href: '/consultancy' },
  { label: 'Impact Gallery', href: '#gallery' },
  { label: 'Community in Action', href: '#community-stories' },
  { label: 'Get involved', href: '#get-involved' },
]

export function Footer({ currentPath }: { currentPath?: string } = {}) {
  const path = currentPath ?? (typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') || '/' : '/')
  const onHomePage = path === '/'

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-identity">
            <span className="site-footer-name">CFDO</span>
            <p>{getInvolvedContent.organization}</p>
          </div>
          <nav className="site-footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href.startsWith('#') && !onHomePage ? `/${link.href}` : link.href}>{link.label} <span aria-hidden="true">↗</span></a>
            ))}
          </nav>
        </div>

        <div className="site-footer-bottom">
          <span>{getInvolvedContent.location}</span>
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  )
}
