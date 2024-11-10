import React from 'react';
import Logo from '../assets/logo.png';
import DevPost from '../assets/devpost.png';
import GitHub from '../assets/github.png';

export const Footer = ({ scrollToHome, scrollToFeatures, scrollToContact }) => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
          <div className="flex gap-2 items-center lg:flex-1">
            <img src={Logo} alt="Logo" className="h-6 w-6" />
            <div className="font-medium text-white">FINO</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap- lg:flex-1 lg:justify-center">
            <button
              onClick={scrollToHome}
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Home
            </button>
            <button
              onClick={scrollToFeatures}
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </button>
            <button
              onClick={scrollToContact}
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Connect
            </button>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <a href="https://devpost.com">
              <img
                src={DevPost}
                alt="DevPost"
                className="text-white/40 h-6 w-6"
              />
            </a>
            <a href="https://github.com">
              <img
                src={GitHub}
                alt="GitHub"
                className="text-white/40 h-6 w-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
