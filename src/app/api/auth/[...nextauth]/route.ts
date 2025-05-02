/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/api/auth/[...nextauth]/route.ts
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const prisma = new PrismaClient();

// Определяем authOptions внутри файла.
// Убираем 'export' перед const, так как App Router ожидает экспорта функций HTTP методов (GET, POST и т.д.),
// а не объекта конфигурации NextAuth.
const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Дополнительные опции можно добавить здесь, например:
  // session: { strategy: 'jwt' },
  // callbacks: { ... },
  // pages: { ... },
};

// Используем async/await и явно вызываем NextAuth для создания хэндлера
const handler = NextAuth(authOptions);

// Экспортируем функции HTTP методов, которые будут обрабатывать запросы
export async function GET(...args: any[]) {
  return handler(...args);
}

export async function POST(...args: any[]) {
  return handler(...args);
}

// В некоторых случаях для совместимости или явного указания может потребоваться также экспортировать PUT, DELETE и т.д.
// export async function PUT(...args: any[]) {
//   return handler(...args);
// }

// export async function DELETE(...args: any[]) {
//   return handler(...args);
// }
