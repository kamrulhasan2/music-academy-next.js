"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={'/'}>
                <MenuItem setActive={setActive} active={active} item="Home">        
                </MenuItem>
            </Link>
            <Link href={'/courses'}>
                <MenuItem setActive={setActive} active={active} item="Our Courses"> 
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/all-courses">All Courses</HoveredLink>
                        <HoveredLink href="/basic-mu-th">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/adv-com">Advanced Composition</HoveredLink>
                        <HoveredLink href="/song-w">Song Writhin</HoveredLink>
                        <HoveredLink href="/music-pro">Music Production</HoveredLink>
                    </div>
                </MenuItem>
            </Link>
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
  )
}

export default Navbar
