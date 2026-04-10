
import CategoryCarousel from "./components/CategoryCarousel";
import CatSection from "./components/CatSection";
import FaqSection from "./components/FaqSection";
import Hero from "./components/HeroSection";
import ProductSection from "./components/ProductGrid";
import TeaHeroSection from "./components/TeaHeroSection";

export default function Home() {
  return (
   <div className=" b-font ">
   <Hero /> 

  <CatSection />
 <CategoryCarousel />
  <ProductSection />
<TeaHeroSection />
<FaqSection />

   </div>
  )
}
