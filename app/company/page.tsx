'use client'
import Link from 'next/link'
import Nav from '@/components/Nav'
import CustomCursor from '@/components/CustomCursor'
import { useReveal } from '@/lib/useReveal'
import { LINE_URL, VALUES, HISTORY, INFO_ROWS } from '@/lib/constants'

export default function CompanyPage() {
  useReveal()

  return (
    <>
      <style>{`
        .ceo-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 60px;
        }
        .info-th {
          width: 200px;
          padding: 28px 0;
          font-size: 12px;
          letter-spacing: 0.15em;
          color: var(--cyan);
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          text-align: left;
          vertical-align: top;
        }
        .info-td {
          padding: 28px 0 28px 40px;
          font-size: 14px;
          color: var(--light-gray);
          line-height: 2;
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 300;
          white-space: pre-line;
        }
        @media (max-width: 768px) {
          .ceo-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ceo-sticky {
            position: static !important;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .info-th {
            width: auto;
            padding: 20px 0 8px;
            display: block;
          }
          .info-td {
            padding: 0 0 20px;
            display: block;
          }
          .info-tr {
            display: block;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding: 4px 0;
          }
          .ceo-message-text {
            font-size: 14px !important;
          }
          .blockquote-ceo {
            font-size: 20px !important;
            padding-left: 20px !important;
          }
        }
      `}</style>

      <CustomCursor />
      <Nav isCompanyPage />

      {/* PAGE HERO */}
      <div style={{ padding:'180px 0 120px', background:'var(--deep)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 20% 50%, rgba(0,200,255,0.05) 0%, transparent 60%)' }} />
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div style={{ fontSize:'11px', letterSpacing:'0.2em', color:'var(--gray)', marginBottom:'32px' }}>
            <Link href="/" style={{ color:'var(--gray)', textDecoration:'none' }}>HOME</Link>
            <span style={{ margin:'0 12px' }}>/</span>会社概要
          </div>
          <h1 style={{ fontFamily:"'Cormorant Garamond','Noto Serif JP',serif", fontSize:'clamp(52px,7vw,88px)', fontWeight:300, lineHeight:1.1, marginBottom:'24px' }}>
            会社<em style={{ color:'var(--cyan)', fontStyle:'italic' }}>概要</em>
          </h1>
          <p style={{ fontSize:'15px', color:'var(--light-gray)', lineHeight:2, fontFamily:"'Noto Sans JP',sans-serif", fontWeight:300, maxWidth:'560px' }}>
            人々の可能性を広げる。AIとテクノロジーで企業の基盤を再設計し、人が人にしかできない仕事に集中できる組織をつくる。
          </p>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <section style={{ background:'var(--black)', padding:'100px 0' }}>
        <div className="container">
          <div className="philosophy-inner">
            <div className="reveal">
              <span className="section-label">PHILOSOPHY</span>
              <h2 className="section-title">理念</h2>
              <p className="philosophy-text">
                人にとっての<span className="hl">可能性</span>とは何か。<br />
                挑戦すること。<br /><span className="hl">創り出すこと。</span><br />
                誰かの役に立つこと。<br />誇りを持って働くこと。<br />
                そして、自分の力が<br />社会に生きていると<br />実感すること。
              </p>
            </div>
            <div className="reveal reveal-delay-2" style={{ paddingTop:'80px' }}>
              <p style={{ fontSize:'15px', color:'var(--light-gray)', lineHeight:'2.6', fontFamily:"'Noto Sans JP',sans-serif", fontWeight:300 }}>
                <span style={{ display:'block', marginBottom:'24px' }}>その一つひとつが重なったとき、人は生き生きとし、未来は前に進みます。</span>
                <span style={{ display:'block', marginBottom:'24px' }}>しかし今、多くの企業や働く人々は、本来向き合うべき創造や挑戦ではなく、煩雑で非効率な業務に時間とエネルギーを奪われています。</span>
                <span style={{ display:'block', marginBottom:'24px' }}>私たちは、その構造を変えたい。AIとテクノロジーの力で、企業活動の基盤を再設計し、人が"人にしかできない仕事"に集中できる環境をつくる。</span>
                <span style={{ display:'block' }}>それが、株式会社NOVAの存在意義です。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section style={{ background:'var(--deep)', padding:'100px 0' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">CEO MESSAGE</span>
            <h2 className="section-title">代表メッセージ</h2>
          </div>
          <div className="ceo-grid">
            <div className="reveal ceo-sticky" style={{ position:'sticky', top:'120px' }}>
              <div style={{ width:'100%', aspectRatio:'3/4', background:'var(--navy)', border:'1px solid rgba(0,200,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'24px' }}>
                <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'72px', fontWeight:300, color:'rgba(0,200,255,0.15)' }}>N</span>
              </div>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'20px', fontWeight:400, marginBottom:'6px' }}>若佐 陸王</div>
              <div style={{ fontSize:'12px', letterSpacing:'0.15em', color:'var(--gray)' }}>代表取締役 CEO</div>
            </div>
            <div className="reveal reveal-delay-2 ceo-message-text" style={{ fontFamily:"'Noto Serif JP',serif", fontSize:'16px', lineHeight:'2.6', color:'var(--light-gray)', fontWeight:300 }}>
              <p style={{ marginBottom:'32px' }}>経営者として最も悔しいのは、<strong style={{ color:'var(--white)', fontWeight:400 }}>「やりたいことではなく、やらなければならないことに時間を奪われる」</strong>瞬間です。</p>
              <p style={{ marginBottom:'32px' }}>私がこれまで経営の現場で見てきたのは、優秀な経営者が、本来使うべき判断や戦略の時間を、請求書の確認、日程調整、問い合わせの振り分けといった業務に費やしている現実でした。</p>
              <blockquote className="blockquote-ceo" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(24px,3vw,36px)', color:'var(--white)', fontStyle:'italic', borderLeft:'3px solid var(--cyan)', paddingLeft:'32px', margin:'48px 0', lineHeight:'1.7' }}>
                「作業」を減らし、<br />「意思決定」を加速させる。
              </blockquote>
              <p style={{ marginBottom:'32px' }}>これが、NOVAが存在する理由です。AIと自動化技術は、今この瞬間も進化しています。その力を正しく設計・実装すれば、月160時間以上の業務を削減し、経営者が本来向き合うべき「戦略・人・未来」に時間を取り戻すことができます。</p>
              <p style={{ marginBottom:'32px' }}>私たちは、ツールを売りません。成果が出るまで伴走します。導入して終わりではなく、毎月改善し、経営者が「あのとき頼んで良かった」と思い続けられる関係を築くことが、私たちのゴールです。</p>
              <p><strong style={{ color:'var(--white)', fontWeight:400 }}>可能性を、解き放て。</strong>この言葉を胸に、一社でも多くの企業と、そこで働く人々の未来を変えていきます。</p>
              <div style={{ marginTop:'60px', paddingTop:'40px', borderTop:'1px solid rgba(255,255,255,0.06)', fontFamily:"'Noto Serif JP',serif", fontSize:'18px', color:'var(--white)' }}>
                代表取締役　若佐 陸王
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section style={{ background:'var(--black)', padding:'100px 0' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">COMPANY INFO</span>
            <h2 className="section-title">会社情報</h2>
          </div>
          <table className="reveal" style={{ width:'100%', borderCollapse:'collapse', marginTop:'60px' }}>
            <tbody>
              {INFO_ROWS.map((row, i) => (
                <tr key={row.label} className="info-tr" style={{ borderBottom:'1px solid rgba(255,255,255,0.05)', borderTop: i===0 ? '1px solid rgba(255,255,255,0.05)' : undefined }}>
                  <th className="info-th">{row.label}</th>
                  <td className="info-td">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* HISTORY */}
      <section style={{ background:'var(--deep)', padding:'100px 0' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">HISTORY</span>
            <h2 className="section-title">沿革</h2>
          </div>
          <div style={{ position:'relative', paddingLeft:'40px', marginTop:'60px' }}>
            <div style={{ position:'absolute', left:0, top:'8px', bottom:'8px', width:'1px', background:'linear-gradient(to bottom, var(--cyan), rgba(0,200,255,0.1))' }} />
            {HISTORY.map(h => (
              <div key={h.year} className="timeline-item" style={{ position:'relative', padding:'0 0 56px 56px' }}>
                <div style={{ position:'absolute', left:'-8px', top:'6px', width:'16px', height:'16px', borderRadius:'50%', border:'2px solid var(--cyan)', background:'var(--deep)' }} />
                <div style={{ fontSize:'11px', letterSpacing:'0.25em', color:'var(--cyan)', marginBottom:'10px' }}>{h.year}</div>
                <div style={{ fontSize:'17px', fontWeight:500, marginBottom:'10px', fontFamily:"'Noto Serif JP',serif", color:'var(--white)' }}>{h.title}</div>
                <div style={{ fontSize:'14px', color:'var(--gray)', lineHeight:2, fontFamily:"'Noto Sans JP',sans-serif", fontWeight:300 }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background:'var(--black)', padding:'100px 0' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">VALUES</span>
            <h2 className="section-title">私たちが大切にすること</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={v.n} className={`diff-card reveal reveal-delay-${(i%3)+1}`}>
                <div className="diff-num">{v.n}</div>
                <div className="diff-title">{v.title}</div>
                <div className="diff-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div style={{ background:'var(--deep)', padding:'120px 0', textAlign:'center' }}>
        <div className="container reveal">
          <h2 style={{ fontFamily:"'Cormorant Garamond','Noto Serif JP',serif", fontSize:'clamp(36px,5vw,60px)', fontWeight:300, lineHeight:1.4, marginBottom:'32px' }}>
            貴社の「人が本来やらなくていい業務」を、<br />今すぐ診断しませんか？
          </h2>
          <p style={{ fontSize:'15px', color:'var(--light-gray)', lineHeight:2.2, marginBottom:'48px', fontFamily:"'Noto Sans JP',sans-serif", fontWeight:300 }}>
            60分のオンライン無料相談で、削減可能な時間と創出できる利益を試算いたします。
          </p>
          <a href={LINE_URL} target="_blank" rel="noopener" className="btn-primary">
            無料個別相談を申し込む
          </a>
        </div>
      </div>

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
                <li><Link href="/#service">サービス概要</Link></li>
                <li><Link href="/#results">導入実績</Link></li>
                <li><Link href="/#diff">選ばれる理由</Link></li>
                <li><Link href="/#pricing">料金体系</Link></li>
                <li><Link href="/company">会社概要</Link></li>
                <li><a href={LINE_URL} target="_blank" rel="noopener">無料相談</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <div className="info-item">株式会社NOVA</div>
              <div className="info-item" style={{ marginTop:'8px' }}>AI業務最適化サービス</div>
              <div className="info-item" style={{ marginTop:'8px' }}>月額150,000円〜（税別）</div>
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
