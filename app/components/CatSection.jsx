"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Menu data updated to feature raw Masala Chai ingredients
const ingredientItems = [
  {
    id: 1,
    name: 'Assam CTC Tea Leaves',
    price: '$12 / 200g',
    description: 'A bold, malty black tea base that provides a strong, robust liquor.',
    color: 'bg-[#4A2E1B]', // Dark tea brown
  },
  {
    id: 2,
    name: 'Green Cardamom (Elaichi)',
    price: '$18 / 50g',
    description: 'Sweet, highly aromatic pods that provide a floral, uplifting note.',
    color: 'bg-[#8A9A5B]', // Muted green
  },
  {
    id: 3,
    name: 'Cinnamon Bark (Dalchini)',
    price: '$9 / 100g',
    description: 'Sweet and woody inner bark that adds a warming depth to the brew.',
    color: 'bg-[#8B5A2B]', // Cinnamon brown
  },
  {
    id: 4,
    name: 'Dry Ginger (Saunth)',
    price: '$7 / 100g',
    description: 'Earthy, spicy, and warming powder essential for the perfect kick.',
    color: 'bg-[#D2B48C]', // Pale tan/yellow
  },
  {
    id: 5,
    name: 'Whole Cloves (Laung)',
    price: '$11 / 50g',
    description: 'Intensely aromatic flower buds adding a sharp, spicy sweetness.',
    color: 'bg-[#3E2723]', // Very dark brown/black
  },
  {
    id: 6,
    name: 'Star Anise (Chakra Phool)',
    price: '$14 / 50g',
    description: 'Beautiful star-shaped spice imparting a delicate, sweet licorice flavor.',
    color: 'bg-[#6D4C41]', // Reddish brown
  },
  {
    id: 7,
    name: 'Kashmiri Saffron (Kesar)',
    price: '$35 / 2g',
    description: 'The world\'s most precious spice, adding a golden hue and rich aroma.',
    color: 'bg-[#D32F2F]', // Deep red/orange
  },
  {
    id: 8,
    name: 'Organic Jaggery (Gur)',
    price: '$6 / 250g',
    description: 'Unrefined cane sugar that provides a deep, caramel-like sweetness.',
    color: 'bg-[#B87333]', // Copper/Amber
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Custom CSS top-down Spice Bowl component (removed the mug handle)
const BowlIcon = ({ color }) => (
  <div className="relative w-12 h-12 shrink-0">
    {/* Bowl Body */}
    <div className="relative w-full h-full rounded-full border-[3px] border-[#312A26] bg-[#EFECE5] shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center z-10 p-1">
      {/* Spice inside */}
      <div className={`w-full h-full rounded-full ${color} opacity-90`} />
    </div>
  </div>
);

const CatSection = () => {
  return (
    <section className="relative w-full py-20 bg-[#F4F1EA] text-[#312A26] overflow-hidden font-sans">
      
      {/* Decorative Left Image (Spices) */}
      <img 
        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        alt="Whole Spices" 
        className="absolute top-10 -left-20 w-64 h-64 object-cover rounded-full mix-blend-multiply opacity-70 hidden md:block"
        style={{ clipPath: 'circle(50% at 20% 50%)' }} 
      />

      {/*  */}
      <img 
        src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        alt="Loose Tea Leaves" 
        className="absolute bottom-10 -right-10 w-64 h-64 object-cover mix-blend-multiply opacity-60 hidden md:block"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 30% 0)' }} 
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header  Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest mb-4 flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#312A26] hidden md:block opacity-30"></span>
            The Spice Cabinet
            <span className="w-12 h-[2px] bg-[#312A26] hidden md:block opacity-30"></span>
          </h2>
          <div className="w-2 h-2 bg-[#8B5A2B] rotate-45 mx-auto mb-4" /> 
          <p className="max-w-xl mx-auto text-sm text-gray-600 uppercase tracking-wider leading-relaxed">
            Explore the raw, unblended components that make our signature chai. We source only the finest whole spices and premium tea leaves for your pantry.
          </p>
        </div>

        {/*  */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
        >
          {ingredientItems.map((item) => (
            <motion.div variants={itemVariants} key={item.id} className="flex items-start gap-4 group">
              
              <BowlIcon color={item.color} />
              
              <div className="flex-1 pt-1">
              
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-lg font-bold tracking-wide group-hover:text-[#8B5A2B] transition-colors">
                    {item.name}
                  </h3>
                
                  <div className="flex-grow mx-3 border-b-2 border-dotted border-gray-400 relative top-[-6px]" />
                  <span className="text-lg font-bold text-[#8B5A2B] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              
                <p className="text-sm text-gray-600">
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