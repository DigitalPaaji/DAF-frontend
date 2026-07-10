"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Tea Masala / Spice Blends",
    image:
      "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=600&auto=format&fit=crop&q=80",
    slug: "tea-masala-spice-blends",
    count: "3 Products",
  },
  {
    id: 2,
    name: "Kitchen Masalas",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    slug: "kitchen-masalas",
    count: "18 Products",
  },
  {
    id: 3,
    name: "Pickle Masala",
    image:
      "https://images.unsplash.com/photo-1609510990459-c7e62978c76b?w=600&auto=format&fit=crop&q=80",
    slug: "pickle-masala",
    count: "10 Products",
  },
  {
    id: 4,
    name: "Flours",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    slug: "flours",
    count: "12 Products",
  },
  {
    id: 5,
    name: "Pure Spices",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&auto=format&fit=crop&q=80",
    slug: "pure-spices",
    count: "40+ Products",
  },
  {
    id: 6,
    name: "Pickles",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&auto=format&fit=crop&q=80",
    slug: "pickles",
    count: "9 Products",
  },
  {
    id: 7,
    name: "Ready To Use Tadka Gravy",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80",
    slug: "ready-to-use-tadka-gravy",
    count: "8 Products",
  },
];

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
  return (
    <section className="relative py-20 bg-[#F5F2EB] font-sans overflow-hidden">
      <div className="px-4 md:px-12 lg:px-24 xl:px-40 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-light uppercase tracking-widest mb-4 flex items-center justify-center gap-4">
            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30"></span>
            Shop by Category
            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30"></span>
          </h2>

          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9C6B44"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              <circle cx="12" cy="12" r="3" fill="#9C6B44" />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Explore our complete range of tea blends, kitchen masalas, pickle
            masalas, flours, pure spices, pickles and ready-to-use tadka gravies.
          </motion.p>
        </div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-12"
        >
          {categories.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="w-[145px] sm:w-[170px] md:w-[190px]"
            >
              <Link
                href={`/products?category=${item.slug}`}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                <div className="p-1.5 rounded-full border-2 border-transparent group-hover:border-[#9C6B44] transition-colors duration-500 mb-4">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 overflow-hidden rounded-full bg-white shadow-md">
                    <div className="absolute inset-0 rounded-full shadow-inner z-10 pointer-events-none" />

                    <img
                      src={item.image}
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
                  {item.count}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryCarousel;