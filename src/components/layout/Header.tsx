'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* Replace with your logo */}
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
              VetQuest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/daily-quiz" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
              Daily Quiz
            </Link>
            <Link href="/case-study" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
              Case Study
            </Link>
            <Link href="/multiplayer" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
              Multiplayer
            </Link>
            <button className="btn-primary">
              Sign In with Google
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link 
              href="/daily-quiz"
              className="block text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Daily Quiz
            </Link>
            <Link 
              href="/case-study"
              className="block text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Study
            </Link>
            <Link 
              href="/multiplayer"
              className="block text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Multiplayer
            </Link>
            <button className="btn-primary w-full">
              Sign In with Google
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}