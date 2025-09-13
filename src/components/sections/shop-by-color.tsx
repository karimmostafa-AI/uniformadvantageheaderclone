"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const colorData = [
  {
    title: "TEA ROSE",
    discount: "20% OFF",
    badge: "NEW + LIMITED",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatAB_2.5p_img2_TeaRose_mobi_asset-16.jpg",
    href: "#",
  },
  {
    title: "SOFT CHESTNUT",
    discount: "20% OFF",
    badge: "NEW + LIMITED",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatAB_2.5p_img1_SoftChestnut_mobi_asset-17.jpg",
    href: "#",
  },
  {
    title: "DARK MOSS",
    discount: "20% OFF",
    badge: "NEW + LIMITED",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatAB_2.5p_img2_DarkMoss_mobi_asset-18.jpg",
    href: "#",
  },
  {
    title: "NAVYS",
    discount: null,
    badge: null,
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatAB_2.5p_img3_Navys_mobi_asset-19.jpg",
    href: "#",
  },
  {
    title: "BLACK",
    discount: null,
    badge: null,
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatAB_2.5p_img5_Blues_mobi_asset-21.jpg",
    href: "#",
  },
  {
    title: "TEA ROSE",
    discount: "20% OFF",
    badge: "NEW + LIMITED",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/images/TCatAB_2.5p_img2_TeaRose_mobi_asset-16.jpg",
    href: "#",
  },
];

export default function ShopByColor() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-secondary py-16 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-foreground uppercase tracking-wider mb-10">
          Shop By Color
        </h2>
        
        <Carousel 
          opts={{ align: "start", loop: true }}
          setApi={setApi} 
          className="w-full relative group"
        >
          <CarouselContent className="-ml-4">
            {colorData.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-[45%] sm:basis-1/3 lg:basis-1/5">
                <a href={item.href} className="block group overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    
                    {item.badge && (
                      <div className="absolute top-3 left-3 bg-black text-white text-[10px] sm:text-[11px] font-bold uppercase px-2 py-1 leading-tight">
                        {item.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="font-semibold text-sm uppercase tracking-wide">{item.title}</p>
                      {item.discount && (
                        <p className="text-sm uppercase font-semibold">{item.discount}</p>
                      )}
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-9 h-9 border-none opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden hidden md:flex items-center justify-center -mr-2" />
        </Carousel>

        <div className="flex justify-center items-center gap-x-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                current === index ? 'bg-zinc-800' : 'bg-transparent border border-zinc-400'
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}