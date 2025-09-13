"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, User, ShoppingBag, ChevronDown, ChevronRight, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const brandLogos = [
  { name: "Butter Soft", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/svgs/Butter-Soft-logo-BW.svg", href: "#", width: 69, height: 10 },
  { name: "Easy Stretch", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/svgs/EasyStretch-logo-BW.svg", href: "#", width: 55, height: 25 },
  { name: "Hypothesis", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/svgs/HYPOTHESIS_logo-BW-3.svg", href: "#", width: 83, height: 11 },
  { name: "ReSurge", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/svgs/ReSurge-logo-BW-4.svg", href: "#", width: 89, height: 14 },
  { name: "Whisperlite", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/svgs/WhisperLite-logo-BW-5.svg", href: "#", width: 97, height: 9 }
];

const promotions = [
  { text: "20% off Spotlight Sale", details: "Healing Hands, Butter-Soft & more, ends 9/15/25", href: "#", bg: "bg-[#71715f]" },
  { text: "20% off Echoes of Autumn Color Drop", details: "Ends 9/15/25", href: "#", bg: "bg-[#87786b]" },
  { text: "Up to 50% off Great Deals", details: "While Supplies Last", href: "#", bg: "bg-[#556678]" },
  { text: "20% off NEW Fall Prints", details: "Including the Halloween Shop, ends 9/15/25", href: "#", bg: "bg-[#8a6e7e]" },
];

const womenNav = {
    "Shop All Women's Scrubs": "#",
    "Tops": { "View All Tops": "#", "Solid Tops": "#", "Solid Fashion Tops": "#", "Print Tops": "#", "Tuck In Tops": "#", "Underscrubs": "#", "Scrub Hoodies": "#", "Crew Neck Tops": "#", "3/4 Sleeve Tops": "#" },
    "Pants": { "View All Pants": "#", "Regular Pants": "#", "Petite Pants": "#", "Tall Pants": "#", "Cargo Pants": "#", "Jogger Pants": "#", "Wide Leg Pants": "#", "Yoga Pants": "#", "Flare Pants": "#", "Skirts": "#" },
    "Jackets": { "View All Jackets": "#", "Solid Jackets": "#", "Knit Jackets": "#", "Print Jackets": "#", "Scrub Hoodies": "#", "Fleece Jackets": "#", "Lab Coats": "#", "Vests": "#" },
    "Special Sizes": { "Petite Scrubs": "#", "Plus Size Scrubs": "#", "Tall Scrubs": "#", "Maternity Scrubs": "#" },
    "Scrub Sets": "#",
    "Jumpsuit Scrubs": "#",
    "Footwear": { "Athletic Shoes": "#", "Nursing Clogs": "#" },
};

const navigationLinks = [
  { title: "Women", href: "#", content: womenNav },
  { title: "Men", href: "#" },
  { title: "Brands", href: "#" },
  { title: "UA Scrubs", href: "#" },
  { title: "Colors", href: "#" },
  { title: "Prints", href: "#" },
  { title: "Footwear", href: "#" },
  { title: "Accessories", href: "#" },
  { title: "New & Trending", href: "#" },
  { title: "Sale", href: "#", className: "text-red-500 hover:text-red-600" },
];

const TopBar = () => (
    <div className="bg-black text-white hidden md:block">
        <div className="container mx-auto px-4 h-[45px] flex items-center justify-between">
            <div className="flex items-center space-x-6">
                {brandLogos.map((logo) => (
                    <a href={logo.href} key={logo.name} className="flex items-center justify-center h-full">
                        <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} className="h-auto object-contain brightness-0 invert" />
                    </a>
                ))}
            </div>
            <div className="flex items-center text-xs text-stone-300 font-sans">
                <div className="flex items-center">
                    <span>Ship to:</span>
                    <button className="flex items-center ml-2 text-stone-300 hover:text-white">
                        <span className="text-lg">🇺🇸</span>
                        <span className="ml-1">United States</span>
                    </button>
                    <span className="mx-2">|</span>
                    <a href="#" className="hover:text-white">Español</a>
                </div>
                <a href="#" className="ml-6 hover:text-white">Groups</a>
                <a href="#" className="ml-6 hover:text-white">Store Locator</a>
                <a href="#" className="ml-6 hover:text-white">Tracking</a>
                <a href="#" className="ml-6 hover:text-white">Help</a>
            </div>
        </div>
    </div>
);

const PromotionalBanners = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!show) return;
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % promotions.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [show]);

    if (!show) return null;

    return (
        <div style={{ backgroundColor: promotions[activeIndex].bg }} className="text-white relative transition-colors duration-500">
            <div className="container mx-auto px-4 h-10 flex items-center justify-center text-center text-sm font-sans">
                <a href={promotions[activeIndex].href} className="flex-grow no-underline hover:no-underline">
                    <strong className="font-semibold">{promotions[activeIndex].text}</strong>
                    <span className="hidden md:inline ml-2">{promotions[activeIndex].details}</span>
                </a>
                <button onClick={onClose} aria-label="Close promotional banner" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showPromo, setShowPromo] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const memoizedHeaderHeight = useMemo(() => headerHeight, [headerHeight]);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                setIsSticky(window.scrollY > headerRef.current.offsetTop);
            }
        };

        if (headerRef.current) {
          setHeaderHeight(headerRef.current.offsetHeight);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <a href="#maincontent" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:p-4">Skip to main content</a>
            <TopBar />
            
            {isSticky && <div style={{ height: memoizedHeaderHeight }} />}
            
            <div
                ref={headerRef}
                className={cn(
                    "bg-white w-full transition-all duration-300",
                    isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : 'relative'
                )}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-[88px]">
                        <div className="flex items-center">
                            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="lg:hidden mr-2" aria-label="Toggle navigation">
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[320px] p-0">
                                    <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
                                       <SheetClose asChild>
                                            <Button variant="ghost" size="sm">
                                                <X className="h-5 w-5 mr-1"/> Close
                                            </Button>
                                        </SheetClose>
                                    </SheetHeader>
                                    <div className="p-4">
                                        <Accordion type="single" collapsible className="w-full">
                                            {navigationLinks.map(link => (
                                                <AccordionItem value={link.title} key={link.title}>
                                                    {link.content ? (
                                                      <>
                                                        <AccordionTrigger className="font-semibold text-base no-underline hover:no-underline">{link.title}</AccordionTrigger>
                                                        <AccordionContent>
                                                            <ul className="space-y-2 pl-4">
                                                                {Object.entries(link.content).map(([subTitle, subLink]) => (
                                                                     <li key={subTitle}>
                                                                        <a href={typeof subLink === 'string' ? subLink : '#'} className="text-sm text-gray-700 hover:text-primary">{subTitle}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </AccordionContent>
                                                      </>
                                                    ) : (
                                                        <a href={link.href} className="flex w-full items-center justify-between py-4 font-semibold text-base no-underline hover:no-underline">{link.title}</a>
                                                    )}
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                        <div className="border-t mt-4 pt-4 space-y-2">
                                            <a href="#" className="flex items-center p-2 text-sm">Groups</a>
                                            <a href="#" className="flex items-center p-2 text-sm">Store Locator</a>
                                            <a href="#" className="flex items-center p-2 text-sm">Tracking</a>
                                            <a href="#" className="flex items-center p-2 text-sm">Help</a>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                            <a href="/" className="flex-shrink-0">
                                <span className="hidden md:block text-2xl lg:text-3xl font-bold tracking-tight text-gray-800 font-sans">UNIFORM ADVANTAGE</span>
                                <span className="md:hidden text-2xl font-bold text-gray-800 font-sans">UA</span>
                            </a>
                        </div>
                        
                        <div className="hidden lg:block flex-1 mx-8 max-w-xl">
                            <div className="relative">
                                <Input type="search" placeholder="Enter Keyword or Item No." className="h-11 rounded-full pl-5 pr-12 border-gray-300 focus-visible:ring-primary/50" />
                                <Button type="submit" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full" aria-label="Submit search keywords">
                                    <Search className="h-5 w-5 text-gray-500" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <Button variant="ghost" size="icon" aria-label="Search" className="lg:hidden">
                                <Search className="h-6 w-6 text-gray-700" />
                            </Button>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon" aria-label="Login to your account">
                                        <User className="h-6 w-6 text-gray-700" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-48 p-0 mt-2">
                                    <ul className="py-2 text-sm">
                                        <li><a href="#" className="block px-4 py-2 hover:bg-accent no-underline">Sign In</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-accent no-underline">Create Account | Join</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-accent no-underline">Check order status</a></li>
                                    </ul>
                                </PopoverContent>
                            </Popover>
                            <a href="#" className="relative p-2 rounded-full hover:bg-accent" aria-label="Cart 0 Items">
                                <ShoppingBag className="h-6 w-6 text-gray-700" />
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                            </a>
                        </div>
                    </div>
                </div>

                <nav className="hidden lg:flex justify-center border-t border-gray-200 h-[54px]">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigationLinks.map(link => (
                                <NavigationMenuItem key={link.title}>
                                    <NavigationMenuTrigger className={cn("text-base font-semibold bg-transparent", link.className)}>{link.title}</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {link.content && (
                                            <div className="p-6 w-[60rem] max-w-full">
                                                <div className="grid grid-cols-5 gap-x-6">
                                                    {Object.entries(link.content).map(([title, sublinks]) => (
                                                        <div key={title}>
                                                             <h3 className="font-semibold text-sm mb-3">
                                                                <a href={typeof sublinks === 'string' ? sublinks : '#'} className="hover:text-primary no-underline">{title}</a>
                                                             </h3>
                                                              {typeof sublinks === 'object' && (
                                                                <ul className="space-y-2">
                                                                    {Object.entries(sublinks).map(([subTitle, subHref]) => (
                                                                        <li key={subTitle}>
                                                                            <NavigationMenuLink asChild>
                                                                                <a href={subHref} className="text-sm text-muted-foreground hover:text-primary leading-tight no-underline">{subTitle}</a>
                                                                            </NavigationMenuLink>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
            </div>
            
            <PromotionalBanners show={showPromo} onClose={() => setShowPromo(false)} />
        </>
    );
};

export default Header;