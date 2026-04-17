"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { img_url } from "./Store/utils";
import Link from "next/link";

// Category data
const categories = [
  {
    id: 1,
    name: "Masala Chai",
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=600&auto=format&fit=crop&q=80",
    slug: "masala-chai",
  },
  {
    id: 2,
    name: "Green Tea",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&auto=format&fit=crop&q=80",
    slug: "green-tea",
  },
  {
    id: 3,
    name: "Spices",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&auto=format&fit=crop&q=80",
    slug: "spices",
  },
  {
    id: 4,
    name: "Herbal Teas",
    image: "https://images.unsplash.com/photo-1597481495646-7ae69f0c9e6b?w=600&auto=format&fit=crop&q=80",
    slug: "herbal-teas",
  },
  {
    id: 5,
    name: "Black Tea",
    image: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?w=600&auto=format&fit=crop&q=80",
    slug: "black-tea",
  },
  {
    id: 6,
    name: "Ginger & Turmeric",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=80",
    slug: "ginger-turmeric",
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
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const CategoryCarousel = () => {

  const { info:category} = useSelector(status=>status.category)
  return (
    <section className="py-20 bg-[#F5F2EB] font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 text-[#3A2A21]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Shop by Category
          </motion.h2>
          
          {/* Star Anise Divider */}
          <motion.div 
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9C6B44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              <circle cx="12" cy="12" r="3" fill="#9C6B44" />
            </svg>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Explore our range of premium teas and authentic spices, crafted to elevate your daily rituals.
          </motion.p>
        </div>

      
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10"
        >
          { category.length >0 && category.map((category) => (
            <motion.div
              key={category._id}
            
              variants={itemVariants}
             
            >
              
              <Link   href={`/products?category=${category._id}`}  className="group flex flex-col items-center text-center cursor-pointer">
              <div className="p-1.5 rounded-full border-2 border-transparent group-hover:border-[#9C6B44] transition-colors duration-500 mb-4">
                
              
                <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full bg-white shadow-sm">
                  
                  
                  <div className="absolute inset-0 rounded-full shadow-inner z-10 pointer-events-none" />
                  
                                  <img
                    src={`${img_url}${category.image}`}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-0" />
                </div>
              </div>
              
              <h3 
                className="text-sm md:text-base font-bold uppercase tracking-wider text-[#3A2A21] group-hover:text-[#9C6B44] transition-colors duration-300 px-2"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {category.name}
              </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CategoryCarousel;