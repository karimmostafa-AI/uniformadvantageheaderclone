'use client';

import Link from 'next/link';

export default function EmbroiderySection() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Embroidery
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Personalize your scrubs with professional embroidery. Add your name, 
              title, or logo to make your uniform uniquely yours.
            </p>
            <div className="space-y-4">
              <Link 
                href="/embroidery/embroidery-information.html"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
              <Link 
                href="/ladies-uniforms/?cgid=ladies-uniforms&prefn1=Category&prefv1=Solid+Tops"
                className="inline-block ml-4 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Shop Tops
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-6xl mb-4">🧵</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Embroidery
              </h3>
              <p className="text-gray-600">
                High-quality personalization for your medical uniforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}