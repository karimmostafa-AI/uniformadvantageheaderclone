'use client';

import Link from 'next/link';

export default function SocialSection() {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/uniformadvantage/',
      icon: '📷',
      description: 'Follow us on Instagram',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/UniformAdvantage',
      icon: '📘',
      description: 'Like us on Facebook',
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@uniformadvantage?lang=en',
      icon: '🎵',
      description: 'Follow us on TikTok',
    },
    {
      name: 'Pinterest',
      href: 'https://www.pinterest.com/uascrubs/',
      icon: '📌',
      description: 'Follow us on Pinterest',
    },
  ];

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-300">
            Follow us for the latest in scrubs fashion, healthcare tips, and exclusive deals
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="group bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-4xl mb-3">{social.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{social.name}</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">
                {social.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}