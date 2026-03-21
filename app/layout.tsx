import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '株式会社NOVA | 人々の可能性を広げる',
  description: 'AIが業務を引き受ける。人は、人にしかできないことへ。月160時間の単純作業を自動化し、経営者の判断速度を次元ごと変える。',
  openGraph: {
    title: '株式会社NOVA | 人々の可能性を広げる',
    description: 'AIが業務を引き受ける。人は、人にしかできないことへ。',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
