import React from 'react'
import ProductCompo from './ProductCompo'

const page =async ({params}) => {

    const {slug } = await params

  return (
    <div className='min-h-screen'>
        <div className='h-24'>

        </div>

    <ProductCompo slug={slug} />
        
        </div>
  )
}

export default page