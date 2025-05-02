import ProjectCard from '@/components/ProjectCard/ProjectCard';
import ProjectSlider from '@/components/ProjectSlider/ProjectSlider';
import { PrismaClient } from '@prisma/client';
import Head from 'next/head';

const prisma = new PrismaClient();

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return projects;
  } finally {
    await prisma.$disconnect();
  }
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <Head>
        <title>Проекты | Мой блог</title>
        <meta
          name="description"
          content="Галерея проектов веб-разработчика 9ickpic."
        />
      </Head>
      <section className="min-h-[calc(100vh-200px)] px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 font-[var(--font-space-grotesk)]">
          Мои проекты
        </h2>

        {/* First Row: Large Cards Slider */}
        <ProjectSlider projects={projects} />

        {/* Second Row: Small Cards */}
        <div className="mt-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="small" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
