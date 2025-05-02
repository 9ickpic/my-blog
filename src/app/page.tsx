import HomePageContent from '@/components/HomePageContent/HomePageContent'; // Импорт нового клиентского компонента
import { PrismaClient } from '@prisma/client'; // Импорт PrismaClient для сервера
import Head from 'next/head'; // Head из next/head подходит для App Router head.tsx

const prisma = new PrismaClient();

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    // Важно: Prisma возвращает Date объекты. Убедитесь, что ваши клиентские компоненты
    // ProjectCard и ProjectSlider ожидают Date или преобразуйте их в строку здесь,
    // если ProjectCard ожидает строку (как мы обсуждали в предыдущем вопросе).
    // Для простоты предположим, что ProjectCard ожидает Date после предыдущей правки.
    return projects;
  } finally {
    await prisma.$disconnect();
  }
}

export default async function Home() {
  const projects = await getProjects(); // Получаем данные на сервере

  return (
    <>
      {/* Метаданные теперь лучше управлять через app/head.tsx */}
      {/* Однако, если вы хотите использовать Head прямо здесь, это тоже работает для базовых тегов */}
      <Head>
        <title>Главная | Мой блог</title>
        <meta
          name="description"
          content="Портфолио 9ickpic — веб-алхимика из Хабаровска. Код, хаос, проекты."
        />
      </Head>

      {/* Передаем полученные данные в клиентский компонент */}
      <HomePageContent initialProjects={projects} />
    </>
  );
}
