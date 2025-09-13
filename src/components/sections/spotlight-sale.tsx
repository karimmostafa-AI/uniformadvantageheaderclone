import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Flower2 } from 'lucide-react';

interface SaleCard {
  imageSrc: string;
  altText: string;
  logoComponent: React.ReactNode;
  note: string;
  discount: string;
  discountSup: string;
  shopLinkText: string;
  shopLinkHref: string;
}

const saleItems: SaleCard[] = [
  {
    imageSrc: 'https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw5ca3a5fa/PromoCard5_asset_090925.jpg',
    altText: 'Healing Hands scrubs on sale',
    logoComponent: (
      <div className="text-center text-white">
        <div className="relative mx-auto mb-2 h-14 w-14">
          <div className="absolute inset-0 rounded-full border border-white"></div>
          <Leaf className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <p className="font-serif text-4xl leading-none">Healing Hands</p>
        <p className="mt-2 text-base tracking-wider">featuring Quest</p>
      </div>
    ),
    note: '*exclusions apply',
    discount: '20% OFF',
    discountSup: '*',
    shopLinkText: 'SHOP HEALING HANDS',
    shopLinkHref: 'https://www.uniformadvantage.com/medical-uniform-brands/healing-hands-scrubs/',
  },
  {
    imageSrc: 'https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw4e34c748/PromoCard6_asset_090925.jpg',
    altText: 'Med Couture scrubs on sale',
    logoComponent: (
      <div className="text-center text-white">
        <Flower2 strokeWidth={1} className="mx-auto h-12 w-12" />
        <p className="font-primary mt-2 text-4xl font-light tracking-[0.2em]">MEDCOUTURE</p>
        <p className="mt-2 text-base tracking-wider">featuring Amp</p>
      </div>
    ),
    note: '*exclusions apply',
    discount: '20% OFF',
    discountSup: '*',
    shopLinkText: 'SHOP MED COUTURE',
    shopLinkHref: 'https://www.uniformadvantage.com/medical-uniform-brands/peaches-med-couture/',
  },
  {
    imageSrc: 'https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw86c589bf/PromoCard5_asset_090225.jpg',
    altText: 'Butter-Soft Stretch scrubs on sale',
    logoComponent: (
      <div className="text-center text-white">
        <p className="font-serif text-5xl italic leading-tight">butter-soft</p>
        <p className="font-primary text-3xl font-light tracking-[0.4em]">Stretch</p>
      </div>
    ),
    note: '*select styles',
    discount: 'UP TO 25% OFF',
    discountSup: '*',
    shopLinkText: 'SHOP BUTTER-SOFT STRETCH',
    shopLinkHref: 'https://www.uniformadvantage.com/ua-scrubs/ua-scrub-brands/butter-soft-stretch-scrubs/',
  },
];

const SpotlightSale = () => {
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="mb-6 flex items-center justify-center text-center">
          <h2 className="font-primary text-2xl font-semibold uppercase tracking-[0.15em] text-foreground">Spotlight Sale</h2>
          <Link
            href="https://www.uniformadvantage.com/discount-scrubs/collections-on-sale/current-limited-time-sale/"
            className="ml-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground underline hover:text-primary"
          >
            Shop Now
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {saleItems.map((item, index) => (
            <Link href={item.shopLinkHref} key={index} className="group block text-decoration-none">
              <div className="relative overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  width={400}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4">
                  {item.logoComponent}
                </div>
                <p className="absolute bottom-2 right-2 text-[10px] text-white/70">{item.note}</p>
              </div>
              <div className="bg-white p-6 text-center">
                <p className="font-primary text-lg font-bold text-destructive">
                  {item.discount}
                  <sup className="text-xs font-bold">{item.discountSup}</sup>
                </p>
                <p className="mt-1 text-xs font-bold tracking-wider text-foreground underline">{item.shopLinkText}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotlightSale;