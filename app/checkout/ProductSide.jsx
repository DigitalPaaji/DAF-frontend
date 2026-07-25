"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { base_url, img_url } from '../components/Store/utils'
import { FiShoppingBag, FiTrash2, FiLoader } from 'react-icons/fi' // Import icons

const ProductSide = ({PayNow}) => {
    const cart = useSelector(state => state.cart.items)




    const [cartData, setCartData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchCart = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${base_url}/getcart_product`, cart);
            setCartData(response.data);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (cart && cart.length > 0) {
            fetchCart()
        } else {
            setCartData(null)
            setLoading(false)
        }
    }, [cart])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg">
                <FiLoader className="animate-spin text-3xl text-gray-500" />
            </div>
        )
    }

    if (!cartData || cartData.data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg">
                <FiShoppingBag className="text-4xl text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-700">Your cart is empty</h3>
            </div>
        )
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full max-w-md">
            <div className="flex items-center gap-2 mb-6 border-b pb-4">
                <FiShoppingBag className="text-xl text-gray-800" />
                <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full ml-auto">
                    {cartData.count} {cartData.count === 1 ? 'Item' : 'Items'}
                </span>
            </div>

            {/* Product List */}
            <div className="flex flex-col gap-6 mb-6">
                {cartData.data.map((item) => (
                    <div key={item.variantId} className="flex justify-between items-start">
                        
                        {/* Image & Details */}
                        <div className="flex gap-4">
                            <div className="relative h-20 w-20 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden border border-gray-200">
                                <img 
                                    src={`${img_url}${item.image}`} 
                                    alt={item.name} 
                                    className="h-full w-full object-cover"
                                />
                                <span className="absolute top-0 right-0 bg-gray-800 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-bl-md">
                                    {item.quantity}
                                </span>
                            </div>

                            <div className="flex flex-col justify-center">
                                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                                    {item.name}
                                </h3>
                                {/* Display Variant Info (e.g., Weight: 150g) */}
                                {item.variant?.attributes && (
                                    <p className="text-xs text-gray-500 mt-1 capitalize">
                                        {item.variant.attributes.itemtype}: {item.variant.attributes.value}
                                    </p>
                                )}
                                <p className="text-xs text-gray-400 mt-1 uppercase">
                                    SKU: {item.variant?.sku}
                                </p>
                            </div>
                        </div>

                        {/* Price & Actions */}
                        <div className="flex flex-col items-end justify-between h-full">
                            <span className="text-sm font-semibold text-gray-800">
                                ₹{item.total}
                            </span>
                         
                        </div>
                    </div>
                ))}
            </div>

            {/* Totals Section */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{cartData.grandTotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                </div>
                
                <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-dashed pt-4 mt-2">
                    <span>Total</span>
                    <span>₹{cartData.grandTotal}</span>
                </div>
            </div>

            <div className='text-center'>
                <button onClick={()=>PayNow({items:cart,price:cartData.grandTotal,finalAmount:cartData.grandTotal})} className='  bg-blue-600 text-white  px-4 py-1 rounded-2xl cursor-pointer '>

                Pay Now
                </button>
            </div>
        </div>
    )
}

export default ProductSide