"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSelector } from "react-redux";
import { img_url } from "./Store/utils";

const INITIAL_COUNT = 4;
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CategoryCarousel = () => {
const {categories = [],error,loading} = useSelector((state) => state.categories);
 



  return (
    <section className="relative py-20 text-[#312A26] font-sans overflow-hidden">
      <div className="px-4 md:px-12 lg:px-24 xl:px-40 mx-auto">
        {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl xl:text-3xl font-light uppercase md:tracking-widest mb-4 flex items-center justify-center gap-3 md:gap-4">
            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30" />
            <span>Explore Our Categories</span>
            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30" />
          </h2>

          <div className="w-2 h-2 bg-[#8B5A2B] rotate-45 mx-auto mb-4" />

          <p className="max-w-2xl mx-auto text-sm text-gray-600 md:uppercase tracking-wide md:tracking-wider leading-6 md:leading-relaxed">
            Discover our complete range of tea blends, kitchen masalas, pickle
            masalas, flours, pure spices, pickles and ready-to-use tadka gravies
            crafted for authentic Indian taste.
          </p>
        </div>

           {loading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: INITIAL_COUNT }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="aspect-square bg-[#f1e9e5]" />

              <div className="flex justify-center py-5">
                <div className="h-5 w-28 rounded-full bg-[#f1e9e5]" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {!loading && error && (
        <div className="rounded-2xl border border-red-100  px-6 py-10 text-center">
          <p className="font-p text-base font-medium text-red-600">
            {typeof error === "string"
              ? error
              : "Failed to load collections."}
          </p>
        </div>
      )}

        {!loading && !error && categories.length === 0 && (
        <div className="rounded-2xl bg-[#f8f4f1] px-6 py-14 text-center">
          <p className="font-p text-lg font-medium text-p">
            No collections are available.
          </p>
        </div>
      )}


        {!loading && !error && categories.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-12"
        >
          {categories?.map((item) => (
            <motion.div
              key={item._id}
              variants={itemVariants}
              className="w-[145px] sm:w-[170px] md:w-[190px]"
            >
              <Link
                href={`/products?category=${item.slug}`}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                <div className="p-1.5 rounded-full border-2 border-transparent group-hover:border-[#9C6B44] transition-colors duration-500 mb-4">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 overflow-hidden rounded-full  shadow-md">
                    <div className="absolute inset-0 rounded-full shadow-inner z-10 pointer-events-none" />

                    <img
                      src={`${img_url}${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-0" />
                  </div>
                </div>

                <h3
                  className="text-sm md:text-base font-bold uppercase tracking-wider text-[#3A2A21] group-hover:text-[#9C6B44] transition-colors duration-300 px-2 leading-snug"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {item.name}
                </h3>

                <p className="text-xs text-gray-500 mt-2 tracking-wide uppercase">
                  {item?.product?.length}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
)}
      </div>
    </section>
  );
};

export default CategoryCarousel;