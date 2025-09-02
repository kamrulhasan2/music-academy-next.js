"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";
import { Menu as MenuIcon, X } from 'lucide-react';


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div  className={cn("fixed top-0 md:top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        {/* Desktop Menu */}
        <div className="hidden md:block">
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home">        
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses"> 
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses/basic-music-theory">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses/advanced-composition">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses/songwriting">Songwriting</HoveredLink>
                        <HoveredLink href="/courses/music-production">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={'/contact-us'}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us"> 
                    </MenuItem>
                </Link>
                <Link href={'/about'}>
                    <MenuItem setActive={setActive} active={active} item="About"> 
                    </MenuItem>
                </Link>
            </Menu>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
            <div className="flex justify-between items-center px-4 py-4 bg-black bg-opacity-50">
                <Link href="/" className="text-white text-xl font-bold">
                    Music Academy
                </Link>
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className=" bg-black bg-opacity-90 rounded-lg">
                    <ul className="flex flex-col items-center space-y-4 p-4">
                        <li><Link href="/" className="text-white" onClick={toggleMenu}>Home</Link></li>
                        <li><Link href="/courses" className="text-white" onClick={toggleMenu}>Our Courses</Link></li>
                        <li><Link href="/contact-us" className="text-white" onClick={toggleMenu}>Contact Us</Link></li>
                        <li><Link href="/about" className="text-white" onClick={toggleMenu}>About</Link></li>
                    </ul>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar
