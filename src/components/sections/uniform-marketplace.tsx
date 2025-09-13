"use client";

import { useState } from 'react';
import Link from 'next/link';

interface Category {
  name: string;
  href: string;
}

const womenCategories: Category[] = [
  { name: "Tops", href: "https://www.uniformadvantage.com/ladies-uniforms/women-all-tops/?icid=home~position_13~uniform_marketplace_women~wmns_solid_tops~module~uals_2536_0902~~evergreen" },
  { name: "Pants", href: "https://www.uniformadvantage.com/ladies-uniforms/women-all-pants/?icid=home~position_13~uniform_marketplace_women~wmns_pants~module~uals_2536_0902~~evergreen" },
  { name: "Jackets", href: "https://www.uniformadvantage.com/ladies-uniforms/women-all-jackets/?icid=home~position_13~uniform_marketplace_women~wmns_jackets~module~uals_2536_0902~~evergreen" },
  { name: "Prints", href: "https://www.uniformadvantage.com/ladies-uniforms/women-all-tops/women-print-tops/?icid=home~position_13~uniform_marketplace_women~wmns_print_tops~module~uals_2536_0902~~evergreen" },
  { name: "Underscrubs", href: "https://www.uniformadvantage.com/ladies-uniforms/women-all-tops/knit-scrubs/?icid=home~position_13~uniform_marketplace_women~womens_underscrubs~module~uals_2536_0902~~evergreen" },
  { name: "Footwear", href: "https://www.uniformadvantage.com/all-shoes/?icid=home~position_13~uniform_marketplace_women~wmns_shoes~module~uals_2536_0902~~evergreen" },
];

const menCategories: Category[] = [
  { name: "Tops", href: "https://www.uniformadvantage.com/mens_view-all/mens_view-all-link/men-solid-tops/?icid=home~position_13~uniform_marketplace_men~mens_solid_tops~module~uals_2536_0902~~evergreen" },
  { name: "Pants", href: "https://www.uniformadvantage.com/mens_view-all/mens_view-all-link/men-all-pants/?icid=home~position_13~uniform_marketplace_men~mens_pants~module~uals_2536_0902~~evergreen" },
  { name: "Jackets", href: "https://www.uniformadvantage.com/mens_view-all/mens_view-all-link/mens-scrub-jackets/?icid=home~position_13~uniform_marketplace_men~mens_jacket~module~uals_2536_0902~~evergreen" },
  { name: "Littmann®\n\nStethoscopes", href: "https://www.uniformadvantage.com/all-accessories/stethoscopes-view-all/?icid=home~position_13~uniform_marketplace_men~stethoscopes~module~uals_2536_0902~~evergreen" },
  { name: "Underscrubs", href: "https://www.uniformadvantage.com/mens_view-all/mens_view-all-link/mens-medical-tees/?icid=home~position_13~uniform_marketplace_men~mens_underscrubs~module~uals_2536_9028~~evergreen" },
  { name: "Footwear", href: "https://www.uniformadvantage.com/mens_view-all/mens_view-all-link/mens-accessories-shoes/?icid=home~position_13~uniform_marketplace_men~mens_shoes~module~uals_2536_0902~~evergreen" },
];

const UniformMarketplace = () => {
  const [activeTab, setActiveTab] = useState('women');

  const categories = activeTab === 'women' ? womenCategories : menCategories;

  return (
    <section className="bg-secondary py-[60px]">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-5/12">
            <Link
              href="https://www.uniformadvantage.com/medical-uniform-brands/?cgid=medical-uniform-brands&srule=default&prefn1=Gender&prefv1=Female%7CUnisex&icid=home~position_13~uniform_marketplace_women~womens_uniform_marketplace~module~uals_2536_0902~~evergreen"
              className="bg-black text-white p-10 h-full rounded-lg flex flex-col justify-center"
            >
              <h2 className="font-primary font-bold text-4xl lg:text-[42px] leading-tight">
                The Uniform <br /> Marketplace
              </h2>
              <p className="font-body text-base lg:text-lg mt-3">
                Great brands, styles and values. Curated for you.
              </p>
            </Link>
          </div>
          <div className="md:w-7/12">
            <div className="border-b border-border">
              <nav className="-mb-px flex space-x-6">
                <button
                  onClick={() => setActiveTab('women')}
                  className={`py-3 px-1 text-lg font-semibold transition-colors ${
                    activeTab === 'women'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  Women
                </button>
                <button
                  onClick={() => setActiveTab('men')}
                  className={`py-3 px-1 text-lg font-semibold transition-colors ${
                    activeTab === 'men'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  Men
                </button>
              </nav>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {categories.map((category) => (
                <Link
                  href={category.href}
                  key={category.name}
                  className="bg-background rounded-md h-[130px] p-4 flex items-center justify-center text-center font-semibold text-foreground hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="whitespace-pre-line leading-snug">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniformMarketplace;