"use client"
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/cartstore";
import Searchbar from "./searchbar";


const Navbar = () => {
    const cart = useCartStore((state) => state.cart);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-white-700 sticky top-0 z-50 bg-white">
            <Image
                className="cursor-pointer w-28 md:w-32"
                src={assets.logo}
                alt="logo"
            />
            <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
                <Link href="/" className="hover:text-yellow-900 transition">
                    Home
                </Link>
                <Link href="/ProductList" className="hover:text-yellow-900 transition">
                    Shop
                </Link>
                <Link href="/" className="hover:text-yellow-900 transition">
                    About Us
                </Link>
                <Link href="/cart" className="hover:text-yellow-900 transition">
                    Cart ({cart.length})
                </Link>


            </div>

            <ul className="hidden md:flex items-center gap-4 ">
                <Searchbar />
                <Link href={"/Login"}>
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