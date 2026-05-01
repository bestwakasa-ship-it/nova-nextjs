import { Link } from 'react-router-dom'
import { services } from '../data/siteData'

const sectionImages = [
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200',
]

export function ServicesPage() {
  return (
    <>
      <section className="section services-hero" data-animate="fade">
        <div className="container services-hero-inner" data-animate="fade-up">
          <p className="services-kicker">Business</p>
          <h1 className="services-title">事業内容</h1>
          <p className="services-lead">IT・組織・財務を一気通貫で設計し、業務効率化を経営成果へつなげます。</p>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={service.id} className={`section ${index % 2 === 1 ? 'alt' : ''}`} data-animate="fade">
          <div className="container business-section">
            <div className={`business-grid ${index % 2 === 1 ? 'is-reverse' : ''}`}>
              <div className="business-copy" data-animate="fade-up">
                <p className="section-watermark">SERVICE {service.id}</p>
                <p className="eyebrow">Service {service.id}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <p>
                  現場に合わせた導入設計と運用改善を行い、単発の効率化ではなく継続的に成果が積み上がる仕組みを構築します。
                </p>
                <Link to="/contact" className="inline-link">
                  <span>このサービスを相談する</span>
                  <span className="inline-link-icon" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>

              <div
                className="business-image-wrap"
                data-animate={index % 2 === 1 ? 'fade-right' : 'fade-left'}
                data-delay="120"
              >
                <img src={sectionImages[index]} alt={`${service.title}のイメージ`} className="business-image" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="contact-band" data-animate="fade">
        <div className="container contact-band-inner" data-animate="fade-up">
          <p className="contact-band-watermark">CONTACT</p>
          <h2>
            事業内容に関するご相談は
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
