"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
    <section className="py-16 container mx-auto px-6 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
          Our Unique Tea Blends
        </h2>
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        grabCursor={true}
        navigation={false} // Add this for arrows
        breakpoints={{
          // When window width is >= 640px (Tablets)
          640: {
            slidesPerView: 2,
          },
          // When window width is >= 1024px (Desktop)
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {teaData.map((tea) => (
          <SwiperSlide key={tea.id}>
            <div className="group cursor-pointer flex flex-col p-4">
              {/* Image Container */}
              <div className="rounded-sm overflow-hidden mb-4 relative aspect-square w-full">
                <Image
                  src={tea.image}
                  alt={tea.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Label */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#D4AF37] rounded-sm"></span>
                <p className="text-gray-700 font-medium tracking-wide">
                  {tea.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeaBlendsSection;