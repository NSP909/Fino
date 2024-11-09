import { Hero } from '../components/Hero';
import { MainHeader } from '../components/MainHeader';
import { ScrollTicker } from '../components/ScrollTicker';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';

export const Landing = () => {
  return (
    <>
      <MainHeader />
      <Hero />
      <ScrollTicker />
      <Features />
      <Contact />
    </>
  );
};

export default Landing;
