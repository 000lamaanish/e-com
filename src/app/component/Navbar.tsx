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
        <nav className="navbar-base">

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
            <div className="nav-links">
                <Link href="/" className="nav-link">
                    Home
                </Link>
                <Link href="/ProductList" className="nav-link">
                    Shop
                </Link>
                <Link href="/Table" className="nav-link">
                    Table
                </Link>
                <Link href="/cart" className="nav-link">
                    Cart ({cart.length})
                </Link>


            </div>

            {/* Right Section: Search, Account, Dark Mode */}
            <ul className="hidden md:flex items-center gap-4">
                {/* Search */}
                <Searchbar />

                {/* Account Button */}
                <Link href="/Login">
                    <Button className="account-button">
                        <Image src={assets.user_icon} alt="user icon" width={18} height={18} />
                        Account
                    </Button>
                </Link>

                {/* Dark Mode Toggle */}
                <div className="dark toggle">
                    <ModeToggle />
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
