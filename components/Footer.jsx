"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const words = [
    "click",
    "unique",
    "epic",
    "fun",
    "extraordinary",
    "delightful",
    "beautiful",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-52 px-6 md:px-12 lg:px-24">
      {/* Animated Text */}
      <h2 className="group hover:text-[#90F188] text-3xl md:text-4xl lg:text-7xl font-semibold mb-6 text-[#0f1d07] transition-colors duration-300">
        Let's make → <br /> something{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="transition-colors duration-300 group-hover:text-[#90F188]"
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </h2>

      {/* First Row */}
      <div className="mb-8 text-[#0f1d07] mt-40">
        <p className="text-xl font-semibold">Get in touch</p>
        <p className="text-lg mt-2">We work globally</p>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-8 text-[#0f1d07] mb-16">
        {/* Australia */}
        <div>
          <p className="font-semibold">Australia</p>
          <p>Blink Developers</p>
          <p>Sydney, New South Wales</p>
          <p>Australia</p>
          <p>Licence Number: 375726C</p>
          <p>Call: 13 19 81</p>
          <p>info@blinkdevelopments.com.au</p>  
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-300 pt-6 pb-12">
        {/* Left Side */}
        <div className="flex items-center gap-4 text-[#0f1d07]">
          <span className="font-bold">Blink</span>
          <span>© 2025</span>
          <span className="underline cursor-pointer">Privacy</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 mt-4 md:mt-0 mb-30">
          {["X", "Instagram", "LinkedIn"].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-gray-200 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
