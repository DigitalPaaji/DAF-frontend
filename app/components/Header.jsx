"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight, FiShoppingBag, FiArrowUpRight } from "react-icons/fi";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { staticProducts } from "../data/products";
import { getCategory } from "./Store/slices/categorySlice";
import AuthPopUp from "./LoginPopUp";
import { toggle } from "./Store/slices/toggleUser";
import { getUser } from "./Store/slices/userSlice";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { base_url, img_url } from "./Store/utils";
import axios from "axios";
import Image from "next/image";
import ProductSearch from "./ProductSearch";



const CategoryMegaDropdown = () => {
  const { categories = [], error, loading } = useSelector(
    (state) => state.categories
  );

  const [catProduct, setCatProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Keeps already-fetched category products in memory so moving
  // between categories does not repeatedly hit the API.
  const productCacheRef = useRef({});

  useEffect(() => {
    if (!categories?.length) {
      setActiveCategory(null);
      setCatProduct([]);
      return;
    }

    const firstCategory = categories[0];

    setActiveCategory((current) => current || firstCategory);

    if (!productCacheRef.current[firstCategory._id]) {
      fetchProduct(firstCategory._id);
    } else {
      setCatProduct(productCacheRef.current[firstCategory._id]);
    }
  }, [categories]);

  const fetchProduct = async (categoryId) => {
    if (!categoryId) {
      setCatProduct([]);
      return;
    }

    // Use cached products when available.
    if (productCacheRef.current[categoryId]) {
      setCatProduct(productCacheRef.current[categoryId]);
      return;
    }

    try {
      setProductLoading(true);

      const response = await axios.get(
        `${base_url}/cache/product/random/${encodeURIComponent(categoryId)}`
      );

      const products = response?.data?.success
        ? response.data.products || []
        : [];

      productCacheRef.current[categoryId] = products;
      setCatProduct(products);
    } catch (error) {
      console.error("Category product fetch error:", error);

      productCacheRef.current[categoryId] = [];
      setCatProduct([]);
    } finally {
      setProductLoading(false);
    }
  };

  const handleCategoryHover = (category) => {
    if (!category?._id) return;

    setActiveCategory(category);
    fetchProduct(category._id);
  };

  const getActiveVariants = (item) =>
    item?.variants?.filter((variant) => variant?.isActive) || [];

  const getStartingPrice = (variants, field) => {
    const prices = variants
      ?.map((variant) => Number(variant?.[field]))
      .filter((price) => Number.isFinite(price) && price > 0);

    return prices?.length ? Math.min(...prices) : 0;
  };

  const formatPrice = (price) =>
    Number(price || 0).toLocaleString("en-IN");

  return (
    <div className="group relative">
      {/* ================= TRIGGER ================= */}
      <button
        type="button"
        className="
          flex items-center gap-1.5 py-2
          uppercase
          transition-colors duration-300
          hover:text-[#B9832B]
        "
        aria-haspopup="true"
      >
        Category

        <FiChevronDown
          size={14}
          className="
            transition-transform duration-300
            group-hover:rotate-180
          "
        />
      </button>

      {/* ================= MEGA MENU ================= */}
      <div
        className="
          invisible absolute left-1/2 top-full z-[80]
          w-[980px] -translate-x-1/2
          translate-y-3 pt-5
          opacity-0
          transition-all duration-300 ease-out
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <div
          className="
            relative overflow-hidden
            rounded-[22px]
            border border-neutral-200/80
            bg-white
            shadow-[0_25px_80px_rgba(0,0,0,0.16)]
          "
        >
          {/* Small top accent */}
          <div className="absolute left-1/2 top-0 h-[2px] w-20 -translate-x-1/2 rounded-full bg-[#B9832B]" />

          <div className="grid h-[475px] grid-cols-[255px_1fr]">
            {/* =====================================================
                LEFT CATEGORY SIDEBAR
            ====================================================== */}
            <aside className="relative flex min-h-0 flex-col border-r border-neutral-100 bg-[#faf9f6]">
              {/* Heading */}
              <div className="px-5 pb-3 pt-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#B9832B]">
                  Explore
                </p>

                <h3 className="mt-1 text-[18px] font-semibold tracking-tight text-neutral-900">
                  Categories
                </h3>
              </div>

              {/* Category list */}
              <div className="custom-thin-scroll min-h-0 flex-1 overflow-y-auto px-3 pb-5">
                {loading ? (
                  <div className="space-y-1.5">
                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                      <div
                        key={item}
                        className="h-[43px] animate-pulse rounded-xl bg-neutral-200/70"
                      />
                    ))}
                  </div>
                ) : error ? (
                  <div className="px-3 py-5 text-sm text-red-500">
                    Unable to load categories.
                  </div>
                ) : categories?.length ? (
                  <div className="space-y-1">
                    {categories.map((category) => {
                      const isActive =
                        activeCategory?._id === category?._id;

                      return (
                        <Link
                          key={category._id || category.slug}
                          href={`/products?category=${encodeURIComponent(
                            category.slug
                          )}`}
                          onMouseEnter={() =>
                            handleCategoryHover(category)
                          }
                          className={`
                            group/category
                            relative flex min-h-[43px]
                            items-center justify-between
                            gap-3 rounded-xl
                            px-3.5 py-2.5
                            text-[13px] font-medium
                            transition-all duration-200
                            ${
                              isActive
                                ? "bg-white text-[#B9832B] shadow-[0_4px_18px_rgba(0,0,0,0.05)]"
                                : "text-neutral-600 hover:bg-white hover:text-neutral-900"
                            }
                          `}
                        >
                          {/* Active line */}
                          <span
                            className={`
                              absolute left-0 top-1/2
                              h-5 -translate-y-1/2
                              rounded-r-full bg-[#B9832B]
                              transition-all duration-200
                              ${
                                isActive
                                  ? "w-[3px] opacity-100"
                                  : "w-0 opacity-0"
                              }
                            `}
                          />

                          <span className="min-w-0 flex-1 truncate">
                            {category.name}
                          </span>

                          <FiChevronRight
                            size={14}
                            className={`
                              shrink-0 transition-all duration-200
                              ${
                                isActive
                                  ? "translate-x-0 text-[#B9832B]"
                                  : "-translate-x-1 text-neutral-300 opacity-0 group-hover/category:translate-x-0 group-hover/category:opacity-100"
                              }
                            `}
                          />
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="px-3 py-5 text-sm text-neutral-500">
                    No categories available.
                  </div>
                )}
              </div>

              {/* View all */}
              <div className="border-t border-neutral-200/70 bg-[#faf9f6] p-4">
                <Link
                  href="/products"
                  className="
                    group/all flex items-center justify-between
                    rounded-xl border border-neutral-200
                    bg-white px-3.5 py-3
                    text-[10px] font-bold uppercase
                    tracking-[0.18em] text-neutral-700
                    transition-all duration-300
                    hover:border-[#B9832B]/30
                    hover:text-[#B9832B]
                  "
                >
                  <span>View all products</span>

                  <FiArrowUpRight
                    size={14}
                    className="
                      transition-transform duration-300
                      group-hover/all:-translate-y-0.5
                      group-hover/all:translate-x-0.5
                    "
                  />
                </Link>
              </div>
            </aside>

            {/* =====================================================
                RIGHT PRODUCT AREA
            ====================================================== */}
            <section className="flex min-w-0 min-h-0 flex-col bg-white">
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-6 py-5">
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#B9832B]">
                    Featured collection
                  </p>

                  <h3 className="mt-1 truncate text-[19px] font-semibold tracking-tight text-neutral-900">
                    {activeCategory?.name || "Products"}
                  </h3>
                </div>

                {activeCategory && (
                  <Link
                    href={`/products?category=${encodeURIComponent(
                      activeCategory.slug
                    )}`}
                    className="
                      group/category-link
                      ml-4 flex shrink-0 items-center gap-1.5
                      text-[10px] font-bold uppercase
                      tracking-[0.15em] text-neutral-500
                      transition-colors duration-300
                      hover:text-[#B9832B]
                    "
                  >
                    View category

                    <FiArrowUpRight
                      size={13}
                      className="
                        transition-transform duration-300
                        group-hover/category-link:-translate-y-0.5
                        group-hover/category-link:translate-x-0.5
                      "
                    />
                  </Link>
                )}
              </div>

              {/* Products */}
              <div className="custom-thin-scroll min-h-0 flex-1 overflow-y-auto px-6 py-5">
                {productLoading ? (
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="
                          flex min-h-[112px]
                          gap-3 rounded-2xl
                          border border-neutral-100
                          p-2.5
                        "
                      >
                        <div className="h-[105px] w-[82px] shrink-0 animate-pulse rounded-xl bg-neutral-100" />

                        <div className="flex min-w-0 flex-1 flex-col justify-between py-2">
                          <div className="space-y-2">
                            <div className="h-2 w-16 animate-pulse rounded bg-neutral-100" />
                            <div className="h-3.5 w-full animate-pulse rounded bg-neutral-100" />
                            <div className="h-3.5 w-2/3 animate-pulse rounded bg-neutral-100" />
                          </div>

                          <div className="h-3 w-16 animate-pulse rounded bg-neutral-100" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : catProduct?.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {catProduct.slice(0, 6).map((item) => {
                      const activeVariants =
                        getActiveVariants(item);

                      const startingPrice = getStartingPrice(
                        activeVariants,
                        "mrp"
                      );

                      const startingBasePrice = getStartingPrice(
                        activeVariants,
                        "basePrice"
                      );

                      return (
                        <Link
                          href={`/product/${item.slug}`}
                          key={item._id}
                          className="
                            group/product
                            flex min-w-0 gap-3
                            rounded-2xl
                            border border-transparent
                            p-2.5
                            transition-all duration-300
                            hover:border-neutral-100
                            hover:bg-[#faf9f6]
                            hover:shadow-[0_8px_25px_rgba(0,0,0,0.04)]
                          "
                        >
                          {/* Product image */}
                          <div
                            className="
                              relative h-[105px] w-[82px]
                              shrink-0 overflow-hidden
                              rounded-xl bg-[#f6f4ef]
                            "
                          >
                            <Image
                              src={`${img_url}${item.thumbnail}`}
                              alt={item.name || "Product"}
                              fill
                              sizes="82px"
                              className="
                                object-contain p-2
                                transition-transform duration-500
                                group-hover/product:scale-110
                              "
                            />

                            {/* Arrow */}
                            <span
                              className="
                                absolute bottom-2 right-2
                                flex h-6 w-6
                                translate-y-2 items-center justify-center
                                rounded-full bg-white
                                text-neutral-700 opacity-0
                                shadow-sm
                                transition-all duration-300
                                group-hover/product:translate-y-0
                                group-hover/product:opacity-100
                              "
                            >
                              <FiArrowUpRight size={12} />
                            </span>
                          </div>

                          {/* Product information */}
                          <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                            <div className="min-w-0">
                              {item?.category?.name && (
                                <p className="mb-1 truncate text-[8px] font-bold uppercase tracking-[0.18em] text-[#B9832B]">
                                  {item.category.name}
                                </p>
                              )}

                              <h4
                                className="
                                  line-clamp-2
                                  text-[13px] font-semibold
                                  leading-[18px] text-neutral-900
                                  transition-colors duration-300
                                  group-hover/product:text-[#B9832B]
                                "
                              >
                                {item.name}
                              </h4>
                            </div>

                            <div className="mt-2">
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                {startingPrice > 0 && (
                                  <span className="text-[13px] font-bold text-neutral-900">
                                    ₹{formatPrice(startingPrice)}
                                  </span>
                                )}

                                {startingBasePrice > startingPrice &&
                                  startingPrice > 0 && (
                                    <span className="text-[10px] text-neutral-400 line-through">
                                      ₹{formatPrice(startingBasePrice)}
                                    </span>
                                  )}
                              </div>

                              <div className="mt-1 flex items-center justify-between gap-2">
                                {activeVariants.length > 0 ? (
                                  <span className="truncate text-[9px] text-neutral-400">
                                    {activeVariants.length}{" "}
                                    {activeVariants.length === 1
                                      ? "variant"
                                      : "variants"}
                                  </span>
                                ) : (
                                  <span className="text-[9px] text-neutral-400">
                                    Shop now
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex h-full min-h-[300px] flex-col items-center justify-center px-8 text-center">
                    <div
                      className="
                        flex h-16 w-16 items-center justify-center
                        rounded-full bg-[#faf9f6]
                        text-[#B9832B]
                      "
                    >
                      <BiSolidCategoryAlt size={27} />
                    </div>

                    <h4 className="mt-4 text-sm font-semibold text-neutral-900">
                      No products found
                    </h4>

                    <p className="mt-1.5 max-w-[270px] text-xs leading-5 text-neutral-400">
                      There are currently no products available in{" "}
                      {activeCategory?.name || "this category"}.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {catProduct?.length > 0 && activeCategory && (
                <div className="shrink-0 border-t border-neutral-100 px-6 py-3">
                  <Link
                    href={`/products?category=${encodeURIComponent(
                      activeCategory.slug
                    )}`}
                    className="
                      group/explore
                      flex w-full items-center justify-center
                      gap-2 rounded-xl
                      bg-neutral-900 px-4 py-3
                      text-[10px] font-bold uppercase
                      tracking-[0.17em] text-white
                      transition-all duration-300
                      hover:bg-[#B9832B]
                    "
                  >
                    Explore {activeCategory.name}

                    <FiArrowUpRight
                      size={13}
                      className="
                        transition-transform duration-300
                        group-hover/explore:-translate-y-0.5
                        group-hover/explore:translate-x-0.5
                      "
                    />
                  </Link>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};


const MobileCategoryItem = ({ item, closeMenu, level = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-start gap-2 py-2">
        
          <Link
             href={`/products?category=${encodeURIComponent(item.slug)}`}
            onClick={closeMenu}
            className={`text-center normal-case tracking-normal text-white/90 hover:text-[#B9832B] transition-colors duration-300 ${
              level === 0 ? "text-base" : "text-sm"
            }`}
          >
            {item.name}
          </Link>
       
      </div>

      {hasChildren && open && (
        <div className="w-full flex flex-col items-center gap-1 mt-1 mb-2">
          {item.children.map((child) => (
            <MobileCategoryItem
              key={child.slug}
              item={child}
              closeMenu={closeMenu}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};



const MobileDropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 hover:text-[#B9832B] text-white transition-colors duration-300"
      >
        {title}
        <FiChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="w-full pt-4">
          {children}
        </div>
      )}
    </div>
  );
};



// const ProductSearch = ({ open, onClose }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const inputRef = useRef(null);

//   useEffect(() => {
//     if (!open) {
//       setSearchQuery("");
//       return;
//     }

//     const focusTimer = setTimeout(() => {
//       inputRef.current?.focus();
//     }, 150);

//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       clearTimeout(focusTimer);
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, [open, onClose]);

//   const filteredProducts = useMemo(() => {
//     const normalizedQuery = searchQuery.trim().toLowerCase();

//     if (!normalizedQuery) {
//       return staticProducts.slice(0, 6);
//     }

//     return staticProducts
//       .filter((product) => {
//         const searchableContent = [
//           product.name,
//           product.subtitle,
//           product.category,
//           product.badge,
//           product.description,
//           ...(product.highlights || []),
//         ]
//           .filter(Boolean)
//           .join(" ")
//           .toLowerCase();

//         return searchableContent.includes(normalizedQuery);
//       })
//       .slice(0, 8);
//   }, [searchQuery]);

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-[100]">
//       {/* Background */}
//       <button
//         type="button"
//         aria-label="Close product search"
//         onClick={onClose}
//         className="absolute inset-0 bg-black/55 backdrop-blur-sm"
//       />

//       {/* Search Panel */}
//       <div className="relative mx-auto mt-4 w-[calc(100%-1.5rem)] max-w-3xl overflow-hidden rounded-2xl border border-[#B9832B]/20 bg-white shadow-2xl sm:mt-8">
//         {/* Search Header */}
//         <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4 sm:px-6">
//           <LuSearch size={21} className="shrink-0 text-[#B9832B]" />

//           <input
//             ref={inputRef}
//             type="search"
//             value={searchQuery}
//             onChange={(event) => setSearchQuery(event.target.value)}
//             placeholder="Search products..."
//             className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
//           />

//           {searchQuery && (
//             <button
//               type="button"
//               onClick={() => setSearchQuery("")}
//               className="text-xs font-medium text-gray-400 transition-colors hover:text-[#B9832B]"
//             >
//               Clear
//             </button>
//           )}

//           <button
//             type="button"
//             onClick={onClose}
//             aria-label="Close search"
//             className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-[#B9832B] hover:text-white"
//           >
//             <FiX size={19} />
//           </button>
//         </div>

//         {/* Search Results */}
//         <div className="max-h-[70vh] overflow-y-auto p-3 sm:p-5">
//           <div className="mb-3 flex items-center justify-between px-1">
//             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B9832B]">
//               {searchQuery.trim() ? "Search Results" : "Popular Products"}
//             </p>

//             <span className="text-xs text-gray-400">
//               {filteredProducts.length}{" "}
//               {filteredProducts.length === 1 ? "product" : "products"}
//             </span>
//           </div>

//           {filteredProducts.length > 0 ? (
//             <div className="space-y-2">
//               {filteredProducts.map((product) => (
//                 <Link
//                   key={product._id || product.id}
//                   href={product.href || `/product/${product.slug}`}
//                   onClick={onClose}
//                   className="group grid grid-cols-[72px_1fr_auto] items-center gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-[#B9832B]/20 hover:bg-[#FFF8ED] sm:grid-cols-[88px_1fr_auto] sm:gap-4 sm:p-3"
//                 >
//                   <div className="relative aspect-square overflow-hidden rounded-lg bg-[#F5F2EB]">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </div>

//                   <div className="min-w-0">
//                     <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#B9832B]">
//                       {product.category}
//                     </p>

//                     <h3 className="truncate text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#B9832B] sm:text-base">
//                       {product.name}
//                     </h3>

//                     {product.subtitle && (
//                       <p className="mt-1 line-clamp-1 text-xs text-gray-500">
//                         {product.subtitle}
//                       </p>
//                     )}

//                     <div className="mt-2 flex items-center gap-2">
//                       <span className="text-sm font-semibold text-[#9C6B44]">
//                         {product.price}
//                       </span>

//                       {product.oldPrice && (
//                         <span className="text-xs text-gray-400 line-through">
//                           {product.oldPrice}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <FiChevronRight
//                     size={18}
//                     className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B9832B]"
//                   />
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="flex min-h-[220px] flex-col items-center justify-center px-6 text-center">
//               <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F2EB] text-[#B9832B]">
//                 <LuSearch size={23} />
//               </div>

//               <h3 className="mb-2 text-base font-semibold text-gray-900">
//                 No products found
//               </h3>

//               <p className="max-w-sm text-sm leading-6 text-gray-500">
//                 We could not find a product matching “{searchQuery}”. Try
//                 searching by product name, category or flavour.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Bottom Link */}
//         {searchQuery.trim() && filteredProducts.length > 0 && (
//           <div className="border-t border-gray-100 p-4 text-center">
//             <Link
//               href={`/products?search=${encodeURIComponent(
//                 searchQuery.trim(),
//               )}`}
//               onClick={onClose}
//               className="inline-flex items-center gap-2 text-sm font-semibold text-[#B9832B] transition-colors hover:text-black"
//             >
//               View all matching products
//               <FiChevronRight size={16} />
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

/* =======================
   HEADER
======================= */

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cart = useSelector((state) => state.LocalCart);
    const [cartCount,setCartCount]=useState(0)
  const wishlist = useSelector((state) => state.wishlist.items);
const {showLogin} = useSelector(state=>state.toggleUser)
  const { categories = [], error, loading } = useSelector(
    (state) => state.categories
  );
 const {isUser,user} = useSelector(state=>state.user)
 const dispatch = useDispatch()


  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {

dispatch(getCategory())
dispatch(getUser())

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=>{
if(isUser){
 setCartCount(user?.cartCount) 
}else{
 

  setCartCount( cart?.cart?.length)
}

  }, [isUser, user?.cartCount, cart])
  return (
    <>
{showLogin &&
  <AuthPopUp />
}
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out text-gray-200 
        ${isScrolled ? "top-7 px-4 md:px-12  xl:px-32" : "top-0  px-4 md:px-12 lg:px-0 xl:px-0"}`}
    >
      <div
        className={`mx-auto backdrop-blur-2xl flex justify-between items-center transition-all duration-500 ease-in-out 
          ${
            isScrolled
              ? "rounded-xl backdrop-blur-3xl text-black/80 xl:rounded-4xl px-4 md:px-12 lg:px-0 h-16 shadow-2xl bg-white/80"
              : "max-w-full drop-shadow-md lg:shadow-b-0 shadow-rose-950/30 bg-transparent text-black/80 backdrop-blur-3xl px-4 md:px-0 h-20"
          }`}
      >
        {/* === MOBILE MENU BUTTON === */}
        <div className="lg:hidden flex items-center w-1/4">
          <button
            onClick={toggleMenu}
            className="text-black/80 focus:outline-none transition-transform hover:scale-110"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* === DESKTOP NAV LEFT === */}
        <nav className="hidden lg:flex justify-end items-center w-1/3 space-x-4 xl:space-x-8 text-[11px] xl:text-sm uppercase tracking-wider font-semibold">
          <Link
            href="/"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            About
          </Link>

          <CategoryMegaDropdown />
        </nav>

        {/* === LOGO === */}
        <div className="flex justify-center w-2/4 lg:w-1/3">
          <Link href="/" className="relative">
            <img
              src="/Images/logo.webp"
              alt="Logo"
              className={`object-contain transition-all duration-500 p-2 rounded-full 
                ${
                  isScrolled
                    ? "h-18 md:h-14 xl:h-20 bg-gray-50/30 backdrop-blur-3xl"
                    : "h-18 md:h-16 xl:h-24"
                }`}
            />
          </Link>
        </div>

        {/* === DESKTOP NAV RIGHT === */}
        <nav className="hidden lg:flex justify-start items-center w-1/3 space-x-4 xl:space-x-8 text-[11px] xl:text-sm uppercase tracking-wider font-semibold">
          <Link
            href="/blogs"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            Contact
          </Link>

          <div className="flex gap-3 xl:gap-5 items-center pl-4 xl:pl-6 border-l border-[#B9832B]/40">
           <button
  type="button"
  onClick={() => setIsSearchOpen(true)}
  className="hover:text-[#B9832B] transition-colors duration-300"
  aria-label="Search products"
>
  <LuSearch size={20} />
</button>

            <Link
              href="/wishlist"
              className="hover:text-[#B9832B] transition-colors duration-300 relative"
            >
              <FaRegHeart size={20} />
              {wishlist?.length > 0 && (
                <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className="hover:text-[#B9832B] transition-colors duration-300 relative"
            >
              <MdOutlineShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">
                  {cartCount}
                </span>
              )}
            </Link>
{isUser ? 
            <Link
              href="/profile"
              className="hover:text-[#B9832B] transition-colors duration-300"
            >
              <FaRegUserCircle size={20} />
            </Link> 
            : <div
           className="hover:text-[#B9832B] transition-colors duration-300"
              onClick={()=>dispatch(toggle(true))}
              
              >
                <FaRegUserCircle  size={20}/>
              </div>
              }
          </div>
        </nav>

        {/* === MOBILE ICONS RIGHT === */}
        <div className="lg:hidden flex justify-end items-center gap-3 md:gap-5 w-1/4 text-[black]">
        <button
  type="button"
  onClick={() => setIsSearchOpen(true)}
  className="hover:text-[#B9832B] transition-colors duration-300"
  aria-label="Search products"
>
  <LuSearch size={20} />
</button>
        
       {isUser  ?    <Link
            href="/profile"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            <FaRegUserCircle size={20} />
          </Link> 
          : <div
           className="hover:text-[#B9832B] transition-colors duration-300"
              onClick={()=>dispatch(toggle(true))}
              
              >
                <FaRegUserCircle  size={20}/>
              </div>
              }

          <Link
            href="/wishlist"
            className="hover:text-[#B9832B] transition-colors duration-300 relative"
          >
            <FaRegHeart size={20} />
            {wishlist?.length > 0 && (
              <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link href="/cart">
            <MdOutlineShoppingCart size={22} />
          </Link>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black fixed inset-0 z-[60] flex flex-col text-xl uppercase tracking-widest overflow-y-auto ">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-[#B9832B]"
          >
            <FiX size={32} />
          </button>

          <div className="w-full px-8 pt-24 pb-10 space-y-5">
          <Link
  href="/"
  onClick={closeMenu}
  className="block hover:text-[#B9832B] text-white"
>
  Home
</Link>

<Link
  href="/about"
  onClick={closeMenu}
  className="block hover:text-[#B9832B] text-white"
>
  About
</Link>

<MobileDropdown title="Category">
  {categories.map((item) => (
    <MobileCategoryItem
      key={item._id}
      item={item}
      closeMenu={closeMenu}
    />
  ))}
</MobileDropdown>

<Link
  href="/blogs"
  onClick={closeMenu}
  className="block hover:text-[#B9832B] text-white"
>
  Blogs
</Link>

<Link
  href="/contact"
  onClick={closeMenu}
  className="block hover:text-[#B9832B] text-white"
>
  Contact
</Link>

            <div className="flex gap-10 pt-8 border-t border-[#B9832B]/30 justify-center">
              <Link href="/wishlist" onClick={closeMenu}>
                <FaRegHeart size={28} />
              </Link>
{isUser ? 

              <Link href="/profile" onClick={closeMenu}>
                <FaRegUserCircle size={28} />
              </Link> 
: <div
              onClick={()=>dispatch(toggle(true))}
              
              >
                <FaRegUserCircle  size={28}/>
              </div>
              }
            </div>
          </div>
        </div>
      )}

      <ProductSearch
  open={isSearchOpen}
  onClose={() => setIsSearchOpen(false)}
/>
    </header>
    </>
  );
};

export default Header;