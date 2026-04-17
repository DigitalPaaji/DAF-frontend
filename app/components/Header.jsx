"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "./Store/slices/categorySlice";

const Header = () => {
  const dispatch = useDispatch()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
const { info:category} = useSelector(status=>status.category)
const cart = useSelector(status=>status.cart.items)
  const wishlist= useSelector(state=>state.wishlist.items)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)





  useEffect(() => {

    dispatch(getCategory())
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);         




  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out text-gray-200 
        ${isScrolled 
          ? " top-7 px-4 md:px-12 lg:px-24 xl:px-32 " 
          : "top-0 px-0"
        }`}
    >
      <div 
        className={` mx-auto backdrop-blur-2xl flex justify-between items-center transition-all duration-500 ease-in-out 
          ${isScrolled 
            ? "rounded-xl  backdrop-blur-3xl text-black/80 xl:rounded-4xl px-4 md:px-12 lg:px-24 h-16 shadow-2xl  " 
            : "max-w-full  bg-transparent text-black/80  backdrop-blur-3xl   px-4 md:px-12 lg:px-24 xl:px-40  h-20"
          }`}
      >
        

        <div className="lg:hidden flex items-center w-1/4">
          <button 
            onClick={toggleMenu} 
            className="text-black/80 focus:outline-none transition-transform hover:scale-110 "
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* === DESKTOP NAV - LEFT === */}
        <nav className="hidden lg:flex justify-end items-center w-1/3 space-x-4 xl:space-x-8 text-[11px] xl:text-sm uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
          <Link href="/about" className="hover:text-[#D4AF37] transition-colors duration-300">About</Link>
          
       <div className="relative group">
  {/* Trigger Link */}
  <Link 
    href="/category" 
    className="hover:text-[#D4AF37] transition-colors duration-300 py-2"
  >
    Category
  </Link>

  {/* Dropdown Menu */}
  <div className="absolute left-0 pt-7 top-full  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
    <div className="flex flex-col bg-white border border-gray-100 rounded-md shadow-lg py-2 min-w-[160px]">
      {category?.length > 0 ? (
        category.map((item) => (
          <Link 
            key={item._id} 
            href={`/products?category=${item._id}`} 
            className="px-4 py-2 border-b border-dotted border-gray-500/70 text-gray-700 hover:text-[#D4AF37] hover:bg-gray-50 transition-colors duration-200 text-nowrap text-sm"
          >
            {item.name}
          </Link>
        ))
      ) : (
        <span className="px-4 py-2 text-gray-400 text-sm">
          No categories found
        </span>
      )}
    </div>
  </div>
</div>


          <Link href="/products" className="hover:text-[#D4AF37] transition-colors duration-300">Products</Link>
        </nav>

   
        <div className="flex justify-center w-2/4 lg:w-1/3">
          <Link href="/" className="relative">
            <img 
              src="/Images/logo.webp" 
              alt="Logo" 
              className={`object-contain transition-all duration-500 p-2 rounded-full 
                ${isScrolled ? "h-12 md:h-14 xl:h-20 bg-white" : " h-14 md:h-16 xl:h-24 "}`} 
            />
          </Link>
        </div>

        {/* === DESKTOP NAV - RIGHT === */}
        <nav className="hidden lg:flex justify-start items-center w-1/3 space-x-4 xl:space-x-8 text-[11px] xl:text-sm uppercase tracking-wider font-semibold">
          <Link href="/blogs" className="hover:text-[#D4AF37] transition-colors duration-300">Blogs</Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition-colors duration-300">Contact</Link>
          
          <div className="flex gap-3 xl:gap-5 items-center pl-4 xl:pl-6 border-l border-[#D4AF37]/40">
            <button className="hover:text-[#D4AF37] transition-colors duration-300"><LuSearch size={20} /></button>
            <Link href="/wishlist" className="hover:text-[#D4AF37] transition-colors duration-300 relative"><FaRegHeart size={20} />{wishlist?.length > 0 && <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">{wishlist?.length}</span>}</Link>
            <Link href="/cart" className="hover:text-[#D4AF37] transition-colors duration-300 relative"><MdOutlineShoppingCart size={22} /> {cart?.length > 0 && <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">{cart?.length}</span>}</Link>
            <Link href="/profile" className="hover:text-[#D4AF37] transition-colors duration-300"><FaRegUserCircle size={20} /></Link>
          </div>
        </nav>

        {/* === MOBILE ICONS (Right) === */}
        <div className="lg:hidden flex justify-end items-center gap-3 md:gap-5 w-1/4 text-[black]">
                    <Link href="/profile" className="hover:text-[#D4AF37] transition-colors duration-300"><FaRegUserCircle size={20} /></Link>

          <button><LuSearch size={20} /></button>
          <Link href="/cart">
        
          <MdOutlineShoppingCart size={22} /></Link>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black fixed inset-0 z-[60] flex flex-col items-center justify-center space-y-8 text-xl uppercase tracking-widest">
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-[#D4AF37]"><FiX size={32}/></button>
            <Link href="/" onClick={toggleMenu} className="hover:text-[#D4AF37]">Home</Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-[#D4AF37]">About</Link>
            <Link href="/category" onClick={toggleMenu} className="hover:text-[#D4AF37]">Category</Link>
            <Link href="/products" onClick={toggleMenu} className="hover:text-[#D4AF37]">Products</Link>
            <Link href="/blogs" onClick={toggleMenu} className="hover:text-[#D4AF37]">Blogs</Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-[#D4AF37]">Contact</Link>
            
            <div className="flex gap-10 pt-10 border-t border-[#D4AF37]/30 w-1/2 justify-center">
                <Link href="/wishlist" onClick={toggleMenu}><FaRegHeart size={28} /></Link>
                <Link href="/profile" onClick={toggleMenu}><FaRegUserCircle size={28} /></Link>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;