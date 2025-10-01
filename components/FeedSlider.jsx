"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const feedItems = [
  {
    title: "Surveillance Watch",
    description: "An interactive data visualisation highlighting global surveillance connections",
    image: "https://a-us.storyblok.com/f/1017006/770x1000/2ef84dad83/surveillance-watch.jpg/m/300x390/filters:quality(80)",
    tag: "Site Launch",
    tagColor: "#1b2237",
    date: "28.08.24",
    link: "https://www.surveillancewatch.io/"
  },
  {
    title: "Unearthed",
    description: "An all new website to showcase the teams expertise across innovation in the resources sector.",
    image: "https://a-us.storyblok.com/f/1017006/770x1000/2b0e547469/unearthed.jpg/m/300x390/filters:quality(80)",
    tag: "Site Launch",
    tagColor: "#f68738",
    date: "30.07.24",
    link: "https://unearthed.solutions/"
  },
  {
    title: "Humaaniversary",
    description: "Celebrating 14 years of making extraordinary digital products with our incredible team.",
    image: "https://a-us.storyblok.com/f/1017006/770x1000/17b3d35e06/humaans.jpg/m/300x390/filters:quality(80)",
    tag: "Milestone",
    tagColor: "#28221e",
    date: "01.07.24"
  },
  {
    title: "My Mind Check",
    description: "An evidence-based digital mental health and wellbeing check-in for Australian schools.",
    image: "https://a-us.storyblok.com/f/1017006/770x1000/e4a71105cb/mymindcheck.png/m/300x390/filters:quality(80)",
    tag: "Site Launch",
    tagColor: "#ff6465",
    date: "30.05.24",
    link: "https://mymindcheck.org.au/"
  },
  {
    title: "Australian Web Awards",
    description: "15 nominations and 2 wins, including Best in show: Design.",
    image: "https://a-us.storyblok.com/f/1017006/770x1000/2fbc3c1071/awa.jpg/m/300x390/filters:quality(80)",
    tag: "Awards",
    tagColor: "#361f0f",
    date: "22.05.24"
  },
  {
    title: "Fair Go Finance",
    description: "Flexible personal finance has an all new website.",
    image: "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/300x390/filters:quality(80)",
    tag: "Site Launch",
    tagColor: "#39D25D",
    date: "17.04.24",
    link: "https://www.fairgofinance.com.au/"
  },
  {
    title: "Welcome Niaal",
    description: "Long time friend of the team, Niaal Holder joins as our new Agency Director.",
    image: "https://a-us.storyblok.com/f/1017006/770x1000/f7a8833cb1/niaal.jpeg/m/300x390/filters:quality(80)",
    tag: "New Humaan",
    tagColor: "#97A1C2",
    date: "26.03.24"
  },
  {
    title: "Headless Humaan",
    description: "A fresh new look for humaan.com – our sixth iteration. Please, take a look around.",
    image: "https://a-us.storyblok.com/f/1017006/600x790/f48bc1ea20/humaan.jpg/m/300x390/filters:quality(80)",
    tag: "Brand New",
    tagColor: "#7c4ace",
    date: "22.12.23"
  },
  {
    title: "Season's Greenthings",
    description: "2023, the year we embraced the morph suit... We hope you have a safe festive season!",
    image: "https://a-us.storyblok.com/f/1017006/600x790/4c3962aae5/xmas.jpg/m/300x390/filters:quality(80)",
    tag: "Festive",
    tagColor: "#1d8c4a",
    date: "18.12.23",
    link: "/xmas"
  },
  {
    title: "Cocos Keeling Islands",
    description: "A beautiful new website for Australia's last unspoilt paradise.",
    image: "https://a-us.storyblok.com/f/1017006/600x790/167932ea15/cocos.jpg/m/300x390/filters:quality(80)",
    tag: "Site Launch",
    tagColor: "#038B99",
    date: "28.11.23",
    link: "https://cocoskeelingislands.com.au/"
  },
  {
    title: "Access Awards",
    description: "Talk n Walk wins Not-for-profit App of the Year by the Centre for Accessibility Australia.",
    image: "https://a-us.storyblok.com/f/1017006/600x790/b2eda5d803/frame-1728.jpg/m/300x390/filters:quality(80)",
    tag: "Recognition",
    tagColor: "#353537",
    date: "23.11.23"
  },
  {
    title: "Alder Tapware",
    description: "Inspiration, innovation, design. An all new website for Alder tapware.",
    image: "https://a-us.storyblok.com/f/1017006/601x780/7ecf7ab961/alder-feed.jpg/m/300x390/filters:quality(80)",
    tag: "Site Launch",
    tagColor: "#000000",
    date: "31.10.23",
    link: "https://aldertapware.com"
  },
  {
    title: "Humaan Annotations",
    description: "A handy little tool from the labs that extends Figma's built in commenting functionality.",
    image: "https://a-us.storyblok.com/f/1017006/1200x1580/23137800a3/humaan-annotations.png/m/300x390/filters:quality(80)",
    tag: "Figma",
    tagColor: "#a25aff",
    date: "28.10.23",
    link: "https://www.figma.com/community/widget/1253154577300925316"
  },
  {
    title: "Loam Bio",
    description: "Putting agriculture at the forefront of addressing climate change.",
    image: "https://a-us.storyblok.com/f/1017006/600x790/d28f4d34ae/loam2.jpg/m/300x390/filters:quality(80)",
    tag: "Site Launch",
    tagColor: "#46651A",
    date: "26.10.23",
    link: "https://loambio.com"
  },
  {
    title: "Loud Shirt Day",
    description: "Proudly ‘wearing it loud’ today for Loud Shirt Day - supporting children with hearing loss.",
    image: "https://a-us.storyblok.com/f/1017006/600x790/6a408c2c00/loudshirtday.jpg/m/300x390/filters:quality(80)",
    tag: "Get Loud",
    tagColor: "#EE8D5A",
    date: "20.10.23"
  }
];

export default function DraggableSlider() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag start
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  // Drag move
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-full mt-30">
         <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6 text-[#0f1d07]">What's New</h2>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 p-4 cursor-grab scrollbar-none"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onDragStart={(e) => e.preventDefault()}
      >
        {feedItems.map((item, index) => (
          <div
            key={index}
            className="flex-none bg-white rounded-xl shadow-md"
            style={{ width: "300px", height: "390px" }}
          >
            <div className="relative w-full h-[60%]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-t-xl object-cover"
              />
              <span
                className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded"
                style={{ backgroundColor: item.tagColor, color: "white" }}
              >
                {item.tag}
              </span>
            </div>
            <div className="p-3 flex flex-col justify-between h-[40%]">
              <span className="text-xs text-gray-500">{item.date}</span>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-700 flex-1">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  className="mt-2 text-blue-600 hover:underline text-sm"
                >
                  Explore
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cursor-grab {
          cursor: grab;
        }
        .cursor-grab:active {
          cursor: grabbing;
        }
      `}</style>
    </div>
  );
}
