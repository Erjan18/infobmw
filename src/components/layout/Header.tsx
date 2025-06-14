import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import clsx from 'clsx';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Новости', href: '/news' },
    { name: 'О бренде', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-bmw-blue p-2 rounded-lg group-hover:bg-bmw-blue-dark transition-colors duration-200">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">BMW</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  isActive(item.href)
                    ? 'text-bmw-blue dark:text-bmw-blue-light bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-bmw-blue dark:hover:text-bmw-blue-light hover:bg-gray-50 dark:hover:bg-gray-800'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-bmw-blue dark:hover:text-bmw-blue-light transition-colors duration-200"
              aria-label="Открыть меню"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                    isActive(item.href)
                      ? 'text-bmw-blue dark:text-bmw-blue-light bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-bmw-blue dark:hover:text-bmw-blue-light hover:bg-gray-50 dark:hover:bg-gray-800'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}