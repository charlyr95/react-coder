import LandingHero from "./LandingHero";
import StickyBanner from "./StickyBanner";
import HeroCarousel from "./HeroCarousel";
import CategoryShowcase from "./CategoryShowcase";
import SocialMedia from "./SocialMedia";
import PopularItems from "./PopularItems";
import ItemListContainer from "../ItemListContainer"; 

const LandingPage = () => {
  return (
    <>
      <SocialMedia />
      <LandingHero />
      <StickyBanner />
      <HeroCarousel />
      <CategoryShowcase />
      <PopularItems titulo="Productos populares" />
    </>
  );
}

export default LandingPage;