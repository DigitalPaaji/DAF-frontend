"use client";

import React from 'react';
import { FaLeaf, FaMountain, FaHandsWash } from "react-icons/fa";
import { motion } from 'framer-motion';

const ingredients = [
  { id: 1, name: 'Assam CTC', type: 'Tea Base', desc: 'Malty, robust, and bold.', color: 'border-[#4A2E1B]' },
  { id: 2, name: 'Green Cardamom', type: 'Aromatic', desc: 'Floral, sweet, and uplifting.', color: 'border-[#8A9A5B]' },
  { id: 3, name: 'Cinnamon', type: 'Spice', desc: 'Warming, woody, and sweet.', color: 'border-[#8B5A2B]' },
  { id: 4, name: 'Dry Ginger', type: 'Spice', desc: 'Sharp, fiery, and earthy.', color: 'border-[#D2B48C]' },
  { id: 5, name: 'Whole Cloves', type: 'Spice', desc: 'Intense and sweet heat.', color: 'border-[#3E2723]' },
  { id: 6, name: 'Star Anise', type: 'Flavor', desc: 'Licorice-like and delicate.', color: 'border-[#6D4C41]' },
  { id: 7, name: 'Saffron', type: 'Rare', desc: 'Golden, rich, and precious.', color: 'border-[#D32F2F]' },
  { id: 8, name: 'Jaggery', type: 'Sweetener', desc: 'Deep, caramel-like finish.', color: 'border-[#B87333]' },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-28 font-sans">
      <div className="container mx-auto px-4 ">
    
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700 mb-4">
            Our Heritage
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 leading-tight">
            Rooted in the valleys of Kashmir, crafted for the world.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
          {/* Editorial Image container */}
          <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-square bg-neutral-100 shadow-sm">
            <img
              src="https://m.media-amazon.com/images/I/51dqkNCdqiL.jpg" 
              alt="Himalayan valley"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>

          {/* Story Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-neutral-900 mb-6">
              A legacy of purity.
            </h3>
            
            <p className="text-neutral-600 leading-relaxed font-light text-lg mb-6">
              Born from a desire to share the authentic flavors of the Himalayas, our journey began in the saffron fields of Pampore. We partner directly with generational farmers who harvest nature's finest ingredients with reverence and care.
            </p>
            
            <p className="text-neutral-600 leading-relaxed font-light text-lg mb-10">
              Every blend we create is a tribute to the timeless traditions of Kashmiri wellness. No artificial flavors, no shortcuts—just pure, unadulterated nature in every cup, designed to bring a moment of tranquility to your daily ritual.
            </p>

            {/* Elegant Sign-off */}
            <div className="pt-6 border-t border-neutral-100">
              <p className="font-serif text-2xl text-neutral-900 italic">The Founders</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mt-2">Kashmir Origin</p>
            </div>
          </div>
        </div>

        {/* Bento/Editorial Grid */}
        <div className="py-24 bg-[#FDFBF7] text-[#2D2926] font-serif rounded-3xl mb-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-20 flex flex-col items-center text-center">
              <span className="text-[#8B5A2B] tracking-[0.3em] uppercase text-xs font-semibold mb-4">
                The Alchemist’s Pantry
              </span>
              <h2 className="text-5xl md:text-6xl font-medium leading-tight max-w-2xl">
                Raw ingredients, <br/><span className="italic opacity-70">masterfully curated.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ingredients.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group relative overflow-hidden bg-white p-8 border-t-2 ${item.color} hover:bg-[#F9F7F2] transition-colors duration-500`}
                >
                  {/* Index Number */}
                  <span className="absolute top-4 right-4 text-xs font-bold text-gray-300">
                    0{item.id}
                  </span>

                  {/* Content */}
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                      <p className="text-[#8B5A2B] text-sm uppercase tracking-widest font-semibold mb-4 opacity-80">
                        {item.type}
                      </p>
                    </div>
                    
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[80%]">
                      {item.desc}
                    </p>
                    
                    {/* Decorative Hover Line */}
                    <div className="w-8 h-[2px] bg-[#8B5A2B] mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-center bg-neutral-50 rounded-3xl p-10 lg:p-16">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-700 mb-6">
              <FaMountain size={24} />
            </div>
            <h4 className="text-lg font-medium text-neutral-900 mb-3">High Altitude Terroir</h4>
            <p className="text-neutral-500 font-light px-4 leading-relaxed">
              Sourced directly from the pristine, high-altitude regions of the Himalayas for unmatched aroma and flavor.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-700 mb-6">
              <FaLeaf size={24} />
            </div>
            <h4 className="text-lg font-medium text-neutral-900 mb-3">100% Natural</h4>
            <p className="text-neutral-500 font-light px-4 leading-relaxed">
              Completely free from preservatives and artificial additives. We believe in the power of pure, raw ingredients.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-700 mb-6">
              <FaHandsWash size={24} />
            </div>
            <h4 className="text-lg font-medium text-neutral-900 mb-3">Ethically Handcrafted</h4>
            <p className="text-neutral-500 font-light px-4 leading-relaxed">
              Blended by hand in small batches to ensure quality while supporting and sustaining local farming communities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;