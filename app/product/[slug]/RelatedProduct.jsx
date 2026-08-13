import ProductCart1 from '@/app/components/ProductCart1'
import { base_url } from '@/app/components/Store/utils'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const RelatedProduct = ({catid}) => {

const [relatedProduct,setRelatedProduct]=useState([ ])

const fetchProduct= async()=>{
  try {
    const response = await axios.get(`${base_url}/cache/product/random/${catid}`);
    const data = await response.data;
    
    if(data.success){
      setRelatedProduct(data.products)
    }else{
      setRelatedProduct([])
    }

  } catch (error) {
     setRelatedProduct([])
  }
}


useEffect(()=>{
fetchProduct()
},[])


  return (
      <section className="bg-[#E8E3DF]/55 px-4 py-16 md:px-12 md:py-24 xl:px-72">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8B5A2B]">
                  You May Also Like
                </p>
    
                <h2 className="font-serif text-3xl text-[#2F2118] md:text-4xl">
                  Related products.
                </h2>
              </div>
    
              <Link
                href="/products"
                className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5A2B] sm:inline-flex"
              >
                View All
                <FaArrowRight size={10} />
              </Link>
            </div>
    
            <div className=" w-full  grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            { relatedProduct.length > 0 && relatedProduct.map((item) => <ProductCart1 product={item} key={item._id}  /> )} 
    
    
              
            </div>
          </section> 
    
  )
}

export default RelatedProduct