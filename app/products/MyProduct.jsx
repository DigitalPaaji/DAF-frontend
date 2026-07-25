"use client"
import React, { useEffect, useRef, useState } from 'react'
import { base_url } from '../components/Store/utils';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from 'next/navigation';
import { FaList, FaSlidersH, FaThLarge, FaTimes } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import ProductCart1 from '../components/ProductCart1';





const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  // { label: "Price: Low to High", value: "price-low" },
  // { label: "Price: High to Low", value: "price-high" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
];




const MyProduct = () => {

  const router = useRouter()

 const searchParams = useSearchParams();
const [isFetching,setIsFetching]=useState(true)
const {categories = [],error,loading} = useSelector((state) => state.categories);
const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
const [products,setProducts] = useState([ ])
const [totalProducts, setTotalProducts] = useState(0);
const [viewType, setViewType] = useState("grid");
const debounceTimer = useRef(null);
const [totalPages, setTotalPages] = useState(1);

 const selectedCategory = searchParams.get("category") || "";
 const currentPage = Number(searchParams.get("page") || 1);
 const selectedSort = searchParams.get("sort") || "newest";
 const min = searchParams.get("min") || 0;
 const max = searchParams.get("max") || 50000;



const updateSearchParams =  (key, value) => {
  const updateParams = () => {
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


      if (key === "min" || key === "max") {
    clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      updateParams();
    }, 500);
     return;
  }
   updateParams();

}



   const fetchProducts = async () => {
      setIsFetching(true);
      try {
        const params = new URLSearchParams({
          page: currentPage,
          sort: selectedSort,
        });
  
        if (selectedCategory) {
          params.append("category", selectedCategory);
        }
        if (min) {
          params.append("min", min);
        }
        if (max) {
          params.append("max", max);
        }

        const response = await axios.get(
          `${base_url}/cache/product/get?${params.toString()}`
        );
        const data = response.data;

        if (data.success) {
          setProducts(data.products || []);
          setTotalPages(data?.pagination.totalPages || 1)
          setTotalProducts(data?.pagination?.totalProducts || 0);
        } else {
          setProducts([]);
          setTotalPages(1);
          setTotalProducts(0);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setIsFetching(false);
      }
    };

 const clearFilters = () => {
    router.push("/products");
    setMobileFiltersOpen(false);
  };

 const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    updateSearchParams("page", String(newPage));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


useEffect(()=>{
  fetchProducts()
},[selectedCategory,selectedSort,min,max])


  return (
    <div className='min-h-screen'>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-4 py-20 md:min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/Images/banner.webp"
            alt={"banner"}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-serif text-3xl text-[#3A2A21] md:text-5xl"
          >
            {/* {categoryTitle} */}
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

       <div className="mb-9 overflow-hidden border-b border-[#DDD4C8]">
          <div className="flex justify-center md:justify-start w-full items-center flex-wrap gap-4 lg:gap-7">
            <button
              type="button"
              onClick={() => updateSearchParams("category", "")}
              className={`relative pb-2 text-[14px] font-semibold capitalize tracking-[0.05em] transition-colors ${
                !selectedCategory
                  ? "text-[#8B5A2B]"
                  : "text-[#312A26]/55 hover:text-[#312A26]"
              }`}
            >
              All Products
              {!selectedCategory && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8B5A2B]" />
              )}
            </button>

            {categories.length > 0 &&
              categories.map((category) => {
                const active = selectedCategory === category.slug;

                return (
                  <button
                    key={category._id}
                    type="button"
                    onClick={() =>
                      updateSearchParams("category", category.slug)
                    }
                    className={`relative pb-2 text-[14px] font-semibold capitalize tracking-[0.05em] transition-colors ${
                      active
                        ? "text-[#8B5A2B]"
                        : "text-[#312A26]/55 hover:text-[#312A26]"
                    }`}
                  >
                    {category.name}
                    {active && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8B5A2B]" />
                    )}
                  </button>
                );
              })}
          </div>
        </div>




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
                {products.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-[#312A26]">
                {totalProducts}
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
                className="appearance-none border-0 bg-transparent py-2 pl-2 pr-8 text-xs text-[#312A26] outline-none sm:text-sm cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
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
                  viewType === "grid" ? "text-[#8B5A2B]" : "text-[#312A26]/35"
                }
              >
                <FaThLarge size={14} />
              </button>
              <button
                type="button"
                onClick={() => setViewType("list")}
                className={
                  viewType === "list" ? "text-[#8B5A2B]" : "text-[#312A26]/35"
                }
              >
                <FaList size={14} />
              </button>
            </div>
          </div>
        </div>





<div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[250px_1fr]">
<aside className="hidden lg:block">
<div className="sticky top-28">

<FilterContent  allCategory={categories} updateSearchParams={updateSearchParams}
 selectedCategory={selectedCategory} clearFilters={clearFilters}  min={min} max={max} />




</div>
</aside>



<div>
            {isFetching ? (
              <div className="py-20 text-center text-[#312A26]/55">
                Loading products...
              </div>
            ) : products.length === 0 ? (
              <div className="rounded-2xl border border-[#DDD4C8] bg-white px-6 py-20 text-center">
                <h2 className="mb-3 font-serif text-2xl">No products found</h2>
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
                  {products.map((product, index) => {
               
                    return (
                     <ProductCart1  key={index} product={product} wishlistItems={[ ]} />
                    );
                  })}
                </div>
              </AnimatePresence>
            )}

            {totalPages > 1 && !isFetching && (
              <div className="mt-14 flex flex-wrap items-center justify-center gap-2 border-t border-[#DDD4C8] pt-9">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="flex h-10 w-10 items-center justify-center border border-[#DDD4C8] transition-colors hover:border-[#3A2A21] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <IoIosArrowBack />
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => handlePageChange(pageNumber)}
                      className={`flex h-10 min-w-10 items-center justify-center border px-3 text-xs font-semibold transition-colors ${
                        currentPage === pageNumber
                          ? "border-[#3A2A21] bg-[#3A2A21] text-white"
                          : "border-[#DDD4C8] hover:border-[#3A2A21]"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="flex h-10 w-10 items-center justify-center border border-[#DDD4C8] transition-colors hover:border-[#3A2A21] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            )}
          </div>


</div>





  </section>



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
                allCategory={categories} updateSearchParams={updateSearchParams}
 selectedCategory={selectedCategory} clearFilters={clearFilters}  min={min} max={max}
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

    </div>
  )
}

export default MyProduct

const FilterContent = ({allCategory,updateSearchParams,selectedCategory,clearFilters,min,max})=>{


  return(
<div>
 <div className="mb-8 border-b border-[#DDD4C8] pb-8">
  <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">
          Categories
        </h3>

         <div className="space-y-3">
          <label className="flex cursor-pointer items-center justify-between gap-3 text-sm text-[#312A26]/65 transition-colors hover:text-[#8B5A2B]">
            <span className="flex items-center gap-3">
              <input
                type="radio"
                name="category"
                checked={!selectedCategory}
                onChange={() => updateSearchParams("category", "")}
                className="accent-[#8B5A2B]"
              />
              All Products
            </span>
          </label>
          
          {allCategory.length > 0 &&
            allCategory.map((category) => (
              <label
                key={category._id}
                className="flex cursor-pointer items-center justify-between gap-3 text-sm text-[#312A26]/65 transition-colors hover:text-[#8B5A2B]"
              >
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category.slug}
                    onChange={() =>
                      updateSearchParams("category", category.slug)
                    }
                    className="accent-[#8B5A2B]"
                  />
                  {category.name}
                </span>
              </label>
            ))}
        </div>

 </div>



 <div className="mb-8 border-b border-[#DDD4C8] pb-8">
<h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">
          Price Range
        </h3>

<PriceRange updateSearchParams={updateSearchParams} min={min}  max={max}  />

 </div>



 <button
        type="button"
        onClick={clearFilters}
        className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B5A2B] underline underline-offset-4"
      >
        Clear All Filters
      </button>
</div>
  )
}

const MIN_LIMIT = 0;
const MAX_LIMIT = 50000;
const STEP = 500;

const PriceRange =({min,max,updateSearchParams})=>{
 const minPercentage = (min / 50000) * 100;
  const maxPercentage = (max / 50000) * 100;
 const handleMinChange = (event)=>{
  const value = Math.min(Number(event.target.value), max - STEP);
      updateSearchParams("min", String(value));
 }

 const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), min + STEP);
    updateSearchParams("max", String(value));
  };

  return(
    <div className="w-full">
 <div className="mb-5 flex items-center justify-between">

       <div>
          <p className="text-xs text-neutral-500">Minimum</p>
          <p className="font-semibold text-neutral-900">
            ₹{min.toLocaleString("en-IN")}
          </p>
        </div>
       <span className="h-px w-8 bg-neutral-300" />
        <div className="text-right">
          <p className="text-xs text-neutral-500">Maximum</p>
          <p className="font-semibold text-neutral-900">
            ₹{max.toLocaleString("en-IN")}
          </p>
        </div>
 </div>

<div className="relative h-6">
 <div className="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-neutral-200" />
 <div
          className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-yellow-700"
          style={{
            left: `${minPercentage}%`,
            right: `${100 - maxPercentage}%`,
          }}
        />
  <input
          type="range"
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          step={STEP}
          value={min}
          onChange={handleMinChange}
          aria-label="Minimum price"
          className="price-slider pointer-events-none absolute inset-0 h-6 w-full appearance-none bg-transparent"
        />
         <input
          type="range"
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          step={STEP}
          value={max}
          onChange={handleMaxChange}
          aria-label="Maximum price"
          className="price-slider pointer-events-none absolute inset-0 h-6 w-full appearance-none bg-transparent"
        />
</div>

 <div className="mt-1 flex justify-between text-xs text-neutral-400">
        <span>₹0</span>
        <span>₹50,000</span>
      </div>


 <style jsx>{`
        .price-slider::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          appearance: none;
          pointer-events: auto;
          cursor: pointer;
          border: 3px solid white;
          border-radius: 50%;
          background: #171717;
          box-shadow: 0 0 0 1px #171717;
        }

        .price-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          pointer-events: auto;
          cursor: pointer;
          border: 3px solid white;
          border-radius: 50%;
          background: #171717;
          box-shadow: 0 0 0 1px #171717;
        }

        .price-slider::-webkit-slider-runnable-track {
          height: 6px;
          background: transparent;
        }

        .price-slider::-moz-range-track {
          height: 6px;
          background: transparent;
        }
      `}</style>

    </div>
  )
}