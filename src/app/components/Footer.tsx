"use client";

import Link from "next/link";

const quickLinks = [
    {
        link: "Home",
        url: "/"
    },
    {
        link: "About",
        url: "/about"
    },
    {
        link: "Courses",
        url: "/courses"
    },
    {
        link: "Contact",
        url: "/contact"
    },

];


const socialLinks = [
    {
        link: "Facebook",
        url: "#"
    },
    {
        link: "Instagram",
        url: "#"
    },
    {
        link: "Twitter",
        url: "#"
    },
    {
        link: "LinkedIn",
        url: "#"
    },

];

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                <p className="mb-4">
                    Music School is a premier institution dedicated to teaching the art
                    and science of music. We nurture talent from the ground up,
                    fostering a vibrant community of musicians.
                </p>
            </div>

             <div className="text-center">
                <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                <ul>
                    {
                        quickLinks.map((item,index)=>(
                            <li key={index}>
                                <Link
                                    href={item.url}
                                    className="hover:text-white transition-colors duration-300"
                                >
                                   {item.link}
                                </Link>
                            </li>
                        ))
                    }
 
                </ul>
            </div>

            <div className="text-center items-center">
                <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                <div className="flex flex-col">
                    <ul>
                        {
                            socialLinks.map((item,index)=>(
                                <li key={index}>
                                    <Link
                                    href={item.url}
                                    className="hover:text-white transition-colors duration-300"
                                    >
                                        {item.link}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="text-center md:text-start items-center">
                <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                <p>Dhaka, Bangladesh</p>
                <p>Email: info@music02accademy.com</p>
                <p>Phone: (+880) 1601780015</p>
            </div>

        </div>

        <div className="text-center items-center pt-8">
            <p className="text-center text-xs ">© 2025 Music School. All rights reserved.</p>
            <p className="text-center text-xs ">Developed by kamrul Hasan.</p>
        </div>
    </footer>
  )
}

export default Footer;