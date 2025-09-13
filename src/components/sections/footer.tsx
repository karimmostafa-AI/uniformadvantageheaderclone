"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Accessibility,
} from "lucide-react";

// Placeholder for TikTok icon as it's not available in lucide-react
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.2-1.86-6.33.32-1.45.93-2.78 1.74-3.97.6-.85 1.28-1.63 2.03-2.37.02 1.52.02 3.04.01 4.57-.56.02-1.13.06-1.69.09-1.19.06-2.39-.17-3.41-.7-1.34-.69-2.34-2-2.48-3.48-.15-1.56.51-3.15 1.74-4.27 1.1-.99 2.53-1.49 4.01-1.57.25-.01.5-.02.75-.02.01 2.38.01 4.75.01 7.13.01 1.72-.01 3.44-.01 5.16.52-.15 1.02-.34 1.52-.5.83-.26 1.6-.68 2.26-1.24.81-.69 1.37-1.64 1.73-2.65.09-.27.18-.54.26-.81 1.02-3.33 1.02-6.67 1.02-10.01z" />
  </svg>
);

interface FooterLink {
  name: string;
  href: string;
  isSale?: boolean;
}

const companyLinks: FooterLink[] = [
  { name: "About Us", href: "#" },
  { name: "A Day in Scrubs", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Store Locator", href: "#" },
  { name: "CAREERS", href: "#" },
  { name: "COLOR", href: "#" },
  { name: "PRINTS", href: "#" },
  { name: "UA Gives Back", href: "#" },
  { name: "Cookies Policy", href: "#" },
  { name: "Sustainability", href: "#" },
  { name: "Affiliate Program", href: "#" },
  { name: "Site Map", href: "#" },
  { name: "XML Site Map", href: "#" },
];

const shippingLinks: FooterLink[] = [
  { name: "Shipping: US & US Territories", href: "#" },
  { name: "Shipping: International", href: "#" },
];

const customerServiceLinks: FooterLink[] = [
  { name: "Help", href: "#" },
  { name: "Returns & Exchanges", href: "#" },
  { name: "Order Status", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Sizing Information", href: "#" },
  { name: "Gift Cards", href: "#" },
  { name: "Embroidery", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Accessibility", href: "#" },
  { name: "Do Not Sell My Information", href: "#" },
];

const groupOrderingLinks: FooterLink[] = [{ name: "Group Ordering", href: "#" }];
const studentsLinks: FooterLink[] = [{ name: "Students", href: "#" }];
const schoolGroupOrderingLinks: FooterLink[] = [{ name: "School Group Ordering", href: "#" }];

const retailLinks: FooterLink[] = [
  { name: "Find a Store", href: "#" },
  { name: "In-Store Savings", href: "#" },
  { name: "Trade in Program", href: "#" },
];

const featuredCategoriesLinks: FooterLink[] = [
  { name: "Scrubs for Women", href: "#" },
  { name: "NEW & TRENDING", href: "#" },
  { name: "Scrubs for Men", href: "#" },
  { name: "Scrubs on Sale", href: "#", isSale: true },
  { name: "Maternity Scrubs", href: "#" },
  { name: "Scrub Jumpsuits", href: "#" },
  { name: "Scrub Caps & Surgical Hats", href: "#" },
  { name: "Non Slip Shoes", href: "#" },
  { name: "Gifts for Nurses", href: "#" },
];

const FooterColumn = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <div className="mb-6">
    <h3 className="font-semibold text-sm uppercase tracking-wider text-zinc-900 mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.href} className="text-zinc-600 hover:text-primary hover:underline text-sm flex items-center">
            {link.name}
            {link.isSale && <span className="ml-2 text-xs text-white bg-red-600 px-1 py-0.5 rounded-sm">SALE</span>}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <>
      <footer id="footercontent" className="bg-[#f5f5f5] text-zinc-800 pt-16 pb-8 font-sans">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-lg font-semibold uppercase tracking-wider mb-2 text-zinc-900">Sign Up for Email & Text Messages!</h2>
              <p className="text-zinc-600 text-sm mb-6">
                Get access to exclusive offers, special deals, plus sneak previews of new products and more.
              </p>
              <form className="space-y-4 mb-6">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter Email Address"
                    className="h-12 text-sm bg-white border-zinc-300 pr-10"
                  />
                  <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10">
                    <ArrowRight className="h-5 w-5 text-zinc-500" />
                  </Button>
                </div>
                <div className="relative">
                  <Input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="h-12 text-sm bg-white border-zinc-300 pr-10"
                  />
                  <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10">
                    <ArrowRight className="h-5 w-5 text-zinc-500" />
                  </Button>
                </div>
              </form>
              <p className="text-xs text-zinc-500 mb-8">
                By subscribing to Uniform Advantage text messaging, you consent to receive recurring autodialed marketing messages to the mobile number used at opt-in. Consent is not a condition of purchase. Msg freq may vary. Msg & data rates may apply. Text STOP to 48751 to opt out. We do not rent or sell your information to any outside parties. For more information, please read our Terms of Use & Privacy.
              </p>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-zinc-900 mb-4">Get Social With Us</h3>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-zinc-700 hover:text-primary"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="text-zinc-700 hover:text-primary"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="text-zinc-700 hover:text-primary"><TikTokIcon className="w-5 h-5" /></a>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <FooterColumn title="Company" links={companyLinks} />
                  <FooterColumn title="Shipping" links={shippingLinks} />
                </div>
                <div>
                  <FooterColumn title="Customer Service" links={customerServiceLinks} />
                  <FooterColumn title="Group Ordering" links={groupOrderingLinks} />
                  <FooterColumn title="Students" links={studentsLinks} />
                  <FooterColumn title="School Group Ordering" links={schoolGroupOrderingLinks} />
                </div>
                <div>
                  <FooterColumn title="Retail" links={retailLinks} />
                </div>
                <div>
                  <FooterColumn title="Featured Categories" links={featuredCategoriesLinks} />
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-zinc-500 mt-8 lg:mt-0">
            Copyright © 2025 Zier, Inc. All Rights Reserved,{" "}
            <a href="#" className="hover:underline text-zinc-500">Privacy Policy</a>,{" "}
            <a href="#" className="hover:underline text-zinc-500">Terms of Use</a>.
          </div>
        </div>
        <div className="border-t border-zinc-200 mt-12 pt-8">
          <div className="container mx-auto px-4 flex justify-center items-center gap-x-8 md:gap-x-12 flex-wrap">
            <a href="#">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/svgs/uniform-advantage-8.svg" alt="Uniform Advantage" width={110} height={40} />
            </a>
            <a href="#">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/svgs/uniform-advantage-corporate-9.svg" alt="Uniform Advantage Corporate Solutions" width={110} height={40} />
            </a>
            <a href="#">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/svgs/chef-uniforms-10.svg" alt="Chef Uniforms" width={110} height={40} />
            </a>
          </div>
        </div>
      </footer>
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-5 right-5 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-hover-blue z-50 flex items-center justify-center"
        aria-label="Accessibility options"
      >
        <Accessibility className="h-7 w-7 text-primary-foreground" />
      </Button>
    </>
  );
};
export default Footer;