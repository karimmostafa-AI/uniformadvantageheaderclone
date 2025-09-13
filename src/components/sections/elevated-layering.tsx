'use client';

import Link from 'next/link';

export default function ElevatedLayering() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Elevated Layering
          </h2>
          <p className="text-lg text-gray-600">
            Complete your professional look with our layering essentials
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center group">
            <Link href="/solid-scrub-jackets-for-nursing-1">
              <div className="bg-white rounded-lg p-6 shadow-sm group-hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🧥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scrub Jackets</h3>
                <p className="text-gray-600">Professional warmth and style</p>
              </div>
            </Link>
          </div>
          
          <div className="text-center group">
            <Link href="/long-sleeve-underscrubs-for-nursing">
              <div className="bg-white rounded-lg p-6 shadow-sm group-hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👕</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Underscrubs</h3>
                <p className="text-gray-600">Comfort base layer essentials</p>
              </div>
            </Link>
          </div>
          
          <div className="text-center group">
            <Link href="/ladies-uniforms/women-all-jackets/ladies-scrub-vests">
              <div className="bg-white rounded-lg p-6 shadow-sm group-hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🦺</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scrub Vests</h3>
                <p className="text-gray-600">Versatile layering options</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}