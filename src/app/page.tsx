import React from 'react';
import Header from '@/components/sections/header';
import HeroBanner from '@/components/sections/hero-banner';
import ProductCarousel from '@/components/sections/product-carousel';
import ShopByColor from '@/components/sections/shop-by-color';
import SpotlightSale from '@/components/sections/spotlight-sale';
import ComfortLayering from '@/components/sections/comfort-layering';
import UniformMarketplace from '@/components/sections/uniform-marketplace';
import CustomerGallery from '@/components/sections/customer-gallery';
import MainContentDescription from '@/components/sections/main-content-description';
import PromotionalCards from '@/components/sections/promotional-cards';
import Footer from '@/components/sections/footer';
import EmailSignupModal from '@/components/sections/email-signup-modal';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="maincontent" className="flex-1">
        <HeroBanner />
        <ProductCarousel />
        <ShopByColor />
        <SpotlightSale />
        <ComfortLayering />
        <UniformMarketplace />
        <CustomerGallery />
        <MainContentDescription />
        <PromotionalCards />
      </main>

      <Footer />
      <EmailSignupModal />
    </div>
  );
}