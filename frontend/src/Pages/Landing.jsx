import { useRef } from 'react';
import { Hero } from '../components/Hero';
import { MainHeader } from '../components/MainHeader';
import { ScrollTicker } from '../components/ScrollTicker';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Landing = () => {
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black">
      <MainHeader
        scrollToHome={scrollToTop}
        scrollToFeatures={() => scrollToSection(featuresRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <Hero />
      <ScrollTicker />
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer
        scrollToHome={scrollToTop}
        scrollToFeatures={() => scrollToSection(featuresRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
    </div>
  );
};

export default Landing;
