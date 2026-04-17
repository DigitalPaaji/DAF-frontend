"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { base_url, img_url } from '../components/Store/utils'
import {  FiTrash2, FiHeart } from 'react-icons/fi' 
import { FaEye } from 'react-icons/fa'
import Link from 'next/link'
import { toggleWishlist } from '../components/Store/slices/wishlistSlice'

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist?.items || [])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const fetchWishlist = async () => {
    // Prevent fetching if wishlist is empty
    if (!wishlist || wishlist.length === 0) {
      setProducts([])
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)
      const response = await axios.post(`${base_url}/getwishlist_product`, { wishlist })
      
      // Safely access the response data
      const resData = response.data
      
      if (resData && resData.success) {
        setProducts(resData.data || [])
      } else {
        setError("Failed to fetch wishlist data.")
      }
    } catch (err) {
      console.error("Failed to fetch wishlist products:", err)
      setError(err.message || "An error occurred while fetching.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWishlist()
    
  }, [ wishlist])




  return (
    <div className='min-h-screen mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8">
        <FiHeart className="text-3xl text-red-500" />
        <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
      </div>

      
      {error && (
        <div className="p-4 mb-6 text-red-700 bg-red-100 rounded-lg">
          Error: {error}
        </div>
      )}

 {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) }

{!loading && products.length === 0 ? 

        <div className="flex flex-col items-center justify-center h-64 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <FiHeart className="text-4xl mb-3 text-gray-300" />
          <p className="text-lg">Your wishlist is currently empty.</p>
        </div>
:
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{products.map((product)=>{
            const primaryVariant = product?.variants?.[0] || {}
            const imagePath = product?.images?.[0] || ""
            const imageUrl = imagePath ? `${img_url}${imagePath}` : 'https://via.placeholder.com/300?text=No+Image'

return(
    <div key={product._id || Math.random()} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden flex flex-col" >


  <div className="relative h-64 w-full bg-gray-100 p-4">
                  <img
                    src={imageUrl}
                    alt={product?.name || "Product"}
                    className="w-full h-full object-cover rounded-md"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=No+Image' }} 
                  />
                </div>
   <div className="p-5 flex flex-col flex-grow">
               <span className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-1">
                    {product?.category?.name || "Category"}
                  </span>
                  
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug line-clamp-2 mb-2">
                    {product?.name || "Unknown Product"}
                  </h3>

                  <div className="mt-auto flex items-end gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{primaryVariant?.mrp || 0}
                    </span>
                    {primaryVariant?.basePrice > primaryVariant?.mrp && (
                      <span className="text-sm line-through text-gray-400 mb-0.5">
                        ₹{primaryVariant.basePrice}
                      </span>
                    )}
                  </div>
                <div className="flex items-center gap-3 mt-2">
                    <Link 
                    href={`/product/${product?.slug}`}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors text-sm"
                    >
                      <FaEye  size={18} />
                   View Product
                    </Link>
                    <button 
                    onClick={()=>dispatch(toggleWishlist({productId:product._id}))}
                      className="p-2.5 text-red-500 bg-red-50 hover:bg-red-100 hover:text-red-600 rounded-lg transition-colors border border-red-100"
                      title="Remove from wishlist"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>



</div>



                </div>
)

})}
    </div>
}

  
    </div>
  )
}

export default WishlistPage
