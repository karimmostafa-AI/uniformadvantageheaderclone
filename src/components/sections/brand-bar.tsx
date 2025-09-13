'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function BrandBar() {
  const brands = [
    {
      name: 'Butter Soft',
      href: '/butter-soft',
      logo: '/brands/butter-soft.png',
    },
    {
      name: 'Easy Stretch',
      href: '/easy-stretch',
      logo: '/brands/easy-stretch.png',
    },
    {
      name: 'Butter Soft Original',
      href: '/hypothesis',
      logo: '/brands/hypothesis.png',
    },
    {
      name: 'ReSurge by Butter Soft Scrubs',
      href: '/resurge-scrubs',
      logo: '/brands/resurge.png',
    },
    {
      name: 'Whisperlite',
      href: '/whisperlite',
      logo: '/brands/whisperlite.png',
    },
  ];

  return (
    <div className="bg-black py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Brand Logos - Left Side */}
          <ul className="flex items-center space-x-6 md:space-x-8">
            {brands.map((brand) => (
              <li key={brand.name}>
                <Link 
                  href={brand.href}
                  className="block hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={80}
                    height={30}
                    className="h-6 md:h-8 w-auto brightness-0 invert"
                  />
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Utility Links - Right Side */}
          <ul className="flex items-center space-x-6 text-sm text-gray-300">
            <li className="flex items-center space-x-1">
              <span>Ship to:</span>
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                United States
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              <span className="text-gray-500">|</span>
              <Link href="/set-locale" className="text-gray-300 hover:text-white transition-colors">
                Español
              </Link>
            </li>
            <li>
              <Link 
                href="/group-order"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Groups
              </Link>
            </li>
            <li>
              <Link 
                href="/stores"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Store Locator
              </Link>
            </li>
            <li>
              <Link 
                href="/order/track"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Tracking
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
