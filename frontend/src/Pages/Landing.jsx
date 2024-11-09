import { Hero } from '../components/Hero';
import { MainHeader } from '../components/MainHeader';
import { ScrollTicker } from '../components/ScrollTicker';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Landing = () => {
  return (
    <div className="bg-black">
      <MainHeader />
      <Hero />
      <ScrollTicker />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
