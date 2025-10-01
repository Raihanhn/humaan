"use client";
import Image from "next/image";
import { motion } from "framer-motion";
<<<<<<< HEAD
import useLenis from "../hooks/useLenis"; // adjust path
import ShowreelSection from "../components/ShowreelSection";
import BrandsSection from "../components/BrandsSection";
import WorkGrid from "../components/WorkGrid";
import Piqueone from "../components/Piqueone";
import Piquetwo from "../components/Piquetwo";

=======
import Greatwork from "@/components/Greatwork/Greatwork";
>>>>>>> 482edcbd69624ed26da1a47dbf772d305b084329
export default function Home() {
  useLenis(); // initialize smooth scrolling

  return (
   <div className="">
     <section className="mx-auto px-8">
      {/* Top Section with Logo & Text */}
      <div className="flex justify-between items-center py-6">
        <div className="text-2xl font-bold">
          {/* SVG code here */}
        </div>
        <div className="flex items-center">
          <Image
            src="/images/humaan.PNG"
            alt="Humaan Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>

      {/* Hero Section */}
<<<<<<< HEAD
      <div className="mt-20 text-left">
      {/* First line */}
      <motion.h1
        className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-semibold leading-[1.05] text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Extraordinary
      </motion.h1>

      {/* Second line */}
      <motion.h1
        className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-semibold leading-[1.05] text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // delay after first line
      >
        Digital Experiences
      </motion.h1>
    </div>

    <ShowreelSection/>
=======
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
>>>>>>> 482edcbd69624ed26da1a47dbf772d305b084329
    </section>

    <BrandsSection/>

     <div className="mx-auto px-8">
        <Piqueone/>
    </div>
     <div className="mx-auto px-8">
        <Piquetwo/>
    </div>

    {/* <WorkGrid/> */}

   
  

    <div className="mb-60 h-screen">h</div>
    <div className="mb-60 h-screen">h</div>

   </div>
  );
}
