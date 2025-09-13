import Image from 'next/image';

const categories = [
  {
    imageSrc: 'https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw1854bc2e/2536_0902_EspotLayer/Espot_1_desk_asset.jpg',
    imageAlt: 'Model wearing an orange scrub jacket',
    label: 'SHOP JACKETS',
    href: 'https://www.uniformadvantage.com/ladies-uniforms/women-all-jackets/?icid=home~position_09~layering~jackets~module~uals_2536_0902~~evergreen',
  },
  {
    imageSrc: 'https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dwfdb4a5f4/2536_0902_EspotLayer/Espot_2_desk_asset.jpg',
    imageAlt: 'Model wearing a blue underscrub with a stethoscope',
    label: 'SHOP UNDERSCRUBS',
    href: 'https://www.uniformadvantage.com/ladies-uniforms/women-all-tops/knit-scrubs/?icid=home~position_09~layering~underscrubs~module~uals_2536_0902~~evergreen',
  },
  {
    imageSrc: 'https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dwcd5fbd03/2536_0902_EspotLayer/Espot_3_desk_asset.jpg',
    imageAlt: 'Model wearing a green scrub vest',
    label: 'SHOP VESTS',
    href: 'https://www.uniformadvantage.com/ladies-uniforms/women-all-jackets/ladies-scrub-vests/?icid=home~position_09~layering~vests~module~uals_2536_0902~~evergreen',
  },
];

const ComfortLayering = () => {
    return (
        <section className="bg-[#f8f8f8] py-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center mb-[30px]">
                    <h2 className="text-2xl font-normal uppercase text-foreground">
                        Comfort in Every Layer
                    </h2>
                    <a
                        href="https://www.uniformadvantage.com/layering-shop/?icid=home~position_09~layering~shop-all~cta~uals_2536_0902~~evergreen"
                        className="ml-2.5 text-[13px] font-bold uppercase tracking-[1.3px] text-[#7b7b7b] underline whitespace-nowrap"
                    >
                        SHOP NOW
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-8 md:gap-y-0">
                    {categories.map((category) => (
                        <div key={category.label} className="text-center">
                            <a href={category.href}>
                                <Image
                                    src={category.imageSrc}
                                    alt={category.imageAlt}
                                    width={380}
                                    height={507}
                                    className="w-full h-auto"
                                />
                            </a>
                            <div className="pt-2.5">
                                <a
                                    href={category.href}
                                    className="text-[13px] font-bold uppercase tracking-[1.3px] text-foreground underline"
                                >
                                    {category.label}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComfortLayering;