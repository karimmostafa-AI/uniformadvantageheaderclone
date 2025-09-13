'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronRight, ChevronLeft, User, Phone } from 'lucide-react';
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mobileMenuSections = [
  {
    name: "Women's",
    href: "/womens-scrubs",
    hasSubmenu: true,
    submenu: {
      title: "Women's",
      groups: [
        {
          title: "Scrub Tops",
          links: [
            { name: "V-Neck Tops", href: "/womens-scrubs/v-neck-tops" },
            { name: "Round Neck Tops", href: "/womens-scrubs/round-neck-tops" },
            { name: "Mock Wrap Tops", href: "/womens-scrubs/mock-wrap-tops" },
            { name: "Tunic Tops", href: "/womens-scrubs/tunic-tops" },
            { name: "Print Tops", href: "/womens-scrubs/print-tops" },
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
            { name: "View All Pants →", href: "/womens-scrubs/pants", isViewAll: true }
          ]
        }
      ],
      featured: {
        image: "/images/mobile-women-feature.jpg",
        title: "New Arrivals",
        description: "Latest styles from top brands",
        ctaText: "Shop New",
        ctaLink: "/womens-scrubs/new-arrivals"
      }
    }
  },
  {
    name: "Men's",
    href: "/mens-scrubs",
    hasSubmenu: true,
    submenu: {
      title: "Men's",
      groups: [
        {
          title: "Scrub Tops",
          links: [
            { name: "V-Neck Tops", href: "/mens-scrubs/v-neck-tops" },
            { name: "Round Neck Tops", href: "/mens-scrubs/round-neck-tops" },
            { name: "Polo Scrub Tops", href: "/mens-scrubs/polo-tops" },
            { name: "View All Tops →", href: "/mens-scrubs/tops", isViewAll: true }
          ]
        },
        {
          title: "Scrub Pants",
          links: [
            { name: "Cargo Pants", href: "/mens-scrubs/cargo-pants" },
            { name: "Straight Leg", href: "/mens-scrubs/straight-leg-pants" },
            { name: "Tapered Fit", href: "/mens-scrubs/tapered-pants" },
            { name: "View All Pants →", href: "/mens-scrubs/pants", isViewAll: true }
          ]
        }
      ]
    }
  },
  { name: "Footwear", href: "/footwear", hasSubmenu: false },
  { name: "Accessories", href: "/accessories", hasSubmenu: false },
  { name: "Brands", href: "/brands", hasSubmenu: false },
  { name: "Sale", href: "/sale", hasSubmenu: false, isSale: true }
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = (sectionName: string) => {
    setActiveSubmenu(activeSubmenu === sectionName ? null : sectionName);
  };

  const handleBackToMenu = () => {
    setActiveSubmenu(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] lg:hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute top-0 left-0 w-80 h-full bg-white shadow-xl overflow-y-auto">
        {/* Main Menu */}
        <div className={cn(
          "transition-transform duration-300 ease-in-out",
          activeSubmenu ? "-translate-x-full" : "translate-x-0"
        )}>
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Hello!</div>
                <div className="text-sm text-gray-600">
                  <a href="/login" className="text-blue-600 hover:underline">Sign In</a>
                  <span className="mx-1">|</span>
                  <a href="/register" className="text-blue-600 hover:underline">Register</a>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="py-5">
            {mobileMenuSections.map((section) => (
              <div key={section.name} className="border-b border-gray-100">
                {section.hasSubmenu ? (
                  <button
                    onClick={() => handleSubmenuToggle(section.name)}
                    className={cn(
                      "w-full flex items-center justify-between px-5 py-4 text-base font-medium transition-colors",
                      section.isSale 
                        ? "text-red-600 hover:bg-red-50" 
                        : "text-gray-900 hover:bg-gray-50"
                    )}
                  >
                    <span>{section.name}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ) : (
                  <Link
                    href={section.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between px-5 py-4 text-base font-medium transition-colors",
                      section.isSale 
                        ? "text-red-600 hover:bg-red-50" 
                        : "text-gray-900 hover:bg-gray-50"
                    )}
                  >
                    <span>{section.name}</span>
                    {section.isSale && (
                      <span className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                        Save Up To 60%
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 px-5 py-5 border-t border-gray-200 bg-gray-50">
            <div className="space-y-3 mb-6">
              <Link href="/account" onClick={onClose} className="block text-sm text-gray-700 hover:text-blue-600 py-2 border-b border-gray-200">
                My Account
              </Link>
              <Link href="/wishlist" onClick={onClose} className="block text-sm text-gray-700 hover:text-blue-600 py-2 border-b border-gray-200">
                Wishlist (3)
              </Link>
              <Link href="/customer-service" onClick={onClose} className="block text-sm text-gray-700 hover:text-blue-600 py-2 border-b border-gray-200">
                Customer Service
              </Link>
              <Link href="/size-charts" onClick={onClose} className="block text-sm text-gray-700 hover:text-blue-600 py-2 border-b border-gray-200">
                Size Charts
              </Link>
              <Link href="/stores" onClick={onClose} className="block text-sm text-gray-700 hover:text-blue-600 py-2">
                Find a Store
              </Link>
            </div>
            
            <div className="text-center pt-4 border-t border-gray-300">
              <div className="flex items-center justify-center space-x-2 text-base font-semibold text-gray-900 mb-1">
                <Phone className="w-4 h-4" />
                <span>1-800-284-3301</span>
              </div>
              <div className="text-xs text-gray-500">Mon-Fri 7AM-6PM CST</div>
            </div>
          </div>
        </div>

        {/* Submenu */}
        {activeSubmenu && (
          <div className={cn(
            "absolute top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out",
            activeSubmenu ? "translate-x-0" : "translate-x-full"
          )}>
            {/* Submenu Header */}
            <div className="flex items-center space-x-4 px-5 py-5 border-b border-gray-200 bg-gray-50">
              <button
                onClick={handleBackToMenu}
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Menu
              </button>
              <h3 className="text-lg font-semibold text-gray-900">{activeSubmenu}</h3>
            </div>

            {/* Submenu Content */}
            <div className="px-5 py-5">
              {mobileMenuSections
                .find(section => section.name === activeSubmenu)
                ?.submenu?.groups.map((group, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      {group.title}
                    </h4>
                    <div className="space-y-2">
                      {group.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          onClick={onClose}
                          className={cn(
                            "block text-sm text-gray-600 hover:text-blue-600 transition-colors py-2",
                            link.isViewAll && "font-semibold text-blue-600 mt-2"
                          )}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

              {/* Featured Section */}
              {mobileMenuSections
                .find(section => section.name === activeSubmenu)
                ?.submenu?.featured && (
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="w-full h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded mb-3 flex items-center justify-center">
                      <span className="text-3xl">👗</span>
                    </div>
                    <h5 className="font-semibold text-sm text-gray-900 mb-1">
                      {mobileMenuSections.find(section => section.name === activeSubmenu)?.submenu?.featured?.title}
                    </h5>
                    <p className="text-xs text-gray-600 mb-3">
                      {mobileMenuSections.find(section => section.name === activeSubmenu)?.submenu?.featured?.description}
                    </p>
                    <Link
                      href={mobileMenuSections.find(section => section.name === activeSubmenu)?.submenu?.featured?.ctaLink || '#'}
                      onClick={onClose}
                      className="inline-block bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      {mobileMenuSections.find(section => section.name === activeSubmenu)?.submenu?.featured?.ctaText}
                    </Link>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}