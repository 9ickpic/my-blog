import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedProjects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with Next.js and Stripe.',
      imageUrl: 'https://via.placeholder.com/800x600?text=Project+1',
      projectUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/9ickpic/ecommerce',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
      createdAt: new Date('2024-01-15T00:00:00Z'),
      updatedAt: new Date('2024-01-15T00:00:00Z'),
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio with a custom CMS.',
      imageUrl: 'https://via.placeholder.com/800x600?text=Project+2',
      projectUrl: 'https://example.com/portfolio',
      githubUrl: 'https://github.com/9ickpic/portfolio',
      tags: ['Next.js', 'Prisma', 'Supabase'],
      createdAt: new Date('2024-03-22T00:00:00Z'),
      updatedAt: new Date('2024-03-22T00:00:00Z'),
    },
    {
      title: 'Task Manager App',
      description:
        'A collaborative task management tool with real-time updates.',
      imageUrl: 'https://via.placeholder.com/800x600?text=Project+3',
      projectUrl: 'https://example.com/task-manager',
      githubUrl: 'https://github.com/9ickpic/task-manager',
      tags: ['React', 'Firebase', 'TypeScript'],
      createdAt: new Date('2024-06-10T00:00:00Z'),
      updatedAt: new Date('2024-06-10T00:00:00Z'),
    },
    {
      title: 'Blog Platform',
      description: 'A blogging platform with Markdown support.',
      imageUrl: 'https://via.placeholder.com/800x600?text=Project+4',
      projectUrl: 'https://example.com/blog',
      githubUrl: 'https://github.com/9ickpic/blog',
      tags: ['Next.js', 'Markdown', 'Vercel'],
      createdAt: new Date('2024-09-05T00:00:00Z'),
      updatedAt: new Date('2024-09-05T00:00:00Z'),
    },
    {
      title: 'Fitness Tracker',
      description: 'A mobile-first fitness tracking application.',
      imageUrl: 'https://via.placeholder.com/800x600?text=Project+5',
      projectUrl: 'https://example.com/fitness-tracker',
      githubUrl: 'https://github.com/9ickpic/fitness-tracker',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      createdAt: new Date('2024-11-20T00:00:00Z'),
      updatedAt: new Date('2024-11-20T00:00:00Z'),
    },
  ];

  try {
    await prisma.project.createMany({
      data: projects,
      skipDuplicates: true,
    });
    console.log('Projects seeded successfully.');
  } catch (error) {
    console.error('Error seeding projects:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProjects();
