import { useState } from 'react'
import { Link } from 'react-router-dom'

const companyInfo = [
  { label: '法人番号', value: '4010401197100' },
  { label: '会社名', value: '株式会社NOVA' },
  {
    label: '所在地',
    value: (
      <>
        〒106-0032
        <br />
        東京都港区六本木3丁目16番12号六本木KSビル5F
      </>
    ),
  },
  {
    label: '代表者',
    value: (
      <>
        代表取締役 若佐陸王
        <br />
        取締役 加藤寛也
      </>
    ),
  },
  { label: '設立', value: '2026年3月5日' },
  { label: '事業内容', value: 'IT事業 / BPO事業 / 金融教育事業' },
  {
    label: '連絡先',
    value: <a href="mailto:daily.work@nova-info.com">daily.work@nova-info.com</a>,
  },
]

export function CompanyPage() {
  const [activeMessageTab, setActiveMessageTab] = useState<'ceo' | 'director'>('ceo')

  return (
    <div className="company-page">
      <section className="section services-hero company-heading" data-animate="fade">
        <div className="container services-hero-inner company-hero-inner" data-animate="fade-up">
          <p className="services-kicker">Company</p>
          <h1 className="services-title">会社概要</h1>
          <p className="services-lead">企業情報、代表挨拶、アクセス情報を掲載しています。</p>
          <div className="company-hero-meta">
            <span>NOVA CORPORATION</span>
            <span>TOKYO</span>
            <span>SINCE 2026</span>
          </div>
        </div>
      </section>

      <section className="section company-info-section" data-animate="fade">
        <div className="container">
          <p className="eyebrow">Company Information</p>
          <h2>会社情報</h2>
          <div className="company-overview" data-animate="fade-up">
            <aside className="company-overview-logo">
              <img src="/logo-nova-side.png" alt="NOVA ロゴ" />
              <p>人々の可能性を広げる。AIで業務を再設計し、人が価値を生み出す仕事に集中できる組織をつくります。</p>
            </aside>
            <div className="company-info-table">
              {companyInfo.map((item) => (
                <div key={item.label}>
                  <p>{item.label}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt company-message-section" data-animate="fade">
        <div className="container">
          <p className="eyebrow">Message</p>
          <h2>代表者挨拶</h2>
          <div className="message-tabs" data-animate="fade-up">
            <button
              type="button"
              className={activeMessageTab === 'ceo' ? 'is-active' : ''}
              onClick={() => setActiveMessageTab('ceo')}
            >
              代表取締役
            </button>
            <button
              type="button"
              className={activeMessageTab === 'director' ? 'is-active' : ''}
              onClick={() => setActiveMessageTab('director')}
            >
              取締役
            </button>
          </div>
          <div className="company-message">
            <div className="company-ceo-block" data-animate="fade-right">
              {activeMessageTab === 'ceo' ? (
                <>
                  <img src="/ceo-wakasa.png" alt="代表取締役 若佐陸王" />
                  <p className="company-ceo-title">代表取締役</p>
                  <p className="company-ceo-name">若佐陸王</p>
                </>
              ) : (
                <>
                  <img src="/director-kato.png" alt="取締役 加藤寛也" />
                  <p className="company-ceo-title">取締役</p>
                  <p className="company-ceo-name">加藤寛也</p>
                </>
              )}
            </div>
            <div data-animate="fade-left" data-delay="120">
              {activeMessageTab === 'ceo' ? (
                <>
                  <h3>「作業」を減らし、「意思決定」を加速させる。</h3>
                  <p>
                    経営者として最も悔しいのは、「やりたいことではなく、やらなければならないことに時間を奪われる」瞬間です。
                  </p>
                  <p>
                    生成AIと業務設計を掛け合わせ、経営者が本来向き合うべき戦略・人材・未来へ時間を再配分できる組織づくりを推進します。
                  </p>
                  <p className="card-id">代表取締役 若佐陸王</p>
                </>
              ) : (
                <>
                  <h3>「数字と仕組みで、経営に再現性を。」</h3>
                  <p>
                    財務とオペレーションの両面から、企業成長を妨げるボトルネックを可視化し、改善サイクルを定着させます。
                  </p>
                  <p>
                    現場で機能する設計と継続的な運用改善を通じて、組織全体の意思決定スピードと実行力を高めていきます。
                  </p>
                  <p className="card-id">取締役 加藤寛也</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section company-access-section" data-animate="fade">
        <div className="container">
          <p className="eyebrow">Access</p>
          <h2>アクセス</h2>
          <div className="company-access">
            <div className="company-map-placeholder" data-animate="fade-right">
              <iframe
                title="NOVA 東京オフィス"
                src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div data-animate="fade-left" data-delay="120">
              <p>
                〒106-0032
                <br />
                東京都港区六本木3丁目16番12号 六本木KSビル5F
              </p>
              <p>
                東京メトロ日比谷線・都営大江戸線「六本木駅」徒歩6分
                <br />
                東京メトロ南北線「六本木一丁目駅」徒歩8分
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-band" data-animate="fade">
        <div className="container contact-band-inner" data-animate="fade-up">
          <p className="contact-band-watermark">CONTACT</p>
          <h2>
            お気軽にお問い合わせください。
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
    </div>
  )
}
