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
	title: 'Мой блог',
	description: 'Портфолио веб-разработчика с блогом',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			{/* <head> здесь неявно присутствует в Next.js 13+ App Router */}
			{/* Метаданные и другие теги <head> управляются через объект metadata */}
			{/* <link> теги для шрифтов из Google Fonts здесь НЕ НУЖНЫ, т.к. используется next/font */}
			<body className={`${spaceGrotesk.variable} ${atkinsonHyperlegible.variable} antialiased`}>{children}</body>
		</html>
	);
}
