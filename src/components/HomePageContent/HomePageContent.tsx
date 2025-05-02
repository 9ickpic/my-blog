'use client';

import HeroText from '@/components/HeroText/HeroText';
import ProjectSlider from '@/components/ProjectSlider/ProjectSlider'; // Убедитесь, что ProjectSlider тоже клиентский, если использует хуки браузера
import { Project } from '@/types/project';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
// Определите тип для проекта, если он еще не определен глобально
// Убедитесь, что он соответствует тому, что возвращает Prisma (Date для createdAt/updatedAt)

interface HomePageContentProps {
  initialProjects: Project[];
}

export default function HomePageContent({
  initialProjects,
}: HomePageContentProps) {
  // Removed the 'projects' state and 'setProjects' setter
  const [showProjects, setShowProjects] = useState(false); // Keep state for animation toggle
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      setShowProjects(false);
    }
  }, [pathname]);

  return (
    <div className="relative min-h-[calc(100vh-200px)] flex flex-col justify-center items-center px-4">
      <AnimatePresence mode="wait">
        {!showProjects ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <HeroText />
            <motion.p
              initial={{
                opacity: 0,
                y: +20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 2.4,
              }}
              className="text-lg sm:text-xl md:text-2xl max-w-2xl mt-8 mb-12 font-[var(--font-atkinson-hyperlegible)]"
            >
              9ickpic, 24, хакер интерфейсов и архитектор веб-миров. С любовью к
              чистому коду и смелым идеям. Полный стек, полный контроль — создаю
              сайты, которые цепляют.
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: 100 }} // Анимация сдвига по горизонтали
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center w-full"
          >
            <section className="px-4 py-0 my-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 font-[var(--font-space-grotesk)]">
                Мои проекты
              </h2>

              {/* Верхний слайдер больших карточек */}
              {/* Используем initialProjects напрямую */}
              {/* Проблема "дергания" верхних карточек скорее всего связана с внутренней работой ProjectSlider */}
              <ProjectSlider projects={initialProjects} />
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Анимация кнопок остается без изменений */}
      <AnimatePresence>
        {!showProjects ? (
          <motion.div
            key="projects-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 right-4 z-10"
          >
            <button
              onClick={() => setShowProjects(true)}
              className="inline-flex items-center text-lg font-semibold font-[var(--font-space-grotesk)] hover:cursor-pointer hover-none"
            >
              Проекты
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="home-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 left-4 z-10"
          >
            <button
              onClick={() => setShowProjects(false)}
              className="inline-flex items-center text-lg font-semibold font-[var(--font-space-grotesk)] hover:cursor-pointer hover-none"
            >
              <motion.span
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
                className="mr-2"
              >
                <ArrowLeft className="h-5 w-5" />
              </motion.span>
              Главная
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
