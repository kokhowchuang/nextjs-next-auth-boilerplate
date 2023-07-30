import './globals.css';

import { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '../src/redux/provider';
import Nav from './nav';
import Footer from './footer';

export const metadata = {
  title: "Zurich's ReactJS Technical Assessment",
  description:
    'A user admin dashboard configured with Next.js, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        <Providers>{children}</Providers>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
