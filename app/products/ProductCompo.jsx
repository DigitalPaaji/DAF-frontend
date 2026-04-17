"use client";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { base_url, img_url } from "../components/Store/utils";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
const ProductCompo = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Setup states
  const [products, setProducts] = useState([]);
  const [pageMeta, setPageMeta] = useState({
    page: 1,
    totalPages: 1,
    totalProducts: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        // 1. DYNAMIC QUERY STRING: Grabs whatever is in the URL
        // e.g., ?category=chai&page=2&subcategory=herbal
        const queryString = searchParams.toString();
        const endpoint = queryString ? `/products?${queryString}` : `/products`;

        const response = await axios.get(`${base_url}${endpoint}`);

        if (response.data && response.data.success) {
          // 2. Set products array
          setProducts(response.data.products);

          // 3. Set pagination metadata from your JSON structure
          if (response.data.page) {
            setPageMeta(response.data.page);
          }
        } else {
          setError("Failed to fetch products.");
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]); 


  const handlePageChange = (newPage) => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );
    currentParams.set("page", newPage);
    router.push(`?${currentParams.toString()}`); // Updates the URL without reloading the page
  };

  if (loading)
    return (
      <div className="p-8 text-center text-gray-500">Loading products...</div>
    );
  if (error)
    return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Header / Meta Info */}
      <div className="flex justify-between items-end mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <span className="text-sm text-gray-500">
          Showing {products.length} of {pageMeta.totalProducts} results
        </span>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <p className="text-gray-500">
          No products found matching your filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
           

             <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product._id}

                className="flex flex-col items-center group text-center bg-white/40 p-4 rounded-xl hover:bg-white/80 transition-colors duration-500 shadow-sm hover:shadow-md"
              >
             <Link href={`/product/${product.slug}`}>
                <div className="w-full aspect-square mb-3 flex items-center justify-center relative cursor-pointer">

                  {/* {product.badge && (
                    <div className={`absolute top-0 left-0 z-20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white rounded-sm shadow-sm
                      ${product.badge === 'Best Seller' ? 'bg-[#9C6B44]' : 'bg-[#4A5D23]'}
                    `}>
                      {product.badge}
                    </div>
                  )} */}

                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-3 bg-black/10 blur-md rounded-full" />

                  <img
                    src={`${img_url}${product.images[0]}`}
                    alt={product.name}

                    className="w-[75%] h-auto object-contain mix-blend-multiply group-hover:-translate-y-1.5 transition-transform duration-500 ease-out relative z-10"
                  />
                </div>

                {/* <div className="mb-1">
                  <StarRating rating={product.rating} reviews={product.reviews} />
                </div> */}

                <h3 className="text-base font-bold uppercase tracking-wider text-[#3A2A21] mb-0.5 line-clamp-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {product.name}
                </h3>


                <p className="text-[#9C6B44] text-sm font-bold mb-3">
                 ₹{product.variants[0].mrp}
                </p>

                <button className="mt-auto w-full border border-[#3A2A21] text-[#3A2A21] px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#3A2A21] hover:text-[#F5F2EB] transition-colors duration-300">
                  Add to Cart
                </button>

                </Link>
              </motion.div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {pageMeta.totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 py-4 border-t">
          <button
            onClick={() => handlePageChange(pageMeta.page - 1)}
            disabled={pageMeta.page <= 1}
            className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm">
            Page {pageMeta.page} of {pageMeta.totalPages}
          </span>
          <button
            onClick={() => handlePageChange(pageMeta.page + 1)}
            disabled={pageMeta.page >= pageMeta.totalPages}
            className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCompo;
