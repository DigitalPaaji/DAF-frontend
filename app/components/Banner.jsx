
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    name: "ELAVEDA",
    subtitle: "CARDAMOM TEA MASALA",
    description:
      "A refreshing, aromatic blend crafted to make every cup of tea special.",
    src: "/Images/products/product1.webp",
    bg: "#FFF7ED",
    accent: "#A66B36",
    panel: "#F5E5D1",
  },
  {
    name: "ZINGVETA",
    subtitle: "GINGER TEA MASALA",
    description:
      "A warming ginger blend with the authentic character of Indian chai.",
    src: "/Images/products/product2.webp",
    bg: "#FFF4E8",
    accent: "#A65E38",
    panel: "#F3DFCC",
  },
  {
    name: "LEMVITA",
    subtitle: "LEMONGRASS TEA MASALA",
    description:
      "Fresh citrus notes meet carefully selected aromatic spices.",
    src: "/Images/products/product3.webp",
    bg: "#F3F8EC",
    accent: "#56754A",
    panel: "#DFEAD2",
  },
  {
    name: "KAHWAVITA",
    subtitle: "KASHMIRI KAHWA",
    description:
      "Discover a traditional aromatic blend inspired by Kashmiri tea culture.",
    src: "/Images/products/product4.webp",
    bg: "#FFF8E7",
    accent: "#94702C",
    panel: "#F1E5C5",
  },
];

const COUNT = PRODUCTS.length;
const DURATION = 650;
const EASING = "cubic-bezier(0.4,0,0.2,1)";

const TRANSITION = [
  `transform ${DURATION}ms ${EASING}`,
  `filter ${DURATION}ms ${EASING}`,
  `opacity ${DURATION}ms ${EASING}`,
  `left ${DURATION}ms ${EASING}`,
  `width ${DURATION}ms ${EASING}`,
  `height ${DURATION}ms ${EASING}`,
  `bottom ${DURATION}ms ${EASING}`,
].join(", ");

function getRole(index, activeIndex) {
  if (index === activeIndex) return "center";
  if (index === (activeIndex + COUNT - 1) % COUNT) return "left";
  if (index === (activeIndex + 1) % COUNT) return "right";
  return "back";
}

function getStyle(role, isMobile) {
  const base = {
    position: "absolute",
    top: "auto",
    aspectRatio: "0.6 / 1",
    transform: "translateX(-50%)",
    transformOrigin: "center bottom",
    transition: TRANSITION,
    willChange: "transform, filter, opacity",
  };

  switch (role) {
    case "center":
      return {
        ...base,
        left: "50%",
        width: isMobile ? "min(66vw, 300px)" : "min(32vw, 410px)",
        height: isMobile ? "65%" : "82%",
        bottom: isMobile ? "18%" : "2%",
        transform: "translateX(-50%) scale(1.5)",
        filter: "none",
        opacity: 1,
        zIndex: 30,
      };

    case "left":
      return {
        ...base,
        left: isMobile ? "8%" : "25%",
        width: isMobile ? "36vw" : "min(20vw, 260px)",
        height: isMobile ? "24%" : "38%",
        bottom: isMobile ? "27%" : "12%",
        transform: "translateX(-50%) scale(0.8)",
        filter: "blur(1.5px)",
        opacity: 0.6,
        zIndex: 10,
      };

    case "right":
      return {
        ...base,
        left: isMobile ? "92%" : "75%",
        width: isMobile ? "36vw" : "min(20vw, 260px)",
        height: isMobile ? "24%" : "38%",
        bottom: isMobile ? "27%" : "12%",
        transform: "translateX(-50%) scale(0.8)",
        filter: "blur(1.5px)",
        opacity: 0.6,
        zIndex: 10,
      };

    default:
      return {
        ...base,
        left: "50%",
        width: isMobile ? "28vw" : "min(15vw, 190px)",
        height: isMobile ? "16%" : "24%",
        bottom: isMobile ? "30%" : "12%",
        transform: "translateX(-50%) scale(0.7)",
        filter: "blur(3px)",
        opacity: 0.3,
        zIndex: 5,
      };
  }
}

function getTitleSize(name) {
  const vw = Math.min(19, 100 / name.length);
  return `clamp(52px, ${vw}vw, 260px)`;
}

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const lock = useRef(false);
  const timer = useRef(null);

  useEffect(() => {
    const preloaded = PRODUCTS.map(({ src }) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    const resize = () => setIsMobile(window.innerWidth < 640);

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (timer.current) clearTimeout(timer.current);
      preloaded.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  const navigate = useCallback((direction) => {
    if (lock.current) return;

    lock.current = true;
    setIsAnimating(true);

    setActiveIndex((previous) =>
      direction === "next"
        ? (previous + 1) % COUNT
        : (previous + COUNT - 1) % COUNT
    );

    timer.current = setTimeout(() => {
      lock.current = false;
      setIsAnimating(false);
      timer.current = null;
    }, DURATION);
  }, []);
useEffect(() => {
  const autoplay = setInterval(() => {
    navigate("next");
  }, 2500);

  return () => clearInterval(autoplay);
}, [navigate]);


  const current = PRODUCTS[activeIndex];

  return (
    <main
      className="relative w-full  overflow-hidden text-[#30271E]"
      style={{
        backgroundColor: current.bg,
        transition: `background-color ${DURATION}ms ${EASING}`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <section
        className="relative w-full overflow-hidden"
        style={{
          height: "90vh",
          height: "100dvh",
          minHeight: 580,
        }}
        aria-label="DAF tea and spice products"
      >
        {/* Subtle grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 50,
            opacity: 0.15,
            backgroundSize: "180px 180px",
            backgroundRepeat: "repeat",
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.08%27/%3E%3C/svg%3E")',
          }}
        />

        {/* Soft circular backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 rounded-full"
          style={{
            width: "min(65vw, 720px)",
            aspectRatio: "1",
            top: "47%",
            transform: "translate(-50%, -50%)",
            backgroundColor: current.panel,
            opacity: 0.8,
            transition: `background-color ${DURATION}ms ${EASING}`,
            zIndex: 1,
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 rounded-full border"
          style={{
            width: "min(72vw, 800px)",
            aspectRatio: "1",
            top: "47%",
            transform: "translate(-50%, -50%)",
            borderColor: `${current.accent}30`,
            zIndex: 1,
          }}
        />

        {/* Giant product name */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 flex select-none items-center justify-center overflow-hidden"
          style={{
            top: isMobile ? "20%" : "12%",
            zIndex: 2,
            fontFamily: "'Anton', sans-serif",
            fontSize: getTitleSize(current.name),
            fontWeight: 400,
            color: current.accent,
            opacity: 0.15,
            lineHeight: 1,
            letterSpacing: "-0.025em",
            whiteSpace: "nowrap",
            transition: `color ${DURATION}ms ${EASING}`,
          }}
        >
          {current.name}
        </div>

      
        {/* Product carousel */}
        <div className="absolute inset-0 z-[3] overflow-visible">
          {PRODUCTS.map((item, index) => {
            const role = getRole(index, activeIndex);
            const isActive = role === "center";

            return (
              <div
                key={item.src}
                aria-hidden={!isActive}
                className="pointer-events-none"
                style={{
                  ...getStyle(role, isMobile),
                  maxWidth: "90vw",
                  overflow: "visible",
                }}
              >
                <img
                  src={item.src}
                  alt={isActive ? `${item.name} ${item.subtitle}` : ""}
                  draggable={false}
                  loading="eager"
                  decoding="async"
                  className="block h-full w-full select-none"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center bottom",
                    transform: "none",
                    filter: isActive
                      ? "drop-shadow(0 22px 24px rgba(66,43,23,0.16))"
                      : "none",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Product information */}
        <div
          className="absolute bottom-6 left-5 sm:bottom-12 sm:left-10 lg:bottom-16 lg:left-16"
          style={{
            zIndex: 60,
            maxWidth: isMobile ? 250 : 320,
          }}
        >
          <div
            className="mb-2 text-[9px] font-semibold tracking-[0.2em] sm:mb-3 sm:text-[10px]"
            style={{ color: current.accent }}
          >
            THE DAF COLLECTION
          </div>

          <h1
            className="mb-2 text-xl font-bold uppercase sm:text-2xl"
            style={{
              color: "#30271E",
              letterSpacing: "0.015em",
            }}
          >
            {current.subtitle}
          </h1>

          <p className="mb-4 hidden text-xs leading-6 text-[#776A5C] sm:mb-5 sm:block sm:text-sm">
            {current.description}
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              aria-label="Previous product"
              disabled={isAnimating}
              onClick={() => navigate("prev")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#30271E]/30 bg-white/30 transition duration-150 hover:scale-105 hover:bg-white/70 disabled:cursor-not-allowed sm:h-14 sm:w-14"
            >
              <ArrowLeft size={22} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Next product"
              disabled={isAnimating}
              onClick={() => navigate("next")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#30271E]/30 bg-white/30 transition duration-150 hover:scale-105 hover:bg-white/70 disabled:cursor-not-allowed sm:h-14 sm:w-14"
            >
              <ArrowRight size={22} strokeWidth={1.8} />
            </button>

            <span className="ml-1 text-xs tracking-widest text-[#776A5C]">
              0{activeIndex + 1}
              <span className="mx-2 opacity-40">/</span>
              0{COUNT}
            </span>
          </div>
        </div>

    
    

      
      </section>
    </main>
  );
}
