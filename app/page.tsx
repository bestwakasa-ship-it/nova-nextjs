'use client'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Nav from '@/components/Nav'
import CustomCursor from '@/components/CustomCursor'
import CounterNumber from '@/components/CounterNumber'
import { useReveal } from '@/lib/useReveal'
import { LINE_URL, PROBLEMS, SERVICES, RESULTS, DIFFS, COMPARISON, PROCESS, PLANS } from '@/lib/constants'

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false })

export default function HomePage() {
  useReveal()

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        document.querySelector('.process-line')?.classList.add('visible')
        document.querySelectorAll('.process-step').forEach((el, i) =>
          setTimeout(() => el.classList.add('visible'), i * 120))
      }
    }, { threshold: 0.3 })
    const sec = document.getElementById('process')
    if (sec) obs.observe(sec)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <CustomCursor />
      <Nav />

      {/* HERO */}
      <section id="hero">
        <HeroCanvas />
        <div className="hero-content">
          <div className="hero-badge">AI BUSINESS OPTIMIZATION</div>
          <h1 className="hero-main">可能性を、<span className="em">解き放て。</span></h1>
          <p className="hero-sub">
            AIが業務を引き受ける。人は、人にしかできないことへ。<br />
            月160時間の単純作業を自動化し、<br />経営者の判断速度を次元ごと変える。
          </p>
          <div className="hero-cta-group">
            <a href={LINE_URL} target="_blank" rel="noopener" className="btn-primary">無料診断を申し込む</a>
            <a href="#service" className="btn-ghost">サービスを見る</a>
          </div>
        </div>
        <div className="hero-scroll"><div className="scroll-line" /><span>SCROLL</span></div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[0, 1].map(i => (
            <div key={i} className="marquee-inner">
              {['AI業務最適化', '月160時間削減', '人を活かすDX', '財務×IT×組織', '成果保証型伴走', 'ROI可視化'].map(item => (
                <span key={item} className="marquee-item">{item} <span className="marquee-dot">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section id="problem">
        <div className="container">
          <div className="reveal">
            <span className="section-label">THE PROBLEM</span>
            <h2 className="section-title">経営者が直面する<br />6つの壁</h2>
            <p className="section-desc">多くの中小企業が、同じ課題で成長を止めています。</p>
          </div>
          <div className="problem-grid">
            {PROBLEMS.map((p, i) => (
              <div key={p.num} className={`problem-card reveal reveal-delay-${(i%3)+1}`}>
                <div className="problem-num">{p.num}</div>
                <div className="problem-title">{p.title}</div>
                <div className="problem-desc">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="stat-block reveal">
            <div><span className="stat-number">160</span><span className="stat-unit">時間 / 月</span></div>
            <p className="stat-desc">これがNOVAが削減した、1社あたりの平均的な「人が本来やらなくていい業務」時間です。</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution">
        <div className="container">
          <div className="solution-intro">
            <div className="reveal">
              <span className="section-label">OUR APPROACH</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(36px,4vw,54px)', whiteSpace: 'nowrap' }}>
                ITから財務まで<br />一気通貫で解決する
              </h2>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="section-desc" style={{ marginBottom: 0 }}>
                従来のIT支援は「ツールを売る」ことがゴール。NOVAは「成果が出るまで伴走する」ことがゴールです。業務の削減から人の再配置、そして数字による意思決定支援まで、一貫して責任を持ちます。
              </p>
            </div>
          </div>
          <div className="solution-steps">
            {[
              { n:'01', label:'STEP 1 — IT', title:'業務削減', desc:'AIと自動化技術を駆使し、月間160時間以上の単純作業を徹底的に削減。新たな価値創造の時間を捻出します。' },
              { n:'02', label:'STEP 2 — 組織', title:'人の再配置', desc:'削減によって生まれた時間を、顧客満足度向上や商談など、より付加価値の高い業務へ再配置することを支援します。' },
              { n:'03', label:'STEP 3 — 財務', title:'数字で判断', desc:'取り組みの利益貢献をROIで可視化。感覚ではなく、具体的な数字に基づいて次の戦略的意思決定を下せる環境を構築します。' },
            ].map((s, i) => (
              <div key={s.n} className={`step-card reveal reveal-delay-${i+1}`}>
                <div className="step-number">{s.n}</div>
                <div className="step-label">{s.label}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="quote-block reveal">
            <div className="quote-text">「人を減らす」のではありません。<br />「人を、より価値ある仕事で輝かせる」のです。</div>
            <div className="quote-source">— 株式会社NOVA 経営理念より</div>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service">
        <div className="container">
          <div className="reveal">
            <span className="section-label">SERVICE</span>
            <h2 className="section-title">12の業務フローを<br />完全自動化する</h2>
            <p className="section-desc">バックオフィス業務を中心に、あらゆる領域で自動化・最適化を実現します。</p>
          </div>
          <div className="service-grid">
            {SERVICES.map((s, i) => (
              <div key={s} className={`service-item reveal reveal-delay-${(i%4)+1}`}>
                <div className="service-num">{String(i+1).padStart(2,'0')}</div>
                <div className="service-name">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results">
        <div className="results-inner">
          <div className="results-bg-text">NOVA</div>
          <div className="container">
            <div className="reveal" style={{ textAlign:'center', marginBottom:'80px' }}>
              <span className="section-label">RESULTS</span>
              <h2 className="section-title">導入実績と成果</h2>
              <p className="section-desc" style={{ margin:'0 auto' }}>現場の課題を深く理解し、システム化することで、確実な成果を創出しています。</p>
            </div>
            <div className="results-grid">
              {RESULTS.map((r, i) => (
                <div key={r.industry} className={`result-card reveal reveal-delay-${i+1}`}>
                  <div className="result-industry">{r.industry}</div>
                  <CounterNumber target={r.target} suffix={r.suffix} />
                  <div className="result-desc">{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFF */}
      <section id="diff">
        <div className="container">
          <div className="reveal">
            <span className="section-label">WHY NOVA</span>
            <h2 className="section-title">5つの差別化ポイント</h2>
            <p className="section-desc">「作業代行」と「高額コンサル」の間にある、空白のポジションを埋めるパートナー。</p>
          </div>
          <div className="diff-grid">
            {DIFFS.map((d, i) => (
              <div key={d.num} className={`diff-card reveal reveal-delay-${(i%3)+1}`}>
                <div className="diff-num">{d.num}</div>
                <div className="diff-title">{d.title}</div>
                <div className="diff-desc">{d.desc}</div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop:'80px' }}>
            <div className="comparison-header">
              <div className="comp-head" style={{textAlign:'left'}} />
              <div className="comp-head">一般IT会社</div>
              <div className="comp-head">コンサル会社</div>
              <div className="comp-head nova">NOVA</div>
            </div>
            {COMPARISON.map(row => (
              <div key={row.label} className="comparison-row">
                <div className="comp-cell label">{row.label}</div>
                <div className="comp-cell">{row.others}</div>
                <div className="comp-cell">{row.consultant}</div>
                <div className="comp-cell nova">{row.nova}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="container">
          <div className="reveal" style={{ textAlign:'center', marginBottom:'80px' }}>
            <span className="section-label">HOW IT WORKS</span>
            <h2 className="section-title">8ステップの導入プロセス</h2>
          </div>
          <div style={{ position:'relative' }}>
            <div className="process-line" />
            <div className="process-steps">
              {PROCESS.map((name, i) => (
                <div key={name} className="process-step">
                  <div className="process-dot">{i+1}</div>
                  <div className="process-info">
                    <div className="process-num">STEP {String(i+1).padStart(2,'0')}</div>
                    <div className="process-name">{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="container">
          <div className="reveal" style={{ textAlign:'center', marginBottom:'80px' }}>
            <span className="section-label">PRICING</span>
            <h2 className="section-title">料金体系</h2>
            <p className="section-desc" style={{ margin:'0 auto' }}>すべてのプランに初回60分の無料相談が含まれます。</p>
          </div>
          <div className="pricing-grid">
            {PLANS.map((p, i) => (
              <div key={p.plan} className={`price-card reveal reveal-delay-${i+1}${p.featured ? ' featured' : ''}`}>
                {'badge' in p && p.badge && <div className="price-badge">{p.badge}</div>}
                <div className="price-plan">{p.plan}</div>
                <div className="price-name">{p.name}</div>
                <div className="price-desc">{p.desc}</div>
                <div className="price-amount">{p.amount}<span>{p.amountSub}</span></div>
                <div className="price-note">{p.note}</div>
                <ul className="price-features">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
                <a href={LINE_URL} target="_blank" rel="noopener" className={`price-btn${p.featured ? ' primary' : ''}`}>
                  無料相談を予約する
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy">
        <div className="container">
          <div className="philosophy-inner">
            <div className="reveal">
              <span className="section-label">PHILOSOPHY</span>
              <p className="philosophy-text">
                人にとっての<span className="hl">可能性</span>とは何か。<br />挑戦すること。<br />
                <span className="hl">創り出すこと。</span><br />誰かの役に立つこと。<br />
                誇りを持って働くこと。<br />そして、自分の力が<br />社会に生きていると実感すること。
              </p>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="philosophy-vision">
                {[
                  { icon:'◈', title:'MISSION', desc:'人々の可能性を広げる。' },
                  { icon:'◉', title:'VISION', desc:'働く人が誇りを持ち、熱狂できる社会。' },
                  { icon:'◎', title:'VALUE', desc:'成果が出るまで、伴走する。' },
                  { icon:'✦', title:'WAY', desc:'感覚ではなく、数字で判断する。' },
                ].map(v => (
                  <div key={v.title} className="vision-item">
                    <div className="vision-icon">{v.icon}</div>
                    <div className="vision-title">{v.title}</div>
                    <div className="vision-desc">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="container">
          <div className="cta-inner reveal">
            <span className="section-label" style={{ display:'block', textAlign:'center' }}>FREE CONSULTATION</span>
            <h2 className="cta-title">
              まずは、貴社の<br />「人が本来やらなくていい業務」を<br />診断しませんか？
            </h2>
            <p className="cta-desc">
              現状のヒアリングから、削減可能な時間と創出できる利益を無料で試算いたします。<br />
              60分のオンライン相談で、具体的なロードマップをお渡しします。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener" className="cta-line-btn">
              <span>無料個別相談を申し込む（60分・オンライン）</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p className="cta-note"><span className="glow-dot" />「作業」を減らし、「意思決定」を加速させる。</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">·<span>NOVA</span></div>
              <p className="footer-tagline">人々の可能性を広げる。<br />AIで業務を再設計し、人が人にしか<br />できない仕事に集中できる組織をつくる。</p>
            </div>
            <div className="footer-col">
              <h4>NAVIGATION</h4>
              <ul>
                <li><a href="#service">サービス概要</a></li>
                <li><a href="#results">導入実績</a></li>
                <li><a href="#diff">選ばれる理由</a></li>
                <li><a href="#pricing">料金体系</a></li>
                <li><Link href="/company">会社概要</Link></li>
                <li><a href={LINE_URL} target="_blank" rel="noopener">無料相談</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <div className="info-item">株式会社NOVA</div>
              <div className="info-item" style={{ marginTop:'8px' }}>AI業務最適化サービス</div>
              <div className="info-item" style={{ marginTop:'8px' }}>月額サブスクリプション<br />150,000円〜（税別）</div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 株式会社NOVA. All rights reserved.</div>
            <div className="footer-copy">人々の可能性を広げる。</div>
          </div>
        </div>
      </footer>
    </>
  )
}
