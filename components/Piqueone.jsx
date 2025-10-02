"use client";

import Image from "next/image";

export default function Piqueone() {
  return (
    <div className="relative bg-[#262262] w-full h-[120vh] sm:h-[100vh] xs:h-[80vh] rounded-3xl overflow-hidden pt-8">
      {/* Background Image */}
      <Image
        src="/images/hq.jpg"
        alt="Pique"
        fill
        className="object-cover"
        priority
      />

      {/* Centered YouTube Video */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[70%] aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/JoQjviMKcUo?autoplay=1&mute=1&controls=0&loop=1&playlist=JoQjviMKcUo&modestbranding=1&rel=0&start=2"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
