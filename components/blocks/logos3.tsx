"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Confiado por estas empresas",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "/src/public/img/img1.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "/src/public/img/img2.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "/src/public/img/img3.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "/src/public/img/img4.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "/src/public/img/img5.svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "/src/public/img/img6 .svg",
      className: "h-24 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "/src/public/img/img7.svg",
      className: "h-24 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-gray-900 lg:text-3xl">
          {heading}
        </h2>
      </div>
      <div className="pt-10">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-7xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1.5 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center h-32 w-full bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };