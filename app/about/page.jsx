"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const aboutValues = [
  {
    id: "01",
    name: "Our Mission",
    type: "Authentic Flavour With Scientific Precision",
    desc: "To deliver premium-quality tea masalas that combine authentic Indian flavours with scientific precision, carefully selected ingredients and consistent quality.",
  },
  {
    id: "02",
    name: "Our Vision",
    type: "India’s Trusted Tea Masala Brand",
    desc: "To become India’s most trusted premium Tea Masala brand, recognised for quality, innovation, customer satisfaction and exceptional flavour.",
  },
  {
    id: "03",
    name: "Premium Ingredients",
    type: "Carefully Selected Natural Spices",
    desc: "We use scientifically selected premium spices and carefully sourced natural ingredients to create rich aroma, refreshing taste and exceptional freshness.",
  },
  {
    id: "04",
    name: "Scientific Formulations",
    type: "Developed By A Food Technologist",
    desc: "Every formulation is developed with an understanding of food technology and microbiology to achieve a balanced flavour profile and reliable consistency.",
  },
  {
    id: "05",
    name: "Quality & Hygiene",
    type: "Strict Quality Control",
    desc: "Every batch is hygienically processed and manufactured under stringent quality-control measures while following recognised food-safety standards.",
  },
  {
    id: "06",
    name: "Our Promise",
    type: "Pure, Aromatic And Consistent",
    desc: "We promise premium tea masalas with no artificial colours or preservatives, delivering authentic taste, rich aroma and dependable quality in every pack.",
  },
];

const productCategories = [
  {
    id: "01",
    name: "Elaveda",
    subtitle: "Premium Cardamom Tea Masala",
    count: "Cardamom Blend",
    desc: "Premium green cardamom blended with selected natural spices to create an exceptionally aromatic and refreshing cup of tea.",
    highlights: [
      "Rich Cardamom Aroma",
      "Premium Green Cardamom",
      "Refreshing Taste",
      "Suitable for Daily Use",
    ],
  },
  {
    id: "02",
    name: "ZingVeta",
    subtitle: "Premium Ginger Tea Masala",
    count: "Ginger Blend",
    desc: "A warming blend prepared using high-quality dry ginger and aromatic spices for a refreshing, naturally spicy flavour.",
    highlights: [
      "Strong Ginger Flavour",
      "Traditional Wellness Spices",
      "Perfect for Winter & Monsoon",
      "Refreshing Taste",
    ],
  },
  {
    id: "03",
    name: "Lemvita",
    subtitle: "Premium Lemongrass Tea Masala",
    count: "Herbal Blend",
    desc: "A refreshing herbal tea blend combining naturally aromatic lemongrass with carefully selected premium spices.",
    highlights: [
      "Fresh Citrus Aroma",
      "Light Herbal Flavour",
      "Refreshing Everyday Tea",
      "Naturally Aromatic",
    ],
  },
  {
    id: "04",
    name: "KahwaVita",
    subtitle: "Premium Kashmiri Kahwa Mix",
    count: "Kahwa Blend",
    desc: "A luxurious traditional Kashmiri beverage blend prepared using premium spices for an authentic and aromatic experience.",
    highlights: [
      "Authentic Kashmiri Taste",
      "Premium Ingredients",
      "Rich Aroma",
      "Traditional Wellness Drink",
    ],
  },
];

const qualityHighlights = [
  "Premium Quality Ingredients",
  "Scientifically Developed Formulations",
  "No Artificial Colours",
  "No Artificial Preservatives",
  "Hygienically Processed",
  "Rich Aroma & Authentic Taste",
  "Food Safety Standards Followed",
  "Suitable for Home & Commercial Use",
];

const differencePoints = [
  {
    id: "01",
    title: "Balanced Flavour Profile",
    description:
      "Scientifically measured ingredients create a harmonious flavour without overpowering the natural taste of tea.",
  },
  {
    id: "02",
    title: "Consistent Aroma",
    description:
      "Carefully controlled formulations help maintain a dependable aroma and taste across every batch.",
  },
  {
    id: "03",
    title: "Better Freshness",
    description:
      "Quality ingredients and hygienic processing help preserve the natural freshness and aroma of our spices.",
  },
  {
    id: "04",
    title: "Premium Grinding Technology",
    description:
      "Modern grinding processes help achieve the right texture while retaining the distinctive character of every spice.",
  },
  {
    id: "05",
    title: "Hygienic Packaging",
    description:
      "Every blend is packed under controlled conditions to protect its purity, freshness and natural aroma.",
  },
  {
    id: "06",
    title: "Longer Shelf Life",
    description:
      "Scientific processing and suitable packaging help maintain product quality for a longer period without artificial preservatives.",
  },
];

const AboutSection = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-40 md:px-12 md:py-48 xl:px-72">
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={700}
            src="/Images/banner.webp"
            alt="About Dr. Aulakh Foods"
            className="h-full w-full object-cover"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-r from-[#E8E3DF]/95 via-[#E8E3DF]/75 to-transparent" />
        </div>

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]"
          >
            Traditional Taste. Modern Science.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-3xl font-bold uppercase leading-tight tracking-wide text-[#4D341E] md:text-5xl"
          >
            About Us
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-8 h-1 rounded-full bg-linear-to-r from-[#4D341E] to-[#4d341e94]"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-600"
          >
            <Link href="/" className="transition-colors hover:text-[#8B0008]">
              Home
            </Link>

            <span>/</span>

            <span className="text-[#4D341E]">About Us</span>
          </motion.div>
        </div>
      </section>

      <div className="px-4 py-20 font-sans md:px-12 md:py-28 xl:px-72">
        {/* Intro Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-24"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            About Dr. Aulakh Foods
          </p>

          <h2 className="font-serif text-3xl font-light leading-tight text-neutral-900 md:text-4xl xl:text-5xl">
            Where traditional Indian taste meets modern food science.
          </h2>
        </motion.div>

        {/* Founder Story */}
        <section className="mb-24 grid grid-cols-1 items-center gap-14 lg:mb-32 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm lg:aspect-square"
          >
            <Image
              width={900}
              height={900}
              src="/Images/about.mp4"
              alt="Premium spices used by Dr. Aulakh Foods"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/5" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/80 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B0008]">
                Founded By
              </p>

              <p className="mt-2 font-serif text-xl text-[#2D2926] md:text-2xl">
                Dr. Satnam Singh Aulakh
              </p>

              <p className="mt-1 text-sm text-neutral-600">
                Food Technologist & Microbiologist
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B0008]">
              Our Story
            </p>

            <h3 className="mb-7 font-serif text-3xl font-light leading-tight text-neutral-900 md:text-4xl">
              Creating premium tea experiences through purity, science and
              authentic flavour.
            </h3>

            <p className="mb-6 text-base font-light leading-8 text-neutral-600 md:text-lg">
              Welcome to Dr. Aulakh Foods, where traditional Indian taste meets
              modern food science.
            </p>

            <p className="mb-6 text-base font-light leading-8 text-neutral-600 md:text-lg">
              Founded by Dr. Satnam Singh Aulakh, a Food Technologist and
              Microbiologist, our mission is to create premium-quality spice
              blends that enhance everyday beverages while maintaining the
              highest standards of purity, hygiene and consistency.
            </p>

            <p className="mb-6 text-base font-light leading-8 text-neutral-600 md:text-lg">
              Our Tea Masala range is carefully formulated using scientifically
              selected premium spices that deliver authentic aroma, rich taste
              and exceptional freshness. Every batch is manufactured under
              stringent quality control using carefully sourced natural
              ingredients.
            </p>

            <div className="mt-3 border-l-2 border-[#B9832B] bg-[#F8F3EC] px-6 py-5">
              <p className="font-serif text-xl italic leading-relaxed text-[#4D341E] md:text-2xl">
                “We believe that a perfect cup of tea is not just a
                beverage—it is an experience.”
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <section className="relative mb-24 overflow-hidden rounded-[28px] bg-[#F5F0E8] px-6 py-16 md:px-12 md:py-20 lg:mb-32 lg:px-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#B9832B]/15 blur-[90px]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8B0008]/10 blur-[90px]" />

          <div className="relative z-10">
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]">
                  Why Choose Us?
                </p>

                <h2 className="font-serif text-3xl leading-tight text-[#2D2926] md:text-4xl xl:text-5xl">
                  Premium quality in
                  <span className="block italic text-[#8B5A2B]">
                    every aromatic blend.
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-2xl text-base leading-8 text-neutral-600 lg:ml-auto md:text-lg"
              >
                From ingredient selection to grinding and packaging, every
                process is carefully managed to deliver a clean, consistent and
                flavourful tea masala experience.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {qualityHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group flex min-h-[120px] items-start gap-4 rounded-2xl border border-[#DED3C4] bg-white/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4D341E] text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="font-medium leading-6 text-[#2D2926]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative mb-24 overflow-hidden py-10 lg:mb-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#B9832B]/20 blur-[120px]" />

          <div className="relative z-10">
            <div className="mb-12 text-center md:mb-16">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8B0008] md:text-sm"
              >
                Crafted With Precision
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-6 font-serif text-3xl font-light leading-tight text-[#4D341E] md:text-4xl xl:text-5xl"
              >
                Premium Spices. Scientific Selection.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mx-auto max-w-4xl text-sm leading-8 text-black/75 sm:text-base md:text-lg"
              >
                Our formulations combine premium natural spices, scientific
                ingredient selection and stringent quality control to create a
                refreshing, aromatic and consistent cup of tea.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="group relative w-full overflow-hidden rounded-2xl border border-[#4D341E]/10 shadow-2xl md:rounded-[28px]"
            >
              <div className="relative aspect-video w-full bg-black">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/Images/about.mp4" type="video/mp4" />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-black/15" />

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <p className="font-serif text-xl text-white md:text-3xl">
                    From carefully selected spices to your perfect cup of tea.
                  </p>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
                    Every stage is managed to protect purity, aroma, flavour and
                    freshness.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="relative my-24 lg:my-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]">
                What Defines Us
              </p>

              <h2 className="mb-7 font-serif text-3xl leading-[1.1] text-[#2D2926] md:text-4xl xl:text-5xl">
                Authentic Indian taste,
                <span className="block italic text-[#8B5A2B]">
                  perfected by science.
                </span>
              </h2>

              <p className="max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
                At Dr. Aulakh Foods, our products are created with a clear
                commitment to purity, hygiene, innovation, consistency and
                customer satisfaction.
              </p>

              <div className="mt-10 h-px w-24 bg-[#8B5A2B]" />
            </motion.div>

            <div className="border-t border-[#DDD4C8]">
              {aboutValues.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group grid grid-cols-[45px_1fr] gap-4 border-b border-[#DDD4C8] py-8 md:grid-cols-[70px_0.7fr_1.3fr] md:gap-8 md:py-10"
                >
                  <span className="pt-1 text-xs font-semibold tracking-widest text-[#A89A8B]">
                    {item.id}
                  </span>

                  <div>
                    <h3 className="mb-2 font-serif text-xl text-[#2D2926] md:text-2xl">
                      {item.name}
                    </h3>

                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B5A2B]">
                      {item.type}
                    </p>
                  </div>

                  <p className="col-start-2 max-w-2xl text-sm leading-7 text-neutral-600 md:col-start-auto md:text-base">
                    {item.desc}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Tea Masala Collection */}
        <section className="relative overflow-hidden rounded-[28px] bg-[#2F2118] text-white md:rounded-[40px]">
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#B9832B]/20 blur-[100px]" />
          <div className="absolute -bottom-40 -left-20 h-[380px] w-[380px] rounded-full bg-[#8B0008]/25 blur-[100px]" />

          <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
            <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:mb-20 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#E8C98D]">
                  Tea Masala Collection
                </p>

                <h2 className="font-serif text-3xl leading-tight md:text-4xl xl:text-5xl">
                  Four distinctive blends for
                  <span className="block italic text-[#E8C98D]">
                    every tea experience.
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-2xl text-sm leading-8 text-white/70 md:text-lg lg:ml-auto"
              >
                From refreshing cardamom and warming ginger to aromatic
                lemongrass and traditional Kashmiri Kahwa, each blend is
                scientifically formulated for flavour, aroma and consistency.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 md:grid-cols-2">
              {productCategories.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group relative min-h-[420px] bg-[#38271D] p-7 transition-colors duration-500 hover:bg-[#443025] md:p-9"
                >
                  <div className="mb-10 flex items-start justify-between gap-5">
                    <span className="text-[11px] tracking-[0.2em] text-white/40">
                      {item.id}
                    </span>

                    <span className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#E8C98D]">
                      {item.count}
                    </span>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8C98D]">
                      {item.subtitle}
                    </p>

                    <h3 className="mb-4 font-serif text-3xl text-white md:text-4xl">
                      {item.name}
                    </h3>

                    <p className="mb-7 max-w-md text-sm leading-7 text-white/65">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-2 text-sm leading-6 text-white/75"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8C98D]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 h-px w-10 bg-[#E8C98D] transition-all duration-500 group-hover:w-20" />
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-white/60 md:text-base">
                Premium tea masalas suitable for home and commercial use.
              </p>

              <Link
                href="/products"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#E8C98D] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#2F2118] transition-transform duration-300 hover:-translate-y-1"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </section>

        {/* Why Our Tea Masala Is Different */}
        <section className="py-24 lg:py-32">
          <div className="mb-14 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]"
            >
              The Dr. Aulakh Foods Difference
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl font-serif text-3xl leading-tight text-[#2D2926] md:text-4xl xl:text-5xl"
            >
              Why our Tea Masala is different
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg"
            >
              Unlike ordinary spice powders, our tea masalas are developed
              through scientific ingredient selection and strict quality
              control.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differencePoints.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-2xl border border-[#DED6CB] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#B9832B]/50 hover:shadow-xl md:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#B9832B]">
                    {item.id}
                  </span>

                  <div className="h-px w-10 bg-[#B9832B]/40 transition-all duration-500 group-hover:w-16" />
                </div>

                <h3 className="mb-4 font-serif text-2xl text-[#2D2926]">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-neutral-600 md:text-base">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden rounded-[28px] bg-[#E8E3DF] px-6 py-16 text-center md:px-12 md:py-20">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9832B]/15 blur-[90px]" />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto max-w-3xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]">
              Experience The Difference
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#2D2926] md:text-4xl xl:text-5xl">
              Make every cup of tea a richer, fresher and more aromatic
              experience.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
              Discover premium tea masalas created with authentic Indian spices,
              scientific precision and an uncompromising commitment to quality.
            </p>

            <Link
              href="/products"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-[#4D341E] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B0008]"
            >
              Shop Tea Masalas
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default AboutSection;




// "use client";

// import React from 'react';
// import { FaLeaf, FaMountain, FaHandsWash } from "react-icons/fa";
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';

// const aboutValues = [
//   {
//     id: "01",
//     name: "Our Story",
//     type: "The Alchemist’s Pantry",
//     desc: "Inspired by the diversity of Indian kitchens, we curate authentic ingredients and flavours that fit effortlessly into modern everyday cooking.",
//   },
//   {
//     id: "02",
//     name: "Our Philosophy",
//     type: "Raw Ingredients, Masterfully Curated",
//     desc: "Every ingredient is selected with care, balancing quality, flavour and everyday usability to make each cooking experience more rewarding.",
//   },
//   {
//     id: "03",
//     name: "Our Promise",
//     type: "Quality You Can Taste",
//     desc: "We focus on carefully selected ingredients, authentic Indian flavours, thoughtfully balanced recipes and reliable quality in every pack.",
//   },
//   {
//     id: "04",
//     name: "Why Choose Us",
//     type: "Tradition Without the Complexity",
//     desc: "Our products simplify Indian cooking while preserving the depth, aroma and authentic flavours that make every dish feel special.",
//   },
//   {
//     id: "05",
//     name: "Our Vision",
//     type: "Authentic Flavours for Every Day",
//     desc: "We aim to build a trusted pantry that celebrates Indian culinary traditions while meeting the evolving needs of modern households.",
//   },
//   {
//     id: "06",
//     name: "Our Journey",
//     type: "Your Kitchen. Your Recipes. Our Ingredients.",
//     desc: "We are proud to be part of every cooking journey, helping transform simple ingredients and everyday recipes into memorable meals.",
//   },
// ];

// const productCategories = [
//   {
//     id: "01",
//     name: "Tea Masala & Spice Blends",
//     count: "3 Products",
//     desc: "Refreshing cardamom, ginger and lemon flavours crafted to elevate your everyday chai.",
//   },
//   {
//     id: "02",
//     name: "Kitchen Masalas",
//     count: "18 Products",
//     desc: "Versatile blends for sabzi, biryani, chaat, chole, rajma, sambar, paneer and more.",
//   },
//   {
//     id: "03",
//     name: "Pickle Masalas",
//     count: "10 Products",
//     desc: "Traditional spice combinations for mango, lemon, chilli, mixed vegetable and regional pickles.",
//   },
//   {
//     id: "04",
//     name: "Healthy Flours",
//     count: "12 Products",
//     desc: "Wheat flour, diabetic-friendly atta, multigrain blends and nutritious single-millet flours.",
//   },
//   {
//     id: "05",
//     name: "Pure Spices",
//     count: "40+ Products",
//     desc: "Whole, powdered and speciality spices selected for natural aroma, colour and depth.",
//   },
//   {
//     id: "06",
//     name: "Authentic Pickles",
//     count: "9 Products",
//     desc: "Bold and tangy Indian pickles created to complement everyday meals.",
//   },
//   {
//     id: "07",
//     name: "Tadka & Gravies",
//     count: "8 Products",
//     desc: "Ready-to-use cooking bases for preparing flavour-rich meals with less time and effort.",
//   },
// ];


// const AboutSection = () => {
//   return (
//     <section className="">
            
//                    {/* Hero Section */}
//               <section className="animate-section relative overflow-hidden py-50  px-4 md:px-12 xl:px-72  ">
//                 <div className="absolute inset-0 z-0">
//                   <Image
//                     width={1920}
//                     height={700}
//                     src="/Images/banner.webp"
//                     alt="Spareon India Privacy Policy"
//                     className="w-full h-full object-cover "
//                     priority
//                   />
//                 </div>
        
//                 <div className=" relative z-10">
//                   <h1 className=" text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-[#4D341E] uppercase tracking-wide">
//                     About Us
//                   </h1>
        
//                   <div className=" w-24 h-1 bg-linear-to-r from-[#4D341E] to-[#4d341e94] rounded-full mb-8"></div>
        
//                   <div className=" flex items-center gap-2 text-sm text-gray-600 font-medium tracking-wider uppercase">
//                     <Link href="/" className="">
//                       Home
//                     </Link>
//                     <span>/</span>
//                     <span className="text-[#4D341E]">About Us</span>
//                   </div>
//                 </div>
//               </section>


//       <div className=" px-4 md:px-12 xl:px-72 py-28 font-sans">
    

        
//         <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
//           <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700 mb-4">
//             Our Heritage
//           </p>
//           <h2 className="text-3xl md:text-4xl font-serif font-light text-neutral-900 leading-tight">
//             Rooted in the valleys of Kashmir, crafted for the world.
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
//           {/* Editorial Image container */}
//           <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-square bg-neutral-100 shadow-sm">
//             <img
//               src="https://m.media-amazon.com/images/I/51dqkNCdqiL.jpg" 
//               alt="Himalayan valley"
//               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black/5 pointer-events-none" />
//           </div>

//           {/* Story Text */}
//           <div className="flex flex-col justify-center">
//             <h3 className="text-2xl sm:text-3xl font-serif font-light text-neutral-900 mb-6">
//               A legacy of purity.
//             </h3>
            
//             <p className="text-neutral-600 leading-relaxed font-light  md:text-lg mb-6">
//               Born from a desire to share the authentic flavors of the Himalayas, our journey began in the saffron fields of Pampore. We partner directly with generational farmers who harvest nature's finest ingredients with reverence and care.
//             </p>
            
//             <p className="text-neutral-600 leading-relaxed font-light  md:text-lg mb-10">
//               Every blend we create is a tribute to the timeless traditions of Kashmiri wellness. No artificial flavors, no shortcuts—just pure, unadulterated nature in every cup, designed to bring a moment of tranquility to your daily ritual.
//             </p>
//                  <p className="text-neutral-600 leading-relaxed font-light  md:text-lg mb-10">
//               Every blend we create is a tribute to the timeless traditions of Kashmiri wellness. No artificial flavors, no shortcuts—just pure, unadulterated nature in every cup, designed to bring a moment of tranquility to your daily ritual.
//             </p>

//             {/* Elegant Sign-off */}
//             <div className="pt-6 border-t border-neutral-100">
//               <p className="font-serif text-2xl text-neutral-900 italic">The Founders</p>
//               <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mt-2">Kashmir Origin</p>
//             </div>
//           </div>
//         </div>

//     <section className="relative py-24 overflow-hidden">
//       {/* Decorative glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B9832B]/20 blur-[120px] rounded-full pointer-events-none" />
//       {/* <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-[#8B0008]/30 blur-[100px] rounded-full pointer-events-none" /> */}

//       <div className="relative z-10 w-full">
//         {/* Heading */}
//         <div className="text-center mb-12 md:mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-[#8B0008] text-xs md:text-sm uppercase tracking-[0.35em] mb-4"
//           >
//             Authentic Indian Taste
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-light text-[#4D341E] leading-tight mb-6"
//           >
//             Crafted For Every Indian Kitchen
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="max-w-4xl mx-auto text-black/85 text-sm sm:text-base md:text-lg leading-8"
//           >
//             From aromatic tea masalas and everyday kitchen spice blends to
//             traditional pickle masalas, pure spices, healthy flours, pickles and
//             ready-to-use tadka gravies — every product is prepared to bring
//             freshness, convenience and authentic Indian flavor to your home.
//           </motion.p>

//         </div>

//         {/* Video */}
//         <motion.div
//           initial={{ opacity: 0, y: 26 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className="relative w-full rounded-2xl md:rounded-[28px] overflow-hidden shadow-2xl border border-[#fff3c7]/15 group"
//         >
//           <div className="relative w-full aspect-[16/9] bg-black">
//             <video
//               className="w-full h-full object-cover"
//             //   poster="/Images/video-poster.webp"
//               autoPlay
//               muted
//               loop
//               playsInline
//             >
//               <source src="/Images/about.mp4" type="video/mp4" />
//             </video>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-black/20 pointer-events-none" />

//             {/* Bottom Content */}
//             {/* <div className="absolute left-0 right-0 bottom-0 p-5 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
//               <div>
//                 <p className="text-[#fff3c7] text-lg md:text-2xl font-serif mb-1">
//                   Freshness Packed With Tradition
//                 </p>
//                 <p className="text-white/80 text-xs md:text-sm max-w-2xl leading-6">
//                   A complete pantry range made for daily cooking, festive meals,
//                   quick gravies and authentic Indian taste.
//                 </p>
//               </div>

//               <div className="flex items-center gap-2 text-[#fff3c7] text-xs uppercase tracking-widest">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fff3c7] opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fff3c7]"></span>
//                 </span>
//                 Playing
//               </div>
//             </div> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>






// {/* About Values Section */}
// <section className="relative my-24 lg:my-32">
//   <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
//     {/* Sticky Heading */}
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       className="lg:sticky lg:top-28 lg:self-start"
//     >
//       <p className="text-[#8B0008] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
//         Who We Are
//       </p>

//       <h2 className="text-3xl md:text-4xl xl:text-5xl font-serif text-[#2D2926] leading-[1.1] mb-7">
//         Rooted in tradition,
//         <span className="block italic text-[#8B5A2B]">
//           created for today.
//         </span>
//       </h2>

//       <p className="text-neutral-600 leading-8 text-base md:text-lg max-w-xl">
//         At The Alchemist’s Pantry, we bring together authenticity,
//         convenience and carefully curated ingredients to make everyday
//         cooking richer and more rewarding.
//       </p>

//       <div className="mt-10 w-24 h-px bg-[#8B5A2B]" />
//     </motion.div>

//     {/* Values List */}
//     <div className="border-t border-[#DDD4C8]">
//       {aboutValues.map((item, index) => (
//         <motion.article
//           key={item.id}
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: index * 0.06 }}
//           className="group grid grid-cols-[45px_1fr] md:grid-cols-[70px_0.7fr_1.3fr] gap-4 md:gap-8 py-8 md:py-10 border-b border-[#DDD4C8]"
//         >
//           <span className="text-xs font-semibold tracking-widest text-[#A89A8B] pt-1">
//             {item.id}
//           </span>

//           <div>
//             <h3 className="text-xl md:text-2xl font-serif text-[#2D2926] mb-2">
//               {item.name}
//             </h3>

//             <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B5A2B]">
//               {item.type}
//             </p>
//           </div>

//           <p className="col-start-2 md:col-start-auto text-neutral-600 leading-7 text-sm md:text-base max-w-2xl">
//             {item.desc}
//           </p>
//         </motion.article>
//       ))}
//     </div>
//   </div>
// </section>

// {/* Separate What We Offer Section */}
// <section className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-[#2F2118] text-white">
//   {/* Decorative Background */}
//   <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#B9832B]/20 blur-[100px]" />
//   <div className="absolute -bottom-40 -left-20 w-[380px] h-[380px] rounded-full bg-[#8B0008]/25 blur-[100px]" />

//   <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
//     {/* Heading */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14 md:mb-20">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         <p className="text-[#E8C98D] text-xs font-semibold uppercase tracking-[0.32em] mb-5">
//           What We Offer
//         </p>

//         <h2 className="text-3xl md:text-4xl xl:text-5xl font-serif leading-tight">
//           A pantry for every
//           <span className="block italic text-[#E8C98D]">
//             Indian kitchen.
//           </span>
//         </h2>
//       </motion.div>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1 }}
//         className="text-white/70 leading-8 text-sm md:text-lg max-w-2xl lg:ml-auto"
//       >
//         Our growing range brings together traditional favourites and modern
//         kitchen essentials, thoughtfully created for everyday meals,
//         celebrations and convenient cooking.
//       </motion.p>
//     </div>

//     {/* Product Category Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/15 border border-white/15 rounded-2xl overflow-hidden">
//       {productCategories.map((item, index) => (
//         <motion.div
//           key={item.id}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: index * 0.05 }}
//           className={`group relative min-h-[260px] bg-[#38271D] p-7 md:p-9 hover:bg-[#443025] transition-colors duration-500 ${
//             index === productCategories.length - 1
//               ? "md:col-span-2 xl:col-span-3"
//               : ""
//           }`}
//         >
//           <div className="flex items-start justify-between gap-5 mb-10">
//             <span className="text-[11px] tracking-[0.2em] text-white/40">
//               {item.id}
//             </span>

//             <span className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#E8C98D]">
//               {item.count}
//             </span>
//           </div>

//           <div className="mt-auto">
//             <h3 className="text-xl md:text-2xl font-serif mb-4">
//               {item.name}
//             </h3>

//             <p className="text-white/60 text-sm leading-7 max-w-md">
//               {item.desc}
//             </p>

//             <div className="mt-7 h-px w-10 bg-[#E8C98D] transition-all duration-500 group-hover:w-20" />
//           </div>
//         </motion.div>
//       ))}
//     </div>

//     {/* Bottom CTA */}
//     <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//       <p className="text-white/60 text-sm md:text-base">
//         Carefully selected ingredients for flavourful everyday cooking.
//       </p>

//       <Link
//         href="/products"
//         className="inline-flex w-fit items-center justify-center rounded-full bg-[#E8C98D] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#2F2118] transition-transform duration-300 hover:-translate-y-1"
//       >
//         Explore Our Pantry
//       </Link>
//     </div>
//   </div>
// </section>





//       </div>
//     </section>
//   );
// };

// export default AboutSection;