import { Project } from '@/types/project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  variant?: 'large' | 'small';
}

export default function ProjectCard({
  project,
  variant = 'large',
}: ProjectCardProps) {
  const isLarge = variant === 'large';

  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-95 ${
        isLarge
          ? 'w-full h-[400px] sm:h-[500px]'
          : 'w-[150px] h-[100px] sm:w-[200px] sm:h-[150px]'
      }`}
    >
      <Image
        src={
          project.imageUrl ||
          'https://via.placeholder.com/800x600?text=No+Image'
        }
        alt={project.title}
        fill
        className="object-cover"
        sizes={isLarge ? '(max-width: 640px) 100vw, 33vw' : '150px'}
        priority={isLarge}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
        <h3
          className={`${
            isLarge ? 'text-xl sm:text-2xl' : 'text-sm'
          } font-bold text-white font-[var(--font-space-grotesk)]`}
        >
          {project.title}
        </h3>
        {isLarge && (
          <>
            <p className="text-sm text-gray-200 font-[var(--font-atkinson-hyperlegible)] mt-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white bg-gray-800 rounded-full px-2 py-1 font-[var(--font-atkinson-hyperlegible)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
        <p
          className={`${
            isLarge ? 'text-sm' : 'text-xs'
          } text-gray-300 font-[var(--font-atkinson-hyperlegible)] mt-1`}
        >
          {new Date(project.createdAt).toLocaleDateString('ru-RU')}
        </p>
      </div>
    </div>
  );
}
