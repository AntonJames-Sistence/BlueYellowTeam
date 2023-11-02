import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blue Yellow Foundation",
  description: "Blue Yellow Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/5de844313b.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
