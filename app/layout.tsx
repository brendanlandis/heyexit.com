import './globals.css'

export const metadata = {
  title: 'Hey Exit',
  description: 'noise shit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
