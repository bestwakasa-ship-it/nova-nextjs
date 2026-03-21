# 株式会社NOVA — Next.js Website

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **3D**: Three.js (Hero particles, dynamic import)
- **Deploy**: Vercel (Static Export / SSG)

## セットアップ

```bash
npm install
npm run dev      # 開発サーバー起動 → http://localhost:3000
npm run build    # 本番ビルド（静的エクスポート）
```

## ディレクトリ構成

```
nova-nextjs/
├── app/
│   ├── layout.tsx          # ルートレイアウト + SEOメタデータ
│   ├── page.tsx            # TOPページ
│   ├── globals.css         # 全スタイル + CSS変数
│   └── company/
│       ├── layout.tsx      # 会社概要ページのメタデータ
│       └── page.tsx        # 会社概要ページ
├── components/
│   ├── Nav.tsx             # ナビゲーション（スクロール + ハンバーガー）
│   ├── HeroCanvas.tsx      # Three.js パーティクル背景
│   ├── CustomCursor.tsx    # カスタムカーソル
│   └── CounterNumber.tsx   # 数字カウントアップアニメーション
├── lib/
│   ├── constants.ts        # LINE_URL・全コンテンツデータを一元管理
│   └── useReveal.ts        # スクロールアニメーション hook
└── public/
    └── logo.png            # NOVAロゴ（透過PNG）
```

## Vercel へのデプロイ

1. このディレクトリを GitHub にプッシュ
2. Vercel で "Add New Project" → リポジトリを選択
3. Framework Preset: **Next.js** を選択（自動検出）
4. **Deploy** — 追加設定不要

`next.config.ts` に `output: 'export'` が設定済みのため、
完全な静的サイトとして出力されます。

## LINE URL の変更

`lib/constants.ts` の `LINE_URL` を変更するだけで、
サイト全体のCTAリンクがすべて更新されます。

```ts
export const LINE_URL = 'https://s.lmes.jp/landing-qr/...'
```

## コンテンツの更新

テキスト・データの変更はすべて `lib/constants.ts` で完結します：
- `PROBLEMS` — 6つの課題
- `SERVICES` — 12の自動化業務
- `RESULTS` — 導入実績数値
- `DIFFS` — 差別化ポイント
- `PLANS` — 料金プラン
- `INFO_ROWS` — 会社情報テーブル
- `HISTORY` — 沿革
- `VALUES` — 価値観

## 代表写真の追加

`app/company/page.tsx` のCEO欄：

```tsx
// 現在
<span style={{ ... }}>N</span>

// 写真に変更する場合
import Image from 'next/image'
<Image src="/ceo.jpg" alt="若佐 陸王" fill style={{ objectFit:'cover' }} />
```

`/public/ceo.jpg` に写真を配置してください。
