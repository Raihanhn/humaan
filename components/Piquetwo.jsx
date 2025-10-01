"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Piquetwo() {
  const leftRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowVideo(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (leftRef.current) observer.observe(leftRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
    };
  }, []);

  return (
    <div className="flex justify-center items-start gap-4 p-6">
      {/* Left Side: Image / Video */}
      <div
        ref={leftRef}
        className="rounded-3xl overflow-hidden"
        style={{ width: 680, height: 800 }}
      >
        {showVideo ? (
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/745004855/rendition/720p/file.mp4?loc=external&signature=1dd35b7b1001be056347f1aa639461cf56f40fc35b3f0ad75170809e8ca7d4e4"
            autoPlay
            loop
            playsInline
            muted
            className="rounded-3xl object-cover w-full h-full"
          />
        ) : (
          <Image
            src="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/450x677/filters:quality(80)"
            alt="Sussex Taps"
            width={680}
            height={800}
            className="rounded-3xl object-cover"
          />
        )}
      </div>

      {/* Right Side: Main Image with Centered Overlay */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{ width: 680, height: 800 }}
      >
        <Image
          src="https://a-us.storyblok.com/f/1017006/1866x2805/5f879805d6/card-portrait.jpg/m/450x677/filters:quality(80)"
          alt="Chaleit"
          width={680}
          height={800}
          className="rounded-3xl object-cover"
        />

        {/* Centered small overlay image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
          <Image
            src="https://a-us.storyblok.com/f/1017006/710x1530/d01797ffd7/inner-mobile.jpg/m/171x369/filters:quality(80)"
            alt="Chaleit Inner"
            width={201}
            height={569}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
