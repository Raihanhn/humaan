"use client";

import Image from "next/image";

export default function Piqueone() {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh] xs:h-[80vh] rounded-3xl overflow-hidden mt-8">
      {/* Background Image */}
      <Image
        src="https://a-us.storyblok.com/f/1017006/3720x2312/168f233d1f/card-pique-landscape.jpg/m/450x330/filters:quality(80)"
        alt="Pique"
        fill
        className="object-cover"
        priority
      />

      {/* Centered Video */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[70%] aspect-video rounded-3xl overflow-hidden shadow-lg">
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/894026344/rendition/720p/file.mp4?loc=external&log_user=0&signature=defd0324929609083c0f37054720fef27100e9240b3a6eed5566f0d10cbf414a"
            autoPlay
            loop
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
