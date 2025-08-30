"use client";
import React from "react";
import musicSchoolContent from '@/app/data/music_school_content.json'
import { StickyScroll } from "./ui/sticky-scroll-reveal";


import Image from "next/image";

const content = musicSchoolContent.data.map((item) => ({
    title: item.title,
    description: item.description,
    content: item.content ? (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            <p className="text-center text-lg p-4">{item.content}</p>
        </div>
    ) : (
        <div className="flex h-full w-full items-center justify-around text-white">
            <p className="text-center text-md">{item.title}</p>
            {item.img && (
              <Image
                src={item.img}
                width={250}
                height={250}
                className="h-full w-1/2 object-cover"
                alt={item.title}
              />
            )}
           
        </div>
    )
}));


function WhyChooseUs(){
  return (
    <div  className="w-full">
        <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs