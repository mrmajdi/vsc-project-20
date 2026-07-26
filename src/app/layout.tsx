import './globals.css';
import { Vazirmatn } from 'next/font/google';
import { AuthProvider } from '@/providers/auth-provider';
import type { ReactNode } from 'react';

const vazirmatn = Vazirmatn({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={vazirmatn.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}