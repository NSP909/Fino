'use client';
import amazonLogo from '../assets/amazon.png';
import bgbLogo from '../assets/bgb.png';
import caponeLogo from '../assets/capone.png';
import coinbaseLogo from '../assets/coinbase.png';
import dshawLogo from '../assets/dshaw.png';
import eqvLogo from '../assets/eqv.png';
import { motion } from 'framer-motion';

export const ScrollTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container -mt-10">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="text-white/70">
              Empowering businesses with smart data solutions
            </h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: '-50%' }}
              animate={{ translateX: '0' }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex flex-none pr-14 gap-14 -translate-x-1/2"
            >
              {[
                amazonLogo,
                bgbLogo,
                caponeLogo,
                coinbaseLogo,
                dshawLogo,
                eqvLogo,
                amazonLogo,
                bgbLogo,
                caponeLogo,
                coinbaseLogo,
                dshawLogo,
                eqvLogo,
              ].map((logo, index) => (
                <img src={logo} key={index} className="h-6 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
