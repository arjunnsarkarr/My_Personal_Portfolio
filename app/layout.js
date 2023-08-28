import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Created by ARJUN SARKAR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
