"use client";

import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="relative bg-[#14110f] text-[#e8d9c0] pt-20 pb-6 font-sans border-t border-[#c9a05e]/20 overflow-hidden">
      {/* Subtle Background Glow/Texture */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-[#c9a05e]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand & Socials (Takes up more space on desktop) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col">
            <img 
              src="/Images/logo.webp" 
              alt="Doctor Aulakh's Food" 
              className="h-16 w-16 mb-6 object-contain" 
            />
            <p className="text-[#e8d9c0]/70 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Sourced directly from the finest estates. We bring you premium,
              authentic teas and freshly ground spices to elevate your everyday rituals.
            </p>
            <div className="flex items-center gap-4">
              {[FaInstagram, FaFacebookF, FaTwitter, FaPinterestP].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[#c9a05e]/30 flex items-center justify-center text-[#c9a05e] hover:bg-[#c9a05e] hover:text-[#14110f] hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(201,160,94,0)] hover:shadow-[0_0_15px_rgba(201,160,94,0.3)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:ml-auto">
            <h3 className="text-sm font-serif font-semibold uppercase tracking-[0.2em] text-[#c9a05e] mb-6">
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              {["Shop All", "Best Sellers", "New Arrivals", "Our Story"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#e8d9c0]/70 text-sm hover:text-[#c9a05e] flex items-center gap-2 group transition-colors duration-300"
                  >
                    <span className="w-0 h-[1px] bg-[#c9a05e] transition-all duration-300 group-hover:w-4"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:ml-auto">
            <h3 className="text-sm font-serif font-semibold uppercase tracking-[0.2em] text-[#c9a05e] mb-6">
              Support
            </h3>
            <ul className="flex flex-col gap-4">
              {["Contact", "Shipping", "Returns", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#e8d9c0]/70 text-sm hover:text-[#c9a05e] flex items-center gap-2 group transition-colors duration-300"
                  >
                    <span className="w-0 h-[1px] bg-[#c9a05e] transition-all duration-300 group-hover:w-4"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h3 className="text-sm font-serif font-semibold uppercase tracking-[0.2em] text-[#c9a05e] mb-6">
              Newsletter
            </h3>
            <p className="text-[#e8d9c0]/70 text-sm leading-relaxed mb-6 font-light">
              Subscribe for exclusive offers, brewing guides, and updates from the estates.
            </p>
            <form className="relative flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-[#e8d9c0]/5 border border-[#c9a05e]/30 rounded-md py-3 pl-4 pr-12 text-sm text-[#e8d9c0] placeholder-[#e8d9c0]/40 focus:outline-none focus:border-[#c9a05e] focus:bg-[#e8d9c0]/10 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#c9a05e] text-[#14110f] rounded hover:bg-[#e8d9c0] transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <BsArrowRight size={18} />
                </button>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-3.5 h-3.5 accent-[#c9a05e] cursor-pointer"
                  required
                />
                <label htmlFor="consent" className="text-xs text-[#e8d9c0]/50 leading-snug cursor-pointer hover:text-[#e8d9c0]/70 transition-colors">
                  I agree to the privacy policy and consent to receiving marketing emails.
                </label>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a05e]/30 to-transparent mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#e8d9c0]/50 font-light tracking-wide">
          <p>© {new Date().getFullYear()} Doctor Aulakh's Food. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/policy" className="hover:text-[#c9a05e] transition-colors">
              Privacy Policy
            </a>
            <Link href="/terms" className="hover:text-[#c9a05e] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;