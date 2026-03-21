'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LINE_URL } from '@/lib/constants'

export default function Nav({ isCompanyPage = false }: { isCompanyPage?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const p = isCompanyPage ? '/' : ''

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="nav-logo">
        <Image src="/logo.png" alt="NOVA" height={38} width={120} priority />
      </Link>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><a href={`${p}#service`} onClick={close}>サービス</a></li>
        <li><a href={`${p}#results`} onClick={close}>実績</a></li>
        <li><a href={`${p}#pricing`} onClick={close}>料金</a></li>
        <li><Link href="/company" className={isCompanyPage ? 'active' : ''} onClick={close}>会社概要</Link></li>
        <li>
          <a href={LINE_URL} target="_blank" rel="noopener" className="nav-cta" onClick={close}>
            無料相談
          </a>
        </li>
      </ul>
      <button className={`nav-hamburger${open ? ' open' : ''}`} onClick={() => setOpen(v => !v)} aria-label="メニュー">
        <span /><span /><span />
      </button>
    </nav>
  )
}
