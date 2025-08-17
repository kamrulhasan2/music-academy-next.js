"use client"
import webinars from '@/app/data/featured_webinars.json';
import { HoverEffect } from "@/app/components/ui/card-hover-effect";



function WebinarsPage() {
    const projects = webinars.data.map(item => ({
        title: item.title,
        description: item.details,
        link: `webinars/${item.slug}`
    }));

    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
                Webinars
            </h1>
            <div className="container mx-auto px-5">
                <HoverEffect items={projects} className="lg:grid-cols-2" />
            </div>
        </div>
    )
}

export default WebinarsPage;