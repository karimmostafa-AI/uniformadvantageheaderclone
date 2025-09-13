'use client';

import Link from 'next/link';

export default function PrintsHeadquarters() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex items-center">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Prints Headquarters
                </h2>
                <p className="text-xl mb-6">
                  Fall Print Scrubs on Sale - Express your personality with our seasonal collection
                </p>
                <Link 
                  href="/all-prints"
                  className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Shop Fall Prints
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🍂</div>
                <p className="text-lg font-semibold">
                  New Fall Collection
                </p>
                <p className="text-sm opacity-90">
                  Including Halloween Prints
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}