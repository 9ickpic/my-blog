import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import { Atkinson_Hyperlegible, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  variable: '--font-atkinson-hyperlegible',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Главная | Мой блог',
  description:
    'Портфолио Ярослава — веб-разработчика из Хабаровска. Проекты, блог и идеи.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      {/* <head> здесь неявно присутствует в Next.js 13+ App Router */}
      {/* Метаданные и другие теги <head> управляются через объект metadata */}
      {/* <link> теги для шрифтов из Google Fonts здесь НЕ НУЖНЫ, т.к. используется next/font */}
      <body
        className={`${spaceGrotesk.variable} ${atkinsonHyperlegible.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header></Header>
        <main className="flex-grow container mx-auto">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
