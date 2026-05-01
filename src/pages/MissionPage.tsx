import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const principles = [
  {
    key: 'MISSION',
    title: '人々の可能性を広げる。',
    description: 'AIで業務を再設計し、人が人にしかできない価値創造へ集中できる組織をつくる。',
  },
  {
    key: 'VISION',
    title: '働く人が誇りを持ち、熱狂できる社会。',
    description: '単純作業を減らし、判断と創造に時間を再配置できる未来を当たり前にする。',
  },
  {
    key: 'VALUE',
    title: '成果が出るまで、伴走する。',
    description: '導入して終わりではなく、現場定着・改善サイクル・ROI検証まで責任を持つ。',
  },
  {
    key: 'WAY',
    title: '感覚ではなく、数字で判断する。',
    description: '削減時間・利益貢献・意思決定速度を可視化し、経営判断の質を高める。',
  },
]

export function MissionPage() {
  const [count, setCount] = useState(0)
  const statRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const element = statRef.current
    if (!element) return

    let started = false
    let rafId = 0
    const duration = 1400
    const target = 160

    const animate = (startTime: number) => {
      const step = (timestamp: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const eased = 1 - (1 - progress) * (1 - progress)
        setCount(Math.round(target * eased))
        if (progress < 1) {
          rafId = requestAnimationFrame(step)
        }
      }
      rafId = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true
            animate(performance.now())
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <section className="section services-hero mission-heading" data-animate="fade">
        <div className="container services-hero-inner" data-animate="fade-up">
          <p className="services-kicker">Philosophy</p>
          <h1 className="services-title">経営理念</h1>
          <p className="services-lead">旧NOVAサイトの思想を継承し、AI業務最適化の本質を4つの指針で定義しています。</p>
        </div>
      </section>

      <section className="section alt" data-animate="fade">
        <div className="container">
          <p className="eyebrow">Values</p>
          <h2>経営判断を支える4つの指針</h2>
          <p className="lead">
            私たちは、すべての人が自分らしく挑戦できる社会を目指しています。NOVAという名前には、
            「可能性を拡張する技術」と「成果に向き合い続ける伴走」の二つの想いを込めています。
            この想いを胸に、人と企業の可能性を最大限に引き出すことが、私たちの使命です。
          </p>
          <div className="philosophy-grid">
            {principles.map((item, index) => (
              <article key={item.key} className="philosophy-card" data-animate="fade-up" data-delay={index % 2 === 0 ? '80' : '140'}>
                <p className="card-id">{item.key}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-dark" data-animate="fade">
        <div className="container">
          <div className="mission-stat" data-animate="fade-up">
            <p className="mission-stat-label">MEAN REDUCTION TIME</p>
            <p className="mission-stat-value" ref={statRef}>{count}</p>
            <p className="mission-stat-unit">時間 / 月</p>
            <p className="mission-stat-text">これが、NOVAが1社あたりで創出する「人が本来やるべき業務」への再配置余力です。</p>
          </div>
        </div>
      </section>

      <section className="section" data-animate="fade">
        <div className="container">
          <p className="eyebrow">NOVA Philosophy</p>
          <h2>NOVAに込めた想い</h2>
          <div className="philosophy-thoughts">
            <article className="thought-card" data-animate="fade-right" data-delay="80">
              <p className="card-id">WHY 1</p>
              <h3>「人を減らさないDX」を貫く</h3>
              <p>
                効率化の目的は削減ではなく、価値ある仕事への再配置。人材の可能性を最大化するDXを実行します。
              </p>
            </article>
            <article className="thought-card" data-animate="fade-left" data-delay="140">
              <p className="card-id">WHY 2</p>
              <h3>「提案」で終わらず、成果まで伴走する</h3>
              <p>
                業務分析・実装・運用改善・数値検証まで一貫して支援し、意思決定の質向上まで責任を持ちます。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-band" data-animate="fade">
        <div className="container contact-band-inner" data-animate="fade-up">
          <p className="contact-band-watermark">CONTACT</p>
          <h2>
            一緒に、挑戦しませんか？
            <br />
            ご相談をお待ちしています。
          </h2>
          <Link to="/contact" className="contact-band-link">
            <span>問い合わせる</span>
            <span className="inline-link-icon" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
