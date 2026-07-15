"use client";

import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link"
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
;

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiYoutube, href: '#', label: 'YouTube' }
  ];

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

      <div className=" px-4 md:px-12 xl:px-72 relative z-10">
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
              className="h-auto w-24 mb-6 object-contain" 
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
  {[
    { label: "Tea Blends", slug: "tea-masala-spice-blends" },
    { label: "Kitchen Masalas", slug: "spice-blends-for-kitchen-kitchen-masalas" },
    { label: "Pickle Masala", slug: "pickle-masala-spice-blends-for-pickles" },
    { label: "Flours", slug: "flours" },
    { label: "Pure Spices", slug: "pure-spices" },
    { label: "Pickles", slug: "pickles" },
    { label: "Tadka Gravy", slug: "ready-to-use-tadka-gravy" },
  ].map((item) => (
    <li key={item.slug}>
      <Link
        href={`/products?category=${item.slug}`}
        className="group flex items-center gap-2 text-sm text-[#e8d9c0]/70 transition-colors duration-300 hover:text-[#c9a05e]"
      >
        <span className="h-px w-0 shrink-0 bg-[#c9a05e] transition-all duration-300 group-hover:w-4" />
        {item.label}
      </Link>
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
  {[
    { label: "Contact Us", href: "/contact" },
    { label: "About Us", href: "/about" },
    { label: "Shipping & Returns", href: "/shipping-returns" },
    { label: "Blogs", href: "/blogs" },
    { label: "Terms & Conditions", href: "/terms" },
  ].map((item) => (
    <li key={item.label}>
      <a
        href={item.href}
        className="group flex items-center gap-2 text-sm text-[#e8d9c0]/70 transition-colors duration-300 hover:text-[#c9a05e]"
      >
        <span className="h-px w-0 bg-[#c9a05e] transition-all duration-300 group-hover:w-4" />
        {item.label}
      </a>
    </li>
  ))}
</ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4271.373247928821!2d76.42175519999999!3d30.373736199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102708e4b05f43%3A0x5cac00a43cd7b8f5!2sProdsol%20Biotech%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1773475102579!5m2!1sen!2sin"
             width="600"
             height="450"
             allowFullScreen=""
             loading="lazy"
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


             
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:text-white  hover:bg-gradient-to-r hover:from-[#8b611d] hover:via-[#c9a05e] hover:to-[#8b611d] transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a05e]/30 to-transparent mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#e8d9c0]/50 font-light tracking-wide">
          <p>© {new Date().getFullYear()} Doctor Aulakh's Food. Designed and Developed by <a className="text-[#ddad60]" href="digitalpaaji.com">Digital Paaji</a> All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/policy" className="hover:text-[#c9a05e] transition-colors">
              Privacy Policy
            </a>
            {/* <Link href="/terms" className="hover:text-[#c9a05e] transition-colors">
              Terms of Service
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;