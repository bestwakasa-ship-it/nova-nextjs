import { works } from '../data/siteData'

export function WorksPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Results</p>
        <h1 className="page-title">導入実績</h1>
        <p className="lead">業種ごとの課題に合わせて設計し、継続的な成果創出につなげています。</p>

        <div className="card-grid top-margin">
          {works.map((item) => (
            <article key={item.category} className="card">
              <p className="card-subtitle">{item.category}</p>
              <h3>{item.result}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
