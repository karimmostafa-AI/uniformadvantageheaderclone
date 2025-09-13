import React from 'react';

const promotionalData = [
  {
    title: "Buy Now Pay Later",
    linkText: "Learn More",
    href: "https://www.uniformadvantage.com/faqs.html?c=paypal",
  },
  {
    title: "Visit Our Stores Near You",
    linkText: "Store Locator",
    href: "https://www.uniformadvantage.com/stores/",
  },
  {
    title: "Group Orders",
    linkText: "Learn More",
    href: "https://www.uniformadvantage.com/group-order/?lang=en",
  },
  {
    title: "Shop Our Catalog",
    linkText: "browse catalog",
    href: "https://issuu.com/uniformadvantage1/docs/ua_266_non_sale_digital_catalog?fr=xKAE9_zMzMw",
  },
];

const PromotionalCards = () => {
  return (
    <section className="bg-[#941a2f] text-white py-10 font-primary">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {promotionalData.map((item) => (
            <div
              key={item.title}
              className="
                w-1/2 md:w-1/4 
                text-center 
                px-4 
                border-white/50
                max-md:odd:border-r
                max-md:[&:nth-child(n+3)]:border-t
                max-md:[&:nth-child(n+3)]:mt-2.5
                max-md:[&:nth-child(n+3)]:pt-2.5
                md:[&:not(:last-child)]:border-r
              "
            >
              <h4 className="font-bold text-base leading-tight mb-2 h-14 flex items-center justify-center">
                {item.title}
              </h4>
              <a href={item.href} className="font-medium text-[11px] tracking-wider uppercase hover:underline">
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalCards;