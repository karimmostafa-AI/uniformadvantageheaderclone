import React from 'react';
import BrandBar from '@/components/sections/brand-bar';
import Header from '@/components/sections/header';
import PromotionalBanners from '@/components/sections/promotional-banners';
import HeroSections from '@/components/sections/hero-sections';
import ShopByColor from '@/components/sections/shop-by-color';
import SpotlightSale from '@/components/sections/spotlight-sale';
import ElevatedLayering from '@/components/sections/elevated-layering';
import PrintsHeadquarters from '@/components/sections/prints-headquarters';
import UniformMarketplace from '@/components/sections/uniform-marketplace';
import EmbroiderySection from '@/components/sections/embroidery-section';
import SocialSection from '@/components/sections/social-section';
import MainContentDescription from '@/components/sections/main-content-description';
import PromotionalCards from '@/components/sections/promotional-cards';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content link */}
      <a href="#maincontent" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
        Skip to main content
      </a>
      <a href="#footercontent" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-12 bg-blue-600 text-white p-2 z-50">
        Skip to footer content
      </a>
      
      {/* Top Brand Bar with Utility Navigation */}
      <BrandBar />
      
      {/* Main Header */}
      <Header />
      
      {/* Promotional Banners */}
      <PromotionalBanners />
      
      <main id="maincontent" className="flex-1">
        {/* Hero Sections */}
        <HeroSections />
        
        {/* Shop by Color */}
        <ShopByColor />
        
        {/* Spotlight Sale */}
        <SpotlightSale />
        
        {/* Elevated Layering */}
        <ElevatedLayering />
        
        {/* Prints Headquarters */}
        <PrintsHeadquarters />
        
        {/* Uniform Marketplace */}
        <UniformMarketplace />
        
        {/* Embroidery Section */}
        <EmbroiderySection />
        
        {/* Social Section */}
        <SocialSection />
        
        {/* Main Content Description */}
        <MainContentDescription />
      </main>
      
      {/* Promotional Cards */}
      <PromotionalCards />

      {/* Footer */}
      <Footer id="footercontent" />
    </div>
  );
}
