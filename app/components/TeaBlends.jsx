"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const teaData = [
  {
    id: 1,
    name: "Cardamom Tea Flavor",
    image: "/Images/m1.webp",
    price: "₹299",
    oldPrice: "₹399",
    sizes: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 2,
    name: "Ginger Tea Flavor",
    image: "/Images/m4.webp",
    price: "₹249",
    oldPrice: "₹349",
    sizes: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 3,
    name: "Lemon Tea Flavor",
    image: "/Images/m3.webp",
    price: "₹279",
    oldPrice: "₹379",
    sizes: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: 4,
    name: "Premium Masala Tea",
    image: "/Images/m2.webp",
    price: "₹349",
    oldPrice: "₹449",
    sizes: ["100g", "250g", "500g", "1kg"],
  },
];

const TeaBlendsSection = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleSizeChange = (id, value) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleWishlistToggle = (id) => {
    setWishlistItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative px-4 md:px-12 xl:px-72 py-24 overflow-hidden">
      <div className="w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl xl:text-3xl font-light uppercase tracking-widest mb-4 flex items-center justify-center gap-4">
            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30"></span>
            Our Unique Tea Blends
            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30"></span>
          </h2>

          <div className="w-2 h-2 bg-[#8B5A2B] rotate-45 mx-auto mb-4" />

          <p className="max-w-xl mx-auto text-sm text-gray-600 lg:uppercase tracking-wider leading-relaxed">
            Crafted with premium tea leaves and authentic Indian spices for a
            rich and soulful chai experience.
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 xl:gap-12">
          {teaData.map((tea) => {
            const isWishlisted = wishlistItems.includes(tea.id);

            return (
        <div
  key={tea.id}
  className="group w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px] cursor-pointer"
>
  <div className="relative h-full shadow-sm rounded-xl overflow-hidden p-3 sm:p-4 transition-all duration-500 hover:shadow-xl bg-white">
    {/* Wishlist */}
    <button
      type="button"
      onClick={() => handleWishlistToggle(tea.id)}
      className={`absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center transition-all duration-300 ${
        isWishlisted
          ? "text-red-600"
          : "text-[#3A2A21] hover:bg-[#3A2A21] hover:text-white"
      }`}
      aria-label="Add to Wishlist"
    >
      {isWishlisted ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
    </button>

    {/* Image */}
    <div className="relative w-full aspect-square mb-4 sm:mb-5">
      <Image
        src={tea.image}
        alt={tea.name}
        fill
        sizes="(max-width: 480px) 50vw, (max-width: 1024px) 50vw, 25vw"
        className="object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Details */}
    <div className="space-y-3 sm:space-y-4">
      <div className="flex flex-col gap-3">
        <div className="min-w-0">
          <h3 className="text-[#3A2A21] text-base font-semibold leading-snug line-clamp-1">
            {tea.name}
          </h3>

         <div className="flex items-center justify-between py-2">
       <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
            <span className="text-[#3A2A21] text-base sm:text-lg font-semibold">
              {tea.price}
            </span>

            <span className="text-[#3A2A21]/60 text-base line-through">
              {tea.oldPrice}
            </span>
          </div>
                  {/* Packet Size */}
        <div className="relative w-fit">
          <select
            value={selectedSizes[tea.id] || tea.sizes[0]}
            onChange={(e) => handleSizeChange(tea.id, e.target.value)}
            className="w-full appearance-none border border-[#3A2A21] text-[#3A2A21] text-xs sm:text-sm px-3 py-2 pr-8 rounded-md outline-none cursor-pointer bg-white"
          >
            {tea.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <IoIosArrowDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#3A2A21] pointer-events-none text-sm" />
        </div>
   </div> 

        </div>


      </div>

      {/* Add To Cart */}
      <button
        type="button"
        className="w-full border border-[#3A2A21] text-[#3A2A21] text-sm sm:text-base py-2 sm:py-2.5 rounded-md hover:bg-[#3A2A21] transition-all hover:text-white duration-300"
      >
        + Add To Cart
      </button>
    </div>
  </div>
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeaBlendsSection;