"use client";

import React from 'react';
import { FaLeaf, FaMountain, FaHandsWash } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const aboutValues = [
  {
    id: "01",
    name: "Our Story",
    type: "The Alchemist’s Pantry",
    desc: "Inspired by the diversity of Indian kitchens, we curate authentic ingredients and flavours that fit effortlessly into modern everyday cooking.",
  },
  {
    id: "02",
    name: "Our Philosophy",
    type: "Raw Ingredients, Masterfully Curated",
    desc: "Every ingredient is selected with care, balancing quality, flavour and everyday usability to make each cooking experience more rewarding.",
  },
  {
    id: "03",
    name: "Our Promise",
    type: "Quality You Can Taste",
    desc: "We focus on carefully selected ingredients, authentic Indian flavours, thoughtfully balanced recipes and reliable quality in every pack.",
  },
  {
    id: "04",
    name: "Why Choose Us",
    type: "Tradition Without the Complexity",
    desc: "Our products simplify Indian cooking while preserving the depth, aroma and authentic flavours that make every dish feel special.",
  },
  {
    id: "05",
    name: "Our Vision",
    type: "Authentic Flavours for Every Day",
    desc: "We aim to build a trusted pantry that celebrates Indian culinary traditions while meeting the evolving needs of modern households.",
  },
  {
    id: "06",
    name: "Our Journey",
    type: "Your Kitchen. Your Recipes. Our Ingredients.",
    desc: "We are proud to be part of every cooking journey, helping transform simple ingredients and everyday recipes into memorable meals.",
  },
];

const productCategories = [
  {
    id: "01",
    name: "Tea Masala & Spice Blends",
    count: "3 Products",
    desc: "Refreshing cardamom, ginger and lemon flavours crafted to elevate your everyday chai.",
  },
  {
    id: "02",
    name: "Kitchen Masalas",
    count: "18 Products",
    desc: "Versatile blends for sabzi, biryani, chaat, chole, rajma, sambar, paneer and more.",
  },
  {
    id: "03",
    name: "Pickle Masalas",
    count: "10 Products",
    desc: "Traditional spice combinations for mango, lemon, chilli, mixed vegetable and regional pickles.",
  },
  {
    id: "04",
    name: "Healthy Flours",
    count: "12 Products",
    desc: "Wheat flour, diabetic-friendly atta, multigrain blends and nutritious single-millet flours.",
  },
  {
    id: "05",
    name: "Pure Spices",
    count: "40+ Products",
    desc: "Whole, powdered and speciality spices selected for natural aroma, colour and depth.",
  },
  {
    id: "06",
    name: "Authentic Pickles",
    count: "9 Products",
    desc: "Bold and tangy Indian pickles created to complement everyday meals.",
  },
  {
    id: "07",
    name: "Tadka & Gravies",
    count: "8 Products",
    desc: "Ready-to-use cooking bases for preparing flavour-rich meals with less time and effort.",
  },
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
            
            <p className="text-neutral-600 leading-relaxed font-light  md:text-lg mb-6">
              Born from a desire to share the authentic flavors of the Himalayas, our journey began in the saffron fields of Pampore. We partner directly with generational farmers who harvest nature's finest ingredients with reverence and care.
            </p>
            
            <p className="text-neutral-600 leading-relaxed font-light  md:text-lg mb-10">
              Every blend we create is a tribute to the timeless traditions of Kashmiri wellness. No artificial flavors, no shortcuts—just pure, unadulterated nature in every cup, designed to bring a moment of tranquility to your daily ritual.
            </p>
                 <p className="text-neutral-600 leading-relaxed font-light  md:text-lg mb-10">
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






{/* About Values Section */}
<section className="relative my-24 lg:my-32">
  <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
    {/* Sticky Heading */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:sticky lg:top-28 lg:self-start"
    >
      <p className="text-[#8B0008] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
        Who We Are
      </p>

      <h2 className="text-3xl md:text-4xl xl:text-5xl font-serif text-[#2D2926] leading-[1.1] mb-7">
        Rooted in tradition,
        <span className="block italic text-[#8B5A2B]">
          created for today.
        </span>
      </h2>

      <p className="text-neutral-600 leading-8 text-base md:text-lg max-w-xl">
        At The Alchemist’s Pantry, we bring together authenticity,
        convenience and carefully curated ingredients to make everyday
        cooking richer and more rewarding.
      </p>

      <div className="mt-10 w-24 h-px bg-[#8B5A2B]" />
    </motion.div>

    {/* Values List */}
    <div className="border-t border-[#DDD4C8]">
      {aboutValues.map((item, index) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
          className="group grid grid-cols-[45px_1fr] md:grid-cols-[70px_0.7fr_1.3fr] gap-4 md:gap-8 py-8 md:py-10 border-b border-[#DDD4C8]"
        >
          <span className="text-xs font-semibold tracking-widest text-[#A89A8B] pt-1">
            {item.id}
          </span>

          <div>
            <h3 className="text-xl md:text-2xl font-serif text-[#2D2926] mb-2">
              {item.name}
            </h3>

            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B5A2B]">
              {item.type}
            </p>
          </div>

          <p className="col-start-2 md:col-start-auto text-neutral-600 leading-7 text-sm md:text-base max-w-2xl">
            {item.desc}
          </p>
        </motion.article>
      ))}
    </div>
  </div>
</section>

{/* Separate What We Offer Section */}
<section className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-[#2F2118] text-white">
  {/* Decorative Background */}
  <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#B9832B]/20 blur-[100px]" />
  <div className="absolute -bottom-40 -left-20 w-[380px] h-[380px] rounded-full bg-[#8B0008]/25 blur-[100px]" />

  <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
    {/* Heading */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-[#E8C98D] text-xs font-semibold uppercase tracking-[0.32em] mb-5">
          What We Offer
        </p>

        <h2 className="text-3xl md:text-4xl xl:text-5xl font-serif leading-tight">
          A pantry for every
          <span className="block italic text-[#E8C98D]">
            Indian kitchen.
          </span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/70 leading-8 text-sm md:text-lg max-w-2xl lg:ml-auto"
      >
        Our growing range brings together traditional favourites and modern
        kitchen essentials, thoughtfully created for everyday meals,
        celebrations and convenient cooking.
      </motion.p>
    </div>

    {/* Product Category Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/15 border border-white/15 rounded-2xl overflow-hidden">
      {productCategories.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className={`group relative min-h-[260px] bg-[#38271D] p-7 md:p-9 hover:bg-[#443025] transition-colors duration-500 ${
            index === productCategories.length - 1
              ? "md:col-span-2 xl:col-span-3"
              : ""
          }`}
        >
          <div className="flex items-start justify-between gap-5 mb-10">
            <span className="text-[11px] tracking-[0.2em] text-white/40">
              {item.id}
            </span>

            <span className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#E8C98D]">
              {item.count}
            </span>
          </div>

          <div className="mt-auto">
            <h3 className="text-xl md:text-2xl font-serif mb-4">
              {item.name}
            </h3>

            <p className="text-white/60 text-sm leading-7 max-w-md">
              {item.desc}
            </p>

            <div className="mt-7 h-px w-10 bg-[#E8C98D] transition-all duration-500 group-hover:w-20" />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <p className="text-white/60 text-sm md:text-base">
        Carefully selected ingredients for flavourful everyday cooking.
      </p>

      <Link
        href="/products"
        className="inline-flex w-fit items-center justify-center rounded-full bg-[#E8C98D] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#2F2118] transition-transform duration-300 hover:-translate-y-1"
      >
        Explore Our Pantry
      </Link>
    </div>
  </div>
</section>





      </div>
    </section>
  );
};

export default AboutSection;