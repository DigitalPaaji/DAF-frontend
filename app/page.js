import AboutSection from "./components/About";
import CategoryCarousel from "./components/CategoryCarousel";
import CatSection from "./components/CatSection";
import FaqSection from "./components/FaqSection";
import Hero from "./components/HeroSection";
import ProductSection from "./components/ProductGrid";
import TeaBlendsSection from "./components/TeaBlends";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <CategoryCarousel />
      <CatSection />
      <TeaBlendsSection />
      <AboutSection />
      <ProductSection />
      {/* <TeaHeroSection /> */}
      <FaqSection />
      <Reviews />
    </div>
  );
}
