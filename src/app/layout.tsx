import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Falcon Student Investment Fund',
  description: "Abu Dhabi's first flagship student investment fund",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cardo&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}