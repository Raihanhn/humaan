"use client";
import Image from "next/image";

export default function Piquethree() {
  return (
    <section className="relative w-full flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="relative w-full max-w-6xl">
        <Image
          src="https://a-us.storyblok.com/f/1017006/1900x1400/1b692905b8/swglobelandscape.jpg/m/450x330/filters:quality(80)"
          alt="Surveillance Watch"
          width={1900}
          height={1400}
          className="w-full h-auto rounded-2xl object-cover"
        />

        {/* Video Layer */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          src="https://player.vimeo.com/progressive_redirect/playback/1003946122/rendition/1080p/file.mp4?loc=external&log_user=0&signature=4dc1bb46a33c3b7a087cfa76e691a8402c24499be0f4dab6fa9cd9c909d53425"
          autoPlay
          loop
          playsInline
          muted
        />

        {/* Overlay Center Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="https://a-us.storyblok.com/f/1017006/2644x1510/b4c9e899ac/sw_inner.png/m/312x178/filters:quality(80)"
            alt="Surveillance Watch Inner"
            width={312}
            height={178}
            className="w-[80%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
}
