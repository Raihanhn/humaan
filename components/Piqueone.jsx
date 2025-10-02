"use client";

import Image from "next/image";

export default function Piqueone() {
  return (
    <div className="relative bg-[#262262] w-full h-[120vh] sm:h-[100vh] xs:h-[80vh] rounded-3xl overflow-hidden pt-8 ">
      {/* Background Image */}
      <Image
        src="https://a-us.storyblok.com/f/1017006/3720x2312/168f233d1f/card-pique-landscape.jpg/m/450x330/filters:quality(80)"
        alt="Pique"
        fill
        className="object-cover"
        priority 
      />

      {/* Centered Vimeo Iframe */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[70%] aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://player.vimeo.com/video/1123789389?background=1&autoplay=1&loop=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full object-cover"
            title="blink_video_2"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
