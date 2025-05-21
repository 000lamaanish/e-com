"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/cartstore";
import Searchbar from "./searchbar";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
    const cart = useCartStore((state) => state.cart);

    return (
        <nav className="bg-white dark:bg-black text-black dark:text-white h-16 flex items-center justify-between px-4 md:px-8 lg:px-16 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-50">

            {/* Logo */}
            <Link href="/">
                <Image
                    src={assets.logo}
                    alt="Logo"
                    width={120}
                    height={50}
                    className="object-contain"
                />
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-4 lg:gap-8 max-md:hidden text-sm font-medium tracking-wide">
                <Link href="/" className="hover:text-yellow-700 transition-colors duration-200">
                    Home
                </Link>
                <Link href="/ProductList" className="hover:text-yellow-700 transition-colors duration-200">
                    Shop
                </Link>
                <Link href="/Table" className="hover:text-yellow-700 transition-colors duration-200">
                    Table
                </Link>
                <Link href="/cart" className="hover:text-yellow-700 transition-colors duration-200">
                    Cart ({cart.length})
                </Link>


            </div>

            {/* Right Section: Search, Account, Dark Mode */}
            <ul className="hidden md:flex items-center gap-4">
                {/* Search */}
                <Searchbar />

                {/* Account Button */}
                <Link href="/Login">
                    <Button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 rounded-full transition">
                        <Image src={assets.user_icon} alt="user icon" width={18} height={18} />
                        Account
                    </Button>
                </Link>

                {/* Dark Mode Toggle */}
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <ModeToggle />
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
