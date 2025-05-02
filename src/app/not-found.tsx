// app/not-found.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Страница не найдена | Мой блог',
  description:
    'Запрашиваемая страница не найдена. Вернитесь на главную или свяжитесь с нами.',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center min-h-[calc(100vh-200px)] flex flex-col justify-center">
      <h1 className="text-3xl md:text-4xl font-bold">
        404 - Страница не найдена
      </h1>
      <p className="mt-4 text-base md:text-lg">
        К сожалению, запрашиваемая страница не существует. Вернитесь на{' '}
        <Link href="/" className="text-blue-600 hover:underline">
          главную
        </Link>
        .
      </p>
    </div>
  );
}
