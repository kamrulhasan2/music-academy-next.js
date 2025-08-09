"use client";
import cards from '@/app/data/music_school_testimonials.json';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { cn } from "@/app/lib/utils";
const testimonials = cards.data;

function TestimonialCards(){
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div
            className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            )}
        />

        <h2 className="text-3xl font-bold text-center mb-10 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                 />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards