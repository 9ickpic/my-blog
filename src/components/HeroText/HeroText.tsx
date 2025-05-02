'use client';
import { motion } from 'framer-motion';

const textLines = ['CodeVibe.', 'Break Rules.', 'Build Chaos.'];

export default function HeroText() {
  return (
    <div className="flex flex-col items-start">
      {textLines.map((line, index) => (
        <motion.span
          key={line}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)]"
          style={{ marginLeft: `${index * 60}px` }}
        >
          {line}
        </motion.span>
      ))}
    </div>
  );
}
