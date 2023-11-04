import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blue Yellow Foundation',
  description: 'Blue Yellow Foundation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/5de844313b.js"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
