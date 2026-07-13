"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

/* =======================
   TEMP CATEGORY DATA
   Later replace this with API data
======================= */

const categoryData = [
  {
    name: "Tea Masala / Spice Blends",
    slug: "tea-masala-spice-blends",
    children: [
      { name: "Cardamom Tea Flavor", slug: "cardamom-tea-flavor" },
      { name: "Ginger Tea Flavor", slug: "ginger-tea-flavor" },
      { name: "Lemon Tea Flavor", slug: "lemon-tea-flavor" },
    ],
  },
  {
    name: "Spice Blends for Kitchen / Kitchen Masalas",
    slug: "kitchen-masalas",
    children: [
      {
        name: "Kitchen King Masala / Spice Blends",
        slug: "kitchen-king-masala",
      },
      { name: "Sabzi Masala", slug: "sabzi-masala" },
      { name: "Biryani Masala", slug: "biryani-masala" },
      { name: "Butter Chicken Masala", slug: "butter-chicken-masala" },
      { name: "Chaat Masala", slug: "chaat-masala" },
      { name: "Chicken Masala", slug: "chicken-masala" },
      { name: "Fish Masala", slug: "fish-masala" },
      { name: "Chole Masala", slug: "chole-masala" },
      {
        name: "Fried Chicken Seasoning Masala",
        slug: "fried-chicken-seasoning-masala",
      },
      { name: "Jaljeera Masala", slug: "jaljeera-masala" },
      { name: "Mutton Masala", slug: "mutton-masala" },
      { name: "Paneer Butter Masala", slug: "paneer-butter-masala" },
      { name: "Premium Garam Masala", slug: "premium-garam-masala" },
      { name: "Pani Puri Masala", slug: "pani-puri-masala" },
      { name: "Rajma Masala", slug: "rajma-masala" },
      { name: "Sambar Masala", slug: "sambar-masala" },
      { name: "Shikanji Masala", slug: "shikanji-masala" },
      { name: "Tandoori Chicken Masala", slug: "tandoori-chicken-masala" },
    ],
  },
  {
    name: "Pickle Masala / Spice Blends for Pickles",
    slug: "pickle-masala",
    children: [
      {
        name: "Button Mushroom Pickle Masala",
        slug: "button-mushroom-pickle-masala",
      },
      {
        name: "Classic Lemon Pickle Masala",
        slug: "classic-lemon-pickle-masala",
      },
      {
        name: "Classic Mango Pickle Masala",
        slug: "classic-mango-pickle-masala",
      },
      {
        name: "Garlic and Ginger Pickle Masala",
        slug: "garlic-ginger-pickle-masala",
      },
      {
        name: "Lemon Mushroom Pickle Masala",
        slug: "lemon-mushroom-pickle-masala",
      },
      {
        name: "Monkey Fruit Pickle Masala",
        slug: "monkey-fruit-pickle-masala",
      },
      {
        name: "Punjabi Extra Spicy Mango Pickle Masala",
        slug: "punjabi-extra-spicy-mango-pickle-masala",
      },
      {
        name: "Punjabi Green Chilli Pickle Masala",
        slug: "punjabi-green-chilli-pickle-masala",
      },
      {
        name: "Punjabi Mixed Vegetable Pickle Masala",
        slug: "punjabi-mixed-vegetable-pickle-masala",
      },
      { name: "Sweet Lemon Pickle Masala", slug: "sweet-lemon-pickle-masala" },
    ],
  },
  {
    name: "Flours",
    slug: "flours",
    children: [
      { name: "Wheat Flour Basic", slug: "wheat-flour-basic" },
      { name: "Diabetic Friendly Atta", slug: "diabetic-friendly-atta" },
      {
        name: "High Protein Multigrain Atta",
        slug: "high-protein-multigrain-atta",
      },
      { name: "Kids Nutrition Atta", slug: "kids-nutrition-atta" },
      { name: "Millet Multigrain Atta", slug: "millet-multigrain-atta" },
      {
        name: "Single Millet Flour Range",
        slug: "single-millet-flour-range",
        children: [
          { name: "Bajra Flour", slug: "bajra-flour" },
          { name: "Jowar Flour", slug: "jowar-flour" },
          { name: "Ragi Flour", slug: "ragi-flour" },
          { name: "Foxtail Millet Flour", slug: "foxtail-millet-flour" },
          { name: "Little Millet Flour", slug: "little-millet-flour" },
          { name: "Kodo Millet Flour", slug: "kodo-millet-flour" },
          { name: "Barnyard Millet Flour", slug: "barnyard-millet-flour" },
        ],
      },
      { name: "Weight Management Atta", slug: "weight-management-atta" },
    ],
  },
  {
    name: "Pure Spices",
    slug: "pure-spices",
    children: [
      {
        name: "Major Whole Spices",
        slug: "major-whole-spices",
        children: [
          { name: "Cumin / Jeera", slug: "cumin-jeera" },
          { name: "Coriander Seeds / Dhania", slug: "coriander-seeds-dhania" },
          { name: "Fennel / Saunf", slug: "fennel-saunf" },
          { name: "Fenugreek / Methi", slug: "fenugreek-methi" },
          { name: "Mustard Seeds / Rai", slug: "mustard-seeds-rai" },
          { name: "Nigella / Kalonji", slug: "nigella-kalonji" },
          { name: "Ajwain / Carom Seeds", slug: "ajwain-carom-seeds" },
          { name: "Dill Seeds / Suva", slug: "dill-seeds-suva" },
          { name: "Caraway / Shahi Jeera", slug: "caraway-shahi-jeera" },
          { name: "Celery Seeds", slug: "celery-seeds" },
          { name: "Poppy Seeds / Khus Khus", slug: "poppy-seeds-khus-khus" },
        ],
      },
      {
        name: "Leafy & Herb Spices",
        slug: "leafy-herb-spices",
        children: [
          { name: "Curry Leaves", slug: "curry-leaves" },
          { name: "Mint / Pudina", slug: "mint-pudina" },
          {
            name: "Coriander Leaves / Hara Dhania",
            slug: "coriander-leaves-hara-dhania",
          },
          { name: "Kasuri Methi", slug: "kasuri-methi" },
          { name: "Bay Leaf / Tej Patta", slug: "bay-leaf-tej-patta" },
        ],
      },
      {
        name: "Bark, Roots & Rhizomes",
        slug: "bark-roots-rhizomes",
        children: [
          { name: "Turmeric / Haldi", slug: "turmeric-haldi" },
          { name: "Ginger / Sonth", slug: "ginger-sonth" },
          { name: "Garlic / Lahsun", slug: "garlic-lahsun" },
          { name: "Cinnamon / Dalchini", slug: "cinnamon-dalchini" },
          { name: "Cassia Bark", slug: "cassia-bark" },
          { name: "Galangal / Kulanjan", slug: "galangal-kulanjan" },
        ],
      },
      {
        name: "Flower-Based Spices",
        slug: "flower-based-spices",
        children: [
          { name: "Clove / Laung", slug: "clove-laung" },
          { name: "Saffron / Kesar", slug: "saffron-kesar" },
          { name: "Nagkesar", slug: "nagkesar" },
        ],
      },
      {
        name: "Fruit & Pod Spices",
        slug: "fruit-pod-spices",
        children: [
          {
            name: "Black Pepper / Kali Mirch",
            slug: "black-pepper-kali-mirch",
          },
          {
            name: "Green Cardamom / Choti Elaichi",
            slug: "green-cardamom-choti-elaichi",
          },
          {
            name: "Black Cardamom / Badi Elaichi",
            slug: "black-cardamom-badi-elaichi",
          },
          { name: "Dry Red Chilli", slug: "dry-red-chilli" },
          { name: "Long Pepper / Pippali", slug: "long-pepper-pippali" },
          { name: "Kokum", slug: "kokum" },
        ],
      },
      {
        name: "Nut & Seed Spice Category",
        slug: "nut-seed-spices",
        children: [
          { name: "Nutmeg / Jaiphal", slug: "nutmeg-jaiphal" },
          { name: "Mace / Javitri", slug: "mace-javitri" },
          {
            name: "Star Anise / Chakri Phool",
            slug: "star-anise-chakri-phool",
          },
          { name: "Sesame Seeds / Til", slug: "sesame-seeds-til" },
          { name: "Flaxseed / Alsi", slug: "flaxseed-alsi" },
        ],
      },
      {
        name: "Powdered & Processed Spices",
        slug: "powdered-processed-spices",
        children: [
          { name: "Turmeric Powder", slug: "turmeric-powder" },
          { name: "Chilli Powder", slug: "chilli-powder" },
          { name: "Coriander Powder", slug: "coriander-powder" },
          { name: "Cumin Powder", slug: "cumin-powder" },
        ],
      },
      {
        name: "Regional & Specialty Spices",
        slug: "regional-specialty-spices",
        children: [
          { name: "Asafoetida / Hing", slug: "asafoetida-hing" },
          {
            name: "Stone Flower / Dagad Phool",
            slug: "stone-flower-dagad-phool",
          },
          { name: "Anardana", slug: "anardana" },
          {
            name: "Amchur / Dry Mango Powder",
            slug: "amchur-dry-mango-powder",
          },
          { name: "Kachri Powder", slug: "kachri-powder" },
          { name: "Gond / Edible Gum", slug: "gond-edible-gum" },
        ],
      },
    ],
  },
  {
    name: "Pickles",
    slug: "pickles",
    children: [
      { name: "Mango Pickle", slug: "mango-pickle" },
      { name: "Lemon Pickle", slug: "lemon-pickle" },
      { name: "Mixed Vegetable Pickle", slug: "mixed-vegetable-pickle" },
      { name: "Green Chilli Pickle", slug: "green-chilli-pickle" },
      { name: "Garlic Pickle", slug: "garlic-pickle" },
      { name: "Amla Pickle", slug: "amla-pickle" },
      { name: "Gongura Pickle", slug: "gongura-pickle" },
      { name: "Tomato Pickle", slug: "tomato-pickle" },
      { name: "Red Chilli Pickle", slug: "red-chilli-pickle" },
    ],
  },
  {
    name: "Ready To Use Tadka Gravy",
    slug: "ready-to-use-tadka-gravy",
    children: [
      {
        name: "Universal Tadka Base for Mother Gravy",
        slug: "universal-tadka-base-for-mother-gravy",
      },
      {
        name: "Universal Brown Onion Tadka Gravy",
        slug: "universal-brown-onion-tadka-gravy",
      },
      {
        name: "Butter Masala / Makhani Gravy",
        slug: "butter-masala-makhani-gravy",
      },
      { name: "Shahi White Gravy", slug: "shahi-white-gravy" },
      { name: "Punjabi Tadka Gravy", slug: "punjabi-tadka-gravy" },
      { name: "Chana Masala Gravy", slug: "chana-masala-gravy" },
      { name: "Kadai Gravy Base", slug: "kadai-gravy-base" },
      { name: "South Indian Curry Base", slug: "south-indian-curry-base" },
    ],
  },
];

/* =======================
   DESKTOP CATEGORY MEGA DROPDOWN
======================= */

const CategoryMegaDropdown = () => {
  const [activeCategory, setActiveCategory] = useState(categoryData[0]);
  const [activeSubCategory, setActiveSubCategory] = useState(
    categoryData[0]?.children?.[0] || null,
  );

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
    setActiveSubCategory(category?.children?.[0] || null);
  };

  const handleSubCategoryHover = (subcategory) => {
    setActiveSubCategory(subcategory);
  };

  return (
    <div className="relative group">
      <button className="hover:text-[#B9832B] transition-colors duration-300 py-2 flex items-center gap-1 uppercase">
        Category
        <FiChevronDown size={14} />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 pt-7 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="w-[980px] bg-white border border-[#B9832B]/10 rounded-2xl shadow-2xl p-4">
          <div className="grid grid-cols-[280px_320px_1fr] h-[430px] overflow-hidden">
            {/* Main Categories */}
            <div className="border-r border-gray-100 pr-3 h-full overflow-hidden">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#B9832B] font-bold px-3 mb-3">
                Categories
              </p>

             <div className="space-y-1 h-[385px] overflow-y-auto pr-1 custom-thin-scroll">
  {categoryData.map((category) => (
    <Link
      key={category.slug}
      href={`/products?category=${category.slug}`}
      onMouseEnter={() => handleCategoryHover(category)}
      className={`flex items-center justify-between gap-3 min-h-[42px] px-3 py-2 rounded-lg text-sm normal-case tracking-normal transition-all duration-200 ${
        activeCategory?.slug === category.slug
          ? "bg-[#B9832B]/10 text-[#B9832B]"
          : "text-gray-700 hover:bg-gray-50 hover:text-[#B9832B]"
      }`}
    >
      <span className="line-clamp-1">{category.name}</span>
      {category.children?.length > 0 && (
        <FiChevronRight size={15} className="shrink-0" />
      )}
    </Link>
  ))}
</div>
            </div>

            {/* Sub Categories */}
            <div className="border-r border-gray-100 px-4 h-full overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#B9832B] font-bold line-clamp-1">
                  {activeCategory?.name}
                </p>
              </div>

       <div className="h-[385px] overflow-y-auto pr-1 custom-thin-scroll">
  <div className="grid grid-cols-1 gap-1 content-start">
    {activeCategory?.children?.map((subcategory) => (
      <Link
        key={subcategory.slug}
        href={`/products?category=${activeCategory.slug}&subcategory=${subcategory.slug}`}
        onMouseEnter={() => handleSubCategoryHover(subcategory)}
        className={`flex items-center justify-between gap-3 min-h-[38px] px-3 py-2 rounded-lg text-sm normal-case tracking-normal transition-all duration-200 ${
          activeSubCategory?.slug === subcategory.slug
            ? "bg-[#B9832B]/10 text-[#B9832B]"
            : "text-gray-700 hover:bg-gray-50 hover:text-[#B9832B]"
        }`}
      >
        <span className="line-clamp-1">{subcategory.name}</span>
        {subcategory.children?.length > 0 && (
          <FiChevronRight size={15} className="shrink-0" />
        )}
      </Link>
    ))}
  </div>
</div>
            </div>


          {/* Third Level OR Featured Products */}
          <div className="pl-4 h-full overflow-hidden">
            {activeSubCategory?.children?.length > 0 ? (
              <>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#B9832B] font-bold mb-3 line-clamp-1">
                  {activeSubCategory.name}
                </p>

                <div className="h-[385px] overflow-y-auto pr-1 custom-thin-scroll">
                  <div className="grid grid-cols-1 gap-1 content-start">
                    {activeSubCategory.children.map((child) => (
                      <Link
                        key={child.slug}
                        href={`/products?category=${activeCategory.slug}&subcategory=${activeSubCategory.slug}&type=${child.slug}`}
                        className="flex items-center min-h-[38px] px-3 py-2 rounded-lg text-sm normal-case tracking-normal text-gray-700 hover:bg-[#B9832B]/10 hover:text-[#B9832B] transition-all duration-200"
                      >
                        <span className="line-clamp-1">{child.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#B9832B] font-bold mb-3 line-clamp-1">
                  Shop {activeCategory?.name}
                </p>

                <div className="h-[385px]">
                  <div className="rounded-2xl bg-gradient-to-br from-[#fff8ed] to-white border border-[#B9832B]/10 p-5 min-h-[210px] flex flex-col justify-start">
                    <div>
                      <p className="text-lg font-semibold text-gray-900 normal-case tracking-normal line-clamp-2">
                        Explore {activeCategory?.name}
                      </p>

                      <p className="text-sm text-gray-500 normal-case tracking-normal mt-2 leading-6">
                        Browse all products under this category and discover fresh,
                        authentic and premium quality spice blends.
                      </p>
                    </div>

                    <Link
                      href={`/products?category=${activeCategory?.slug}`}
                      className="inline-flex w-fit items-center gap-2 px-5 py-3 mt-5 rounded-full bg-[#B9832B] text-white text-sm normal-case tracking-normal hover:bg-black transition-all duration-300"
                    >
                      View Products
                      <FiChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =======================
   MOBILE CATEGORY MENU
======================= */

const MobileCategoryItem = ({ item, closeMenu, level = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-start gap-2 py-2">
        {hasChildren ? (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`flex items-center justify-center gap-2 text-center normal-case tracking-normal transition-colors duration-300 ${
              level === 0 ? "text-base" : "text-sm"
            } ${open ? "text-[#B9832B]" : "text-white/90 hover:text-[#B9832B]"}`}
          >
            <span>{item.name}</span>

            <FiChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        ) : (
          <Link
            href={`/products?category=${item.slug}`}
            onClick={closeMenu}
            className={`text-center normal-case tracking-normal text-white/90 hover:text-[#B9832B] transition-colors duration-300 ${
              level === 0 ? "text-base" : "text-sm"
            }`}
          >
            {item.name}
          </Link>
        )}
      </div>

      {hasChildren && open && (
        <div className="w-full flex flex-col items-center gap-1 mt-1 mb-2">
          {item.children.map((child) => (
            <MobileCategoryItem
              key={child.slug}
              item={child}
              closeMenu={closeMenu}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};



const MobileDropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 hover:text-[#B9832B] text-white transition-colors duration-300"
      >
        {title}
        <FiChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="w-full pt-4">
          {children}
        </div>
      )}
    </div>
  );
};



/* =======================
   HEADER
======================= */

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cart = useSelector((state) => state.cart.items);
  const wishlist = useSelector((state) => state.wishlist.items);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
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
        ${isScrolled ? "top-7 px-4 md:px-12  xl:px-32" : "top-0  px-4 md:px-12 lg:px-0 xl:px-0"}`}
    >
      <div
        className={`mx-auto backdrop-blur-2xl flex justify-between items-center transition-all duration-500 ease-in-out 
          ${
            isScrolled
              ? "rounded-xl backdrop-blur-3xl text-black/80 xl:rounded-4xl px-4 md:px-12 lg:px-0 h-16 shadow-2xl bg-white/80"
              : "max-w-full drop-shadow-md lg:shadow-b-0 shadow-rose-950/30 bg-transparent text-black/80 backdrop-blur-3xl px-4 md:px-0 h-20"
          }`}
      >
        {/* === MOBILE MENU BUTTON === */}
        <div className="lg:hidden flex items-center w-1/4">
          <button
            onClick={toggleMenu}
            className="text-black/80 focus:outline-none transition-transform hover:scale-110"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* === DESKTOP NAV LEFT === */}
        <nav className="hidden lg:flex justify-end items-center w-1/3 space-x-4 xl:space-x-8 text-[11px] xl:text-sm uppercase tracking-wider font-semibold">
          <Link
            href="/"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            About
          </Link>

          <CategoryMegaDropdown />
        </nav>

        {/* === LOGO === */}
        <div className="flex justify-center w-2/4 lg:w-1/3">
          <Link href="/" className="relative">
            <img
              src="/Images/logo.webp"
              alt="Logo"
              className={`object-contain transition-all duration-500 p-2 rounded-full 
                ${
                  isScrolled
                    ? "h-18 md:h-14 xl:h-20 bg-gray-50/30 backdrop-blur-3xl"
                    : "h-18 md:h-16 xl:h-24"
                }`}
            />
          </Link>
        </div>

        {/* === DESKTOP NAV RIGHT === */}
        <nav className="hidden lg:flex justify-start items-center w-1/3 space-x-4 xl:space-x-8 text-[11px] xl:text-sm uppercase tracking-wider font-semibold">
          <Link
            href="/blogs"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            Contact
          </Link>

          <div className="flex gap-3 xl:gap-5 items-center pl-4 xl:pl-6 border-l border-[#B9832B]/40">
            <button className="hover:text-[#B9832B] transition-colors duration-300">
              <LuSearch size={20} />
            </button>

            <Link
              href="/wishlist"
              className="hover:text-[#B9832B] transition-colors duration-300 relative"
            >
              <FaRegHeart size={20} />
              {wishlist?.length > 0 && (
                <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className="hover:text-[#B9832B] transition-colors duration-300 relative"
            >
              <MdOutlineShoppingCart size={22} />
              {cart?.length > 0 && (
                <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">
                  {cart.length}
                </span>
              )}
            </Link>

            <Link
              href="/profile"
              className="hover:text-[#B9832B] transition-colors duration-300"
            >
              <FaRegUserCircle size={20} />
            </Link>
          </div>
        </nav>

        {/* === MOBILE ICONS RIGHT === */}
        <div className="lg:hidden flex justify-end items-center gap-3 md:gap-5 w-1/4 text-[black]">
          <Link
            href="/profile"
            className="hover:text-[#B9832B] transition-colors duration-300"
          >
            <FaRegUserCircle size={20} />
          </Link>

          <Link
            href="/wishlist"
            className="hover:text-[#B9832B] transition-colors duration-300 relative"
          >
            <FaRegHeart size={20} />
            {wishlist?.length > 0 && (
              <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link href="/cart">
            <MdOutlineShoppingCart size={22} />
          </Link>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black fixed inset-0 z-[60] flex flex-col text-xl uppercase tracking-widest overflow-y-auto ">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-[#B9832B]"
          >
            <FiX size={32} />
          </button>

          <div className="w-full px-8 pt-24 pb-10 space-y-5">
          <Link
  href="/"
  onClick={closeMenu}
  className="block hover:text-[#B9832B] text-white"
>
  Home
</Link>

<Link
  href="/about"
  onClick={closeMenu}
  className="block hover:text-[#B9832B] text-white"
>
  About
</Link>

<MobileDropdown title="Category">
  {categoryData.map((item) => (
    <MobileCategoryItem
      key={item.slug}
      item={item}
      closeMenu={closeMenu}
    />
  ))}
</MobileDropdown>

<Link
  href="/blogs"
  onClick={closeMenu}
  className="block hover:text-[#B9832B] text-white"
>
  Blogs
</Link>

<Link
  href="/contact"
  onClick={closeMenu}
  className="block hover:text-[#B9832B] text-white"
>
  Contact
</Link>

            <div className="flex gap-10 pt-8 border-t border-[#B9832B]/30 justify-center">
              <Link href="/wishlist" onClick={closeMenu}>
                <FaRegHeart size={28} />
              </Link>

              <Link href="/profile" onClick={closeMenu}>
                <FaRegUserCircle size={28} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { IoMdCart } from "react-icons/io";
// import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
// import { LuSearch } from "react-icons/lu";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { getCategory } from "./Store/slices/categorySlice";

// const Header = () => {
//   const dispatch = useDispatch()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
// const { info:category} = useSelector(status=>status.category)
// const cart = useSelector(status=>status.cart.items)
//   const wishlist= useSelector(state=>state.wishlist.items)

//   const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

//   useEffect(() => {

//     dispatch(getCategory())
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed left-0 right-0 z-50  transition-all duration-500 ease-in-out text-gray-200
//         ${isScrolled
//           ? " top-7 px-4 md:px-12 lg:px-24 xl:px-32"
//           : "top-0 px-0"
//         }`}
//     >
//       <div
//         className={` mx-auto backdrop-blur-2xl flex justify-between items-center transition-all duration-500 ease-in-out
//           ${isScrolled
//             ? "rounded-xl  backdrop-blur-3xl text-black/80 xl:rounded-4xl px-4 md:px-12 lg:px-24 h-16 shadow-2xl  bg-white/80"
//             : "max-w-full drop-shadow-md  lg:shadow-b-0 shadow-rose-950/30 bg-transparent text-black/80  backdrop-blur-3xl   px-4 md:px-12 lg:px-24 xl:px-40  h-20"
//           }`}
//       >

//         <div className="lg:hidden flex items-center w-1/4">
//           <button
//             onClick={toggleMenu}
//             className="text-black/80 focus:outline-none transition-transform hover:scale-110 "
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </button>
//         </div>

//         {/* === DESKTOP NAV - LEFT === */}
//         <nav className="hidden lg:flex justify-end items-center w-1/3 space-x-4 xl:space-x-8 text-[11px] xl:text-sm uppercase tracking-wider font-semibold">
//           <Link href="/" className="hover:text-[#B9832B] transition-colors duration-300">Home</Link>
//           <Link href="/about" className="hover:text-[#B9832B] transition-colors duration-300">About</Link>

//        <div className="relative group">
//   {/* Trigger Link */}
//   <Link
//     href="/category"
//     className="hover:text-[#B9832B] transition-colors duration-300 py-2"
//   >
//     Category
//   </Link>

//   {/* Dropdown Menu */}
//   <div className="absolute left-0 pt-7 top-full  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//     <div className="flex flex-col bg-white border border-gray-100 rounded-md shadow-lg py-2 min-w-[160px]">
//       {category?.length > 0 ? (
//         category.map((item) => (
//           <Link
//             key={item._id}
//             href={`/products?category=${item._id}`}
//             className="px-4 py-2 border-b border-dotted border-gray-500/70 text-gray-700 hover:text-[#B9832B] hover:bg-gray-50 transition-colors duration-200 text-nowrap text-sm"
//           >
//             {item.name}
//           </Link>
//         ))
//       ) : (
//         <span className="px-4 py-2 text-gray-400 text-sm">
//           No categories found
//         </span>
//       )}
//     </div>
//   </div>
// </div>

//           <Link href="/products" className="hover:text-[#B9832B] transition-colors duration-300">Products</Link>
//         </nav>

//         <div className="flex justify-center w-2/4 lg:w-1/3">
//           <Link href="/" className="relative">
//             <img
//               src="/Images/logo.webp"
//               alt="Logo"
//               className={`object-contain transition-all duration-500 p-2 rounded-full
//                 ${isScrolled ? "h-18 md:h-14 xl:h-20 bg-gray-50/30 backdrop-blur-3xl" : " h-18 md:h-16 xl:h-24 "}`}
//             />
//           </Link>
//         </div>

//         {/* === DESKTOP NAV - RIGHT === */}
//         <nav className="hidden lg:flex justify-start items-center w-1/3 space-x-4 xl:space-x-8 text-[11px] xl:text-sm uppercase tracking-wider font-semibold">
//           <Link href="/blogs" className="hover:text-[#B9832B] transition-colors duration-300">Blogs</Link>
//           <Link href="/contact" className="hover:text-[#B9832B] transition-colors duration-300">Contact</Link>

//           <div className="flex gap-3 xl:gap-5 items-center pl-4 xl:pl-6 border-l border-[#B9832B]/40">
//             <button className="hover:text-[#B9832B] transition-colors duration-300"><LuSearch size={20} /></button>
//             <Link href="/wishlist" className="hover:text-[#B9832B] transition-colors duration-300 relative"><FaRegHeart size={20} />{wishlist?.length > 0 && <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">{wishlist?.length}</span>}</Link>
//             <Link href="/cart" className="hover:text-[#B9832B] transition-colors duration-300 relative"><MdOutlineShoppingCart size={22} /> {cart?.length > 0 && <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">{cart?.length}</span>}</Link>
//             <Link href="/profile" className="hover:text-[#B9832B] transition-colors duration-300"><FaRegUserCircle size={20} /></Link>
//           </div>
//         </nav>

//         {/* === MOBILE ICONS (Right) === */}
//         <div className="lg:hidden flex justify-end items-center gap-3 md:gap-5 w-1/4 text-[black]">
//                     <Link href="/profile" className="hover:text-[#B9832B] transition-colors duration-300"><FaRegUserCircle size={20} /></Link>
//   <Link href="/wishlist" className="hover:text-[#B9832B] transition-colors duration-300 relative"><FaRegHeart size={20} />{wishlist?.length > 0 && <span className="absolute -top-4 px-1.5 py-0.5 text-[10px] bg-black text-white rounded-full left-1/2">{wishlist?.length}</span>}</Link>
//           {/* <button><LuSearch size={20} /></button> */}
//           <Link href="/cart">

//           <MdOutlineShoppingCart size={22} /></Link>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-black fixed inset-0 z-[60] flex flex-col items-center justify-center space-y-8 text-xl uppercase tracking-widest">
//             <button onClick={toggleMenu} className="absolute top-6 right-6 text-[#B9832B]"><FiX size={32}/></button>
//             <Link href="/" onClick={toggleMenu} className="hover:text-[#B9832B]">Home</Link>
//             <Link href="/about" onClick={toggleMenu} className="hover:text-[#B9832B]">About</Link>
//             <Link href="/category" onClick={toggleMenu} className="hover:text-[#B9832B]">Category</Link>
//             <Link href="/products" onClick={toggleMenu} className="hover:text-[#B9832B]">Products</Link>
//             <Link href="/blogs" onClick={toggleMenu} className="hover:text-[#B9832B]">Blogs</Link>
//             <Link href="/contact" onClick={toggleMenu} className="hover:text-[#B9832B]">Contact</Link>

//             <div className="flex gap-10 pt-10 border-t border-[#B9832B]/30 w-1/2 justify-center">
//                 <Link href="/wishlist" onClick={toggleMenu}><FaRegHeart size={28} /></Link>
//                 <Link href="/profile" onClick={toggleMenu}><FaRegUserCircle size={28} /></Link>
//             </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
