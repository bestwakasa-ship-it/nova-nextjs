import { useEffect } from 'react'
import { OFFICIAL_LINE_URL } from '../constants/officialLine'

export function ContactPage() {
  useEffect(() => {
    window.location.replace(OFFICIAL_LINE_URL)
  }, [])

  return (
    <section className="section contact-page">
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <p>公式LINEへ移動しています…</p>
        <p className="top-margin">
          <a href={OFFICIAL_LINE_URL}>ページが開かない場合はこちら</a>
        </p>
      </div>
    </section>
  )
}
