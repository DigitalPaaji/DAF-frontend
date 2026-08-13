"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { base_url, img_url } from '../components/Store/utils'
import {  FiTrash2, FiHeart } from 'react-icons/fi' 
import { FaEye } from 'react-icons/fa'
import Link from 'next/link'
import { toggleWishlist } from '../components/Store/slices/wishlistSlice'

import ProductCart2 from '../components/ProductCart2'

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist?.items || [])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const fetchWishlist = async () => {
  
    if (!wishlist || wishlist.length === 0) {
      setProducts([])
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)
      const response = await axios.patch(`${base_url}/products/wishlist`, { wishlist })
      
      // Safely access the response data
      const resData = response.data
      
      if (resData && resData.success) {
        setProducts(resData.product || [])
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
    
  }, [ wishlist ])




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
return(
    <ProductCart2 product={product} key={product._id} />
)

})}
    </div>
}

  
    </div>
  )
}

export default WishlistPage
