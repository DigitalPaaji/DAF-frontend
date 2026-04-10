"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiFallingLeaf } from "react-icons/gi";
import BottleCompo from './BottleCompo';

const slides = [
  {
    id: 1,
    title: "Masala Chai",
    subtitle: "Authentic Indian Blend",
    description: "Experience the warmth of traditional aromatic spices blended flawlessly with bold Assam tea leaves.",
    labelImg: "pack1.jpeg",
    jarImg: "apple-jar.png",
    bgColor: "#E8E3DF", // Soft Sand
    accent: "bg-orange-800",
    textColor: "text-orange-950",
  },
  {
    id: 2,
    title: "Ginger Turmeric",
    subtitle: "Golden Immunity Boost",
    description: "A restorative and earthy fusion of warming ginger and vibrant turmeric to soothe your senses.",
    labelImg: "pack1.jpeg",
    jarImg: "blue-lavender-jar.webp",
    bgColor: "#F4EBD0", // Soft Gold
    accent: "bg-yellow-700",
    textColor: "text-yellow-950",
  },
  {
    id: 3,
    title: "Cardamom Rose",
    subtitle: "Elegant Floral Fusion",
    description: "Indulge in a delicate, luxurious brew where sweet green cardamom meets gentle rose petals.",
    labelImg: "pack1.jpeg",
    jarImg: "jar1.webp",
    bgColor: "#EADEE0", // Soft Rose
    accent: "bg-rose-800",
    textColor: "text-rose-950",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section 
      className="relative w-full pt-32 md:pt-3 h-screen md:h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden transition-colors duration-1000 ease-in-out px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-52 "
      style={{ backgroundColor: slide.bgColor }}
    >
    
      <motion.div 
        key={`bg-${current}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none "
      >
        <h1 className="text-[20vw] font-bold uppercase whitespace-nowrap opacity-35">{slide.title}</h1>
      </motion.div>

      <div className=" z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="w-full md:w-1/3 order-2 md:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1   text-sm mb-4 uppercase tracking-widest opacity-70">
                  {slide.subtitle}
                </span>
                <h2 className={`text-5xl md:text-6xl font-serif mb-6 ${slide.textColor}`}>
                  {slide.title}
                </h2>
                <p className=" text-gray-700 leading-relaxed mb-8">
                  {slide.description}
                </p>
                
              </motion.div>
            </AnimatePresence>
          </div>

          
          <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 100, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -100, rotate: 5 }}
                transition={{ duration: 0.8, type: "spring", damping: 15 }}
                className="relative cursor-pointer"
              >
                <BottleCompo bottleImg={slide.jarImg} lableImg={slide.labelImg} />

<motion.div  initial={{ opacity: 0, x: 100, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -100, rotate: 5 }} 
                   transition={{ duration: 0.8, type: "keyframes", damping: 15 }} className= ' hidden md:block absolute -z-10 -top-4    md:left-[110%]' >
  <img src="/Banner/arrow2.png" alt="" className=' min-w-10 h-10' />
  <p className=' w-[16rem]  lg:w-[24rem] xl:w-lg ps-5 md:ps-15'>{slide.description}</p>
</motion.div >
                <motion.div 
                  animate={{ y: [0, -15, 0] }} 
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 text-green-700"
                >
                  <GiFallingLeaf size={50} className="drop-shadow-lg" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/*  */}
          <div className="hidden md:block w-1/3 order-3 text-right">
             <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                   <div className="flex items-center justify-end gap-3 italic text-gray-600">
                      <span>100% Organic</span>
                      <div className="h-[1px] w-12 bg-gray-400" />
                   </div>
                   <div className="flex items-center justify-end gap-3 italic text-gray-600">
                      <span>Ethically Sourced</span>
                      <div className="h-[1px] w-12 bg-gray-400" />
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="relative  flex items-center justify-center"
          >
           
            <span className={`h-px w-6    transition-colors ${current === index ? 'bg-black/60 border ' : 'bg-gray-400'}`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;