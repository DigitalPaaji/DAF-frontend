"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { base_url, img_url } from '../components/Store/utils'
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi'
import { removeFromCart, updateQuantity } from '../components/Store/slices/cartSlice'

const CartPage = () => {
    const cart = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const [cartData, setCartData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchCart = async () => {
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
        if(cart.length > 0){

            fetchCart()
        }else{
          setCartData(null)  
        }
    }, [cart]) 


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-900"></div>
            </div>
        )
    }

    // 2. Empty Cart State
    if (!cartData || !cartData.data || cartData.data.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-500">
                <FiShoppingBag className="w-16 h-16 mb-4 text-gray-300" />
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            </div>
        )
    }

     const handelSubQuantity=(productId, variantId, quantity)=>{
        console.log(productId, variantId, quantity)
        dispatch(updateQuantity({ productId, variantId, quantity}))
     }
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <FiShoppingBag className="text-slate-700" /> Shopping Cart
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* --- Left Column: Cart Items --- */}
                    <div className="lg:w-2/3 space-y-4">
                        {cartData.data.map((item) => (
                            <div key={item.variantId} className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-white shadow-sm rounded-2xl border border-gray-100 gap-4">
                                
                                {/* Product Image */}
                                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden relative">
                                    <img
                                        src={`${img_url}${item.image}`}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1 capitalize">
                                        {item.variant.attributes.itemtype}: <span className="font-medium text-gray-700">{item.variant.attributes.value}</span>
                                    </p>
                                    <p className="text-lg font-bold text-slate-900 mt-2">₹{item.price}</p>
                                </div>

                                {/* Actions: Quantity & Delete */}
                                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                                    <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                                        <button
                                        disabled={item.quantity <=1}
                                        
                                        onClick={()=>handelSubQuantity(item.productId,item.variant._id,item.quantity-1)} className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-l-lg transition disabled:cursor-not-allowed">
                                            <FiMinus size={16} />
                                        </button>
                                        <span className="w-10 text-center font-medium text-gray-700">
                                            {item.quantity}
                                        </span>
                                        <button   disabled={item.quantity >=5}  onClick={()=>handelSubQuantity(item.productId,item.variant._id,item.quantity+1)} className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-r-lg transition disabled:cursor-not-allowed ">
                                            <FiPlus size={16} />
                                        </button>
                                    </div>

                                    <button  onClick={()=>dispatch(removeFromCart({productId:item.productId, variantId:item.variant._id}))} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition" title="Remove item">
                                        <FiTrash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- Right Column: Order Summary --- */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 shadow-sm rounded-2xl border border-gray-100 sticky top-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 text-gray-600 mb-6 text-sm sm:text-base">
                                <div className="flex justify-between">
                                    <span>Subtotal ({cartData.count} items)</span>
                                    <span className="font-medium text-gray-900">₹{cartData.grandTotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900">Grand Total</span>
                                    <span className="text-2xl font-bold text-slate-900">₹{cartData.grandTotal}</span>
                                </div>
                            </div>

                            <button className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition duration-200 shadow-sm">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage