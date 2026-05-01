export function ContactPage() {
  return (
    <>
      <section className="section services-hero contact-heading-hero" data-animate="fade">
        <div className="container services-hero-inner" data-animate="fade-up">
          <h1 className="services-title">お問い合わせ</h1>
          <p className="services-lead">
            お見積り・ご質問・ご相談はフォームよりお問い合わせください。内容を確認後、担当者よりご連絡いたします。
          </p>
        </div>
      </section>

      <section className="section contact-page">
        <div className="container">
        <div className="contact-layout top-margin">
          <aside className="contact-sidebar" data-animate="fade-right">
            <img src="/logo-nova-side.png" alt="NOVA ロゴ" className="contact-sidebar-logo" />
            <h3>お問い合わせ先</h3>
            <ul>
              <li>
                <span>メール</span>
                <a href="mailto:info@nova.co.jp">info@nova.co.jp</a>
              </li>
              <li>
                <span>電話</span>
                <a href="tel:0312345678">03-1234-5678</a>
              </li>
              <li>
                <span>住所</span>
                <p>
                  〒105-0001
                  <br />
                  東京都港区虎ノ門3-7-8 虎ノ門アネックス 501
                </p>
              </li>
            </ul>
          </aside>

          <div className="contact-form-wrap" data-animate="fade-left" data-delay="120">
            <form className="contact-form">
              <div className="form-grid">
                <label>
                  <span className="field-head">
                    お名前 <em>*</em>
                  </span>
                  <input type="text" placeholder="山田 太郎" />
                </label>
                <label>
                  <span className="field-head">フリガナ</span>
                  <input type="text" placeholder="ヤマダ タロウ" />
                </label>
              </div>

              <label>
                <span className="field-head">
                  メールアドレス <em>*</em>
                </span>
                <input type="email" placeholder="example@nova.co.jp" />
              </label>

              <label>
                <span className="field-head">電話番号</span>
                <input type="tel" placeholder="090-0000-0000" />
              </label>

              <label>
                <span className="field-head">会社名</span>
                <input type="text" placeholder="株式会社〇〇" />
              </label>

              <label>
                <span className="field-head">
                  お問い合わせ種別 <em>*</em>
                </span>
                <select defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>サービス導入の相談</option>
                  <option>費用見積もり</option>
                  <option>業務提携</option>
                  <option>その他</option>
                </select>
              </label>

              <label>
                <span className="field-head">
                  お問い合わせ内容 <em>*</em>
                </span>
                <textarea rows={6} placeholder="お問い合わせ内容をご記入ください" />
              </label>

              <label className="privacy-check">
                <input type="checkbox" />
                <span>
                  <a href="/company">プライバシーポリシー</a> に同意の上、送信してください。
                </span>
              </label>

              <button type="submit" className="button contact-submit">
                送信する
              </button>
            </form>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
