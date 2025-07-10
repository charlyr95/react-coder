import SocialMedia from "./SocialMedia";
import LandingHero from "./LandingHero";
import StickyBanner from "./StickyBanner";
import HeroCarousel from "./HeroCarousel";
import MailingBanner from "./MailingBanner";
import CategoryShowcase from "./CategoryShowcase";
import PopularItems from "./PopularItems";

const LandingPage = () => {
  return (
    <>
      <SocialMedia />
      <LandingHero />
      <StickyBanner />
      <HeroCarousel />
      <MailingBanner />
      <CategoryShowcase />
      <PopularItems titulo="Productos populares" />
    </>
  );
}

export default LandingPage;