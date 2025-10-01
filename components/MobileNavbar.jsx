"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Expertise", path: "#" }, // popup trigger
  { name: "Thinking", path: "/thinking" },
  { name: "Contact", path: "/contact" },
];

const expertiseItems = [
  {
    title: "What We Do",
    items: ["Websites", "Web Apps", "Mobile Apps", "eCommerce", "Data Visualisation"],
  },
  {
    title: "Design & UX",
    items: ["User Research", "UX Design", "UI Design", "Prototyping", "Design Systems"],
  },
  {
    title: "Technology",
    items: ["Headless", "React.js", "Payload CMS", "Laravel", "WordPress"],
  },
  {
    title: "Experience",
    items: ["Commercial", "Not for Profit", "Innovation", "Education", "Community"],
  },
];

export default function MobileNavbar() {
  const pathname = usePathname();
  const [showExpertise, setShowExpertise] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowExpertise(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="md:hidden">
      {/* Bottom Tab */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-lg bg-white/70 backdrop-blur-md shadow-md rounded-full px-3 py-2 flex justify-around z-50">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <div key={item.name} className="relative" ref={item.name === "Expertise" ? popupRef : null}>
              {item.name === "Expertise" ? (
                <button
                  onClick={() => setShowExpertise((prev) => !prev)}
                  className={`px-2 py-1 rounded-full font-medium text-sm transition-all ${
                    isActive
                      ? "bg-[#0f1d07] text-[#8eef86] shadow-lg"
                      : "text-black hover:shadow-md hover:bg-gray-200"
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  href={item.path}
                  className={`px-2 py-1 rounded-full font-medium text-sm transition-all ${
                    isActive
                      ? "bg-[#0f1d07] text-[#8eef86] shadow-lg"
                      : "text-black hover:shadow-md hover:bg-gray-200"
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {/* Expertise Popup */}
              {item.name === "Expertise" && showExpertise && (
                <div className="absolute bottom-12 left-1/3 -translate-x-1/2 w-[92vw] max-w-lg bg-white rounded-3xl  p-6 grid grid-cols-2 gap-6 z-50">
                  {expertiseItems.map((section) => (
                    <div key={section.title}>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                        {section.title}
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {section.items.map((sub) => (
                          <li
                            key={sub}
                            className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors" 
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
