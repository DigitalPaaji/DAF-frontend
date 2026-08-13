"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { base_url } from "../components/Store/utils";
import {
  FiHeart,
  FiArrowLeft,
  FiShoppingBag,
  FiRefreshCw,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

import ProductCart2 from "../components/ProductCart2";

const WishlistPage = () => {
  const wishlist = useSelector(
    (state) => state.wishlist?.items || []
  );

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  const fetchWishlist = async () => {
    if (!wishlist || wishlist.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios.patch(
        `${base_url}/products/wishlist`,
        { wishlist }
      );

      const resData = response.data;

      if (resData?.success) {
        setProducts(resData.product || []);
      } else {
        setError("Failed to fetch wishlist data.");
      }
    } catch (err) {
      console.error("Failed to fetch wishlist products:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "An error occurred while fetching."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [wishlist]);

  return (
    <main className="min-h-screen bg-white  text-gray-900  pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="
            group
            inline-flex items-center gap-2
            mb-8
            px-4 py-2.5
            rounded-full
            border border-gray-200 
            bg-white 
            text-sm font-medium
            text-gray-700 
            hover:bg-black hover:text-white
            
            transition-all duration-300
          "
        >
          <FiArrowLeft
            className="text-lg transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back
        </button>

        {/* Header */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-gray-200  bg-gray-50 ">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gray-200 = blur-2xl" />

          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-6 sm:p-8">

            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-14 w-14 shrink-0 items-center justify-center
                  rounded-2xl
                  bg-black text-white
                  
                "
              >
                <FiHeart className="text-2xl" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500  mb-1">
                  Your Collection
                </p>

                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  My Wishlist
                </h1>

                <p className="mt-1 text-sm text-gray-500 ">
                  Save the products you love for later.
                </p>
              </div>
            </div>

            {/* Wishlist Count */}
            {!loading && (
              <div
                className="
                  self-start sm:self-center
                  flex items-center gap-2
                  rounded-full
                  border border-gray-200 
                  bg-white 
                  px-4 py-2
                "
              >
                <FiHeart className="text-sm" />

                <span className="text-sm font-semibold">
                  {products.length}
                </span>

                <span className="text-sm text-gray-500 ">
                  {products.length === 1 ? "Item" : "Items"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div
            className="
              mb-8 flex flex-col sm:flex-row
              sm:items-center sm:justify-between
              gap-4
              rounded-2xl
              border border-red-200 
              bg-red-50 
              p-5
            "
          >
            <div>
              <p className="font-semibold text-red-700 ">
                Something went wrong
              </p>

              <p className="mt-1 text-sm text-red-600/80 ">
                {error}
              </p>
            </div>

            <button
              onClick={fetchWishlist}
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl
                bg-red-600 px-4 py-2.5
                text-sm font-semibold text-white
                hover:bg-red-700
                transition
              "
            >
              <FiRefreshCw />
              Try Again
            </button>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="py-20">
            <div className="flex flex-col items-center justify-center">

              <div
                className="
                  flex h-16 w-16 items-center justify-center
                  rounded-full
                  border border-gray-200 
                  bg-gray-50 
                "
              >
                <div
                  className="
                    h-7 w-7
                    animate-spin
                    rounded-full
                    border-2
                    border-gray-300
                    border-t-black
                    
                    
                  "
                />
              </div>

              <p className="mt-5 text-sm font-medium text-gray-700 ">
                Loading your wishlist...
              </p>

              <p className="mt-1 text-xs text-gray-500 ">
                Please wait a moment
              </p>
            </div>
          </div>
        )}

        {/* Empty Wishlist */}
        {!loading && products.length === 0 && !error && (
          <div
            className="
              relative overflow-hidden
              flex flex-col items-center justify-center
              min-h-[430px]
              rounded-3xl
              border border-dashed
              border-gray-300 
              bg-gray-50 
              px-6 text-center
            "
          >
            {/* Decorative circle */}
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gray-200 = blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gray-200 = blur-3xl" />

            <div
              className="
                relative flex h-20 w-20 items-center justify-center
                rounded-full
                bg-white 
                border border-gray-200 
                shadow-sm
              "
            >
              <FiHeart className="text-3xl text-gray-400 " />
            </div>

            <h2 className="relative mt-6 text-xl sm:text-2xl font-bold">
              Your wishlist is empty
            </h2>

            <p className="relative mt-2 max-w-md text-sm leading-6 text-gray-500 ">
              You haven't saved anything yet. Explore our collection and
              add your favorite products to your wishlist.
            </p>

            <button
              onClick={() => router.push("/")}
              className="
                relative mt-7
                inline-flex items-center gap-2
                rounded-full
                bg-black 
                px-6 py-3
                text-sm font-semibold
                text-white 
                hover:scale-[1.02]
                transition-all duration-300
              "
            >
              <FiShoppingBag />
              Continue Shopping
            </button>
          </div>
        )}

        {/* Products */}
        {!loading && products.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-semibold">
                  Saved Products
                </h2>

                <p className="text-sm text-gray-500  mt-1">
                  Your favorite products in one place.
                </p>
              </div>
            </div>

            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-3
                sm:gap-5
                lg:gap-6
              "
            >
              {products.map((product) => (
                <ProductCart2
                  product={product}
                  key={product._id}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default WishlistPage;