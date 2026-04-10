"use client";
import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const products = [
  {
    id: 1,
    title: 'Plum Berry Organic Black Tea',
    image: 'https://t3.ftcdn.net/jpg/02/94/33/46/360_F_294334642_D1Rx1TN6y99BmEtQNdXkRDWThtt8CkEF.jpg',
    discount: '20% OFF',
    price: '110.00',
    originalPrice: '187.50',
  },
  {
    id: 2,
    title: 'Jade Orchid Green Tea',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20250324/pngtree-green-tea-packaging-concept-image_17138779.jpg',
    discount: '30% OFF',
    price: '50.00',
    originalPrice: '80.00',
  },
  {
    id: 3,
    title: 'Lemon Ginger Herbal Tea',
    image: 'https://ahmadtea.eg/cdn/shop/collections/20FEBFacewithGTA_1000x_d4f3cd61-433d-4f6d-8082-609e8bf11b7f.webp?v=1666691840&width=1500',
    discount: '31% OFF',
    price: '682.93',
    originalPrice: '705.51',
  },
  {
    id: 4,
    title: 'Chamomile Botanical Blend Sachets',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhybqzMuB9jJReGX5ERyWA5OdZ-AWQoGXxg&s',
    discount: '30% OFF',
    price: '20.00',
    originalPrice: '40.00',
  },
  {
    id: 5,
    title: 'Cinnamon Horchata Organic Green and Black Tea',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530607753/DU/KM/PH/7680821/nilgiri-leaf-tea-250x250.png',
    discount: '38% OFF',
    price: '72.29',
    originalPrice: '117.35',
  },
  {
    id: 6,
    title: 'Chamomile Botanical Blend Sachets',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530656637/DG/IP/QB/7680821/100gm-lichee-black-tea-250x250.png',
    discount: '30% OFF',
    price: '40.00',
    originalPrice: '60.00',
  },
  {
    id: 7,
    title: 'Chamomile Blend Organic Tea',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600https://5.imimg.com/data5/SELLER/Default/2023/1/JP/DQ/YM/159075452/darjeeling-tea-black-500x500.jpg',
    discount: '30% OFF',
    price: '50.00',
    originalPrice: '70.00',
  },
  {
    id: 8,
    title: 'Organic Dandelion & Peach Naturally',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/545370459/DK/IG/WW/105787048/black-loose-leaf-tea.jpg',
    discount: '30% OFF',
    price: '30.00',
    originalPrice: '35.00',
  },
];

const SimpleTeaSlider = () => {
  return (
    <section className="relative w-full py-8">
      {/* Single subtle background overlay */}
      {/* <div className="absolute inset-0 bg-amber-100/50" /> */}

      <div className="relative z-10 container mx-auto px-4">
        {/* Optional small heading (kept minimal) */}
        <h2 className="text-center text-xl font-serif text-amber-900 mb-6">
          Featured Teas
        </h2>

        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="!pb-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className=" bg-amber-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                {/* Image container */}
                <div className="relative aspect-square mb-2 bg-amber-50 rounded flex items-center justify-center">
                  {product.discount && (
                    <span className="absolute top-1 left-1 bg-amber-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {product.discount}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-4/5 h-4/5 object-contain mix-blend-multiply"
                  />
                </div>

                {/* Product info */}
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 mb-1">
                  {product.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="text-amber-800 font-bold">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-xs line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Simple button */}
                {/* <button className="w-full mt-3 border border-amber-800 text-amber-800 text-xs font-medium py-1.5 rounded hover:bg-amber-800 hover:text-white transition-colors">
                  Add to Cart
                </button> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SimpleTeaSlider;