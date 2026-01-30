import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Shadi.ae - UAE Restaurant Reviews",
  description: "Discover the UAE's best restaurants through the eyes of Shadi Shawqi (@the.ss)",
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
