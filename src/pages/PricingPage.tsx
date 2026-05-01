import { plans } from '../data/siteData'

export function PricingPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Pricing</p>
        <h1 className="page-title">料金体系</h1>
        <p className="lead">初回60分の無料相談つき。現状に合わせて導入ステップをご提案します。</p>

        <div className="card-grid top-margin">
          {plans.map((plan) => (
            <article key={plan.name} className="card">
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
