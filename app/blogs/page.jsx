"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { blogPosts } from "../data/blogsData";

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2D2926]">
      {/* Banner */}
      <section className="relative flex min-h-[390px] items-center overflow-hidden px-4 py-28 md:min-h-[470px] md:px-12 xl:px-72">
        <div className="absolute inset-0">
          <Image
            src="/Images/banner.webp"
            alt="The Alchemist's Pantry Blogs"
            fill
            priority
            className="object-cover"
          />

          {/* <div className="absolute inset-0 bg-linear-to-r from-[#E8E3DF]/95 via-[#E8E3DF]/80 to-transparent" /> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]">
            The Pantry Journal
          </p>

          <h1 className="mb-6 font-serif text-4xl leading-tight text-[#4D341E] sm:text-5xl lg:text-6xl">
            Stories from
            <span className="block italic text-[#8B5A2B]">
              our pantry.
            </span>
          </h1>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4D341E]/70">
            <Link href="/" className="hover:text-[#8B0008]">
              Home
            </Link>

            <span>/</span>
            <span className="text-[#8B0008]">Blogs</span>
          </div>
        </motion.div>
      </section>

      {/* Blogs Grid */}
      <section className="px-4 py-16 md:px-12 md:py-24 xl:px-72">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#DDD4C8] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(47,33,24,0.10)]"
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="relative block aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-[#FDFBF7]/95 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8B0008] backdrop-blur-sm">
                  {blog.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="mb-5 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.12em] text-neutral-400">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt size={10} />
                    {blog.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaClock size={10} />
                    {blog.readTime}
                  </span>
                </div>

                <Link href={`/blogs/${blog.slug}`}>
                  <h2 className="mb-4 font-serif text-2xl leading-snug text-[#2D2926] transition-colors duration-300 group-hover:text-[#8B5A2B]">
                    {blog.title}
                  </h2>
                </Link>

                <p className="mb-7 line-clamp-3 text-sm leading-7 text-neutral-600">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group/link mt-auto inline-flex items-center gap-3 border-t border-[#DDD4C8] pt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B5A2B]"
                >
                  Read Article

                  <FaArrowRight
                    size={10}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;