import "../styles/globals.css";
import TopBanner from "./components/TopBanner";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <TopBanner />
        {children}
      </body>
    </html>
  );
}
