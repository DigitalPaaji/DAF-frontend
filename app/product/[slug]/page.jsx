"use client"
import { base_url, img_url } from '@/app/components/Store/utils'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCheck, FaChevronLeft, FaChevronRight, FaExpand, FaHeart, FaLeaf, FaMinus, FaPlus, FaRegHeart, FaShieldAlt, FaStar, FaTimes, FaTruck } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from 'next/image'
import RelatedProduct from './RelatedProduct'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '@/app/components/Store/slices/wishlistSlice'
import { toast } from 'react-toastify'
axios.defaults.withCredentials = true;

const page = () => {


const {slug} = useParams()
const [product,setProduct]=useState(null)
const [thumbsSwiper, setThumbsSwiper] = useState(null);
const [activeImage, setActiveImage] = useState(0);
const [selectedSize, setSelectedSize] = useState();
const [quantity, setQuantity] = useState(1);
const [addedToCart, setAddedToCart] = useState(false);
const [activeAccordion, setActiveAccordion] = useState(0);
const [previewOpen, setPreviewOpen] = useState(false);
const [loading, setLoading] = useState(true);
const {items:wishlisted} = useSelector(state=>state.wishlist)
const  dispatch = useDispatch()





  const cartParam = useMemo(() => {
    return encodeURIComponent(JSON.stringify([{productid:product?._id,variantid:selectedSize?._id,quantity,price:selectedSize?.mrp}]));
  }, [ product,selectedSize,quantity]);


   const fetchProduct= async()=>{
    try {
      setLoading(true)
        const response = await axios.get(`${base_url}/cache/product/single/${slug}`);
        const data = await response.data;
        if(data.success){
setProduct(data.product)
setSelectedSize(data.product.variants[0])
        }else{
            setProduct(null)
        }
    } catch (error) {
         setProduct(null)
    }finally{
      setLoading(false)
    }
      }
useEffect(()=>{
    fetchProduct()
},[slug])







  const handleAddToCart = async (e) => {
    try {
  
  const FullData={
    productid:product._id,variantid:selectedSize._id ,quantity
  }

const response = await axios.post(`${base_url}/cart/add`,FullData);
const data = await response.data;
if(data.success){
 toast.success(data.message) 
 setAddedToCart(true);
}

  console.log(FullData)
} catch (error) {
  
}finally{

}





    // setTimeout(() => {
    //   setAddedToCart(false);
    // }, 2500);
  };


if(loading){
 return (
      <main className="flex min-h-screen items-center justify-center bg-[#FDFBF7] px-4">
        <div className="max-w-md text-center">
       Loading........

        </div>
      </main>
    );
}

 if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FDFBF7] px-4">
        <div className="max-w-md text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#8B5A2B]">
            Product Not Found
          </p>

          <h1 className="mb-7 font-serif text-4xl text-[#3A2A21]">
            This product is currently unavailable.
          </h1>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-[#3A2A21] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            Return to Products
            <FaArrowRight size={10} />
          </Link>
        </div>
      </main>
    );
  }

  return (
     <main className="min-h-screen bg-[#FDFBF7] text-[#312A26]">
    
      <section className="border-b border-[#DDD4C8] px-4 pb-5 pt-28 md:px-12 lg:pt-32 xl:px-72">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#312A26]/45">
          <Link href="/" className="hover:text-[#8B5A2B]">
            Home
          </Link>

          <IoIosArrowForward size={10} />

          <Link href="/products" className="hover:text-[#8B5A2B]">
            Products
          </Link>

          <IoIosArrowForward size={10} />

          <span className="text-[#8B5A2B]">{product.name}</span>
        </div>
      </section>

 
       <section className="px-4 py-8 md:px-12 md:py-14 xl:px-72">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:gap-16">
      
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <div className="relative overflow-hidden">
            

              <button
                type="button"
             onClick={() => dispatch(toggleWishlist(product._id))}
                className={`absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border bg-white/90 shadow-sm backdrop-blur transition-colors ${
                  wishlisted.includes(product._id)
                    ? "border-red-400 text-red-500"
                    : "border-white text-[#3A2A21] hover:bg-[#3A2A21] hover:text-white"
                }`}
                aria-label="Toggle wishlist"
              >
                {wishlisted.includes(product._id) ? (
                  <FaHeart size={16} />
                ) : (
                  <FaRegHeart size={16} /> 
                )}
              </button>

              <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                navigation={{
                  prevEl: ".product-main-prev",
                  nextEl: ".product-main-next",
                }}
                onSlideChange={(swiper) =>
                  setActiveImage(swiper.realIndex)
                }
                spaceBetween={10}
                slidesPerView={1}
                className="product-main-swiper"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={`${image}-${index}`}>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveImage(index);
                        setPreviewOpen(true);
                      }}
                      className="relative block aspect-square w-full cursor-zoom-in sm:aspect-[6/5]"
                    >
                      <Image
                        src={`${img_url}${image}`}
                        alt={`${product.name} image ${index + 1}`}
                        fill
                        priority={index === 0}
                        unoptimized
                        sizes="(max-width: 1280px) 100vw, 50vw"
                        className="object-contain p-8 sm:p-12 lg:p-16"
                      />

                      <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3A2A21] shadow-md">
                        <FaExpand size={13} />
                      </span>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>

              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    className="product-main-prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DDD4C8] bg-white/90 text-[#3A2A21] shadow-sm backdrop-blur transition hover:bg-[#3A2A21] hover:text-white"
                  >
                    <FaChevronLeft size={12} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next image"
                    className="product-main-next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DDD4C8] bg-white/90 text-[#3A2A21] shadow-sm backdrop-blur transition hover:bg-[#3A2A21] hover:text-white"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </>
              )}

              <span className="absolute bottom-5 left-5 z-20 rounded-full bg-[#3A2A21] px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white">
                {activeImage + 1} / {product.images.length}
              </span>
            </div>

           
            {product.images.length > 1 && (
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                  640: { slidesPerView: 5 },
                  1024: { slidesPerView: 4 },
                }}
                className="mt-4"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={`thumb-${image}-${index}`}>
                    <button
                      type="button"
                      className={`relative aspect-square w-full overflow-hidden rounded-xl border bg-[#F2EFEB] transition-all ${
                        activeImage === index
                          ? "border-[#3A2A21]"
                          : "border-[#DDD4C8] opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={`${img_url}${image}`}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        fill
                        unoptimized
                        sizes="120px"
                        className="object-contain p-3"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="xl:sticky xl:top-28 xl:self-start"
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8B5A2B]">
              {product.category.name}
            </p>

            <h1 className="mb-4 font-serif text-4xl leading-tight text-[#2F2118] md:text-5xl">
              {product.name}
            </h1>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-[#B9832B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} size={12} />
                ))}
              </div>

              <button
                type="button"
                className="text-xs text-[#312A26]/55 underline underline-offset-4"
              >
                {product?.rating || 4} ({product?.reviews || 21} reviews)
              </button>

              <span className="text-[#312A26]/20">|</span>

              <span className="flex items-center gap-2 text-xs font-medium text-[#667521]">
                <span className="h-2 w-2 rounded-full bg-[#7A8B2E]" />
                In stock
              </span>
            </div>

             <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-[#DDD4C8] pb-6">
              <span className="text-3xl font-semibold text-[#3A2A21]">
                {selectedSize.mrp}
              </span>

              {selectedSize.basePrice && (
                <span className="text-lg text-[#3A2A21]/35 line-through">
                  {selectedSize.basePrice}
                </span>
              )}

              {selectedSize.mrp  < selectedSize.basePrice   && (
                <span className="rounded-full bg-[#7A8B2E]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#667521]">
                  {  ((( selectedSize.basePrice -  selectedSize.mrp) /  selectedSize.basePrice) * 100).toFixed(2)}% Off
                </span>
              )}

             

              {selectedSize.mrp  < selectedSize.basePrice && (
                <p className="w-full text-xs text-[#667521]">
                  You save ₹{(selectedSize.basePrice -  selectedSize.mrp).toFixed(2)}
                </p>
              )}
            </div> 

            <p className="mb-7 text-sm leading-7 text-[#312A26]/65 md:text-base">
              {product.shortDescription}
            </p>

          
           

        
            <div className="mb-7">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Select Pack Size
                </p>

                <span className="text-xs font-semibold text-[#8B5A2B]">
                  {selectedSize.attributes.value}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.variants.map((size,ind) => (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[68px] rounded-lg border px-4 py-3 text-xs font-semibold transition ${
                      selectedSize.attributes.value === size.attributes.value
                        ? "border-[#3A2A21] bg-[#3A2A21] text-white"
                        : "border-[#CFC4BA] bg-white hover:border-[#3A2A21]"
                    }`}
                  >
                    {size.attributes.value}
                  </button>
                ))}
              </div>
            </div>

           
            <div className="mb-4 flex gap-3">
              <div className="flex h-13 items-center overflow-hidden rounded-lg border border-[#3A2A21] bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((prev) => Math.max(1, prev - 1))
                  }
                  className="flex h-full w-12 items-center justify-center hover:bg-[#E8E3DF]"
                >
                  <FaMinus size={10} />
                </button>

                <span className="flex h-full min-w-12 items-center justify-center border-x border-[#3A2A21]/15 text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex h-full w-12 items-center justify-center hover:bg-[#E8E3DF]"
                >
                  <FaPlus size={10} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex min-h-13 flex-1 items-center justify-center gap-3 rounded-lg px-5 text-xs font-bold uppercase tracking-[0.18em] text-white transition ${
                  addedToCart
                    ? "bg-[#7A8B2E]"
                    : "bg-[#3A2A21] hover:bg-[#8B5A2B]"
                }`}
              >
                {addedToCart ? (
                  <>
                    <FaCheck size={10} />
                    Added to Cart
                  </>
                ) : (
                  "+ Add to Cart"
                )}
              </button>
            </div>
<div>
            <Link
              type="button"
             href={`/checkout?cart=${cartParam}&type=buy`}
              className="mb-6 block text-center rounded-lg border border-[#3A2A21] py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#3A2A21] transition hover:bg-[#3A2A21] hover:text-white"
            >
              Buy It Now
            </Link>

      </div>
            <div className="mb-7 rounded-2xl border border-[#DDD4C8] bg-[#F4F1ED] p-5">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Available Offers
              </p>

              <div className="space-y-3 text-sm text-[#312A26]/65">
                <p>
                  <strong className="text-[#312A26]">WELCOME10:</strong>{" "}
                  Get 10% off on your first order.
                </p>

                <p>
                  Free shipping on eligible orders above the minimum
                  cart value.
                </p>
              </div>
            </div>

          
            <div className="mb-8 border-y border-[#DDD4C8] py-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em]">
                Check Delivery
              </p>

              <div className="flex overflow-hidden rounded-lg border border-[#CFC4BA] bg-white">
                <input
                  type="text"
                  maxLength={6}
                  // value={pincode}
                  // onChange={(event) =>
                  //   setPincode(
                  //     event.target.value.replace(/\D/g, ""),
                  //   )
                  // }
                  placeholder="Enter pincode"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none"
                />

                <button
                  type="button"
                  // onClick={handleDeliveryCheck}
                  className="px-5 text-xs font-bold uppercase tracking-wider text-[#8B5A2B]"
                >
                  Check
                </button>
              </div>

              {/* {deliveryMessage && (
                <p className="mt-3 text-xs leading-5 text-[#667521]">
                  {deliveryMessage}
                </p>
              )} */}
            </div>

<div className="flex flex-wrap text-xs gap-4 ">
{product.tags.map((tag)=><p className="text-[#312A26]/45" key={tag}>#{tag}</p>)}

</div>
           
          </motion.div>
        </div>
      </section> 

 
     <section className="px-4 pb-16 md:px-12 md:pb-24 xl:px-72">
        <div className="grid grid-cols-1 gap-10 border-t border-[#DDD4C8] pt-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8B5A2B]">
              More Information
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#2F2118] md:text-4xl">
              Everything you need to know.
            </h2>


 <p className='py-4 text-gray-600/80' dangerouslySetInnerHTML={{__html:product.description}}></p>


          </div>

           <div className="border-t border-[#DDD4C8]">
            {Object.entries(product.details).map(([key, value], index) => {
              const active = activeAccordion === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#DDD4C8]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveAccordion(active ? "" : index)
                    }
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span
                      className={`text-sm font-semibold ${
                        active
                          ? "text-[#3A2A21]"
                          : "text-[#312A26]/55"
                      }`}
                    >
                      {key}
                    </span>

                    <span className="text-xl font-light">
                      {active ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-6 text-sm leading-7 text-[#312A26]/65">
                          {value}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div> 
        </div>
      </section> 


       <section className="px-4 pb-20 md:px-12 xl:px-72">
        <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#DDD4C8] bg-white md:grid-cols-3">
          <TrustItem
            icon={FaLeaf}
            title="Carefully Selected"
            description="Ingredients chosen for their authentic taste, aroma and quality."
          />

          <TrustItem
            icon={FaTruck}
            title="Secure Delivery"
            description="Products are carefully packed and delivered safely to your doorstep."
            border
          />

          <TrustItem
            icon={FaShieldAlt}
            title="Secure Payments"
            description="Your transactions and personal information remain protected."
          />
        </div>
      </section> 

 
      {/* <ReviewsSection product={product} /> */}

  <RelatedProduct catid ={product.category._id}   />
   
   
       <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              type="button"
              onClick={() => setPreviewOpen(false)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black"
              aria-label="Close image preview"
            >
              <FaTimes size={15} />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0
                    ? productImages.length - 1
                    : prev - 1,
                )
              }
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black md:left-8"
            >
              <FaArrowLeft size={13} />
            </button>

            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[82vh] w-[88vw] max-w-6xl"
            >
              <Image
                src={`${img_url}${product.images[activeImage]}`}
                alt={`${product.name} enlarged`}
                fill
                unoptimized
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={() =>
                setActiveImage((prev) =>
                  prev === product.images.length - 1
                    ? 0
                    : prev + 1,
                )
              }
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black md:right-8"
            >
              <FaArrowRight size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence> 
    </main>
  )
}

export default page









const TrustItem = ({icon: Icon,title,description,  border = false,}) => (
  <div
    className={`flex items-start gap-4 p-7 md:p-8 ${
      border
        ? "border-y border-[#DDD4C8] md:border-x md:border-y-0"
        : ""
    }`}
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8E3DF] text-[#8B5A2B]">
      <Icon size={16} />
    </div>

    <div>
      <h3 className="mb-2 text-sm font-semibold text-[#3A2A21]">
        {title}
      </h3>

      <p className="text-xs leading-6 text-[#312A26]/55">
        {description}
      </p>
    </div>
  </div>
);