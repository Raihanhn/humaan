'use client'
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="mx-auto px-8">
      {/* Top Section with Logo & Text */}
      <div className="flex justify-between items-center py-6">
        <div className="text-2xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="16"
            viewBox="0 0 125 16"
            fill="currentColor"
            className="w-[125px] h-[16px] text-black"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.515 6.047v9.202c0 .196-.16.354-.358.354H62.5a.357.357 0 0 1-.36-.354V7.143c0-2.556-1.332-3.985-3.58-3.985-2.168 0-3.983 1.413-3.983 4.016v8.075c0 .196-.16.354-.358.354h-2.656a.356.356 0 0 1-.358-.354V7.143c0-2.556-1.333-3.985-3.582-3.985-2.167 0-3.983 1.413-3.983 4.016v8.075c0 .196-.16.354-.358.354h-2.656a.356.356 0 0 1-.358-.354V.75c0-.196.16-.354.358-.354h2.624c.198 0 .359.158.359.354v1.502C44.846.46 46.757 0 48.332 0c2.148 0 3.934.866 5.033 2.307.145.19.434.163.578-.029C55.312.466 57.49 0 59.267 0c3.662 0 6.248 2.492 6.248 6.047M28.036 16c3.597 0 7.13-2 7.13-6.842V.75a.356.356 0 0 0-.358-.354h-2.656a.356.356 0 0 0-.358.354v8.107c0 2.937-1.654 4.015-3.758 4.015s-3.758-1.078-3.758-4.015V.751a.356.356 0 0 0-.359-.354h-2.655a.356.356 0 0 0-.358.354v8.407C20.906 14 24.422 16 28.036 16M11.4 6.681h-7.41a.356.356 0 0 1-.359-.355V.876a.356.356 0 0 0-.358-.354H.359A.356.356 0 0 0 0 .876v14.373a.357.357 0 0 0 .359.355h2.913a.356.356 0 0 0 .358-.354v-4.816a.356.356 0 0 1 .358-.355h7.41a.357.357 0 0 1 .359.355v4.816a.356.356 0 0 0 .358.354h2.913a.356.356 0 0 0 .358-.354V.876a.356.356 0 0 0-.358-.354h-2.913a.356.356 0 0 0-.358.355v5.45a.355.355 0 0 1-.358.354M83.709.39H82.3c-.08 0-.14.03-.19.08s-.08.12-.08.19v1.57a5.7 5.7 0 0 0-2-1.62C79.23.22 78.29 0 77.19 0c-2.15 0-4.07.83-5.46 2.25-1.38 1.42-2.23 3.42-2.23 5.74 0 4.66 3.39 8 7.69 8 1.1 0 2.04-.21 2.84-.6.81-.39 1.47-.94 2-1.62v1.56c0 .15.12.27.27.27h2.81c.08 0 .15-.03.2-.08.04-.05.07-.11.07-.19V.66c0-.15-.12-.27-.27-.27zm-1.6 8.83c-.47 2.15-2.16 3.65-4.51 3.65-2.9 0-4.65-2.21-4.65-4.88 0-2.66 1.75-4.87 4.65-4.87 2.25 0 3.9 1.38 4.44 3.38.13.47.2.97.2 1.49 0 .43-.05.84-.13 1.23M92.998 8c0 2.666 1.751 4.873 4.642 4.873 2.778 0 4.64-2.095 4.64-4.873s-1.862-4.873-4.64-4.873c-2.89 0-4.642 2.206-4.642 4.873m12.072 7.603h-2.64a.35.35 0 0 1-.252-.103.354.354 0 0 1-.106-.251v-1.471c-1.06 1.349-2.65 2.222-4.834 2.222-4.304 0-7.692-3.35-7.692-8s3.388-8 7.692-8c2.184 0 3.775.889 4.834 2.238V.751c0-.196.16-.354.359-.354h2.639c.198 0 .359.158.359.354V15.25c0 .195-.16.354-.36.354zM125 15.249V6.047C125 2.492 122.414 0 118.753 0c-1.573 0-3.485.46-4.722 2.252V.75a.356.356 0 0 0-.358-.354h-2.624a.356.356 0 0 0-.358.354v14.499q.001.071.028.136a.36.36 0 0 0 .33.218h2.655c.199 0 .36-.158.36-.354V7.174c0-2.603 1.814-4.016 3.983-4.016 2.247 0 3.58 1.429 3.58 3.985v8.106q.001.071.028.136a.36.36 0 0 0 .331.218h2.655a.356.356 0 0 0 .359-.354"
            />
          </svg>
        </div>
        <div className="flex items-center ">
          <Image
            src="/images/humaan.PNG" // place humman.PNG inside public folder
            alt="Humaan Logo"
            width={50} // tweak this for text-like size
            height={50}
            className="object-contain"
          />
        </div>
      </div>

      {/* Hero Section */}
      {/* <div className=" mt-20 ">
        <motion.h1
          className=" text-[130px]  font-semibold leading-tight text-black text-left"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Extraordinary <br /> Digital Experiences
        </motion.h1>
      </div> */}

<div className="mt-20">
  <motion.h1
    className="
      text-[60px]      /* Mobile */
      sm:text-[80px]   /* Small screens */
      md:text-[100px]  /* Medium screens */
      lg:text-[130px]  /* Large screens */
      font-semibold 
      leading-tight 
      text-black 
      text-left
    "
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    Extraordinary <br /> Digital Experiences
  </motion.h1>
</div>

 


      {/* Example Featured Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold">Websites</h2>
          <p className="mt-3 text-gray-600">
            We craft modern websites that are responsive, fast, and scalable.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold">Mobile Apps</h2>
          <p className="mt-3 text-gray-600">
            Build cross-platform apps with React Native and native performance.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold">Web Apps</h2>
          <p className="mt-3 text-gray-600">
            From SaaS to dashboards — we develop powerful, scalable solutions.
          </p>
        </div>
      </div>

      <Greatwork />
    </section>
  );
}
