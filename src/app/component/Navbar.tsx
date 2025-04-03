"use client"
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button";


const Navbar = () => {

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-white-700">
            <Image
                className="cursor-pointer w-28 md:w-32"
                src={assets.logo}
                alt="logo"
            />
            <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
                <Link href="/" className="hover:text-yellow-900 transition">
                    Home
                </Link>
                <Link href="/all-products" className="hover:text-yellow-900 transition">
                    Shop
                </Link>
                <Link href="/About" className="hover:text-yellow-900 transition">
                    About Us
                </Link>
                <Link href="/Contact" className="hover:text-yellow-900 transition">
                    Contact
                </Link>


            </div>

            <ul className="hidden md:flex items-center gap-4 ">
                <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
                <Link href={"/login"}>
                    <Button className="flex items-center gap-2 hover:text-gray-900 transition">
                        <Image src={assets.user_icon} alt="user icon" />
                        Account
                    </Button>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;