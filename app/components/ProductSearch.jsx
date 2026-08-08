"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiChevronRight, FiX } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import axios from "axios";
import { base_url, img_url } from "./Store/utils";

const ProductSearch = ({ open, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);
  const requestRef = useRef(0);

  /* ---------------------------------------------
     Get Product Image
  --------------------------------------------- */
  const getProductImage = (thumbnail) => {
    if (!thumbnail) {
      return "/placeholder-product.png";
    }

    // Already a full URL
    if (
      thumbnail.startsWith("http://") ||
      thumbnail.startsWith("https://")
    ) {
      return thumbnail;
    }

    // Relative backend image path
    return `${base_url}${thumbnail}`;
  };

  /* ---------------------------------------------
     Search Products
  --------------------------------------------- */
  const searchProduct = async (search) => {
    const query = search.trim();

    // Don't search when empty
    if (!query) {
      setProducts([]);
      setLoading(false);
      return;
    }

    const requestId = ++requestRef.current;

    try {
      setLoading(true);

      const response = await axios.get(
        `${base_url}/cache/product/search/${encodeURIComponent(query)}`
      );

      // Prevent old request from replacing newer results
      if (requestId !== requestRef.current) {
        return;
      }

      const data = response?.data;

      if (data?.success && Array.isArray(data?.products)) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (error) {
      // Ignore cancelled / old requests
      if (requestId === requestRef.current) {
        setProducts([]);
      }
    } finally {
      if (requestId === requestRef.current) {
        setLoading(false);
      }
    }
  };

  /* ---------------------------------------------
     Open Search + Focus Input
  --------------------------------------------- */
  useEffect(() => {
    if (!open) {
      setSearchQuery("");
      setProducts([]);
      setLoading(false);
      return;
    }

    // Focus after modal/panel renders
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, [open]);

  /* ---------------------------------------------
     Debounced Search
  --------------------------------------------- */
  useEffect(() => {
    if (!open) return;

    const query = searchQuery.trim();

    if (!query) {
      setProducts([]);
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      searchProduct(query);
    }, 350);

    return () => clearTimeout(timer);
  }, [searchQuery, open]);

  /* ---------------------------------------------
     Close With Escape
  --------------------------------------------- */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  /* ---------------------------------------------
     Don't Render
  --------------------------------------------- */
  if (!open) return null;

  const hasSearch = searchQuery.trim().length > 0;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-[2px]"
      onMouseDown={(event) => {
        // Close only when clicking background
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      {/* Search Panel */}
      <div
        className="
          relative
          mx-auto
          mt-3
          w-[calc(100%-1rem)]
          max-w-3xl
          overflow-hidden
          rounded-2xl
          border
          border-[#B9832B]/20
          bg-white
          shadow-2xl
          sm:mt-8
          sm:w-[calc(100%-2rem)]
        "
      >
        {/* -----------------------------------------
            Search Header
        ----------------------------------------- */}
        <div
          className="
            flex
            items-center
            gap-2
            border-b
            border-gray-100
            px-3
            py-3
            sm:gap-3
            sm:px-5
            sm:py-4
          "
        >
          {/* Search Icon */}
          <LuSearch
            size={21}
            className="shrink-0 text-[#B9832B]"
          />

          {/* Input */}
          <input
            ref={inputRef}
            type="search"
            inputMode="search"
            autoComplete="off"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search products..."
            className="
              min-w-0
              flex-1
              bg-transparent
              text-[16px]
              text-gray-900
              outline-none
              placeholder:text-gray-400
              [appearance:textfield]
            "
          />

          {/* Clear */}
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                inputRef.current?.focus();
              }}
              className="
                shrink-0
                px-1
                text-xs
                font-medium
                text-gray-400
                transition-colors
                hover:text-[#B9832B]
              "
            >
              Clear
            </button>
          )}

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gray-100
              text-gray-700
              transition-all
              duration-200
              hover:bg-[#B9832B]
              hover:text-white
              active:scale-95
            "
          >
            <FiX size={19} />
          </button>
        </div>

        {/* -----------------------------------------
            Search Content
        ----------------------------------------- */}
        <div
          className="
            max-h-[65vh]
            overflow-y-auto
            overscroll-contain
            p-3
            sm:max-h-[70vh]
            sm:p-5
          "
        >
          {/* Header */}
          <div className="mb-3 flex items-center justify-between px-1">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#B9832B]
              "
            >
              {hasSearch ? "Search Results" : "Search Products"}
            </p>

            {hasSearch && !loading && (
              <span className="text-xs text-gray-400">
                {products.length}{" "}
                {products.length === 1 ? "product" : "products"}
              </span>
            )}
          </div>

          {/* -----------------------------------------
              Loading
          ----------------------------------------- */}
          {loading && (
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    flex
                    animate-pulse
                    items-center
                    gap-3
                    rounded-xl
                    p-2
                    sm:gap-4
                    sm:p-3
                  "
                >
                  {/* Image Skeleton */}
                  <div
                    className="
                      h-[72px]
                      w-[72px]
                      shrink-0
                      rounded-lg
                      bg-gray-100
                      sm:h-[88px]
                      sm:w-[88px]
                    "
                  />

                  {/* Text Skeleton */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 h-2.5 w-20 rounded bg-gray-100" />
                    <div className="mb-2 h-4 w-3/4 rounded bg-gray-100" />
                    <div className="h-3 w-1/2 rounded bg-gray-100" />
                  </div>

                  {/* Arrow */}
                  <div className="h-5 w-5 shrink-0 rounded bg-gray-100" />
                </div>
              ))}
            </div>
          )}

          {/* -----------------------------------------
              Results
          ----------------------------------------- */}
          {!loading && products.length > 0 && (
            <div className="space-y-1.5">
              {products.map((product) => (
                <Link
                  key={product._id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="
                    group
                    grid
                    grid-cols-[64px_1fr_auto]
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    p-2
                    transition-all
                    duration-200
                    hover:border-[#B9832B]/20
                    hover:bg-[#FFF8ED]
                    sm:grid-cols-[84px_1fr_auto]
                    sm:gap-4
                    sm:p-3
                  "
                >
                  {/* ---------------------------------
                      Product Image
                  --------------------------------- */}
                  <div
                    className="
                      relative
                      aspect-square
                      overflow-hidden
                      rounded-lg
                      bg-[#F5F2EB]
                    "
                  >
                    <img
                      src={`${img_url}${product.thumbnail}`}
                      alt={product.name || "Product"}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-contain
                        p-2
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                      onError={(event) => {
                        event.currentTarget.src =
                          "/placeholder-product.png";
                      }}
                    />
                  </div>

                  {/* ---------------------------------
                      Product Information
                  --------------------------------- */}
                  <div className="min-w-0">
                    <h3
                      className="
                        line-clamp-2
                        text-sm
                        font-semibold
                        leading-5
                        text-gray-900
                        transition-colors
                        group-hover:text-[#B9832B]
                        sm:text-base
                      "
                    >
                      {product.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        truncate
                        text-[11px]
                        text-gray-400
                        sm:text-xs
                      "
                    >
                      View product details
                    </p>
                  </div>

                  {/* ---------------------------------
                      Arrow
                  --------------------------------- */}
                  <FiChevronRight
                    size={18}
                    className="
                      shrink-0
                      text-gray-300
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#B9832B]
                    "
                  />
                </Link>
              ))}
            </div>
          )}

          {/* -----------------------------------------
              Empty Search
          ----------------------------------------- */}
          {!loading && hasSearch && products.length === 0 && (
            <div
              className="
                flex
                min-h-[220px]
                flex-col
                items-center
                justify-center
                px-5
                text-center
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F5F2EB]
                  text-[#B9832B]
                "
              >
                <LuSearch size={23} />
              </div>

              <h3 className="mb-2 text-base font-semibold text-gray-900">
                No products found
              </h3>

              <p className="max-w-sm text-sm leading-6 text-gray-500">
                We could not find a product matching{" "}
                <span className="font-medium text-gray-700">
                  "{searchQuery}"
                </span>
                . Try searching with another product name.
              </p>
            </div>
          )}

          {/* -----------------------------------------
              Initial State
          ----------------------------------------- */}
          {!loading && !hasSearch && (
            <div
              className="
                flex
                min-h-[180px]
                flex-col
                items-center
                justify-center
                px-5
                text-center
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F5F2EB]
                  text-[#B9832B]
                "
              >
                <LuSearch size={23} />
              </div>

              <h3 className="mb-1 text-base font-semibold text-gray-900">
                Find your perfect product
              </h3>

              <p className="max-w-sm text-sm text-gray-500">
                Start typing to search through our products.
              </p>
            </div>
          )}
        </div>

        {/* -----------------------------------------
            Bottom Link
        ----------------------------------------- */}
        {hasSearch && products.length > 0 && !loading && (
          <div
            className="
              border-t
              border-gray-100
              bg-white
              p-3
              text-center
              sm:p-4
            "
          >
            <Link
              href={`/products?search=${encodeURIComponent(
                searchQuery.trim()
              )}`}
              onClick={onClose}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[#B9832B]
                transition-colors
                hover:text-black
              "
            >
              View all matching products
              <FiChevronRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;

