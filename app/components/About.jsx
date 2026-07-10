"use client";

import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "Tea Blends",
  "Kitchen Masalas",
  "Pure Spices",
  "Pickles",
];

const LegacyVideoSection = () => {
  return (
    <section className="relative px-4 md:px-12 xl:px-72 py-24 bg-gradient-to-br from-[#1b0203] via-[#3A2A21] to-[#1b0203] overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B9832B]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-[#8B0008]/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D9B06E] text-xs md:text-sm uppercase tracking-[0.35em] mb-4"
          >
            Authentic Indian Taste
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-light text-[#fff3c7] leading-tight mb-6"
          >
            Crafted For Every Indian Kitchen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-white/85 text-sm sm:text-base md:text-lg leading-8"
          >
            From aromatic tea masalas and everyday kitchen spice blends to
            traditional pickle masalas, pure spices, healthy flours, pickles and
            ready-to-use tadka gravies — every product is prepared to bring
            freshness, convenience and authentic Indian flavor to your home.
          </motion.p>

          {/* Small Highlights */}
          {/* <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-[#fff3c7]/25 bg-white/5 text-[#fff3c7] text-xs md:text-sm uppercase tracking-wider backdrop-blur"
              >
                {item}
              </span>
            ))}
          </motion.div> */}
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
  );
};

export default LegacyVideoSection;