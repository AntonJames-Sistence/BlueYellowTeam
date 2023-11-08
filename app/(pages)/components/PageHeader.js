'use client';
import { usePathname } from 'next/navigation';

const pathnameToTitle = {
  '/donate': 'Donate Now',
  '/projects': 'Our Projects',
  '/social-media': 'Our Media',
  '/events': 'Our events',
  '/': '',
};

export default function PageHeader() {
  const pathname = usePathname();

  return (
    <h1 className="font-bold text-black-500 text-5xl font-bold">
      {pathnameToTitle[pathname]}
    </h1>
  );
}
