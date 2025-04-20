'use client';

import { useAuth } from '@/features/auth/AuthProvider';
import Link from 'next/link';

export default function Home() {
  const { user, signInWithGoogle, authInitialized } = useAuth();

  // Based on the screenshot, show this landing page when not authenticated
  if (!user && authInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white py-10">
        <div className="container mx-auto px-4 text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            VetQuest
          </h1>
          <p className="text-xl">
            Master Veterinary Medicine Through Interactive Learning
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Quiz of the Day Card */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Quiz of the Day</h2>
              <p className="mb-6">Challenge yourself with 15 daily questions and compete for the top spot on the leaderboard.</p>
              <button 
                onClick={signInWithGoogle}
                className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 cursor-pointer" 
              >
                Take Today's Quiz
              </button>
            </div>

            {/* Case Studies Card */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
              <p className="mb-6">Dive deep into real veterinary cases and enhance your diagnostic skills.</p>
              <button 
                onClick={signInWithGoogle}
                className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 cursor-pointer"
              >
                Explore Cases
              </button>
            </div>

            {/* Multiplayer Mode Card */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Multiplayer Mode</h2>
              <p className="mb-6">Compete with fellow veterinary students in real-time knowledge battles.</p>
              <button 
                onClick={signInWithGoogle}
                className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 cursor-pointer"
              >
                Join Game
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose VetQuest?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Interactive Learning */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p>Engage with content through quizzes and real-time feedback</p>
            </div>

            {/* Expert Content */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Content</h3>
              <p>Curated by experienced veterinary professionals</p>
            </div>

            {/* Track Progress */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p>Monitor your learning journey with detailed analytics</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show this after successful authentication
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
            {!user && (
              <button 
                onClick={signInWithGoogle}
                className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold
                  hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                Get Started with Google
              </button>
            )}
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
              <Link href="/daily-quiz" className="text-purple-600 font-semibold hover:text-purple-700 cursor-pointer">
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
              <Link href="/case-study" className="text-purple-600 font-semibold hover:text-purple-700 cursor-pointer">
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
              <Link href="/multiplayer" className="text-purple-600 font-semibold hover:text-purple-700 cursor-pointer">
                Play Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!user && (
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
              className="btn-primary text-lg cursor-pointer">
              Sign Up Now
            </button>
          </div>
        </section>
      )}
    </div>
  );
}