"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ShowreelSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Track if section is in view
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.5, // trigger when 50% visible
    triggerOnce: false,
  });

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteUnmute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section ref={sectionRef} className="mt-20 mx-auto px-8">
      <motion.div
        animate={{ scale: inView ? 1.1 : 1, borderRadius: inView ? "10px" : "30px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full max-w-[1200px] mx-auto shadow-xl"
      >
        {/* Image fallback */}
        <div className="rounded-[30px] overflow-hidden">
          <picture>
            <source
              srcSet="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/450x364/filters:quality(80) 1x,
                      https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/900x728/filters:quality(80) 2x"
              media="(max-width: 479px)"
            />
            <source
              srcSet="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/1452x890/filters:quality(80) 1x,
                      https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/2904x1780/filters:quality(80) 2x"
              media="(min-width: 480px)"
            />
            <img
              src="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/450x364/filters:quality(80)"
              alt="Showreel"
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </picture>
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-[30px] pointer-events-none"
          src="https://player.vimeo.com/progressive_redirect/playback/900035537/rendition/1080p/file.mp4?loc=external&log_user=0&signature=92f8baecbcaa673d013bf28d8697afbb95b9360f73659a39636e837060325902"
          preload="none"
          loop
          muted
          autoPlay
          playsInline
        />

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex gap-4">
          <button
            onClick={handlePlayPause}
            className="bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition"
            aria-label={isPlaying ? "Pause Showreel Video" : "Play Showreel Video"}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button
            onClick={handleMuteUnmute}
            className="bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition"
            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>

      </motion.div>
    </section>
  );
}
