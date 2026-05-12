"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const teaData = [
  { id: 1, name: "Cardamom", image: "/Images/m1.webp" },
  { id: 2, name: "Kashmiri Kahwa", image: "/Images/m2.webp" },
  { id: 3, name: "Lemon Grass", image: "/Images/m3.webp" },
  { id: 4, name: "Ginger", image: "/Images/m4.webp" },
  { id: 5, name: "Cardamom", image: "/Images/m1.webp" },
  { id: 6, name: "Kashmiri Kahwa", image: "/Images/m2.webp" },
  { id: 7, name: "Lemon Grass", image: "/Images/m3.webp" },
  { id: 8, name: "Ginger", image: "/Images/m4.webp" },
];

const TeaBlendsSection = () => {
  return (
    <section className="relative py-20  overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between text-center w-full mb-12">
          <div>
         <h2 className="text-xl md:text-4xl font-light uppercase tracking-wide                                               mb-4 flex items-center justify-center gap-4">
         Our Unique Tea Blends
          </h2>
          {/* <h2 className="text-xl sm:text-2xl md:text-4xl uppercase font-normal">
             
              Our Unique Tea Blends
            </h2> */}

            <p className="text-sm text-gray-500 mt-4 max-w-xl">
              Crafted with premium tea leaves and authentic Indian spices for
              a rich and soulful chai experience.
            </p>
          </div>

          {/* Custom Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button className="tea-prev w-11 h-11 rounded-full border border-[#8B5A2B]/30 flex items-center justify-center hover:bg-[#8B5A2B] hover:text-white transition-all duration-300 text-[#312A26]">
              <ChevronLeft size={20} />
            </button>

            <button className="tea-next w-11 h-11 rounded-full border border-[#8B5A2B]/30 flex items-center justify-center hover:bg-[#8B5A2B] hover:text-white transition-all duration-300 text-[#312A26]">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".tea-prev",
            nextEl: ".tea-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="w-full"
        >
          {teaData.map((tea) => (
            <SwiperSlide key={tea.id}>
              <div className="group cursor-pointer flex flex-col p-4">
                
                {/* Image */}
                <div className="rounded-sm overflow-hidden mb-5 relative aspect-square w-full">
                  <Image
                    src={tea.image}
                    alt={tea.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#8B5A2B] rotate-45 shrink-0"></span>

                  <p className="text-[#312A26] text-base font-semibold tracking-wide group-hover:text-[#8B5A2B] transition-colors duration-300">
                    {tea.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeaBlendsSection;