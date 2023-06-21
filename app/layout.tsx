import './css/globals.scss'

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
      <body>
        <header>
          <h1>Hey Exit</h1>
          <nav>
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/about">about</a></li>
              <li><a href="/discography">discography</a></li>
              <li><a href="/live">live</a></li>
              <li><a href="/contact">contact</a></li>
            </ul>
          </nav>
        </header>

        {children}

      </body>
    </html>
  )
}
