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
        {showVideo ? (
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/745004855/rendition/720p/file.mp4?loc=external&signature=1dd35b7b1001be056347f1aa639461cf56f40fc35b3f0ad75170809e8ca7d4e4"
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
            poster="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/450x677/filters:quality(80)"
            className="rounded-3xl object-cover w-full h-full"
          />
        ) : (
          <Image
            src="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/450x677/filters:quality(80)"
            alt="Sussex Taps"
            width={680}
            height={800}
            className="rounded-3xl object-cover w-full h-full"
          />
        )}
      </div>

      {/* Right Side: Main Image with Centered Overlay */}
      <div className="relative rounded-3xl overflow-hidden w-full max-w-[680px] lg:w-[680px] lg:h-[800px] top-0">
        <Image
          src="https://a-us.storyblok.com/f/1017006/1866x2805/5f879805d6/card-portrait.jpg/m/450x677/filters:quality(80)"
          alt="Chaleit"
          width={680}
          height={800}
          className="rounded-3xl object-cover w-full h-full"
        />

        {/* Centered small overlay image */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden w-[120px] h-[340px] sm:w-[150px] sm:h-[420px] lg:w-[401px] lg:h-[500px]">
          <Image
            src="/images/img4.jpg"
            alt="Chaleit Inner"
            width={201}
            height={569}
            className="object-cover w-full h-full"
          />
        </div> */}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden w-[50%] h-[60%] sm:w-[25%] sm:h-[70%] lg:w-[85%] lg:h-[80%]">
          <Image
            src="/images/img4.jpg"
            alt="Chaleit Inner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
