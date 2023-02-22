"use client";
import "../styles/globals.css";
import TopBanner from "./components/TopBanner";
import Nadvar from "./components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <TopBanner />
        <Nadvar />
        {children}
      </body>
    </html>
  );
}
