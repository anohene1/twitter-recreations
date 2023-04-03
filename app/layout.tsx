import './globals.css'

export const metadata = {
  title: 'Twitter Recreations',
  description: 'Cool designs I see on Twitter recreated here.',
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
