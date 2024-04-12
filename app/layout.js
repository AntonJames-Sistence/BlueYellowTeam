import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NavBar from "./components/NavBar";
import Footer from ".././components/Footer";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blue & Yellow Foundation - Supporting Ukraine Relief and Donations",
  description: "We are in the middle of the worst European humanitarian crisis since World War II. The Blue & Yellow Foundation supports those affected by the war in Ukraine with humanitarian aid. We are volunteer-driven, 501c3 certified, and 100% of every donation is tax deductible.",
  image: "https://blueyellowfoundation.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue-yellow-logo.7ab39ece.png&w=640&q=75",
  url: "https://blueyellowfoundation.org/",
};

const OGHead = ({ metadata }) => (
  <Head>
    {/* OG tags */}
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:image" content={metadata.image} />
    <meta property="og:url" content={metadata.url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={metadata.title} />
    
    <link rel="icon" href="/favicon.ico" sizes="any" />
  </Head>
);

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <OGHead metadata={metadata} />
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
