"use client";

import * as React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/MBB_ColorDrop2Hero_mobi_asset-1.jpg",
    contentAlign: "center",
    content: (
      <>
        <h1 className="font-primary text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white uppercase">
          Echoes of Autumn
        </h1>
        <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white -mt-2 md:-mt-4 uppercase">
          Color Drop
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-white mt-4">20% OFF</p>
        <p className="text-white text-base md:text-lg mt-2 font-body">
          Select Styles in Soft Chestnut, Tea Rose & Dark Moss
        </p>
        <Link href="#" passHref>
          <Button
            variant="default"
            className="mt-6 bg-white text-black hover:bg-gray-200 font-semibold text-sm px-8 py-3 h-auto rounded-md"
          >
            SHOP SALE
          </Button>
        </Link>
      </>
    ),
  },
  {
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/T1_img1_Hyp_mobi_asset_A-2.jpg",
    contentAlign: "left",
    content: (
      <>
        <h2 className="text-white font-bold text-5xl md:text-7xl tracking-[0.2em] uppercase">
          Hypothesis
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-white mt-4">20% OFF*</p>
        <p className="text-white text-base md:text-lg mt-2 font-body">Select styles</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              className="mt-6 bg-white text-black hover:bg-gray-200 font-semibold text-sm px-8 py-3 h-auto rounded-md"
            >
              Shop Now
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white rounded-md mt-1 w-48 border-border">
            <DropdownMenuItem asChild>
              <Link href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent cursor-pointer">Shop All</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent cursor-pointer">Shop Women</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent cursor-pointer">Shop Men</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    ),
  },
  {
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/T1_img2_Hyp_mobi_asset_A-3.jpg",
    contentAlign: "center",
    content: (
      <>
        <h2 className="text-white font-bold text-6xl md:text-7xl tracking-wider uppercase">
          ReSurge
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-white mt-4">20% OFF</p>
        <p className="text-white text-base md:text-lg mt-2 font-body">
          Earth-friendly scrubs. Effortless style.
        </p>
        <Link href="#" passHref>
          <Button
            variant="default"
            className="mt-6 bg-white text-black hover:bg-gray-200 font-semibold text-sm px-8 py-3 h-auto rounded-md"
          >
            SHOP NOW
          </Button>
        </Link>
      </>
    ),
  },
];

export default function HeroBanner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="relative w-full" aria-label="Hero Carousel">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div
                className="w-full h-[65vh] md:h-[85vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
                aria-label={index === 0 ? "Echoes of Autumn promotion" : index === 1 ? "Hypothesis promotion" : "Resurge promotion"}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="relative h-full w-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div
                    className={`flex flex-col text-white w-full ${
                      slide.contentAlign === "center"
                        ? "items-center text-center"
                        : "items-start text-left"
                    }`}
                  >
                    {slide.content}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              current === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}