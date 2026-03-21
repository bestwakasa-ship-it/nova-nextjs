import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '会社概要 | 株式会社NOVA',
  description: '株式会社NOVAの会社概要。理念・ビジョン・代表メッセージ・会社情報・沿革。',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
