"use client";
import React, { useState } from "react";
import { 
  FaMinus, FaPlus, FaShoppingBag, FaTruck, FaLeaf, FaCheckCircle, 
} from "react-icons/fa";

import TeaHeroSection from "../../components/TeaHeroSection"

const ProductCompo = ({ slug }) => {
  const [selectImage, setSelectImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedDetails, setSelectedDetails] = useState("description");

  const tabs = ["Description", "Details", "Reviews"];
  const images = [
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQuUaZ_LMK--vBfVI-jSjJIGMr5UW5jTAsFB7a4F_c_9UdXwKvFJeeWSoOufp7B2vaiETWCqrr-TjwzD8itX6X12spHwcFj6lCqw-AjV-YXfWF344WJAnXK",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTFSLDJ1RxO_8rduQ_byGvdrlHchQGQ5pm80iNg-fjuxLdD2I6JAEXX95UeI3HqpCYdI6ucEFVpIKoI-2UgtGEETmpIeuXmr-clwo5VFbxZ",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiqoZdU0ViNR7L-AaxEFXKc9jA2FMvRfNkuGqiZbKWAdWRCMhdNtDkRRl8bXBUcLj0v_U7OgJtaWnjLE8eoerVnYeUEiYBLCWY47F96dtCjhCGTcwyL4im",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbSopRBzh6I1y4aoFx8FE2S496t4yPoKjQIevZCx-_u5mSGyykW5FIy1tyx-ZBNjGMCMhLk-VZyHRz8O0jOPKL01g7xWGW4E-zEmRuJfncZM4JipyJmqR6",
  ];

  const tags = ["Tea", "Kashmir", "Kahwa", "Premium"];

  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  return (
    <div className="bg-amber-50 min-h-screen font-sans pb-20">
      <div className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          

          <div className="flex flex-col gap-6 lg:sticky lg:top-10 z-10">
            <div className="group relative bg-white w-full h-[30rem] aspect-square  lg:aspect-square flex justify-center items-center rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <img
                src={images[selectImage]}
                alt="Product main view"
                className=" w-full h-full object-contain p-4 mix-blend-multiply "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>



            {/*  */}
            <div className="flex gap-4 w-full overflow-x-auto pb-2 scrollbar-hide justify-center lg:justify-start">
              {images.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectImage(index)}
                  className={`relative shrink-0 aspect-square w-24 rounded-xl overflow-hidden transition-all duration-300 ${
                    selectImage === index
                      ? "ring-2 ring-amber-600 ring-offset-2 opacity-100 scale-100 shadow-md"
                      : "opacity-60 hover:opacity-100 hover:scale-105 bg-white border border-neutral-200"
                  }`}
                >
                  <img
                    src={item}
                    alt={`View ${index + 1}`}
                    className="h-full w-full object-cover mix-blend-multiply p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Editorial Details (BETTER TYPOGRAPHY) */}
          <div className="flex flex-col pt-2 lg:pt-8">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm font-bold tracking-[0.25em] uppercase text-amber-700">
                Kashmir Origin
              </p>
              <span className="flex items-center gap-1.5 text-emerald-700 text-sm font-semibold bg-emerald-100/50 px-4 py-1.5 rounded-full">
                <FaCheckCircle size={14} /> In Stock
              </span>
            </div>

            {/* Enlarged Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 leading-[1.1] mb-6">
              Kashmiri Kahwa <br className="hidden sm:block" /> Instant Mix
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((item) => (
                <span key={item} className="px-4 py-2 text-xs font-bold tracking-widest uppercase text-neutral-600 border border-neutral-300 bg-white rounded-full">
                  {item}
                </span>
              ))}
            </div>

            {/* Enlarged Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl sm:text-5xl font-normal text-neutral-900">₹499</span>
              <span className="text-xl text-neutral-400 line-through decoration-1">₹750</span>
            </div>

            {/* Enlarged Description */}
            <p className="text-neutral-600 leading-relaxed font-light mb-8 text-lg sm:text-xl">
              Experience the authentic taste of the Himalayas. A soothing, aromatic blend of
              green tea, saffron, cinnamon, cardamom, and crushed almonds. Crafted for moments
              of pure tranquility.
            </p>

            <div className="space-y-4 mb-10 text-neutral-700 border-l-4 border-amber-400 pl-6 bg-amber-100/30 py-4 rounded-r-2xl">
              <p className="flex items-center gap-4 text-base sm:text-lg font-medium">
                <FaLeaf className="text-amber-600 shrink-0" size={20} />
                <span>Pure Kashmiri saffron & cardamom</span>
              </p>
              <p className="flex items-center gap-4 text-base sm:text-lg font-medium">
                <FaTruck className="text-amber-600 shrink-0" size={20} />
                <span>Free shipping on orders above ₹999</span>
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-neutral-300 rounded-full h-16 w-full sm:w-40 bg-white shadow-sm">
                <button onClick={decreaseQuantity} className="w-14 h-full flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors rounded-l-full hover:bg-neutral-50">
                  <FaMinus size={14} />
                </button>
                <span className="flex-1 text-center font-semibold text-lg text-neutral-900">{quantity}</span>
                <button onClick={increaseQuantity} className="w-14 h-full flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors rounded-r-full hover:bg-neutral-50">
                  <FaPlus size={14} />
                </button>
              </div>

              <button className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white py-4 flex items-center justify-center gap-3 text-base font-bold uppercase tracking-widest rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <FaShoppingBag size={18} /> Add to Cart
              </button>
            </div>

            {/* Extra Info */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-base border-t border-neutral-200 pt-8">
              <div>
                <p className="text-neutral-400 uppercase tracking-widest text-xs font-bold mb-2">Weight</p>
                <p className="text-neutral-900 font-semibold text-lg">250 gms</p>
              </div>
              <div>
                <p className="text-neutral-400 uppercase tracking-widest text-xs font-bold mb-2">Shipping</p>
                <p className="text-neutral-900 font-semibold text-lg">Free over ₹999</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TABS SECTION */}
      <div className="container mx-auto px-4 my-16 md:my-24">
        <div className="flex justify-start md:justify-center mb-12">
          <div className="inline-flex bg-white p-2 rounded-full border border-neutral-200 overflow-x-auto max-w-full scrollbar-hide shadow-sm">
            {tabs.map((item, index) => {
              const tabValue = item.toLowerCase();
              const isActive = selectedDetails === tabValue;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDetails(tabValue)}
                  className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap
                    ${isActive ? "bg-neutral-900 text-white shadow-md" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"}`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-h-[200px] text-center md:text-left">
          {selectedDetails === "description" && (
            <div className="animate-fadeIn max-w-4xl mx-auto md:mx-0">
              <h3 className="text-3xl font-serif font-medium text-neutral-900 mb-6">The Heart of the Himalayas</h3>
              <p className="text-neutral-600 leading-relaxed font-light text-xl">
                Our Kashmiri Kahwa is not just a beverage; it is a timeless tradition steeped in the rich heritage of the Kashmir Valley. Every sip reveals the delicate balance of single-origin green tea leaves, sun-dried saffron stigmas, and a symphony of warming spices.
              </p>
            </div>
          )}
          {selectedDetails === "details" && (
            <div className="animate-fadeIn max-w-3xl mx-auto md:mx-0">
              <ul className="space-y-6 text-neutral-600 font-light text-xl text-left">
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-neutral-200 pb-4">
                  <strong className="sm:w-40 text-neutral-900 font-bold text-sm uppercase tracking-widest">Ingredients</strong>
                  <span>Green Tea, Saffron, Cardamom, Cinnamon, Crushed Almonds.</span>
                </li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-neutral-200 pb-4">
                  <strong className="sm:w-40 text-neutral-900 font-bold text-sm uppercase tracking-widest">Origin</strong>
                  <span>Pampore, Kashmir, India.</span>
                </li>
              </ul>
            </div>
          )}
          {selectedDetails === "reviews" && (
            <div className="animate-fadeIn flex flex-col items-center justify-center py-8 text-center">
              <p className="text-neutral-600 font-serif italic text-2xl mb-6 max-w-2xl leading-relaxed">
                "Absolutely divine. The saffron aroma fills the room instantly. A perfect evening ritual."
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-700">— Ananya S.</p>
            </div>
          )}
        </div>
      </div>

      <TeaHeroSection />

    </div>
  );
};

export default ProductCompo;