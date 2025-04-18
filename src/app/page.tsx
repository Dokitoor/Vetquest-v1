'use client';

import { useAuth } from '@/features/auth/AuthProvider';
import Link from 'next/link';

export default function Home() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Veterinary Learning
            </h1>
            <p className="text-xl mb-8">
              Interactive quizzes, daily case studies, and multiplayer learning experiences
              designed specifically for veterinary professionals and students.
            </p>
            <button 
              onClick={signInWithGoogle}
              className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold
                hover:bg-gray-100 transition-colors duration-300">
              Get Started with Google
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Daily Quiz Card */}
            <div className="card hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Daily Quizzes</h3>
              <p className="text-gray-600 mb-4">
                15 new questions every day to test and improve your veterinary knowledge.
                Compete on the global leaderboard!
              </p>
              <Link href="/daily-quiz" className="text-purple-600 font-semibold hover:text-purple-700">
                Start Quiz →
              </Link>
            </div>

            {/* Case Study Card */}
            <div className="card hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Daily real-world veterinary cases to analyze and learn from.
                Enhance your diagnostic skills!
              </p>
              <Link href="/case-study" className="text-purple-600 font-semibold hover:text-purple-700">
                View Cases →
              </Link>
            </div>

            {/* Multiplayer Card */}
            <div className="card hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiplayer Quiz</h3>
              <p className="text-gray-600 mb-4">
                Create and join interactive quiz sessions with friends and colleagues.
                Learn together in real-time!
              </p>
              <Link href="/multiplayer" className="text-purple-600 font-semibold hover:text-purple-700">
                Play Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Enhance Your Veterinary Knowledge?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of veterinary professionals and students.
            Start learning, competing, and growing together!
          </p>
          <button 
            onClick={signInWithGoogle} 
            className="btn-primary text-lg">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
}