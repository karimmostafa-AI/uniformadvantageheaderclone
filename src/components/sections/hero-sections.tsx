'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSections() {
  return (
    <div className="space-y-6">
      {/* Main Echoes of Autumn Hero */}
      <section className="relative">
        <Link href="/all-new-arrivals/featured-shops-new-arrivals/echoes-of-autumn">
          <div className="relative h-96 bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Echoes of Autumn Collection
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Discover our newest fall colors and styles
              </p>
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </Link>
      </section>

      {/* Secondary Hero Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {/* Hypothesis Hero */}
        <div className="relative group">
          <Link href="/medical-uniform-brands/the-hypothesis-scrubs">
            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Hypothesis Scrubs</h3>
                <p className="text-sm">On Sale Now</p>
              </div>
            </div>
          </Link>
        </div>

        {/* ReSurge Hero */}
        <div className="relative group">
          <Link href="/ua-scrubs/ua-scrub-brands/resurge-scrubs">
            <div className="relative h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">ReSurge Scrubs</h3>
                <p className="text-sm">Premium Comfort</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Easy Stretch Hero */}
        <div className="relative group">
          <Link href="/ua-scrubs/ua-scrub-brands/easy-stretch-scrubs">
            <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Easy Stretch</h3>
                <p className="text-sm">Ultimate Flexibility</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Print Scrubs */}
        <div className="relative group md:col-span-2 lg:col-span-3">
          <Link href="/all-prints/seasonal-prints/fall-printed-scrubs">
            <div className="relative h-48 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Fall Print Collection</h3>
                  <p className="text-lg">Express Your Style with Seasonal Prints</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}