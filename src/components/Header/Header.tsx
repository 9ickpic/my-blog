'use client';
import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const navItems = [
  { name: 'Главная', href: '/' },
  { name: 'Проекты', href: '/projects' },
  { name: 'Блог', href: '/blog' },
  { name: 'Контакты', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-primary py-4">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold duration-200">
          9ickpic
        </Link>

        {/* Бургер-кнопка для мобильных */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <AlignRight />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center">
            {navItems.map((item) => (
              <li key={item.href} className="py-2">
                <Link
                  href={item.href}
                  className="duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
