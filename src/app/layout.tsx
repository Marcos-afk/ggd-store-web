import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s | GGD Store',
    default: 'GGD Store',
  },
  description: 'GGD Store - A loja de roupas mais legal do Brasil!',
  keywords: ['ggd', 'store', 'ggd store', 'loja', 'roupas', 'brasil'],
  creator: 'GGD Store',
  publisher: 'GGD Store',
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_BASE_URL!),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  );
}
