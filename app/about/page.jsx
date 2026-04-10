import React from 'react';
import { FaLeaf, FaMountain, FaHandsWash } from "react-icons/fa";

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
            {/* Using a high-quality placeholder image of a tea/saffron field */}
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

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-center bg-neutral-50 rounded-3xl p-10 lg:p-16">
          
          {/*   */}
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-700 mb-6">
              <FaMountain size={24} />
            </div>
            <h4 className="text-lg font-medium text-neutral-900 mb-3">High Altitude Terroir</h4>
            <p className="text-neutral-500 font-light px-4 leading-relaxed">
              Sourced directly from the pristine, high-altitude regions of the Himalayas for unmatched aroma and flavor.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-700 mb-6">
              <FaLeaf size={24} />
            </div>
            <h4 className="text-lg font-medium text-neutral-900 mb-3">100% Natural</h4>
            <p className="text-neutral-500 font-light px-4 leading-relaxed">
              Completely free from preservatives and artificial additives. We believe in the power of pure, raw ingredients.
            </p>
          </div>

          {/* Value 3 */}
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