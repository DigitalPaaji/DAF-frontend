"use client";

import React from "react";
import { motion } from "framer-motion";

const ingredientItems = [
  {
    id: 1,
    name: "Whole Seeds & Spices",
    price: "Essential Ingredients",
    description:
      "Cumin, coriander seeds, fennel, fenugreek, mustard seeds, nigella, ajwain, dill seeds, caraway, celery seeds and poppy seeds.",
    color: "bg-[#8B5A2B]",
  },
  {
    id: 2,
    name: "Herbs & Aromatic Leaves",
    price: "Natural Herbs",
    description:
      "Curry leaves, mint, coriander leaves, kasuri methi and bay leaves used to add freshness, aroma and authentic Indian flavour.",
    color: "bg-[#6F7F32]",
  },
  {
    id: 3,
    name: "Roots, Bark & Rhizomes",
    price: "Rich Aromatics",
    description:
      "Turmeric, ginger, dry ginger, garlic, cinnamon, cassia bark and galangal selected for their bold aroma, warmth and flavour.",
    color: "bg-[#C78A32]",
  },
  {
    id: 4,
    name: "Premium Flowers & Aromatics",
    price: "Premium Selection",
    description:
      "Clove, saffron and nagkesar bring distinctive fragrance, colour and richness to traditional spice blends and gravies.",
    color: "bg-[#B73E2D]",
  },
  {
    id: 5,
    name: "Fruit & Pod Spices",
    price: "Bold Flavours",
    description:
      "Black pepper, green cardamom, black cardamom, dry red chilli, long pepper and kokum create balanced heat, aroma and tanginess.",
    color: "bg-[#6D4C41]",
  },
  {
    id: 6,
    name: "Nuts, Seeds & Specialty Spices",
    price: "Distinctive Taste",
    description:
      "Nutmeg, mace, star anise, sesame seeds, flaxseed, asafoetida, stone flower, anardana, amchur, kachri powder and edible gum.",
    color: "bg-[#A44A2A]",
  },
  {
    id: 7,
    name: "Grains & Nutritious Millets",
    price: "Wholesome Ingredients",
    description:
      "Wheat, bajra, jowar, ragi, foxtail millet, little millet, kodo millet and barnyard millet used in healthy and nutritious flour blends.",
    color: "bg-[#D2A85A]",
  },
  {
    id: 8,
    name: "Fresh Fruits & Vegetables",
    price: "Pickle Ingredients",
    description:
      "Mango, lemon, green chilli, garlic, amla, gongura, tomato, mixed vegetables, mushroom and other carefully selected pickle ingredients.",
    color: "bg-[#7A8B2E]",
  },
  {
    id: 9,
    name: "Powdered Spices",
    price: "Finely Ground",
    description:
      "Turmeric powder, chilli powder, coriander powder and cumin powder processed to preserve their natural colour, fragrance and flavour.",
    color: "bg-[#C65A2E]",
  },
  {
    id: 10,
    name: "Natural Tea Flavours",
    price: "Refreshing Blends",
    description:
      "Cardamom, ginger and lemon flavours crafted to create refreshing, aromatic and flavourful everyday tea blends.",
    color: "bg-[#A56A35]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const BowlIcon = ({ color }) => (
  <div className="relative w-7 h-7 md:w-8 md:h-8 shrink-0 mt-1 md:mt-2">
    <div className="relative w-full h-full rounded-full border border-[#f5f0edc2] bg-[#EFECE5] shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center z-10 p-1">
      <div className={`w-full h-full rounded-full ${color} opacity-80`} />
    </div>
  </div>
);

const CatSection = () => {
  return (
    <section className="relative w-full text-[#312A26] overflow-hidden font-sans">
      {/* Decorative Left Image */}
      <img
        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        alt="Natural whole spices"
        className="absolute top-8 -left-24 lg:-left-20 w-52 h-52 lg:w-64 lg:h-64 object-cover rounded-full mix-blend-multiply opacity-40 lg:opacity-70 hidden md:block"
        style={{
          clipPath: "circle(50% at 20% 50%)",
        }}
      />

      {/* Decorative Right Image */}
      <img
        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        alt="Premium spice ingredients"
        className="absolute bottom-8 -right-20 lg:-right-10 w-52 h-52 lg:w-64 lg:h-64 object-cover mix-blend-multiply opacity-35 lg:opacity-60 hidden md:block"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%, 30% 0)",
        }}
      />

      <div className="px-4 md:px-12 lg:px-24 xl:px-72 py-16 md:py-20 lg:py-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl xl:text-3xl font-light uppercase md:tracking-widest mb-4 flex items-center justify-center gap-3 md:gap-4">
            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30" />

            <span>Ingredients Used in Our Products</span>

            <span className="w-8 lg:w-12 h-0.5 bg-[#312A26] opacity-30" />
          </h2>

          <div className="w-2 h-2 bg-[#8B5A2B] rotate-45 mx-auto mb-4" />

          <p className="max-w-3xl mx-auto text-sm text-gray-600 md:uppercase tracking-wide md:tracking-wider leading-6 md:leading-relaxed">
            Our tea blends, kitchen masalas, pickle masalas, flours, pure
            spices, pickles and ready-to-use gravies are prepared using
            carefully selected herbs, spices, grains and natural ingredients.
          </p>
        </div>

        {/* Ingredient Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-50px",
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-8 md:gap-y-10"
        >
          {ingredientItems.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.id}
              className="flex items-start gap-3 md:gap-4 group"
            >
              <BowlIcon color={item.color} />

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-2">
                  <h3 className="text-base xl:text-lg font-semibold tracking-wide group-hover:text-[#8B5A2B] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <div className="hidden sm:block grow mx-2 md:mx-3 border-b-2 border-dotted border-gray-400 relative top-[-6px]" />

                  <span className="text-sm md:text-base lg:text-lg font-semibold text-[#8B5A2B] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-6">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CatSection;
