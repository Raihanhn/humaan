"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import useLenis from "../hooks/useLenis"; // adjust path
import ShowreelSection from "../components/ShowreelSection";
import BrandsSection from "../components/BrandsSection";
import Piqueone from "../components/Piqueone";
import Piquetwo from "../components/Piquetwo";
import Piquethree from "../components/Piquethree";

import Greatwork from "@/components/Greatwork/Greatwork";
import FeedSlider from "../components/FeedSlider";
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

    </section>

    <BrandsSection/>

     <div className="mx-auto px-8">
        <Piqueone/>
    </div>
     <div className="mx-auto px-8">
        <Piquetwo/>
    </div> 

     <div className="mx-auto px-8">
        <Piquethree/>
    </div>

    <div className="mx-auto px-8">
         <Greatwork />
    </div>

     <div className="mx-auto px-8">
         <FeedSlider/>
    </div>

   

    {/* <WorkGrid/> */}

   

 
   </div>
  );
}
