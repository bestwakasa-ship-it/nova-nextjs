import { useEffect, useLayoutEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const defaultTitle = '株式会社NOVA | 人々の可能性を広げる'
const defaultDescription =
  'AIが業務を引き受ける。人は、人にしかできないことへ。月160時間の単純作業を自動化し、経営者の判断速度を次元ごと変える。'
const defaultOgTitle = '株式会社NOVA | 人々の可能性を広げる'
const defaultOgDescription = 'AIが業務を引き受ける。人は、人にしかできないことへ。'

const links = [
  { to: '/', label: 'ホーム' },
  { to: '/services', label: '事業内容' },
  { to: '/mission', label: '経営理念' },
  { to: '/company', label: '会社概要' },
]

type PageSeo = {
  title: string
  description: string
}

const pageSeoByPath: Record<string, PageSeo> = {
  '/company': {
    title: '会社概要 | 株式会社NOVA',
    description: '株式会社NOVAの会社概要。理念・ビジョン・代表メッセージ・会社情報・沿革。',
  },
}

function setMetaTag(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const pageSeo = pageSeoByPath[location.pathname] ?? {
      title: defaultTitle,
      description: defaultDescription,
    }

    document.title = pageSeo.title
    setMetaTag('meta[name="description"]', 'name', 'description', pageSeo.description)
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', defaultOgTitle)
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', defaultOgDescription)
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website')
  }, [location.pathname])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)

    const targets = document.querySelectorAll<HTMLElement>('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => {
      el.classList.remove('is-visible')
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            <img src="/logo-nova-header.png" alt="NOVA ロゴ" className="brand-logo" />
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="メニューを開閉"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-shell ${menuOpen ? 'is-open' : ''}`}>
            <nav className="nav">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <NavLink to="/contact" className="menu-cta" onClick={closeMenu}>
              お問い合わせ
            </NavLink>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer" data-animate="fade">
        <div className="container footer-inner">
          <div className="footer-main">
            <div className="footer-brand" data-animate="fade-up">
              <img src="/logo-nova-header.png" alt="NOVA ロゴ" className="footer-logo" />
              <p>人々の可能性を広げる。AIで業務を再設計し、人が価値を生み出す仕事に集中できる組織をつくります。</p>
              <div className="footer-sns">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.4" cy="6.6" r="1.2" />
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.9 3H21l-6.9 7.8L22.2 21h-6.4l-5-6.5L4.9 21H2.8l7.4-8.3L2.4 3h6.5l4.5 5.9L18.9 3Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-nav" data-animate="fade-up" data-delay="120">
              <p className="footer-title">Navigation</p>
              <ul>
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to}>{link.label}</NavLink>
                  </li>
                ))}
                <li>
                  <NavLink to="/contact">お問い合わせ</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-contact" data-animate="fade-up" data-delay="200">
              <p className="footer-title">Contact</p>
              <p>株式会社NOVA</p>
              <p>
                〒106-0032
                <br />
                東京都港区六本木3丁目16番12号 六本木KSビル5F
              </p>
              <p>
                <a href="mailto:daily.work@nova-info.com">daily.work@nova-info.com</a>
              </p>
              <NavLink to="/contact" className="footer-contact-link">
                お問い合わせはこちら
              </NavLink>
            </div>
          </div>

          <div className="footer-bottom" data-animate="fade-up" data-delay="260">
            <p>© 2026 株式会社NOVA All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <NavLink to="/company">プライバシーポリシー</NavLink>
              <a href="#">Back To Top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
