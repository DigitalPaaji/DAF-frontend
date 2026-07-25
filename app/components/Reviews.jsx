"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { base_url, img_url } from "./Store/utils";

const StyleVideo = ({ item }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    video.play().catch(() => {});
  };

  const handlePause = () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  if (!item?.product?.slug) return null;

  return (
    <Link
      href={`/product/${item.product.slug}`}
      aria-label={`View ${item.product.name}`}
      className="group block"
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      onFocus={handlePlay}
      onBlur={handlePause}
    >
      <article className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-stone-100 shadow-sm">
        <video
          ref={videoRef}
          src={`${img_url}${item.video}`}
          poster={`${img_url}${item.product.thumbnail}`}
          muted
          playsInline
          loop
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />

        {/* Play icon */}
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition duration-300 group-hover:scale-90 group-hover:opacity-0">
          <span className="ml-1 text-lg">▶</span>
        </div>

        {/* Product details */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4">
          <p className="line-clamp-2 text-sm font-semibold leading-5 text-white sm:text-base">
            {item.product.name}
          </p>

          <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/80 transition group-hover:text-white">
            View Product
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
};

export default function StyleEdit() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${base_url}/cache/videos/random`
      );

      if (response.data?.success) {
        setVideos(
          Array.isArray(response.data.videos)
            ? response.data.videos
            : []
        );
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (!loading && videos.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#fffdf8] px-4 py-12 md:px-12 md:py-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a45a27]">
            Watch & Shop
          </p>

          <h2 className="font-serif text-2xl text-[#244d38] md:text-4xl">
            Experience Our Products
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-stone-600 md:text-lg">
            Watch our products in action and discover your next
            favourite.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[9/16] animate-pulse rounded-2xl bg-stone-200"
              />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={14}
            slidesPerView={1.5}
            grabCursor
            autoplay={{
              delay: 3500,
              disableOnInteraction: true
            }}
            breakpoints={{
              480: {
                slidesPerView: 2.2,
                spaceBetween: 14
              },
              640: {
                slidesPerView: 2.8,
                spaceBetween: 16
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 18
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20
              }
            }}
          >
            {videos.map((item) => (
              <SwiperSlide key={item._id}>
                <StyleVideo item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
// 7599