import "../styles/globals.scss"
import TopBanner from "./components/TopBanner"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <TopBanner/>
      <body>{children}</body>
    </html>
  )
}
