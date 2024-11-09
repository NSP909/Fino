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
    <section className="py-20">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${starsBg})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay"
            style={{
              backgroundImage: `url(${gridLines})`,
            }}
          ></div>
          <h2 className="text-white text-5xl tracking-tighter text-center font-medium">
            FINO - Finance Lorem, ipsum.
          </h2>
          <p className="text-center text-lg text-white/70 px-4 mt-5 tracking-tight">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex justify-center mt-8">
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
