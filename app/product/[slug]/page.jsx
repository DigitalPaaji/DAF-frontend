"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaHeart,
  FaLeaf,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaShieldAlt,
  FaStar,
  FaTimes,
  FaTruck,
} from "react-icons/fa";

import { IoIosArrowForward } from "react-icons/io";

import { staticProducts } from "../../data/products";

const accordionItems = [
  { id: "description", title: "Product Description" },
  { id: "ingredients", title: "Ingredients" },
  { id: "usage", title: "How to Use" },
  { id: "nutrition", title: "Nutrition Information" },
  { id: "storage", title: "Storage & Shelf Life" },
  { id: "shipping", title: "Shipping & Returns" },
];

const ProductDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;

  const product = useMemo(
    () => staticProducts.find((item) => item.slug === slug),
    [slug],
  );

  const productImages = useMemo(() => {
    if (!product) return [];

    if (Array.isArray(product.images) && product.images.length > 0) {
      return product.images;
    }

    return product.image ? [product.image] : [];
  }, [product]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || "100g",
  );

  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeAccordion, setActiveAccordion] =
    useState("description");

  const [pincode, setPincode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    const sameCategory = staticProducts.filter(
      (item) =>
        item.category === product.category &&
        item.slug !== product.slug,
    );

    const otherProducts = staticProducts.filter(
      (item) =>
        item.category !== product.category &&
        item.slug !== product.slug,
    );

    return [...sameCategory, ...otherProducts].slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FDFBF7] px-4">
        <div className="max-w-md text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#8B5A2B]">
            Product Not Found
          </p>

          <h1 className="mb-7 font-serif text-4xl text-[#3A2A21]">
            This product is currently unavailable.
          </h1>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-[#3A2A21] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            Return to Products
            <FaArrowRight size={10} />
          </Link>
        </div>
      </main>
    );
  }

  const originalPrice = Number(
    String(product.oldPrice || product.price).replace(/[^0-9.]/g, ""),
  );

  const sellingPrice = Number(
    String(product.price).replace(/[^0-9.]/g, ""),
  );

  const savingAmount = Math.max(originalPrice - sellingPrice, 0);

  const discountPercentage =
    originalPrice > sellingPrice
      ? Math.round(
          ((originalPrice - sellingPrice) / originalPrice) * 100,
        )
      : 0;

  const handleAddToCart = () => {
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2500);
  };

  const handleDeliveryCheck = () => {
    if (!/^[1-9][0-9]{5}$/.test(pincode)) {
      setDeliveryMessage("Please enter a valid 6-digit pincode.");
      return;
    }

    setDeliveryMessage(
      "Delivery is available. Estimated arrival within 3–5 business days.",
    );
  };

  const getAccordionContent = (itemId) => {
    switch (itemId) {
      case "description":
        return product.description;

      case "ingredients":
        return (
          product.ingredients ||
          "Carefully selected spices and natural ingredients blended for authentic flavour."
        );

      case "usage":
        return (
          product.usage ||
          "Use according to taste while preparing tea, curries, gravies or everyday Indian dishes."
        );

      case "nutrition":
        return (
          product.nutritionalInfo ||
          "Nutritional values may vary depending on the selected pack size and serving quantity."
        );

      case "storage":
        return `${
          product.storage ||
          "Store in a cool and dry place. Keep the pack tightly sealed after opening."
        } Shelf life: ${product.shelfLife || "12 months"}.`;

      case "shipping":
        return "Orders are usually dispatched within 1–2 business days. Returns are accepted according to our return and refund policy.";

      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#312A26]">
      {/* Breadcrumb */}
      <section className="border-b border-[#DDD4C8] px-4 pb-5 pt-28 md:px-12 lg:pt-32 xl:px-72">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#312A26]/45">
          <Link href="/" className="hover:text-[#8B5A2B]">
            Home
          </Link>

          <IoIosArrowForward size={10} />

          <Link href="/products" className="hover:text-[#8B5A2B]">
            Products
          </Link>

          <IoIosArrowForward size={10} />

          <span className="text-[#8B5A2B]">{product.name}</span>
        </div>
      </section>

      {/* Product Detail */}
      <section className="px-4 py-8 md:px-12 md:py-14 xl:px-72">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <div className="relative overflow-hidden">
              {/* {product.badge && (
                <span className="absolute left-5 top-5 z-20 rounded-full bg-[#8B5A2B] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                  {product.badge}
                </span>
              )} */}

              <button
                type="button"
                onClick={() => setWishlisted((prev) => !prev)}
                className={`absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border bg-white/90 shadow-sm backdrop-blur transition-colors ${
                  wishlisted
                    ? "border-red-400 text-red-500"
                    : "border-white text-[#3A2A21] hover:bg-[#3A2A21] hover:text-white"
                }`}
                aria-label="Toggle wishlist"
              >
                {wishlisted ? (
                  <FaHeart size={16} />
                ) : (
                  <FaRegHeart size={16} />
                )}
              </button>

              <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                navigation={{
                  prevEl: ".product-main-prev",
                  nextEl: ".product-main-next",
                }}
                onSlideChange={(swiper) =>
                  setActiveImage(swiper.realIndex)
                }
                spaceBetween={10}
                slidesPerView={1}
                className="product-main-swiper"
              >
                {productImages.map((image, index) => (
                  <SwiperSlide key={`${image}-${index}`}>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveImage(index);
                        setPreviewOpen(true);
                      }}
                      className="relative block aspect-square w-full cursor-zoom-in sm:aspect-[6/5]"
                    >
                      <Image
                        src={image}
                        alt={`${product.name} image ${index + 1}`}
                        fill
                        priority={index === 0}
                        unoptimized
                        sizes="(max-width: 1280px) 100vw, 50vw"
                        className="object-contain p-8 sm:p-12 lg:p-16"
                      />

                      <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3A2A21] shadow-md">
                        <FaExpand size={13} />
                      </span>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>

              {productImages.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    className="product-main-prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DDD4C8] bg-white/90 text-[#3A2A21] shadow-sm backdrop-blur transition hover:bg-[#3A2A21] hover:text-white"
                  >
                    <FaChevronLeft size={12} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next image"
                    className="product-main-next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DDD4C8] bg-white/90 text-[#3A2A21] shadow-sm backdrop-blur transition hover:bg-[#3A2A21] hover:text-white"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </>
              )}

              <span className="absolute bottom-5 left-5 z-20 rounded-full bg-[#3A2A21] px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white">
                {activeImage + 1} / {productImages.length}
              </span>
            </div>

            {/* Thumbnails */}
            {productImages.length > 1 && (
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                  640: { slidesPerView: 5 },
                  1024: { slidesPerView: 4 },
                }}
                className="mt-4"
              >
                {productImages.map((image, index) => (
                  <SwiperSlide key={`thumb-${image}-${index}`}>
                    <button
                      type="button"
                      className={`relative aspect-square w-full overflow-hidden rounded-xl border bg-[#F2EFEB] transition-all ${
                        activeImage === index
                          ? "border-[#3A2A21]"
                          : "border-[#DDD4C8] opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        fill
                        unoptimized
                        sizes="120px"
                        className="object-contain p-3"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="xl:sticky xl:top-28 xl:self-start"
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8B5A2B]">
              {product.category}
            </p>

            <h1 className="mb-4 font-serif text-4xl leading-tight text-[#2F2118] md:text-5xl">
              {product.name}
            </h1>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-[#B9832B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} size={12} />
                ))}
              </div>

              <button
                type="button"
                className="text-xs text-[#312A26]/55 underline underline-offset-4"
              >
                {product.rating} ({product.reviews} reviews)
              </button>

              <span className="text-[#312A26]/20">|</span>

              <span className="flex items-center gap-2 text-xs font-medium text-[#667521]">
                <span className="h-2 w-2 rounded-full bg-[#7A8B2E]" />
                In stock
              </span>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-[#DDD4C8] pb-6">
              <span className="text-3xl font-semibold text-[#3A2A21]">
                {product.price}
              </span>

              {product.oldPrice && (
                <span className="text-lg text-[#3A2A21]/35 line-through">
                  {product.oldPrice}
                </span>
              )}

              {discountPercentage > 0 && (
                <span className="rounded-full bg-[#7A8B2E]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#667521]">
                  {discountPercentage}% Off
                </span>
              )}

              {savingAmount > 0 && (
                <p className="w-full text-xs text-[#667521]">
                  You save ${savingAmount.toFixed(2)}
                </p>
              )}
            </div>

            <p className="mb-7 text-sm leading-7 text-[#312A26]/65 md:text-base">
              {product.description}
            </p>

            {/* Highlights */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(product.highlights || product.benefits || []).map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-[#312A26]/70"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7A8B2E]/10 text-[#7A8B2E]">
                      <FaCheck size={8} />
                    </span>

                    {item}
                  </div>
                ),
              )}
            </div>

            {/* Size */}
            <div className="mb-7">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Select Pack Size
                </p>

                <span className="text-xs font-semibold text-[#8B5A2B]">
                  {selectedSize}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[68px] rounded-lg border px-4 py-3 text-xs font-semibold transition ${
                      selectedSize === size
                        ? "border-[#3A2A21] bg-[#3A2A21] text-white"
                        : "border-[#CFC4BA] bg-white hover:border-[#3A2A21]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Cart */}
            <div className="mb-4 flex gap-3">
              <div className="flex h-13 items-center overflow-hidden rounded-lg border border-[#3A2A21] bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((prev) => Math.max(1, prev - 1))
                  }
                  className="flex h-full w-12 items-center justify-center hover:bg-[#E8E3DF]"
                >
                  <FaMinus size={10} />
                </button>

                <span className="flex h-full min-w-12 items-center justify-center border-x border-[#3A2A21]/15 text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex h-full w-12 items-center justify-center hover:bg-[#E8E3DF]"
                >
                  <FaPlus size={10} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex min-h-13 flex-1 items-center justify-center gap-3 rounded-lg px-5 text-xs font-bold uppercase tracking-[0.18em] text-white transition ${
                  addedToCart
                    ? "bg-[#7A8B2E]"
                    : "bg-[#3A2A21] hover:bg-[#8B5A2B]"
                }`}
              >
                {addedToCart ? (
                  <>
                    <FaCheck size={10} />
                    Added to Cart
                  </>
                ) : (
                  "+ Add to Cart"
                )}
              </button>
            </div>

            <button
              type="button"
              className="mb-6 w-full rounded-lg border border-[#3A2A21] py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#3A2A21] transition hover:bg-[#3A2A21] hover:text-white"
            >
              Buy It Now
            </button>

            {/* Offers */}
            <div className="mb-7 rounded-2xl border border-[#DDD4C8] bg-[#F4F1ED] p-5">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Available Offers
              </p>

              <div className="space-y-3 text-sm text-[#312A26]/65">
                <p>
                  <strong className="text-[#312A26]">WELCOME10:</strong>{" "}
                  Get 10% off on your first order.
                </p>

                <p>
                  Free shipping on eligible orders above the minimum
                  cart value.
                </p>
              </div>
            </div>

            {/* Delivery */}
            <div className="mb-8 border-y border-[#DDD4C8] py-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em]">
                Check Delivery
              </p>

              <div className="flex overflow-hidden rounded-lg border border-[#CFC4BA] bg-white">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(event) =>
                    setPincode(
                      event.target.value.replace(/\D/g, ""),
                    )
                  }
                  placeholder="Enter pincode"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={handleDeliveryCheck}
                  className="px-5 text-xs font-bold uppercase tracking-wider text-[#8B5A2B]"
                >
                  Check
                </button>
              </div>

              {deliveryMessage && (
                <p className="mt-3 text-xs leading-5 text-[#667521]">
                  {deliveryMessage}
                </p>
              )}
            </div>

            {/* Product Metadata */}
            <dl className="grid grid-cols-[100px_1fr] gap-x-5 gap-y-3 text-xs">
              <dt className="text-[#312A26]/45">SKU</dt>
              <dd className="font-medium">
                {product.sku || `TAP-${product.id}`}
              </dd>

              <dt className="text-[#312A26]/45">Category</dt>
              <dd>{product.category}</dd>

              <dt className="text-[#312A26]/45">Origin</dt>
              <dd>{product.origin || "India"}</dd>

              <dt className="text-[#312A26]/45">Shelf Life</dt>
              <dd>{product.shelfLife || "12 months"}</dd>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Product Information */}
      <section className="px-4 pb-16 md:px-12 md:pb-24 xl:px-72">
        <div className="grid grid-cols-1 gap-10 border-t border-[#DDD4C8] pt-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8B5A2B]">
              More Information
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#2F2118] md:text-4xl">
              Everything you need to know.
            </h2>
          </div>

          <div className="border-t border-[#DDD4C8]">
            {accordionItems.map((item) => {
              const active = activeAccordion === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b border-[#DDD4C8]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveAccordion(active ? "" : item.id)
                    }
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span
                      className={`text-sm font-semibold ${
                        active
                          ? "text-[#3A2A21]"
                          : "text-[#312A26]/55"
                      }`}
                    >
                      {item.title}
                    </span>

                    <span className="text-xl font-light">
                      {active ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-6 text-sm leading-7 text-[#312A26]/65">
                          {getAccordionContent(item.id)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="px-4 pb-20 md:px-12 xl:px-72">
        <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#DDD4C8] bg-white md:grid-cols-3">
          <TrustItem
            icon={FaLeaf}
            title="Carefully Selected"
            description="Ingredients chosen for their authentic taste, aroma and quality."
          />

          <TrustItem
            icon={FaTruck}
            title="Secure Delivery"
            description="Products are carefully packed and delivered safely to your doorstep."
            border
          />

          <TrustItem
            icon={FaShieldAlt}
            title="Secure Payments"
            description="Your transactions and personal information remain protected."
          />
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection product={product} />

      {/* Related Products */}
      <section className="bg-[#E8E3DF]/55 px-4 py-16 md:px-12 md:py-24 xl:px-72">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8B5A2B]">
              You May Also Like
            </p>

            <h2 className="font-serif text-3xl text-[#2F2118] md:text-4xl">
              Related products.
            </h2>
          </div>

          <Link
            href="/products"
            className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5A2B] sm:inline-flex"
          >
            View All
            <FaArrowRight size={10} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <article
              key={item._id}
              className="group flex flex-col rounded-xl bg-white p-3 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-4"
            >
              <Link
                href={`/product/${item.slug}`}
                className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-[#F5F3F0]"
              >
                <Image
                  src={item.images?.[0] || item.image}
                  alt={item.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8B5A2B]">
                {item.category}
              </p>

              <Link href={`/product/${item.slug}`}>
                <h3 className="mb-3 line-clamp-2 text-sm font-semibold leading-5 text-[#3A2A21] sm:text-base">
                  {item.name}
                </h3>
              </Link>

              <div className="mt-auto flex items-center gap-2">
                <span className="font-semibold">{item.price}</span>

                {item.oldPrice && (
                  <span className="text-xs text-[#3A2A21]/40 line-through">
                    {item.oldPrice}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Fullscreen Image Preview */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              type="button"
              onClick={() => setPreviewOpen(false)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black"
              aria-label="Close image preview"
            >
              <FaTimes size={15} />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0
                    ? productImages.length - 1
                    : prev - 1,
                )
              }
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black md:left-8"
            >
              <FaArrowLeft size={13} />
            </button>

            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[82vh] w-[88vw] max-w-6xl"
            >
              <Image
                src={productImages[activeImage]}
                alt={`${product.name} enlarged`}
                fill
                unoptimized
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={() =>
                setActiveImage((prev) =>
                  prev === productImages.length - 1
                    ? 0
                    : prev + 1,
                )
              }
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black md:right-8"
            >
              <FaArrowRight size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

const TrustItem = ({
  icon: Icon,
  title,
  description,
  border = false,
}) => (
  <div
    className={`flex items-start gap-4 p-7 md:p-8 ${
      border
        ? "border-y border-[#DDD4C8] md:border-x md:border-y-0"
        : ""
    }`}
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8E3DF] text-[#8B5A2B]">
      <Icon size={16} />
    </div>

    <div>
      <h3 className="mb-2 text-sm font-semibold text-[#3A2A21]">
        {title}
      </h3>

      <p className="text-xs leading-6 text-[#312A26]/55">
        {description}
      </p>
    </div>
  </div>
);

const ReviewsSection = ({ product }) => {
  const rating = Number(product.rating || 4.8);

  const ratingBars = [
    { star: 5, value: 82 },
    { star: 4, value: 13 },
    { star: 3, value: 4 },
    { star: 2, value: 1 },
    { star: 1, value: 0 },
  ];

  return (
    <section className="border-t border-[#DDD4C8] px-4 py-16 md:px-12 md:py-24 xl:px-72">
      <div className="mb-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8B5A2B]">
          Customer Feedback
        </p>

        <h2 className="font-serif text-3xl text-[#2F2118] md:text-4xl">
          Ratings & Reviews
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <div className="flex items-end gap-2">
              <span className="font-serif text-7xl leading-none text-[#2F2118]">
                {rating}
              </span>

              <span className="pb-2 text-xl text-[#312A26]/35">
                /5
              </span>
            </div>

            <div className="my-4 flex gap-1 text-[#B9832B]">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} size={14} />
              ))}
            </div>

            <p className="text-sm text-[#312A26]/55">
              Based on {product.reviews || 50} verified reviews
            </p>
          </div>

          <div className="space-y-3">
            {ratingBars.map((item) => (
              <div
                key={item.star}
                className="grid grid-cols-[20px_1fr_34px] items-center gap-3"
              >
                <span className="text-xs font-semibold">
                  {item.star}
                </span>

                <div className="h-2 overflow-hidden rounded-full bg-[#E8E3DF]">
                  <div
                    className="h-full rounded-full bg-[#3A2A21]"
                    style={{ width: `${item.value}%` }}
                  />
                </div>

                <span className="text-right text-[10px] text-[#312A26]/40">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] bg-[#F4F1ED] p-7 md:p-10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-semibold text-[#3A2A21]">
                Priya Sharma
              </p>

              <p className="text-xs text-[#312A26]/45">
                Verified purchase
              </p>
            </div>

            <div className="flex gap-1 text-[#B9832B]">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} size={12} />
              ))}
            </div>
          </div>

          <h3 className="mb-3 font-serif text-xl">
            Excellent aroma and authentic flavour
          </h3>

          <p className="text-sm leading-7 text-[#312A26]/65">
            The quality feels premium and the flavour is well balanced.
            The packaging was secure, and the product was delivered on
            time. It has become part of our everyday kitchen routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;