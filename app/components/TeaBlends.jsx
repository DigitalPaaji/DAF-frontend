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
      <div className="max-w-5xl mx-auto px-6">
        
   

         <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-2xl xl:text-3xl font-light uppercase tracking-widest mb-4 flex items-center justify-center gap-4">
            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30"></span>
              Our Unique Tea Blends
            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30"></span>
          </h2>
          <div className="w-2 h-2 bg-[#8B5A2B] rotate-45 mx-auto mb-4" /> 
          <p className="max-w-xl mx-auto text-sm text-gray-600 lg:uppercase tracking-wider leading-relaxed">
                         Crafted with premium tea leaves and authentic Indian spices for
              a rich and soulful chai experience.
          </p>
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
               
                  <p className="text-[#312A26] text-base font-semibold tracking-wide group-hover:text-[#8B5A2B] transition-colors duration-300 mx-auto uppercase">
                    {tea.name}
                  </p>
          
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeaBlendsSection;