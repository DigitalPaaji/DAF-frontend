import Link from 'next/link'
import React, { useState } from 'react'
import { base_url, img_url } from './Store/utils'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addinCart } from './Store/slices/userSlice'
import { addToCart } from './Store/slices/cartSlice'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { toggleWishlist } from './Store/slices/wishlistSlice'

const ProductCart2 = ({ product }) => {
    const  dispatch = useDispatch()
  const mainVariant = product?.variants?.[0] || {};
const [addedToCart, setAddedToCart] = useState(false);
 const {items:wishlisted} = useSelector(state=>state.wishlist)
 const {isUser} = useSelector(state=>state.user)
 
const handleAddToCart=()=>{
if(isUser){
  handleAddToCart2()
}
else{
  const FullData={
    productid:product._id,variantid:mainVariant._id ,quantity:1
  }
  dispatch(addToCart(FullData))
  toast.success("Add to cart")
   setAddedToCart(true);
}
}



  const handleAddToCart2 = async (e) => {
    try {
  
  const FullData={
    productid:product._id,variantid:mainVariant._id ,quantity:1
  }

const response = await axios.post(`${base_url}/cart/add`,FullData);
const data = await response.data;
if(data.success){
 toast.success(data.message) 
 setAddedToCart(true);
 dispatch(addinCart())
}

  console.log(FullData)
} catch (error) {
  toast.error(error?.response?.data?.message)
}finally{

}





    // setTimeout(() => {
    //   setAddedToCart(false);
    // }, 2500);
  };
  return (
    <div className="group flex flex-col w-full h-full bg-white rounded-xl  border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
      
      {/* Image Area */}
      <Link 
        href={`/product/${product.slug}`} 
        className="relative w-full aspect-square mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-[#fbf9f8]"
        aria-label={`View ${product.name}`}
      >
      <button
                             type="button"
                             onClick={(e) =>{e.preventDefault(), dispatch(toggleWishlist(product._id))}}
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
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-black/10 blur-xl rounded-full" />

        <Image
          src={`${img_url}${product.thumbnail}`}
          alt={product.name}
          fill
          unoptimized
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-contain p-4 mix-blend-multiply group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 ease-out relative z-10"
        />
      </Link>

      {/* Product Details Area */}
      <div className="flex flex-col flex-grow text-center">
        {/* Title & Category linked to product */}
        <Link href={`/product/${product.slug}`} className="block">
        {/* line-clamp-1 */}
          <h3
            className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#3A2A21] mb-1  transition-colors group-hover:text-[#9C6B44]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {product.name}
          </h3>
          
          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-3">
            {product.category?.name}
          </p>
        </Link>

        {/* Spacer to push price and button to the bottom if names are short */}
        <div className="flex-grow" />

        {/* Price */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-[#9C6B44] text-sm sm:text-base font-bold">
            ₹{mainVariant.mrp} 
          </span>

          {mainVariant.basePrice && mainVariant.basePrice > mainVariant.mrp && (
            <span className="text-xs text-gray-400 line-through decoration-gray-300">
              ₹{mainVariant.basePrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        {addedToCart ?<div className='w-full'> <Link href='/cart'
           className=" w-full block text-center border border-[#3A2A21] text-[#3A2A21] text-base py-2 sm:py-2.5 rounded-md hover:bg-[#3A2A21] transition-all hover:text-white duration-300"

> Go to Cart</Link>
</div>:
<button
                        
                          onClick={handleAddToCart}
                         className="w-full border border-[#3A2A21] text-[#3A2A21] text-base py-2 sm:py-2.5 rounded-md hover:bg-[#3A2A21] transition-all hover:text-white duration-300"
                       >
                         + Add To Cart
                       </button>
}
      </div>
      
    </div>
  )
}

export default ProductCart2