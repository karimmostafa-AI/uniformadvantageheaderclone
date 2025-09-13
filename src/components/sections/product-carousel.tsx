"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  href: string;
  imageSrc: string;
  alt: string;
  label: string;
}

const carouselItems: CarouselItem[] = [
  {
    href: "https://www.uniformadvantage.com/medical-uniform-brands/the-hypothesis-scrubs/?icid=home~position_02~main_echoes_of_autumn_color_sale~hypothesis~module~uals_2536_0902~collapsed~sale",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatE_img1_ColorDrop2_Carousel_desk_asset_B-13.jpg",
    alt: "Hypothesis Scrubs on Sale",
    label: "Hypothesis",
  },
  {
    href: "https://www.uniformadvantage.com/ua-scrubs/ua-scrub-brands/resurge-scrubs/?icid=home~position_02~main_echoes_of_autumn_color_sale~Resurge~module~uals_2536_0902~collapsed~sale",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatE_img2_ColorDrop2_Carousel_desk_asset_B-5.jpg",
    alt: "ReSurge Scrubs on Sale",
    label: "ReSurge",
  },
  {
    href: "https://www.uniformadvantage.com/ua-scrubs/ua-scrub-brands/easy-stretch-scrubs/?icid=home~position_02~main_echoes_of_autumn_color_sale~ES~module~uals_2536_0902~collapsed~sale",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatE_img3_ColorDrop2_Carousel_desk_asset_B-7.gif",
    alt: "Easy Stretch Scrubs on Sale",
    label: "Easy Stretch",
  },
  {
    href: "https://www.uniformadvantage.com/all-prints/seasonal-prints/fall-printed-scrubs/?icid=home~position_02~prints_headquarters~Prints~module~uals_2536_0902~collapsed~sale",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatE_img4_ColorDrop2_Carousel_desk_asset_B-9.jpg",
    alt: "Print Scrubs on Sale",
    label: "Fall Prints",
  },
  {
    href: "https://www.uniformadvantage.com/mens_view-all/mens-brands-a-h/hypothesis-mens-scrubs/?icid=home~position_02~main_echoes_of_autumn_color_sale~hypothesis_mens~module~uals_2536_0902~collapsed~sale",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatE_img5_ColorDrop2_Carousel_desk_asset_B-11.jpg",
    alt: "Men's Hypothesis Scrubs on Sale",
    label: "Men's Styles",
  },
];

const ProductCarousel = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8; 
      const newScrollLeft =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white w-full py-6">
      <div className="max-w-[1200px] mx-auto relative px-4">
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 -left-1 z-10 bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex items-start overflow-x-auto scroll-smooth scrollbar-hide space-x-5 px-1 py-2"
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-56">
              <a
                href={item.href}
                className="group block text-center no-underline"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={224}
                    height={224}
                    className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold tracking-wider uppercase text-foreground group-hover:text-primary group-hover:underline">
                  {item.label}
                </p>
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 -right-1 z-10 bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;