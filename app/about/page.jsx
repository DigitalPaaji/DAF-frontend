"use client";

import React from 'react';
import { FaLeaf, FaMountain, FaHandsWash } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ingredients = [
  { id: 1, name: "Tea Masala / Spice Blends", type: "3 Products", desc: "Cardamom, ginger and lemon tea flavors crafted for refreshing everyday chai experiences.", color: "border-[#8B5A2B]" },
  { id: 2, name: "Kitchen Masalas", type: "18 Products", desc: "Complete spice blends for daily cooking including sabzi, biryani, chaat, chole, rajma, sambar and more.", color: "border-[#C65A2E]" },
  { id: 3, name: "Pickle Masala", type: "10 Products", desc: "Traditional masala blends for mango, lemon, chilli, mixed vegetable, mushroom and other pickle varieties.", color: "border-[#B73E2D]" },
  { id: 4, name: "Flours", type: "12 Products", desc: "Healthy flour range including basic wheat flour, diabetic-friendly atta, multigrain atta and single millet flours.", color: "border-[#D2A85A]" },
  { id: 5, name: "Pure Spices", type: "40+ Products", desc: "Whole, powdered and specialty spices including cumin, coriander, turmeric, cardamom, clove, saffron, hing and more.", color: "border-[#6D4C41]" },
  { id: 6, name: "Pickles", type: "9 Products", desc: "Classic Indian pickle range including mango, lemon, mixed vegetable, green chilli, garlic, amla and tomato pickles.", color: "border-[#7A8B2E]" },
  { id: 7, name: "Ready To Use Tadka Gravy", type: "8 Products", desc: "Convenient gravy bases for mother gravy, brown onion, makhani, white gravy, Punjabi tadka, chana masala and more.", color: "border-[#A44A2A]" },
];

const AboutSection = () => {
  return (
    <section className="">
            
                   {/* Hero Section */}
              <section className="animate-section relative overflow-hidden py-50  px-4 md:px-12 xl:px-72  ">
                <div className="absolute inset-0 z-0">
                  <Image
                    width={1920}
                    height={700}
                    src="/Images/banner.webp"
                    alt="Spareon India Privacy Policy"
                    className="w-full h-full object-cover "
                    priority
                  />
                </div>
        
                <div className=" relative z-10">
                  <h1 className=" text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-[#4D341E] uppercase tracking-wide">
                    About Us
                  </h1>
        
                  <div className=" w-24 h-1 bg-linear-to-r from-[#4D341E] to-[#4d341e94] rounded-full mb-8"></div>
        
                  <div className=" flex items-center gap-2 text-sm text-gray-600 font-medium tracking-wider uppercase">
                    <Link href="/" className="">
                      Home
                    </Link>
                    <span>/</span>
                    <span className="text-[#4D341E]">About Us</span>
                  </div>
                </div>
              </section>


      <div className=" px-4 md:px-12 xl:px-72 py-28 font-sans">
    

        
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700 mb-4">
            Our Heritage
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-neutral-900 leading-tight">
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

    <section className="relative py-24 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B9832B]/20 blur-[120px] rounded-full pointer-events-none" />
      {/* <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-[#8B0008]/30 blur-[100px] rounded-full pointer-events-none" /> */}

      <div className="relative z-10 w-full">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#8B0008] text-xs md:text-sm uppercase tracking-[0.35em] mb-4"
          >
            Authentic Indian Taste
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-light text-[#4D341E] leading-tight mb-6"
          >
            Crafted For Every Indian Kitchen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-black/85 text-sm sm:text-base md:text-lg leading-8"
          >
            From aromatic tea masalas and everyday kitchen spice blends to
            traditional pickle masalas, pure spices, healthy flours, pickles and
            ready-to-use tadka gravies — every product is prepared to bring
            freshness, convenience and authentic Indian flavor to your home.
          </motion.p>

        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative w-full rounded-2xl md:rounded-[28px] overflow-hidden shadow-2xl border border-[#fff3c7]/15 group"
        >
          <div className="relative w-full aspect-[16/9] bg-black">
            <video
              className="w-full h-full object-cover"
            //   poster="/Images/video-poster.webp"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/Images/about.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-black/20 pointer-events-none" />

            {/* Bottom Content */}
            {/* <div className="absolute left-0 right-0 bottom-0 p-5 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-[#fff3c7] text-lg md:text-2xl font-serif mb-1">
                  Freshness Packed With Tradition
                </p>
                <p className="text-white/80 text-xs md:text-sm max-w-2xl leading-6">
                  A complete pantry range made for daily cooking, festive meals,
                  quick gravies and authentic Indian taste.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#fff3c7] text-xs uppercase tracking-widest">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fff3c7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fff3c7]"></span>
                </span>
                Playing
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>

        {/* Bento/Editorial Grid */}
<div className="py-24 bg-[#FDFBF7] text-[#2D2926] font-serif rounded-3xl mb-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="text-[#8B5A2B] tracking-[0.3em] uppercase text-xs font-semibold mb-4">
            The Alchemist’s Pantry
          </span>
          <h2 className="text-5xl md:text-6xl font-medium leading-tight max-w-2xl">
            Raw ingredients, <br/><span className="italic opacity-70">masterfully curated.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ingredients.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative overflow-hidden bg-white p-8 border-t-4 ${item.color} hover:bg-[#F9F7F2] transition-colors duration-500 shadow-sm`}
            >
              {/* Index Number */}
              <span className="absolute top-4 right-4 text-xs font-bold text-gray-300">
                0{item.id}
              </span>

              {/* Content */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                  <p className="text-[#8B5A2B] text-xs uppercase tracking-widest font-semibold mb-4 opacity-80">
                    {item.type}
                  </p>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed max-w-[90%]">
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