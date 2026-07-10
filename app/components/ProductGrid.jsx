"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Product data based on provided categories
// Images are kept same as your current code
const products = [
  {
    id: 1,
    name: "Cardamom Tea Flavor",
    category: "Tea Masala",
    price: "$25.00",
    description:
      "Aromatic cardamom tea blend crafted for a rich and refreshing chai experience.",
    image:
      "https://img.freepik.com/free-vector/black-tea-bag-vector-realistic-product-placement-mock-up-3d-detailed-illustration-tea-leaves-infusions_1268-18070.jpg?semt=ais_rp_progressive&w=740&q=80",
    badge: "Tea Blend",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: "Ginger Tea Flavor",
    category: "Tea Masala",
    price: "$22.00",
    description:
      "Warming ginger tea flavor with a bold and comforting Indian chai profile.",
    image:
      "https://accuxel.com/wp-content/uploads/Arabian-Tea-Stand-Up-Pouch-Design-600x600.jpg",
    badge: "Tea Blend",
    rating: 4.7,
    reviews: 56,
  },
  {
    id: 3,
    name: "Lemon Tea Flavor",
    category: "Tea Masala",
    price: "$28.00",
    description:
      "Refreshing lemon tea flavor prepared for a light, zesty and soothing cup.",
    image:
      "https://img.freepik.com/premium-psd/psd-tea-pouch-bag-mockup_950992-1293.jpg",
    badge: "Tea Blend",
    rating: 4.8,
    reviews: 92,
  },
  {
    id: 4,
    name: "Kitchen King Masala",
    category: "Kitchen Masalas",
    price: "$24.00",
    description:
      "A complete kitchen spice blend for everyday vegetables and rich Indian dishes.",
    image:
      "https://img.freepik.com/premium-psd/standup-pouch-mockup-product-branding_642050-3380.jpg",
    badge: "Kitchen Masala",
    rating: 4.9,
    reviews: 210,
  },
  {
    id: 5,
    name: "Biryani Masala",
    category: "Kitchen Masalas",
    price: "$18.00",
    description:
      "A fragrant spice blend made for flavorful biryani, pulao and festive rice recipes.",
    image:
      "https://img.freepik.com/free-psd/front-view-foil-pouch-bag-mockup_1332-26154.jpg?w=740&t=st=1708500000~exp=1708500600~hmac=abcd",
    badge: "Kitchen Masala",
    rating: 5.0,
    reviews: 14,
  },
  {
    id: 6,
    name: "Premium Garam Masala",
    category: "Kitchen Masalas",
    price: "$32.00",
    description:
      "Premium Indian spice blend with deep aroma for curries, gravies and traditional recipes.",
    image:
      "https://img.freepik.com/free-psd/matte-stand-up-pouch-mockup_1332-25986.jpg?w=740",
    badge: "Kitchen Masala",
    rating: 4.6,
    reviews: 45,
  },
  {
    id: 7,
    name: "Classic Mango Pickle Masala",
    category: "Pickle Masala",
    price: "$20.00",
    description:
      "Traditional mango pickle masala blend made for authentic homemade pickle taste.",
    image:
      "https://img.freepik.com/free-vector/black-tea-bag-vector-realistic-product-placement-mock-up-3d-detailed-illustration-tea-leaves-infusions_1268-18070.jpg?semt=ais_rp_progressive&w=740&q=80",
    badge: "Pickle Masala",
    rating: 4.8,
    reviews: 78,
  },
  {
    id: 8,
    name: "Punjabi Green Chilli Pickle Masala",
    category: "Pickle Masala",
    price: "$21.00",
    description:
      "Spicy Punjabi-style masala blend for green chilli pickles and bold achar recipes.",
    image:
      "https://accuxel.com/wp-content/uploads/Arabian-Tea-Stand-Up-Pouch-Design-600x600.jpg",
    badge: "Pickle Masala",
    rating: 4.7,
    reviews: 64,
  },
  {
    id: 9,
    name: "High Protein Multigrain Atta",
    category: "Flours",
    price: "$26.00",
    description:
      "Nutritious multigrain atta designed for protein-rich daily meals and healthy rotis.",
    image:
      "https://img.freepik.com/premium-psd/psd-tea-pouch-bag-mockup_950992-1293.jpg",
    badge: "Flour",
    rating: 4.9,
    reviews: 118,
  },
  {
    id: 10,
    name: "Ragi Flour",
    category: "Flours",
    price: "$16.00",
    description:
      "Single millet flour range made for healthy, wholesome and traditional recipes.",
    image:
      "https://img.freepik.com/premium-psd/standup-pouch-mockup-product-branding_642050-3380.jpg",
    badge: "Flour",
    rating: 4.6,
    reviews: 39,
  },
  {
    id: 11,
    name: "Cumin / Jeera",
    category: "Pure Spices",
    price: "$15.00",
    description:
      "Pure whole cumin seeds with strong earthy aroma for everyday Indian cooking.",
    image:
      "https://img.freepik.com/free-psd/front-view-foil-pouch-bag-mockup_1332-26154.jpg?w=740&t=st=1708500000~exp=1708500600~hmac=abcd",
    badge: "Pure Spice",
    rating: 4.9,
    reviews: 150,
  },
  {
    id: 12,
    name: "Turmeric Powder",
    category: "Pure Spices",
    price: "$18.00",
    description:
      "Vibrant turmeric powder for curries, gravies, golden milk and traditional cooking.",
    image:
      "https://img.freepik.com/free-psd/matte-stand-up-pouch-mockup_1332-25986.jpg?w=740",
    badge: "Pure Spice",
    rating: 4.8,
    reviews: 92,
  },
  {
    id: 13,
    name: "Mango Pickle",
    category: "Pickles",
    price: "$22.00",
    description:
      "Classic Indian mango pickle with rich spices and bold traditional flavor.",
    image:
      "https://img.freepik.com/free-vector/black-tea-bag-vector-realistic-product-placement-mock-up-3d-detailed-illustration-tea-leaves-infusions_1268-18070.jpg?semt=ais_rp_progressive&w=740&q=80",
    badge: "Pickle",
    rating: 4.9,
    reviews: 102,
  },
  {
    id: 14,
    name: "Mixed Vegetable Pickle",
    category: "Pickles",
    price: "$24.00",
    description:
      "Tangy and spicy mixed vegetable pickle prepared for authentic Indian meals.",
    image:
      "https://accuxel.com/wp-content/uploads/Arabian-Tea-Stand-Up-Pouch-Design-600x600.jpg",
    badge: "Pickle",
    rating: 4.7,
    reviews: 80,
  },
  {
    id: 15,
    name: "Butter Masala / Makhani Gravy",
    category: "Tadka Gravy",
    price: "$30.00",
    description:
      "Ready-to-use makhani gravy base for butter masala, paneer dishes and rich curries.",
    image:
      "https://img.freepik.com/premium-psd/psd-tea-pouch-bag-mockup_950992-1293.jpg",
    badge: "Ready Gravy",
    rating: 4.8,
    reviews: 72,
  },
  {
    id: 16,
    name: "Punjabi Tadka Gravy",
    category: "Tadka Gravy",
    price: "$29.00",
    description:
      "Ready-to-use Punjabi tadka gravy for quick, flavorful and restaurant-style cooking.",
    image:
      "https://img.freepik.com/premium-psd/standup-pouch-mockup-product-branding_642050-3380.jpg",
    badge: "Ready Gravy",
    rating: 4.9,
    reviews: 88,
  },
];

const tabs = [
  "All",
  "Tea Masala",
  "Kitchen Masalas",
  "Pickle Masala",
  "Flours",
  "Pure Spices",
  "Pickles",
  "Tadka Gravy",
];

// Helper to render star ratings
const StarRating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center justify-center gap-1 mb-2">
      <div className="flex text-[#D4AF37]">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-3 h-3 ${
              i < Math.floor(rating)
                ? "fill-current"
                : "text-gray-300 fill-current"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <span className="text-[10px] text-gray-500">({reviews})</span>
    </div>
  );
};

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = products.filter((product) => {
    if (activeTab === "All") return true;
    return product.category === activeTab;
  });

  return (
    <section className="relative py-24 bg-[#F5F2EB] text-[#3A2A21] font-sans overflow-hidden">
      {/* Decorative Side Elements */}
      <img
        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        alt="Star Anise and Cinnamon"
        className="absolute top-1/2 -left-20 w-64 h-64 object-cover mix-blend-multiply opacity-60 -translate-y-1/2 hidden lg:block"
        style={{ clipPath: "circle(40% at 30% 50%)" }}
      />

      <img
        src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        alt="Scattered Spices"
        className="absolute top-1/2 -right-16 w-56 h-56 object-cover mix-blend-multiply opacity-50 -translate-y-1/2 hidden lg:block"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 30% 0)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light uppercase tracking-wide mb-6 text-[#3A2A21]"
          >
            The Spice & Pantry Collection
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-base text-gray-700 leading-relaxed mb-10"
          >
            Explore our premium tea blends, kitchen masalas, pickle masalas,
            pure spices, healthy flours, traditional pickles and ready-to-use
            tadka gravies.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm md:text-base font-medium capitalize tracking-wider transition-all duration-300 pb-1 border-b-2 ${
                  activeTab === tab
                    ? "border-[#9C6B44] text-[#9C6B44]"
                    : "border-transparent text-gray-500 hover:text-[#3A2A21]"
                }`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="flex flex-col items-center group text-center bg-white/40 p-4 rounded-xl hover:bg-white/80 transition-colors duration-500 shadow-sm hover:shadow-md"
              >
                <div className="w-full aspect-square mb-3 flex items-center justify-center relative cursor-pointer">
                  {product.badge && (
                    <div
                      className="absolute top-0 left-0 z-20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white rounded-sm shadow-sm bg-[#9C6B44]"
                    >
                      {product.badge}
                    </div>
                  )}

                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-3 bg-black/10 blur-md rounded-full" />

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[75%] h-auto object-contain mix-blend-multiply group-hover:-translate-y-1.5 transition-transform duration-500 ease-out relative z-10"
                  />
                </div>

                <div className="mb-1">
                  <StarRating rating={product.rating} reviews={product.reviews} />
                </div>

                <h3
                  className="text-base font-bold uppercase tracking-wider text-[#3A2A21] mb-0.5 line-clamp-1"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {product.name}
                </h3>

                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {product.category}
                </p>

                <p className="text-[#9C6B44] text-sm font-bold mb-3">
                  {product.price}
                </p>


                <button className="w-full border border-[#3A2A21] text-[#3A2A21] text-base py-2 rounded-md hover:bg-[#3A2A21] transition-all hover:text-white duration-300">
                  + Add to Cart
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;