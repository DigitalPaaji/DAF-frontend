import React, { Suspense } from 'react'
import ProductCompo from './ProductCompo';

const page = () => {

     

  return (
    <div className='min-h-screen mt-20'>
        
        
    <Suspense fallback="Loading.......">
        <ProductCompo />
        
        </Suspense>        
        
        
        </div>
  )
}

export default page