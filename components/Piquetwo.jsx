"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Piquetwo() {
  const { ref: leftRef, inView: showVideo } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 p-6">
      {/* Left Side: Image / Video */}
      <div
        ref={leftRef}
        className="rounded-3xl overflow-hidden w-full max-w-[680px] lg:w-[680px] lg:h-[800px] will-change-transform will-change-opacity"
      >
          <iframe
            src="https://www.youtube.com/embed/2qDpts_smE0?autoplay=1&mute=1&loop=1&playlist=2qDpts_smE0&controls=0&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl object-cover w-full h-full"
          />
   
      </div>

      {/* Right Side: Main Image with Centered Overlay */}
      <div className="relative rounded-3xl overflow-hidden w-full max-w-[680px] lg:w-[680px] lg:h-[800px]  top-0">
      

         <iframe
    src="https://www.youtube.com/embed/MFaB92dqDN8?autoplay=1&mute=1&loop=1&playlist=MFaB92dqDN8&controls=0&modestbranding=1&rel=0"
    title="YouTube video player"
    frameBorder="0"
    allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
  />
      </div>
    </div>
  );
}
