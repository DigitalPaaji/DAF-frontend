"use client";
import React, { useEffect, useState } from "react";
import { 
  FaMinus, FaPlus, FaShoppingBag, FaTruck, FaLeaf, FaCheckCircle,
  FaHeart,
  FaRegHeart, 
} from "react-icons/fa";

import TeaHeroSection from "../../components/TeaHeroSection"
import axios from "axios";
import { base_url, img_url } from "@/app/components/Store/utils";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/components/Store/slices/cartSlice";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { toggleWishlist } from "@/app/components/Store/slices/wishlistSlice";

const ProductCompo = ({ slug }) => {
  const [selectImage, setSelectImage] = useState(0);
  const wishlist= useSelector(state=>state.wishlist.items)
  const [quantity, setQuantity] = useState(1);
  const [selectedDetails, setSelectedDetails] = useState("description");
  const [product,setProduct]=useState()
  const [loading,setLoading]=useState(true)
  const [selectVariants,setSelectVariants]=useState(0)
  const dispatch = useDispatch()
  const tabs = ["Description", "Details", "Reviews"];



  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);


const fetchProduct = async()=>{
  try {
    setLoading(true)
    const response = await axios.get(`${base_url}/product/${slug}`)
    const data = await response.data;
  
    if(data.success){
setProduct(data.data)
    }
  } catch (error) {
    setProduct(null)
  }finally{
    setLoading(false)
  }
}

useEffect(()=>{
  fetchProduct()
},[])


const handelAddtoCart=( productId, variantId, quantity)=>{
dispatch(addToCart({productId, variantId, quantity}))
}



if(loading){
  return(
    <div>
      loading...
    </div>
  )
}

  return (
    <div className="bg-amber-50 min-h-screen font-sans pb-20">
      <div className="container mx-auto px-4 pt-">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          

          <div className="flex flex-col gap-6 lg:sticky lg:top-10 z-10">
            <div className="group relative  w-full h-[30rem] aspect-square  lg:aspect-square flex justify-center items-center rounded-2xl border border-neutral-100 transition-all duration-500 overflow-hidden">
              <img
                src={`${img_url}${product?.images[selectImage]}`}
                alt="Product main view"
                className=" w-full h-full object-contain p-4 mix-blend-multiply "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>



       
            <div className="flex gap-4 w-full overflow-x-auto p-2 scrollbar-hide justify-center lg:justify-start">
              {product?.images.map((item, index) => (
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
                    src={`${img_url}${item}`}
                    alt={`View ${index + 1}`}
                    className="h-full w-full object-cover mix-blend-multiply p-2"
                  />
                </button>
              ))}
            </div>
          </div>

    
       <div className="flex flex-col pt-2 lg:pt-8 h-full">
  
  {/* Category & Stock Status */}
  <div className="flex justify-between items-center mb-4 lg:mb-6">
    <p className="text-xs lg:text-sm font-bold tracking-[0.2em] uppercase text-amber-700">
      {product?.category?.name || "Category"}
    </p>

    <diV className="flex gap-3">
<span className="flex items-center gap-1.5 text-emerald-700 text-xs sm:text-sm font-semibold bg-emerald-50 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full border border-emerald-200/50 shadow-sm">
      <FaCheckCircle size={14} className="text-emerald-600" /> 
      In Stock
    </span>
    <span onClick={()=>dispatch(toggleWishlist({productId:product._id}))} className="flex items-center gap-1.5 text-red-700 text-xs sm:text-sm font-semibold bg-red-50 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full border border-red-200/50 shadow-sm">
      {wishlist.includes(product._id) ?  <FaHeart size={14} className="text-red-600" />  :  <FaRegHeart  size={14} className="text-red-600" />  }
    
    
    


    </span>
    </diV>
    
    
  </div>

  {/* Enlarged Title */}
  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-neutral-900 leading-[1.15] mb-4">
    {product?.name}
  </h1>

  {/* Tags (Wrapped in a safe check) */}
  {product?.tags && product.tags.length > 0 && (
    <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
      {product.tags.map((item, index) => (
        <span 
          key={index} 
          className="px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-neutral-600 border border-neutral-200 bg-neutral-50 rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  )}

  {/* Enlarged Price (Checks if basePrice is higher than MRP to show strikethrough) */}
  <div className="flex items-baseline gap-3 sm:gap-4 mb-6">
    <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight">
      ₹{product?.variants?.[selectVariants]?.mrp}
    </span>
    {product?.variants?.[selectVariants]?.basePrice > product?.variants?.[selectVariants]?.mrp && (
      <span className="text-lg sm:text-xl text-neutral-400 line-through decoration-neutral-300">
        ₹{product?.variants?.[selectVariants]?.basePrice}
      </span>
    )}
  </div>

  {/* Variant Selection UI */}
  {product?.variants && product.variants.length > 0 && (
    <div className="mb-6 lg:mb-8">
      <p className="text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wider">
        Select {product.variants[0].attributes.itemtype}
      </p>
      <div className="flex flex-wrap gap-3">
        {product.variants.map((itm, ind) => (
          <button
            key={itm._id || ind}
            onClick={() => setSelectVariants(ind)}
            className={`
              px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border-2 outline-none focus:ring-2 focus:ring-amber-500/50
              ${ind === selectVariants 
                ? "border-amber-600 bg-amber-50 text-amber-900 shadow-sm" 
                : "border-neutral-200 bg-white text-neutral-600 hover:border-amber-300 hover:bg-neutral-50"
              }
            `}
          >
            {itm.attributes?.value}
          </button>
        ))}
      </div>
    </div>
  )}

  {/* Description */}
  <p className="text-neutral-600 leading-relaxed font-light mb-8 text-base sm:text-lg">
    {product?.shortDescription}
  </p>

  {/* Value Propositions */}
  <div className="space-y-3 mb-10 text-neutral-800 border-l-4 border-amber-500 pl-5 bg-gradient-to-r from-amber-50/50 to-transparent py-4 rounded-r-xl">
    <p className="flex items-center gap-3 text-sm sm:text-base font-medium">
      <FaLeaf className="text-amber-500 shrink-0" size={18} />
      <span>Pure Kashmiri saffron & cardamom</span>
    </p>
    <p className="flex items-center gap-3 text-sm sm:text-base font-medium">
      <FaTruck className="text-amber-500 shrink-0" size={18} />
      <span>Free shipping on orders above ₹999</span>
    </p>
  </div>
  <div className="flex  gap-4 mb-10">
    
 
    <div className="flex items-center justify-between border-2 border-neutral-200 rounded-full h-10 w-52  bg-white overflow-hidden transition-colors focus-within:border-amber-400">
      <button 
        onClick={decreaseQuantity} 
        disabled={quantity <= 1}
        className="w-12 h-full flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
      >
        <FaMinus size={12} />
      </button>
      <span className="flex-1 text-center font-semibold text-lg text-neutral-900 select-none">
        {quantity}
      </span>
      <button 
        onClick={increaseQuantity} 
        disabled={quantity==5}
        className={`w-12 h-full flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors disabled:cursor-not-allowed`}
        aria-label="Increase quantity"
      >
        <FaPlus size={12} />
      </button>
    </div>

   
    <button onClick={()=>handelAddtoCart(product._id,product?.variants?.[selectVariants]._id,quantity)} className="w-full bg-neutral-900 hover:bg-neutral-800 active:bg-black text-white h-10 flex items-center justify-center gap-3 text-sm sm:text-base font-bold uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
      <FaShoppingBag size={18} /> 
      Add to Cart
    </button>
  </div>

  {/* Dynamic Extra Info Footer */}
  <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-base border-t border-neutral-200 pt-8 mt-auto">
    <div>
      <p className="text-neutral-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-1.5">
        Selected Weight
      </p>
      <p className="text-neutral-900 font-medium sm:font-semibold text-base sm:text-lg">
        {/* Dynamic Weight Base on Active Variant */}
        {product?.variants?.[selectVariants]?.attributes?.value || "N/A"}
      </p>
    </div>
    <div>
      <p className="text-neutral-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-1.5">
        Shipping
      </p>
      <p className="text-neutral-900 font-medium sm:font-semibold text-base sm:text-lg">
        Free over ₹999
      </p>
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
            <div className="animate-fadeIn max-w-4xl mx-auto md:mx-0" dangerouslySetInnerHTML={{__html:product?.description}}>
              {/* <h3 className="text-3xl font-serif font-medium text-neutral-900 mb-6">The Heart of the Himalayas</h3>
              <p className="text-neutral-600 leading-relaxed font-light text-xl">
                Our Kashmiri Kahwa is not just a beverage; it is a timeless tradition steeped in the rich heritage of the Kashmir Valley. Every sip reveals the delicate balance of single-origin green tea leaves, sun-dried saffron stigmas, and a symphony of warming spices.
              </p> */}
            </div>
          )}
          {selectedDetails === "details" && (
            <div className="animate-fadeIn max-w-3xl mx-auto md:mx-0">
              <ul className="space-y-6 text-neutral-600 font-light text-xl text-left">
                {/* <li className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-neutral-200 pb-4">
                  <strong className="sm:w-40 text-neutral-900 font-bold text-sm uppercase tracking-widest">Ingredients</strong>
                  <span>Green Tea, Saffron, Cardamom, Cinnamon, Crushed Almonds.</span>
                </li>
                <li className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-neutral-200 pb-4">
                  <strong className="sm:w-40 text-neutral-900 font-bold text-sm uppercase tracking-widest">Origin</strong>
                  <span>Pampore, Kashmir, India.</span>
                </li> */}
{product?.details &&
  Object.entries(product.details).map(([key, val], index) => (
    <li
      key={index}
      className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-neutral-200 pb-4"
    >
      <strong className="sm:w-40 text-neutral-900 font-bold text-sm uppercase tracking-widest">
        {key}
      </strong>
      <span>{val}</span>
    </li>
  ))
}


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