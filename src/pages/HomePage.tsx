import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <>
      <section className="hero hero-home" data-animate="fade">
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div data-animate="fade-up">
            <p className="eyebrow" data-animate="fade-up" data-delay="80">AI BUSINESS OPTIMIZATION</p>
            <h1 data-animate="fade-up" data-delay="140">可能性を、解き放て。</h1>
            <p className="lead" data-animate="fade-up" data-delay="200">
              AIが業務を引き受ける。人は、人にしかできないことへ。NOVAは業務最適化を通じて、経営者の判断を加速させます。
            </p>
            <div className="hero-cta" data-animate="fade-up" data-delay="260">
              <Link to="/contact" className="button">
                無料相談を申し込む
              </Link>
              <Link to="/services" className="button ghost">
                サービスを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-animate="fade">
        <div className="container business-section">
          <div className="business-grid">
            <div className="business-copy" data-animate="fade-up">
              <p className="section-watermark">BUSINESS</p>
              <p className="eyebrow">Business</p>
              <h2>挑戦できる人材を<br />挑戦できる企業へ</h2>
              <p>
                株式会社NOVAは、AI業務最適化を通じて「人が本来取り組むべき価値ある仕事」に集中できる環境づくりを支援します。
              </p>
              <p>
                現場の業務理解から導入、運用改善までを一貫して伴走し、企業の成長速度と意思決定の質を高めます。
              </p>
              <Link to="/services" className="inline-link">
                <span>詳しくはこちら</span>
                <span className="inline-link-icon" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            <div className="business-image-wrap" data-animate="fade-left" data-delay="120">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="打ち合わせをするビジネスチーム"
                className="business-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" data-animate="fade">
        <div className="container business-section">
          <div className="business-grid is-reverse">
            <div className="business-copy" data-animate="fade-up">
              <p className="section-watermark">SERVICE</p>
              <p className="eyebrow">Service Outline</p>
              <h2>サービス概要</h2>
              <p>
                課題整理から導入設計、運用改善までを段階的に進めることで、現場に定着するAI活用を実現します。
              </p>
              <p>
                短期的な効率化だけでなく、組織全体の生産性を持続的に向上させる運用体制まで設計します。
              </p>
              <Link to="/services" className="inline-link">
                <span>サービスページへ</span>
                <span className="inline-link-icon" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            <div className="business-image-wrap" data-animate="fade-right" data-delay="120">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="資料を見ながら議論するチーム"
                className="business-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-animate="fade">
        <div className="container business-section">
          <div className="business-grid">
            <div className="business-copy" data-animate="fade-up">
              <p className="section-watermark">MISSION</p>
              <p className="eyebrow">Mission</p>
              <h2>ミッション</h2>
              <p>
                「人を減らすDX」ではなく「人が活きるDX」を追求。削減した時間を価値創造に再配分し、成果が出るまで伴走します。
              </p>
              <p>
                感覚ではなく数字で判断し、経営者が本来の意思決定に集中できる仕組みをつくることが私たちの使命です。
              </p>
              <Link to="/mission" className="inline-link">
                <span>経営理念を見る</span>
                <span className="inline-link-icon" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            <div className="business-image-wrap" data-animate="fade-left" data-delay="120">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="オフィスで共同作業するチーム"
                className="business-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-band" data-animate="fade">
        <div className="container contact-band-inner" data-animate="fade-up">
          <p className="contact-band-watermark">CONTACT</p>
          <h2>
            お問い合わせ・ご相談は
            <br />
            フォームよりお問い合わせください。
          </h2>
          <Link to="/contact" className="contact-band-link">
            <span>詳しくはこちら</span>
            <span className="inline-link-icon" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
