"use client";
import "../styles/globals.css";
import TopBanner from "./components/TopBanner";
import Nadvar from "./components/Navbar";
import Register from "./login/page"
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <TopBanner />
        <Nadvar/>
        <Register/>
        {children}
      </body>
    </html>
  );
}
