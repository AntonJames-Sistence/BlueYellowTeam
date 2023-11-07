import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NavBar from "./components/NavBar";
import Footer from ".././components/Footer";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blue & Yellow Foundation",
  description: "Blue & Yellow Foundation",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        {/* <Script
          src="https://kit.fontawesome.com/5de844313b.js"
          crossOrigin="anonymous"
        ></Script> */}
      </head>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavBar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
