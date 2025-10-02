"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/work",
    submenu: [
      "Custom Home Designs",
      "Architectural Home Builders",
      "New Custom Home",
    ],
  },
  { name: "Expertise", path: "/expertise" },
  {
    name: "Past Projects",
    path: "/thinking",
    submenu: [
      "Single Level Homes",
      "Two Level Homes",
      "Three Level Homes",
      "Granny Flats",
      "Duplexes",
      "Townhouses",
    ],
  },
  { name: "Contact", path: "/contact" },
];

const expertiseItems = [
  {
    title: "What We Do",
    items: [
      "Websites",
      "Web Apps",
      "Mobile Apps",
      "eCommerce",
      "Data Visualisation",
    ],
  },
  {
    title: "Design & UX",
    items: [
      "User Research",
      "UX Design",
      "UI Design",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    title: "Technology",
    items: ["Headless", "React.js", "Payload CMS", "Laravel", "WordPress"],
  },
  {
    title: "Experience",
    items: [
      "Commercial",
      "Not for Profit",
      "Innovation",
      "Education",
      "Community",
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showExpertise, setShowExpertise] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  // const popupRef = useRef(null);
  const expertiseRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // const handleClickOutside = (event) => {
    //   if (popupRef.current && !popupRef.current.contains(event.target)) {
    //     setShowExpertise(false);
    //     setShowServices(false);
    //     setShowProjects(false);
    //   }
    // };

    const handleClickOutside = (event) => {
      if (
        expertiseRef.current &&
        !expertiseRef.current.contains(event.target)
      ) {
        setShowExpertise(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServices(false);
      }
      if (projectsRef.current && !projectsRef.current.contains(event.target)) {
        setShowProjects(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={` fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent  " : "bg-transparent"
      }`}
    >
      <div className="mx-auto mt-4 px-2 py-3 flex justify-center items-center">
        <ul className="hidden  md:inline-flex gap-1  bg-white/60 backdrop-blur-md rounded-full px-2 py-3 shadow-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li
                key={item.name}
                className="relative"
                ref={
                  item.name === "Expertise"
                    ? expertiseRef
                    : item.name === "Services"
                    ? servicesRef
                    : item.name === "Past Projects"
                    ? projectsRef
                    : null
                }
              >
                {item.name === "Expertise" ? (
                  <button
                    onClick={() => {
                      setShowExpertise((prev) => !prev);
                      setShowServices(false);
                      setShowProjects(false);
                    }}
                    className={`px-2 rounded-full font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#0f1d07] text-[#8eef86] shadow-lg"
                        : "text-black hover:shadow-lg hover:bg-gray-200"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : item.name === "Services" ? (
                  <button
                    onClick={() => {
                      setShowServices((prev) => !prev);
                      setShowExpertise(false);
                      setShowProjects(false);
                    }}
                    className={`px-2 rounded-full font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#0f1d07] text-[#8eef86] shadow-lg"
                        : "text-black hover:shadow-lg hover:bg-gray-200"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : item.name === "Past Projects" ? (
                  <button
                    onClick={() => {
                      setShowProjects((prev) => !prev);
                      setShowExpertise(false);
                      setShowServices(false);
                    }}
                    className={`px-2 rounded-full font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#0f1d07] text-[#8eef86] shadow-lg"
                        : "text-black hover:shadow-lg hover:bg-gray-200"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className={`px-2 py-1 rounded-full font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#0f1d07] text-[#8eef86] shadow-lg"
                        : "text-black hover:shadow-lg hover:bg-gray-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Expertise big menu */}
                {item.name === "Expertise" && showExpertise && (
                  <div className="absolute left-1/2 transform pt-20 mt-[-40px] -translate-x-1/2 w-[62vw] max-w-5xl bg-white rounded-3xl shadow-xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-[-50]">
                    {expertiseItems.map((section) => (
                      <div key={section.title}>
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                          {section.title}
                        </h3>
                        <ul className="space-y-3">
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

                {/* Services submenu */}
                {item.name === "Services" && showServices && (
                  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg p-4 space-y-2 z-50 min-w-[220px]">
                    {[
                      "Custom Home Designs",
                      "Architectural Home Builders",
                      "New Custom Home",
                    ].map((sub) => (
                      <li
                        key={sub}
                        className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Past Projects submenu */}
                {item.name === "Past Projects" && showProjects && (
                  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg p-4 space-y-2 z-50 min-w-[220px]">
                    {[
                      "Single Level Homes",
                      "Two Level Homes",
                      "Three Level Homes",
                      "Granny Flats",
                      "Duplexes",
                      "Townhouses",
                    ].map((sub) => (
                      <li
                        key={sub}
                        className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
