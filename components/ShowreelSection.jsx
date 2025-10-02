"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ShowreelSection() {
  // Track if section is in view
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.5, // trigger when 50% visible
    triggerOnce: false,
  });

  return (
    <section ref={sectionRef} className="mt-20 mx-auto px-8">
      <motion.div
        animate={{ scale: inView ? 1.1 : 1, borderRadius: inView ? "10px" : "30px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full shadow-xl rounded-[30px] overflow-hidden"
      >
        {/* Vimeo iframe */}
       <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
  <iframe
    src="https://player.vimeo.com/video/1123790015?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="blink_video_1"
    allowFullScreen
  ></iframe>
</div>
      </motion.div>
    </section>
  );
}
