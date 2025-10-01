"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Expertise", path: "/expertise" },
  { name: "Thinking", path: "/thinking" }, 
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent  " : "bg-transparent"
      }`}
    >
      <div className="mx-auto mt-4 px-2 py-3 flex justify-center items-center">
        {/* Nav Links */}
        <ul className="hidden md:inline-flex gap-1  bg-white/60 backdrop-blur-md rounded-full px-2 py-2 shadow-sm"> 
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}> 
                <Link
                  href={item.path}
                  className={`px-2 py-1 rounded-full font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#0f1d07] text-[#8eef86] shadow-lg"
                      : "text-black hover:shadow-lg hover:bg-gray-200 "
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
