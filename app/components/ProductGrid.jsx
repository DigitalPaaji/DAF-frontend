"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Enriched product data with categories, badges, and ratings
const products = [
  {
    id: 1,
    name: 'Classic Masala Chai',
    price: '$25.00',
    description: 'Sourced directly from the finest estates in India. Packed to preserve ultimate freshness and aroma.',
    image: 'https://img.freepik.com/free-vector/black-tea-bag-vector-realistic-product-placement-mock-up-3d-detailed-illustration-tea-leaves-infusions_1268-18070.jpg?semt=ais_rp_progressive&w=740&q=80', 
    badge: 'Best Seller',
    isFeatured: true,
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Cardamom Delight Light',
    price: '$22.00',
    description: 'Freshly ground cardamom spices packed to preserve ultimate freshness and delicate floral aroma.',
    image: 'https://accuxel.com/wp-content/uploads/Arabian-Tea-Stand-Up-Pouch-Design-600x600.jpg',
    badge: 'New Arrival',
    isFeatured: false,
    rating: 4.7,
    reviews: 56,
  },
  {
    id: 3,
    name: 'Kashmiri Kahwa Blend',
    price: '$28.00',
    description: 'A traditional mix of whole spices, saffron, and green tea packed to preserve ultimate freshness.',
    image: 'https://img.freepik.com/premium-psd/psd-tea-pouch-bag-mockup_950992-1293.jpg',
    badge: null,
    isFeatured: true,
    rating: 4.8,
    reviews: 92,
  },
  {
    id: 4,
    name: 'Premium Assam Fancy',
    price: '$24.00',
    description: 'Sourced directly from the finest mixed premium estates and treated with care for a bold, malty cup.',
    image: 'https://img.freepik.com/premium-psd/standup-pouch-mockup-product-branding_642050-3380.jpg',
    badge: 'Best Seller',
    isFeatured: false,
    rating: 4.9,
    reviews: 210,
  },
  {
    id: 5,
    name: 'Golden Turmeric Root',
    price: '$18.00',
    description: 'High-curcumin turmeric powder, perfect for golden milk or everyday cooking. Vibrant and earthy.',
    image: 'https://img.freepik.com/free-psd/front-view-foil-pouch-bag-mockup_1332-26154.jpg?w=740&t=st=1708500000~exp=1708500600~hmac=abcd',
    badge: 'New Arrival',
    isFeatured: true,
    rating: 5.0,
    reviews: 14,
  },
  {
    id: 6,
    name: 'Organic Darjeeling First Flush',
    price: '$32.00',
    description: 'The "Champagne of Teas" with a light, floral finish. Spring harvested for maximum flavor.',
    image: 'https://img.freepik.com/free-psd/matte-stand-up-pouch-mockup_1332-25986.jpg?w=740',
    badge: null,
    isFeatured: false,
    rating: 4.6,
    reviews: 45,
  }
];

// Helper to render star ratings
const StarRating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center justify-center gap-1 mb-2">
      <div className="flex text-[#D4AF37]">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-[10px] text-gray-500">({reviews})</span>
    </div>
  );
};

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Best Sellers', 'New Arrivals', 'Featured'];

  // Filter logic
  const filteredProducts = products.filter(product => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Best Sellers') return product.badge === 'Best Seller';
    if (activeTab === 'New Arrivals') return product.badge === 'New Arrival';
    if (activeTab === 'Featured') return product.isFeatured;
    return true;
  });

  return (
    <section className="relative py-24 bg-[#F5F2EB] text-[#3A2A21] font-sans overflow-hidden">
      
      {/* Decorative Side Elements */}
      <img 
        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
        alt="Star Anise and Cinnamon" 
        className="absolute top-1/2 -left-20 w-64 h-64 object-cover mix-blend-multiply opacity-60 -translate-y-1/2 hidden lg:block"
        style={{ clipPath: 'circle(40% at 30% 50%)' }}
      />
      <img 
        src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
        alt="Scattered Spices" 
        className="absolute top-1/2 -right-16 w-56 h-56 object-cover mix-blend-multiply opacity-50 -translate-y-1/2 hidden lg:block"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 30% 0)' }}
      />

      <div className="container mx-auto px-6  relative z-10">
        

        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light uppercase tracking-wide mb-6 text-[#3A2A21]"
      
          >
            The Chai & Spice Collection
          </motion.h2>
          
          
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-base text-gray-700 leading-relaxed mb-10"
          >
            Sourced directly from the finest estates in India. Our premium loose-leaf teas 
            and freshly ground spices are packed to preserve ultimate freshness and aroma.
          </motion.p>


          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-300 pb-1 border-b-2 ${
                  activeTab === tab 
                    ? 'border-[#9C6B44] text-[#9C6B44]' 
                    : 'border-transparent text-gray-500 hover:text-[#3A2A21]'
                }`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

     
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
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
    {/*  */}
    <div className="w-full aspect-square mb-3 flex items-center justify-center relative cursor-pointer">
      
   
      {product.badge && (
        <div className={`absolute top-0 left-0 z-20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white rounded-sm shadow-sm
          ${product.badge === 'Best Seller' ? 'bg-[#9C6B44]' : 'bg-[#4A5D23]'}
        `}>
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

 
    <h3 className="text-base font-bold uppercase tracking-wider text-[#3A2A21] mb-0.5 line-clamp-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
      {product.name}
    </h3>
    
    
    <p className="text-[#9C6B44] text-sm font-bold mb-3">
      {product.price}
    </p>

  
    
   
    <button className="mt-auto w-full border border-[#3A2A21] text-[#3A2A21] px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#3A2A21] hover:text-[#F5F2EB] transition-colors duration-300">
      Add to Cart
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