import Link from 'next/link'
import React from 'react'
import { img_url } from './Store/utils'
import Image from 'next/image'

const ProductCart2 = ({ product }) => {
  // Safe fallback in case variants array is empty or undefined
  const mainVariant = product?.variants?.[0] || {};

  return (
    <div className="group flex flex-col w-full h-full bg-white rounded-xl  border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
      
      {/* Image Area */}
      <Link 
        href={`/product/${product.slug}`} 
        className="relative w-full aspect-square mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-[#fbf9f8]"
        aria-label={`View ${product.name}`}
      >
        {/* Subtle ground shadow effect */}
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
          <h3
            className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#3A2A21] mb-1 line-clamp-1 transition-colors group-hover:text-[#9C6B44]"
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
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault(); // Prevents link navigation if misclicked
            // handleAddToCart(product)
          }}
          className="w-full border border-[#3A2A21] text-[#3A2A21] text-xs sm:text-sm font-medium py-2.5 rounded-lg hover:bg-[#3A2A21] hover:text-white transition-colors duration-300 active:scale-95"
        >
          + Add to Cart
        </button>
      </div>
      
    </div>
  )
}

export default ProductCart2