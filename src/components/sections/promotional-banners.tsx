'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';

const promotions = [
  {
    id: 1,
    title: "20% off Spotlight Sale",
    subtitle: "Healing Hands, Butter-Soft & more, ENDS IN...",
    href: "/discount-scrubs/collections-on-sale/current-limited-time-sale",
    hasCountdown: true,
    bgColor: "bg-gradient-to-r from-orange-600 to-red-600",
  },
  {
    id: 2,
    title: "20% off Echoes of Autumn Color Drop",
    subtitle: "Ends 9/15/25",
    href: "/all-new-arrivals/featured-shops-new-arrivals/echoes-of-autumn",
    bgColor: "bg-gradient-to-r from-amber-700 to-orange-700",
  },
  {
    id: 3,
    title: "Up to 50% off Great Deals",
    subtitle: "While Supplies Last",
    href: "/discount-scrubs/weekly-deals",
    bgColor: "bg-gradient-to-r from-blue-700 to-purple-700",
  },
  {
    id: 4,
    title: "20% off NEW Fall Prints",
    subtitle: "Including the Halloween Shop, ends 9/15/25",
    href: "/all-prints",
    bgColor: "bg-gradient-to-r from-purple-700 to-pink-700",
  },
];

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to September 15, 2025
    const targetDate = new Date('2025-09-15T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-4 mr-4">
      <div className="flex space-x-3 text-white">
        <div className="text-center">
          <div className="text-lg font-bold">{timeLeft.days}</div>
          <div className="text-xs">DAYS</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold">{timeLeft.hours}</div>
          <div className="text-xs">HOURS</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold">{timeLeft.minutes}</div>
          <div className="text-xs">MIN</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold">{timeLeft.seconds}</div>
          <div className="text-xs">SECS</div>
        </div>
      </div>
    </div>
  );
}

export default function PromotionalBanners() {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [showBanners, setShowBanners] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  if (!showBanners) return null;

  const promotion = promotions[currentPromo];

  return (
    <div className={`relative ${promotion.bgColor} text-white py-3 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center text-center">
          {promotion.hasCountdown && <CountdownTimer />}
          
          <div className="flex-1">
            <Link 
              href={promotion.href}
              className="hover:underline"
            >
              <h3 className="text-lg font-bold">
                {promotion.title}
              </h3>
              <p className="text-sm opacity-90">
                {promotion.subtitle}
              </p>
            </Link>
          </div>

          <button
            onClick={() => setShowBanners(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label="Close promotional banners"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center space-x-2 mt-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPromo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentPromo ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}