'use client';
import React, { useEffect, useRef, useState } from 'react';
import Button from './items/Button';
import starsBg from '../assets/stars.png';
import gridLines from '../assets/grid-lines.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMotionValue } from 'framer-motion';
import { useMotionTemplate } from 'framer-motion';

const useRelativeMousePosition = () => (to) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const Contact = () => {
  const sectionRef = useRef(null);
  const borderDivRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  const [mouseX, mouseY] = useRelativeMousePosition()(borderDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the email address, e.g., send it to an API
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: '100%',
          }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines})`,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-white text-3xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-lg">
              Orbital Finance
            </h2>
            <p className="text-center text-lg md:text-lg max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Embarking journeys to the stars, one step at a time.
            </p>
            <div className="mt-8 max-w-md mx-auto px-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-white/70 text-md"
                  >
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div className="flex justify-center">
                  <Button onClick={handleSubmit} className="text-white/70">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
