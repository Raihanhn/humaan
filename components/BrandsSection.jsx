"use client";
import { useEffect, useState } from "react";

// ✅ List of brands (added more for demo)
const brands = [
  "Rychiger",
  "National Breast Cancer Foundation",
  "Curtin University",
  "Seven West Media",
  "Cocos Keeling Islands",
  "Google",
  "Microsoft",
  "Tesla",
  "Airbnb",
  "Spotify",
];

export default function BrandsSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  // Intersection Observer → trigger when section enters viewport
  useEffect(() => {
    const section = document.getElementById("brands-section");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto cycle brands
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(brands.length / 4));
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  // Divide brands into groups of 4
  const groupedBrands = [];
  for (let i = 0; i < brands.length; i += 4) {
    groupedBrands.push(brands.slice(i, i + 4));
  }

  return (
    <section
      id="brands-section"
      className={`transition-colors duration-1000 py-20 w-full relative overflow-hidden mt-20 ${
        visible ? "bg-[#b488f1] text-white" : "bg-transparent text-transparent"
      }`}
    >
      {/* Heading */}
      <div className="text-center px-6 transition-opacity duration-1000">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-semibold leading-[1.1] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          We design, build and ship <br />
          world-class digital products <br />
          for forward-thinking brands.
        </h2>
      </div>

      {/* Flipping brand names */}
      <div className="flex justify-center items-center h-20 mt-20 relative">
        {groupedBrands.map((group, index) => (
          <div
            key={index}
            className={`absolute w-full flex justify-center gap-6 lg:gap-14 transition-all duration-700 transform ${
              index === current
                ? "opacity-100 rotate-x-0"
                : "opacity-0 rotate-x-90"
            }`}
          >
            {group.map((brand) => (
              <span
                key={brand}
                className="text-lg sm:text-xl md:text-2xl font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
