import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ИП Вьюнов Андрей Валерьевич | Шеринг велосипедов для курьеров',
  description:
    'ИП Вьюнов А.В. — электровелосипеды для курьерских партнеров: выдача, обслуживание, плановое ТО и замена техники в городах Сибири.',
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
