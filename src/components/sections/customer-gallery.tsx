"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const customerImages = [
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw10d32159/images/homepage/customer-submitted/BS_customer_3.jpg", alt: "Customer in green scrubs" },
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dwfd8db4bd/images/homepage/customer-submitted/BS_customer_5.jpg", alt: "Customer in pink scrubs" },
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dwcd5f5195/images/homepage/customer-submitted/HH_customer_4.jpg", alt: "Customer in dark blue scrubs" },
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw83733075/images/homepage/customer-submitted/HYP_customer_2.jpg", alt: "Customer in blue patterned scrubs" },
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw7da2844a/images/homepage/customer-submitted/ES_customer_1.jpg", alt: "Customer in dark green scrubs outdoors" },
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dwa08d7261/images/homepage/customer-submitted/HH_customer_3.jpg", alt: "Customer in light blue scrubs" },
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw85a2d043/images/homepage/customer-submitted/HYP_customer_1.jpg", alt: "Customer in dark green scrubs" },
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw9e30a51c/images/homepage/customer-submitted/ES_customer_2.jpg", alt: "Customer in teal scrubs" },
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dwa0167f56/images/homepage/customer-submitted/BS_customer_2.jpg", alt: "Customer in dark olive scrubs" },
  { src: "https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw8f070c06/images/homepage/customer-submitted/ua_customer_1.jpg", alt: "Customer in light blue scrubs by the water" },
];

const CustomerGallery = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = useCallback(() => {
        const el = scrollContainerRef.current;
        if (el) {
            const { scrollLeft, scrollWidth, clientWidth } = el;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    }, []);

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (el) {
            checkScrollability();
            el.addEventListener('scroll', checkScrollability, { passive: true });
            
            const resizeObserver = new ResizeObserver(checkScrollability);
            resizeObserver.observe(el);
            
            return () => {
                el.removeEventListener('scroll', checkScrollability);
                resizeObserver.unobserve(el);
            };
        }
    }, [checkScrollability]);
    
    const scroll = (direction: 'left' | 'right') => {
        const el = scrollContainerRef.current;
        if (el) {
            const scrollAmount = el.clientWidth * 0.8;
            el.scrollBy({ 
                left: direction === 'left' ? -scrollAmount : scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };
    
    return (
        <section className="bg-secondary py-14">
            <div className="container mx-auto relative">
                {canScrollLeft && (
                     <button
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 transition-colors"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                )}

                <div 
                    ref={scrollContainerRef}
                    className="flex items-center gap-5 overflow-x-auto scroll-smooth pb-1 scrollbar-hide px-2"
                >
                    {customerImages.map((image, index) => (
                        <a href="#" key={index} className="flex-shrink-0 block w-[230px] h-[230px]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>

                {canScrollRight && (
                    <button
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 transition-colors"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                )}
            </div>
        </section>
    );
};

export default CustomerGallery;