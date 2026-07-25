
import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { img_url } from './Store/utils';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from './Store/slices/wishlistSlice';


const ProductCart1 = ({product,}) => {
  const  dispatch = useDispatch()
  const {items:wishlisted} = useSelector(state=>state.wishlist)
    
    const [selectSize,setSelectSize]=useState(product.variants[0]);



     const handleVariantChange = (event) => {
    const selectedSize = event.target.value;

    const selectedVariant = product.variants.find(
      (variant) => variant._id === selectedSize
    );

    if (selectedVariant) {
      setSelectSize(selectedVariant);
    }
  };
  return (
    <div
                  
                   className="group  cursor-pointer w-full"
                 >
                   <div className="relative w-full h-full shadow-sm rounded-xl overflow-hidden p-3 sm:p-4 transition-all duration-500 hover:shadow-xl bg-white">
                     {/* Wishlist */}
                     <button
                       type="button"
                       onClick={() => dispatch(toggleWishlist(product._id))}
                       className={`absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center transition-all duration-300 ${
                         wishlisted.includes(product._id)
                           ? "text-red-600"
                           : "text-[#3A2A21] hover:bg-[#3A2A21] hover:text-white"
                       }`}
                       aria-label={
                         wishlisted.includes(product._id)
                           ? `Remove ${product.name} from wishlist`
                           : `Add ${product.name} to wishlist`
                       }
                     >
                       { wishlisted.includes(product._id) ? (
                         <FaHeart size={16} />
                       ) : (
                         <FaRegHeart size={16} />
                       )}
                     </button>
   
                     {/* Product Image Link */}
                     <Link
                       href={`/product/${product.slug}`}
                       aria-label={`View ${product.name}`}
                       className="relative block w-full aspect-square mb-4 sm:mb-5"
                     >
                       <Image
                         src={`${img_url}${product.thumbnail}`}
                         alt={`${product.name}`}
                         fill
                         sizes="(max-width: 480px) 50vw, (max-width: 1024px) 50vw, 25vw"
                         className="object-contain transition-transform duration-500 group-hover:scale-105"
                       /> 
                     </Link>
   
                     {/* Details */}
                     <div className="space-y-3 sm:space-y-4">
                       <div className="flex flex-col gap-3">
                         <div className="min-w-0">
                           {/* Product Name Link */}
                           <Link  href={`/product/${product.slug}`} className="block">
                             <h3 className="text-[#3A2A21] text-base font-semibold leading-snug line-clamp-1 transition-colors hover:text-[#8B5A2B]">
                               {product.name}
                             </h3>
   
                             <p className="mt-1 min-h-[36px] text-xs leading-5 text-[#3A2A21]/60 line-clamp-2">
                               {product?.category?.name}
                             </p>
                           </Link>
   
                          <div className="flex items-center justify-between gap-2 py-2">
                             <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                               <span className="text-[#3A2A21] text-base sm:text-lg font-semibold">
                                 {selectSize?.mrp}
                               </span>
   
                               <span className="text-[#3A2A21]/60 text-base line-through">
                                 {selectSize?.basePrice}
                               </span>
                             </div>
  
                          
                             <div className="relative w-fit shrink-0">
                               <select
                                value={selectSize._id}
                                     onChange={handleVariantChange}
                                      onClick={(e)=>e.preventDefault()}
                                 aria-label={`Select pack size for ${product.name}`}
                                 className="w-full appearance-none border border-[#3A2A21] text-[#3A2A21] text-xs sm:text-sm px-3 py-2 pr-8 rounded-md outline-none cursor-pointer bg-white"
                               >
                                 {product.variants.map((size) => (
                                   <option key={size._id} value={size._id}>
                                     {size.attributes.value}
                                   </option>
                                 ))}
                               </select>
   
                               <IoIosArrowDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#3A2A21] pointer-events-none text-sm" />
                             </div>
                           </div> 
                         </div>
                       </div>
   
                  
                       <button
                         type="button"
                         className="w-full border border-[#3A2A21] text-[#3A2A21] text-sm sm:text-base py-2 sm:py-2.5 rounded-md hover:bg-[#3A2A21] transition-all hover:text-white duration-300"
                       >
                         + Add To Cart
                       </button>
                     </div>
                   </div>
                 </div>
  )
}

export default ProductCart1