'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/features/auth/AuthProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signInWithGoogle, signOut, loading } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
              VetQuest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {user && (
              <>
                <Link href="/daily-quiz" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
                  Daily Quiz
                </Link>
                <Link href="/case-study" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
                  Case Study
                </Link>
                <Link href="/multiplayer" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
                  Multiplayer
                </Link>
              </>
            )}
            
            {loading ? (
              <div className="text-gray-600 dark:text-gray-300">Loading...</div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 dark:text-gray-300">
                  {user.displayName || user.email}
                </span>
                <button 
                  onClick={() => signOut()}
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button 
                onClick={() => signInWithGoogle()}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Sign In with Google
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 cursor-pointer"
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
            {user && (
              <>
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
              </>
            )}
            
            {loading ? (
              <div className="text-gray-600 dark:text-gray-300">Loading...</div>
            ) : user ? (
              <>
                <div className="text-gray-600 dark:text-gray-300">
                  {user.displayName || user.email}
                </div>
                <button 
                  onClick={() => signOut()}
                  className="block w-full text-left text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 cursor-pointer"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button 
                onClick={() => signInWithGoogle()}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md w-full cursor-pointer"
              >
                Sign In with Google
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}