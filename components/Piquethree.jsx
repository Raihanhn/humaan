"use client";

export default function Piquethree() { 
  return (
    <section className="relative w-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-6xl lg:max-w-7xl xl:max-w-8xl rounded-2xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/j_mYjgWhYhs?autoplay=1&mute=1&controls=0&loop=1&playlist=j_mYjgWhYhs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ objectFit: 'cover' }}
        ></iframe>
      </div>
    </section>
  );
}
