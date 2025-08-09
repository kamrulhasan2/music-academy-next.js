"use client";
import webinars from '@/app/data/featured_webinars.json'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';
import { Button } from "./ui/moving-border";


function UpcomingWebinars() {
    const projects = webinars.data.filter(item => item.isFeatured).map(item => ({
        title: item.title,
        description: item.description,
        link: item.slug
    }));

  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>

            <div className="mt-10">
                <HoverEffect items={projects} />
            </div>

            <div className="mt-10 text-center">
                <Link href={"/webinars"} >
                    <Button style={{ height:'2.7rem',borderRadius:'1.5rem',}} className='cursor-pointer bg-black'>View All webinars</Button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default UpcomingWebinars;