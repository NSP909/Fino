import React, { useState } from 'react';
import Button from './items/Button';
import starsBg from '../assets/stars.png';
import gridLines from '../assets/grid-lines.png';

export const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the email address, e.g., send it to an API
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${starsBg})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines})`,
            }}
          ></div>
          <div className="relative">
            <h2 className="text-white text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              FINO - Finance Lorem, ipsum.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="mt-8 max-w-md mx-auto px-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-white/70 text-sm"
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
                <div className="flex justify-center mt-8">
                  <Button onClick={handleSubmit}>Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
