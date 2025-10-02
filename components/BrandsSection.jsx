"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// ✅ Replace with actual logo image URLs
const brands = [
  { name: "National breast cancer", src: "/logo/cancer.png" },
  { name: "cocos keeling island", src: "/logo/cocos.png" },
  { name: "Curtin University", src: "/logo/curtin.png" },
  { name: "Deloitte", src: "/logo/detol.png" },
  { name: "Cocos Keeling Islands", src: "/logo/cocos.png" },
  { name: "Pay", src: "/logo/pay.png" },
  { name: "Pentanet", src: "/logo/peanant.png" },
  { name: "satterley", src: "/logo/saturday.png" },
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
    }, 2000);
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
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-[90px] font-semibold leading-[1.1] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Our Architects & Designers brings your visions into reality <br />
          with stunning visualization in every element <br />
          from the ground up.
        </h2>
      </div>

      {/* Flipping brand logos */}
      <div className="flex justify-center items-center h-24 mt-20 relative">
        {groupedBrands.map((group, index) => (
          <div
            key={index}
            className={`absolute w-full flex justify-center gap-6 lg:gap-32 transition-all duration-700 transform ${
              index === current
                ? "opacity-100 rotate-x-0"
                : "opacity-0 rotate-x-90"
            }`}
          >
            {group.map((brand) => (
              <div
                key={brand.name}
                className="relative w-28 h-12 md:w-40 md:h-16"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
