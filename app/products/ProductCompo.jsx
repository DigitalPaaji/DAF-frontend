"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaHeart,
  FaRegHeart,
  FaSlidersH,
  FaTimes,
  FaThLarge,
  FaList,
} from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";

const categoryOptions = [
  { label: "All Products", value: "" },
  { label: "Tea Masala", value: "tea-masala" },
  { label: "Kitchen Masalas", value: "kitchen-masalas" },
  { label: "Pickle Masala", value: "pickle-masala" },
  { label: "Flours", value: "flours" },
  { label: "Pure Spices", value: "pure-spices" },
  { label: "Pickles", value: "pickles" },
  { label: "Tadka Gravy", value: "tadka-gravy" },
];

const weightOptions = ["100g", "250g", "500g", "1kg"];

const sortOptions = [
  { label: "Default Sorting", value: "" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest First", value: "newest" },
  { label: "Name: A to Z", value: "name-asc" },
];


  import { staticProducts } from "../data/products";


//   const staticProducts = products.map((product) => ({
//   ...product,
//   _id: String(product.id),

//   slug:
//     product.slug ||
//     product.name
//       .toLowerCase()
//       .replace(/&/g, "and")
//       .replace(/\//g, "-")
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/^-|-$/g, ""),

//   numericPrice: Number(
//     String(product.price).replace(/[^0-9.]/g, "")
//   ),

//   oldPrice:
//     product.oldPrice ||
//     `$${(
//       Number(String(product.price).replace(/[^0-9.]/g, "")) + 8
//     ).toFixed(2)}`,

//   sizes: product.sizes || ["100g", "250g", "500g", "1kg"],
// }));

const ProductCompo = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

const productsPerPage = 8;

const currentPage = Number(searchParams.get("page") || 1);

  const [selectedSizes, setSelectedSizes] = useState({});
  const [wishlistItems, setWishlistItems] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [viewType, setViewType] = useState("grid");

  const selectedCategory = searchParams.get("category") || "";
  const selectedWeight = searchParams.get("weight") || "";
  const selectedSort = searchParams.get("sort") || "";
  const minimumPrice = searchParams.get("minPrice") || "";
  const maximumPrice = searchParams.get("maxPrice") || "";

  const categoryTitle = useMemo(() => {
    const selected = categoryOptions.find(
      (category) => category.value === selectedCategory,
    );

    return selected?.label || "Shop Products";
  }, [selectedCategory]);



  const updateSearchParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    if (key !== "page") {
      params.set("page", "1");
    }

    router.push(`/products?${params.toString()}`, {
      scroll: false,
    });
  };

  const filteredProducts = useMemo(() => {
  let filtered = [...staticProducts];

  if (selectedCategory) {
    const selectedCategoryName = categoryOptions.find(
      (item) => item.value === selectedCategory
    )?.label;

    filtered = filtered.filter(
      (product) =>
        product.category.toLowerCase() ===
        selectedCategoryName?.toLowerCase()
    );
  }

  if (minimumPrice) {
    filtered = filtered.filter(
      (product) => product.numericPrice >= Number(minimumPrice)
    );
  }

  if (maximumPrice) {
    filtered = filtered.filter(
      (product) => product.numericPrice <= Number(maximumPrice)
    );
  }

  if (selectedSort === "price-asc") {
    filtered.sort((a, b) => a.numericPrice - b.numericPrice);
  }

  if (selectedSort === "price-desc") {
    filtered.sort((a, b) => b.numericPrice - a.numericPrice);
  }

  if (selectedSort === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (selectedSort === "newest") {
    filtered.sort((a, b) => b.id - a.id);
  }

  return filtered;
}, [
  selectedCategory,
  minimumPrice,
  maximumPrice,
  selectedSort,
]);

const totalPages = Math.max(
  1,
  Math.ceil(filteredProducts.length / productsPerPage)
);

const safeCurrentPage = Math.min(currentPage, totalPages);

const startIndex = (safeCurrentPage - 1) * productsPerPage;

const visibleProducts = filteredProducts.slice(
  startIndex,
  startIndex + productsPerPage
);

const pageMeta = {
  page: safeCurrentPage,
  totalPages,
  totalProducts: filteredProducts.length,
};

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pageMeta.totalPages) return;

    updateSearchParams("page", String(newPage));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const clearFilters = () => {
    router.push("/products");
    setMobileFiltersOpen(false);
  };

  const handleWishlistToggle = (productId) => {
    setWishlistItems((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId],
    );
  };

  const handleSizeChange = (productId, value) => {
    setSelectedSizes((previous) => ({
      ...previous,
      [productId]: value,
    }));
  };

  // const getProductImage = (product) => {
  //   const imagePath = product?.images?.[0];

  //   if (!imagePath) {
  //     return "/Images/product-placeholder.webp";
  //   }

  //   if (
  //     imagePath.startsWith("http://") ||
  //     imagePath.startsWith("https://")
  //   ) {
  //     return imagePath;
  //   }

  //   return `${img_url}${imagePath}`;
  // };

  const getVariant = (product) => {
    const variants = Array.isArray(product?.variants)
      ? product.variants
      : [];

    const selectedSize =
      selectedSizes[product._id] ||
      variants[0]?.size ||
      variants[0]?.weight ||
      "";

    return (
      variants.find(
        (variant) =>
          variant.size === selectedSize ||
          variant.weight === selectedSize,
      ) ||
      variants[0] ||
      {}
    );
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#312A26]">
      {/* Category Banner */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-4 py-20 md:min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/Images/banner.webp"
            alt={categoryTitle}
            fill
            priority
            className="object-cover"
          />

          {/* <div className="absolute inset-0 bg-[#E8E3DF]/70" /> */}
        </div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-serif text-3xl text-[#3A2A21] md:text-5xl"
          >
            {categoryTitle}
          </motion.h1>

          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-[#3A2A21]/65">
            <Link href="/" className="hover:text-[#8B5A2B]">
              Home
            </Link>

            <span>/</span>

            <span>Shop</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-12 md:py-16 xl:px-72">
        {/* Category Navigation */}
        <div className="mb-9 overflow-hidden border-b border-[#DDD4C8]">
          <div className="flex justify-center md:justify-start w-full items-center flex-wrap gap-4 lg:gap-7">
            {categoryOptions.map((category) => {
              const active =
                selectedCategory === category.value ||
                (!selectedCategory && !category.value);

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() =>
                    updateSearchParams("category", category.value)
                  }
                  className={`relative pb-2 text-[14px] font-semibold capitalize tracking-[0.05em] transition-colors ${
                    active
                      ? "text-[#8B5A2B]"
                      : "text-[#312A26]/55 hover:text-[#312A26]"
                  }`}
                >
                  {category.label}

                  {active && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8B5A2B]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Toolbar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-5 border-b border-[#DDD4C8] pb-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 border border-[#3A2A21] px-4 py-2.5 text-xs font-semibold uppercase tracking-widest lg:hidden"
            >
              <FaSlidersH size={12} />
              Filters
            </button>

            <p className="text-xs text-[#312A26]/60 sm:text-sm">
              Showing{" "}
              <span className="font-semibold text-[#312A26]">
                {visibleProducts.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-[#312A26]">
                {pageMeta.totalProducts}
              </span>{" "}
              results
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(event) =>
                  updateSearchParams("sort", event.target.value)
                }
                className="appearance-none border-0 bg-transparent py-2 pl-2 pr-8 text-xs text-[#312A26] outline-none sm:text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <IoIosArrowDown className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-sm" />
            </div>

            <div className="hidden items-center gap-3 border-l border-[#DDD4C8] pl-4 sm:flex">
              <button
                type="button"
                onClick={() => setViewType("grid")}
                className={
                  viewType === "grid"
                    ? "text-[#8B5A2B]"
                    : "text-[#312A26]/35"
                }
              >
                <FaThLarge size={14} />
              </button>

              <button
                type="button"
                onClick={() => setViewType("list")}
                className={
                  viewType === "list"
                    ? "text-[#8B5A2B]"
                    : "text-[#312A26]/35"
                }
              >
                <FaList size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[250px_1fr]">
          {/* Desktop Filters */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <FilterContent
                selectedCategory={selectedCategory}
                selectedWeight={selectedWeight}
                minimumPrice={minimumPrice}
                maximumPrice={maximumPrice}
                updateSearchParams={updateSearchParams}
                clearFilters={clearFilters}
              />
            </div>
          </aside>

          {/* Product Area */}
          <div>
        { visibleProducts.length === 0 ? (
              <div className="rounded-2xl border border-[#DDD4C8] bg-white px-6 py-20 text-center">
                <h2 className="mb-3 font-serif text-2xl">
                  No products found
                </h2>

                <p className="mb-6 text-sm text-[#312A26]/55">
                  Try changing or clearing your selected filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="border border-[#3A2A21] px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-[#3A2A21] hover:text-white"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                <div
                  className={
                    viewType === "grid"
                      ? "grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4"
                      : "grid grid-cols-1 gap-5"
                  }
                >
                 {visibleProducts.map((product, index) => {
                    const isWishlisted = wishlistItems.includes(
                      product._id,
                    );

                    const variants = Array.isArray(product.variants)
                      ? product.variants
                      : [];

                    const selectedVariant = getVariant(product);

                    const price =
                      selectedVariant.salePrice ||
                      selectedVariant.price ||
                      selectedVariant.mrp ||
                      product.price ||
                      0;

                    const oldPrice =
                      selectedVariant.mrp &&
                      Number(selectedVariant.mrp) > Number(price)
                        ? selectedVariant.mrp
                        : product.oldPrice;

                    return (
                      <ProductCard
                        key={product._id}
                        product={product}
                        index={index}
                        viewType={viewType}
                        isWishlisted={isWishlisted}
                        variants={variants}
                        selectedSizes={selectedSizes}
                        selectedVariant={selectedVariant}
                        price={price}
                        oldPrice={oldPrice}
                        // productImage={getProductImage(product)}
                        handleWishlistToggle={handleWishlistToggle}
                        handleSizeChange={handleSizeChange}
                      />
                    );
                  })}
                </div>
              </AnimatePresence>
            )}

            {/* Pagination */}
            {pageMeta.totalPages > 1 && (
                <div className="mt-14 flex flex-wrap items-center justify-center gap-2 border-t border-[#DDD4C8] pt-9">
                  <button
                    type="button"
                    onClick={() =>
                      handlePageChange(pageMeta.page - 1)
                    }
                    disabled={pageMeta.page <= 1}
                    className="flex h-10 w-10 items-center justify-center border border-[#DDD4C8] transition-colors hover:border-[#3A2A21] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <IoIosArrowBack />
                  </button>

                  {Array.from(
                    { length: pageMeta.totalPages },
                    (_, index) => index + 1,
                  ).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() =>
                        handlePageChange(pageNumber)
                      }
                      className={`flex h-10 min-w-10 items-center justify-center border px-3 text-xs font-semibold transition-colors ${
                        pageMeta.page === pageNumber
                          ? "border-[#3A2A21] bg-[#3A2A21] text-white"
                          : "border-[#DDD4C8] hover:border-[#3A2A21]"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() =>
                      handlePageChange(pageMeta.page + 1)
                    }
                    disabled={
                      pageMeta.page >= pageMeta.totalPages
                    }
                    className="flex h-10 w-10 items-center justify-center border border-[#DDD4C8] transition-colors hover:border-[#3A2A21] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Sidebar */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close filters"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 z-[90] bg-black/45 lg:hidden"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 left-0 top-0 z-[100] w-[88%] max-w-sm overflow-y-auto bg-[#FDFBF7] p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between border-b border-[#DDD4C8] pb-5">
                <h2 className="font-serif text-2xl">Filters</h2>

                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8E3DF]"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              <FilterContent
                selectedCategory={selectedCategory}
                selectedWeight={selectedWeight}
                minimumPrice={minimumPrice}
                maximumPrice={maximumPrice}
                updateSearchParams={updateSearchParams}
                clearFilters={clearFilters}
              />

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="mt-8 w-full bg-[#3A2A21] px-5 py-4 text-xs font-bold uppercase tracking-widest text-white"
              >
                View Products
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

const ProductCard = ({
  product,
  index,
  viewType,
  isWishlisted,
  selectedSizes,
  handleWishlistToggle,
  handleSizeChange,
}) => {
  const selectedSize =
    selectedSizes[product._id] || product.sizes[0];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index * 0.03 }}
      className={`group overflow-hidden bg-white transition-all duration-500 hover:shadow-[0_18px_50px_rgba(58,42,33,0.10)] ${
        viewType === "list"
          ? "grid grid-cols-[130px_1fr] gap-4 rounded-xl p-3 sm:grid-cols-[220px_1fr] sm:p-5"
          : "flex h-full flex-col rounded-xl p-2.5 sm:p-4"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#F5F3F0] ${
          viewType === "list"
            ? "aspect-square rounded-lg"
            : "mb-4 aspect-square rounded-lg"
        }`}
      >
<Link href={`/product/${product.slug}`}>
  <img
    src={product.image || "/Images/product-placeholder.webp"}
    alt={product.name}
    className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
  />
</Link>

        <button
          type="button"
          onClick={() => handleWishlistToggle(product._id)}
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-colors sm:right-3 sm:top-3 sm:h-9 sm:w-9 ${
            isWishlisted
              ? "text-red-600"
              : "text-[#3A2A21] hover:bg-[#3A2A21] hover:text-white"
          }`}
        >
          {isWishlisted ? (
            <FaHeart size={14} />
          ) : (
            <FaRegHeart size={14} />
          )}
        </button>

        {product.badge && (
          <span className="absolute left-0 top-4 bg-[#8B5A2B] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B5A2B]">
          {product.category}
        </p>

        <Link href={`/product/${product.slug}`}>
          <h3 className="mb-2 line-clamp-2 text-sm font-semibold leading-5 text-[#3A2A21] transition-colors group-hover:text-[#8B5A2B] sm:text-base">
            {product.name}
          </h3>
        </Link>

        {viewType === "list" && (
          <p className="mb-4 hidden line-clamp-2 text-sm leading-6 text-[#312A26]/55 sm:block">
            {product.description}
          </p>
        )}

        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-[#3A2A21] sm:text-lg">
              {product.price}
            </span>

            {product.oldPrice && (
              <span className="text-xs text-[#3A2A21]/45 line-through sm:text-sm">
                {product.oldPrice}
              </span>
            )}
          </div>

          <div className="relative">
            <select
              value={selectedSize}
              onChange={(event) =>
                handleSizeChange(
                  product._id,
                  event.target.value
                )
              }
              className="appearance-none rounded-md border border-[#3A2A21]/35 bg-white py-1.5 pl-2.5 pr-7 text-[10px] text-[#3A2A21] outline-none sm:text-xs"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[11px]" />
          </div>
        </div>

        <button
          type="button"
          className="mt-auto w-full border border-[#3A2A21] py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#3A2A21] transition-colors hover:bg-[#3A2A21] hover:text-white sm:text-xs"
        >
          + Add To Cart
        </button>
      </div>
    </motion.article>
  );
};

const FilterContent = ({
  selectedCategory,
  selectedWeight,
  minimumPrice,
  maximumPrice,
  updateSearchParams,
  clearFilters,
}) => {
  const [localMinPrice, setLocalMinPrice] =
    useState(minimumPrice);
  const [localMaxPrice, setLocalMaxPrice] =
    useState(maximumPrice);

  useEffect(() => {
    setLocalMinPrice(minimumPrice);
    setLocalMaxPrice(maximumPrice);
  }, [minimumPrice, maximumPrice]);

  const applyPriceFilter = () => {
    updateSearchParams("minPrice", localMinPrice);
    updateSearchParams("maxPrice", localMaxPrice);
  };

  return (
    <div>
      <div className="mb-8 border-b border-[#DDD4C8] pb-8">
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">
          Categories
        </h3>

        <div className="space-y-3">
          {categoryOptions.map((category) => (
            <label
              key={category.label}
              className="flex cursor-pointer items-center justify-between gap-3 text-sm text-[#312A26]/65 transition-colors hover:text-[#8B5A2B]"
            >
              <span className="flex items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={
                    selectedCategory === category.value ||
                    (!selectedCategory &&
                      !category.value)
                  }
                  onChange={() =>
                    updateSearchParams(
                      "category",
                      category.value,
                    )
                  }
                  className="accent-[#8B5A2B]"
                />

                {category.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8 border-b border-[#DDD4C8] pb-8">
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">
          Weight
        </h3>

        <div className="flex flex-wrap gap-2">
          {weightOptions.map((weight) => (
            <button
              key={weight}
              type="button"
              onClick={() =>
                updateSearchParams(
                  "weight",
                  selectedWeight === weight ? "" : weight,
                )
              }
              className={`border px-3 py-2 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                selectedWeight === weight
                  ? "border-[#3A2A21] bg-[#3A2A21] text-white"
                  : "border-[#DDD4C8] hover:border-[#3A2A21]"
              }`}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 border-b border-[#DDD4C8] pb-8">
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">
          Price Range
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            value={localMinPrice}
            onChange={(event) =>
              setLocalMinPrice(event.target.value)
            }
            placeholder="Min ₹"
            className="w-full border border-[#DDD4C8] bg-transparent px-3 py-2.5 text-xs outline-none focus:border-[#8B5A2B]"
          />

          <input
            type="number"
            value={localMaxPrice}
            onChange={(event) =>
              setLocalMaxPrice(event.target.value)
            }
            placeholder="Max ₹"
            className="w-full border border-[#DDD4C8] bg-transparent px-3 py-2.5 text-xs outline-none focus:border-[#8B5A2B]"
          />
        </div>

        <button
          type="button"
          onClick={applyPriceFilter}
          className="mt-3 w-full bg-[#3A2A21] px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-white"
        >
          Apply Price
        </button>
      </div>

      <button
        type="button"
        onClick={clearFilters}
        className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B5A2B] underline underline-offset-4"
      >
        Clear All Filters
      </button>
    </div>
  );
};

const ProductSkeleton = ({ viewType }) => {
  return (
    <div
      className={
        viewType === "grid"
          ? "grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4"
          : "grid grid-cols-1 gap-5"
      }
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-white ${
            viewType === "list"
              ? "grid grid-cols-[130px_1fr] gap-4 p-3 sm:grid-cols-[220px_1fr]"
              : "rounded-xl p-3"
          }`}
        >
          <div
            className={`bg-[#E8E3DF] ${
              viewType === "list"
                ? "aspect-square"
                : "mb-4 aspect-square"
            }`}
          />

          <div className="flex flex-col justify-center">
            <div className="mb-3 h-4 w-3/4 rounded bg-[#E8E3DF]" />
            <div className="mb-5 h-3 w-1/2 rounded bg-[#E8E3DF]" />
            <div className="h-10 w-full rounded bg-[#E8E3DF]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCompo;