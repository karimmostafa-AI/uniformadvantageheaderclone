"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, 
  Search, 
  User, 
  ShoppingBag, 
  ChevronDown, 
  ChevronRight,
  X,
  Phone,
  Clock,
  Heart,
  ChevronLeft
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from "@/lib/utils";
import MobileMenu from './mobile-menu';

// Navigation menu structure
const navigationMenus = [
  { name: "Women's", href: "/womens-scrubs", hasDropdown: true },
  { name: "Men's", href: "/mens-scrubs", hasDropdown: true },
  { name: "Footwear", href: "/footwear", hasDropdown: true },
  { name: "Accessories", href: "/accessories", hasDropdown: true },
  { name: "Brands", href: "/brands", hasDropdown: true },
  { name: "Sale", href: "/sale", hasDropdown: false, isSale: true }
];

// Promotional banner messages
const promoMessages = [
  {
    id: 1,
    content: (
      <span>
        <strong>FREE SHIPPING</strong> on orders over $75 | 
        Use code: <strong>FREESHIP75</strong>
      </span>
    )
  },
  {
    id: 2,
    content: (
      <span>
        <strong>SAVE UP TO 60%</strong> on select styles | 
        <a href="/sale" className="text-white underline hover:no-underline">Shop Sale Now →</a>
      </span>
    )
  }
];

// Women's mega menu data
const womensMegaMenu = {
  columns: [
    {
      title: "Scrub Tops",
      links: [
        { name: "V-Neck Tops", href: "/womens-scrubs/v-neck-tops" },
        { name: "Round Neck Tops", href: "/womens-scrubs/round-neck-tops" },
        { name: "Mock Wrap Tops", href: "/womens-scrubs/mock-wrap-tops" },
        { name: "Tunic Tops", href: "/womens-scrubs/tunic-tops" },
        { name: "Print Tops", href: "/womens-scrubs/print-tops" },
        { name: "Solid Tops", href: "/womens-scrubs/solid-tops" },
        { name: "View All Tops →", href: "/womens-scrubs/tops", isViewAll: true }
      ]
    },
    {
      title: "Scrub Pants",
      links: [
        { name: "Straight Leg", href: "/womens-scrubs/straight-leg-pants" },
        { name: "Bootcut", href: "/womens-scrubs/bootcut-pants" },
        { name: "Skinny/Fitted", href: "/womens-scrubs/skinny-fitted-pants" },
        { name: "Wide Leg", href: "/womens-scrubs/wide-leg-pants" },
        { name: "Jogger Style", href: "/womens-scrubs/jogger-pants" },
        { name: "Petite Sizes", href: "/womens-scrubs/petite-pants" },
        { name: "View All Pants →", href: "/womens-scrubs/pants", isViewAll: true }
      ]
    },
    {
      title: "Scrub Sets",
      links: [
        { name: "Matching Sets", href: "/womens-scrubs/matching-sets" },
        { name: "Print Sets", href: "/womens-scrubs/print-sets" },
        { name: "Solid Color Sets", href: "/womens-scrubs/solid-sets" },
        { name: "Designer Sets", href: "/womens-scrubs/designer-sets" },
        { name: "View All Sets →", href: "/womens-scrubs/sets", isViewAll: true }
      ],
      subSection: {
        title: "Lab Coats",
        links: [
          { name: "Traditional Coats", href: "/lab-coats/traditional" },
          { name: "Fitted Coats", href: "/lab-coats/fitted" },
          { name: "Consultation Coats", href: "/lab-coats/consultation" }
        ]
      }
    },
    {
      title: "Shop by Size",
      links: [
        { name: "XS - S", href: "/womens-scrubs/xs-s" },
        { name: "M - L", href: "/womens-scrubs/m-l" },
        { name: "XL - XXL", href: "/womens-scrubs/xl-xxl" },
        { name: "3XL - 5XL", href: "/womens-scrubs/3xl-5xl" },
        { name: "Petite Sizes", href: "/womens-scrubs/petite" },
        { name: "Tall Sizes", href: "/womens-scrubs/tall" }
      ],
      subSection: {
        title: "Popular Brands",
        links: [
          { name: "Cherokee", href: "/brands/cherokee" },
          { name: "Dickies", href: "/brands/dickies" },
          { name: "BARCO One", href: "/brands/barco-one" },
          { name: "WonderWink", href: "/brands/wonderwink" }
        ]
      }
    }
  ],
  featured: {
    image: "/images/women-featured.jpg",
    title: "New Arrivals",
    description: "Latest styles from top brands",
    ctaText: "Shop New →",
    ctaLink: "/womens-scrubs/new-arrivals"
  }
};


// Social media icon components
const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.903 8.246 7.054 7.756 8.351 7.756s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.2-1.86-6.33.32-1.45.93-2.78 1.74-3.97.6-.85 1.28-1.63 2.03-2.37.02 1.52.02 3.04.01 4.57-.56.02-1.13.06-1.69.09-1.19.06-2.39-.17-3.41-.7-1.34-.69-2.34-2-2.48-3.48-.15-1.56.51-3.15 1.74-4.27 1.1-.99 2.53-1.49 4.01-1.57.25-.01.5-.02.75-.02.01 2.38.01 4.75.01 7.13.01 1.72-.01 3.44-.01 5.16.52-.15 1.02-.34 1.52-.5.83-.26 1.6-.68 2.26-1.24.81-.69 1.37-1.64 1.73-2.65.09-.27.18-.54.26-.81 1.02-3.33 1.02-6.67 1.02-10.01z"/>
  </svg>
);

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [currentPromo, setCurrentPromo] = useState(0);
    const [showPromoBanner, setShowPromoBanner] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [cartCount, setCartCount] = useState(2);
    const [wishlistCount, setWishlistCount] = useState(3);
    
    // Auto-rotate promotional banners
    useEffect(() => {
        if (!showPromoBanner || promoMessages.length <= 1) return;
        
        const interval = setInterval(() => {
            setCurrentPromo(prev => (prev + 1) % promoMessages.length);
        }, 4000);
        
        return () => clearInterval(interval);
    }, [showPromoBanner]);
    
    // Handle dropdown interactions
    const handleDropdownEnter = (menuName: string) => {
        setActiveDropdown(menuName);
    };
    
    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };
    
    // Handle search
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        setShowSearchSuggestions(value.length >= 2);
    };
    
    // Mega Menu Component
    const MegaMenu = ({ menu, data }: { menu: string, data: any }) => {
        if (menu !== "Women's" || !data) return null;
        
        return (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[900px] max-w-[95vw] bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-100 visible">
                <div className="grid grid-cols-5 gap-8 p-8">
                    {data.columns.map((column: any, index: number) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide border-b-2 border-blue-500 pb-2">
                                {column.title}
                            </h3>
                            <ul className="space-y-2">
                                {column.links.map((link: any, linkIndex: number) => (
                                    <li key={linkIndex}>
                                        <a 
                                            href={link.href} 
                                            className={cn(
                                                "text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1",
                                                link.isViewAll && "font-semibold text-blue-600 mt-2"
                                            )}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {column.subSection && (
                                <div className="mt-6">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                                        {column.subSection.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {column.subSection.links.map((link: any, linkIndex: number) => (
                                            <li key={linkIndex}>
                                                <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1">
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                        <div className="aspect-w-4 aspect-h-3">
                            <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                <span className="text-4xl">👗</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold text-sm text-gray-900 mb-1">{data.featured.title}</h4>
                            <p className="text-xs text-gray-600 mb-3">{data.featured.description}</p>
                            <a 
                                href={data.featured.ctaLink}
                                className="inline-flex items-center bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded hover:bg-blue-700 transition-colors"
                            >
                                {data.featured.ctaText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <header className="relative">
            {/* Main Header Section */}
            <div className="hidden lg:block h-20 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-[1200px] mx-auto px-5 h-full flex items-center justify-between relative">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 w-[220px]">
                        <Link href="/" className="flex items-center">
                            <div className="bg-blue-600 text-white px-4 py-2.5 rounded">
                                <span className="text-lg font-bold tracking-wide">UNIFORM ADVANTAGE</span>
                            </div>
                        </Link>
                    </div>
                    
                    {/* Primary Navigation */}
                    <nav className="flex-1 flex justify-center mx-10">
                        <ul className="flex items-center space-x-8">
                            {navigationMenus.map((item) => (
                                <li key={item.name} className="relative">
                                    <a
                                        href={item.href}
                                        className={cn(
                                            "flex items-center px-0 py-2 text-base font-medium transition-colors relative",
                                            item.isSale 
                                                ? "text-red-600 hover:text-red-700" 
                                                : "text-gray-800 hover:text-blue-600"
                                        )}
                                        onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.name)}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        {item.name}
                                        {item.hasDropdown && (
                                            <ChevronDown className="ml-1.5 h-3 w-3 transition-transform duration-200" />
                                        )}
                                        {item.isSale && (
                                            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                                                Save Up To 60%
                                            </span>
                                        )}
                                    </a>
                                    {item.hasDropdown && activeDropdown === item.name && (
                                        <div 
                                            onMouseEnter={() => handleDropdownEnter(item.name)}
                                            onMouseLeave={handleDropdownLeave}
                                        >
                                            <MegaMenu menu={item.name} data={item.name === "Women's" ? womensMegaMenu : null} />
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                    {/* Header Actions */}
                    <div className="flex items-center space-x-5 flex-shrink-0">
                        {/* Search Container */}
                        <div className="relative w-80">
                            <form className="relative flex">
                                <Input
                                    type="search"
                                    placeholder="Search scrubs, brands, or styles..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="w-full h-10 pl-4 pr-12 bg-gray-50 border-2 border-gray-200 rounded-md focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                                    autoComplete="off"
                                />
                                <button 
                                    type="submit" 
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                >
                                    <Search className="h-4 w-4" />
                                </button>
                            </form>
                            {showSearchSuggestions && searchQuery.length >= 2 && (
                                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 border-t-0 rounded-b-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                                    <div className="p-3 border-b border-gray-100">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Search className="h-4 w-4 mr-2" />
                                            <span>Search suggestions for "{searchQuery}"</span>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        {/* Mock search suggestions */}
                                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 transition-colors">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-xs">👕</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">Scrub Tops</div>
                                                <div className="text-xs text-gray-500">Women's</div>
                                            </div>
                                        </a>
                                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 transition-colors">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-xs">👖</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">Scrub Pants</div>
                                                <div className="text-xs text-gray-500">Men's</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Account Actions */}
                        <div className="flex items-center space-x-4">
                            <a href="/account" className="flex items-center p-2 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                                <User className="h-5 w-5 mr-1.5" />
                                <span className="text-sm font-medium">Account</span>
                            </a>
                            
                            <a href="/wishlist" className="relative flex items-center p-2 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                                <Heart className="h-5 w-5" />
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-semibold min-w-[16px] h-4 rounded-full flex items-center justify-center">
                                        {wishlistCount}
                                    </span>
                                )}
                            </a>
                            
                            <a href="/cart" className="relative flex items-center p-2 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                                <ShoppingBag className="h-5 w-5 mr-1.5" />
                                <span className="text-sm font-medium">Cart</span>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold min-w-[16px] h-4 rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Section 3: PROMOTIONAL BANNER BAR */}
            {showPromoBanner && (
                <div className="h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm text-center relative overflow-hidden">
                    <div className="max-w-[1200px] mx-auto px-5 h-full flex items-center justify-center relative">
                        <div className="transition-opacity duration-500">
                            {promoMessages[currentPromo].content}
                        </div>
                        <button 
                            onClick={() => setShowPromoBanner(false)}
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/20 rounded p-1 transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}}
            
            {/* Mobile Header */}
            <div className="lg:hidden bg-white border-b border-gray-200">
                <div className="h-[60px] px-4 flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
                        aria-label="Open mobile menu"
                    >
                        <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                            <div className="w-full h-0.5 bg-currentColor transition-all duration-300" />
                            <div className="w-full h-0.5 bg-currentColor transition-all duration-300" />
                            <div className="w-full h-0.5 bg-currentColor transition-all duration-300" />
                        </div>
                    </button>
                    
                    {/* Mobile Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-bold tracking-wide">
                            UA
                        </div>
                    </Link>
                    
                    {/* Mobile Actions */}
                    <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-700 hover:text-blue-600 rounded-md">
                            <Search className="w-5 h-5" />
                        </button>
                        <a href="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 rounded-md">
                            <ShoppingBag className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold min-w-[16px] h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </a>
                    </div>
                </div>
                
                {/* Mobile Search Bar (expandable) */}
                <div className="px-4 pb-3">
                    <div className="relative">
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full h-10 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-lg"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <Search className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu Overlay */}
            <MobileMenu 
                isOpen={isMobileMenuOpen} 
                onClose={() => setIsMobileMenuOpen(false)} 
            />
        </header>
    );
};

export default Header;
