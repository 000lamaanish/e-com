"use client"

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

const products = [
    {
        id: 1,
        image: assets.girl_with_headphone_image,
        title: "Unparalleled Sound",
        description: "Experience crystal-clear audio with premium headphones.",
    },
    {
        id: 2,
        image: assets.womens_clothes,
        title: "Women's collection",
        description: "shop the latest women's collection, and more.",
    },
    {
        id: 3,
        image: assets.mens_clothes,
        title: "Men's collection",
        description: "Shop the latest men's collection, and more.",
    },
];

const FeaturedProduct = () => {
    const router = useRouter();

    const handleBuyNow = () => {
        try {
            router.push("/ProductList");
        } catch (error) {
            console.error("Routing error:", error);
            alert("Something went wrong. Please try again.");
        }
    };
    return (
        <div className="mt-14 bg-white dark:bg-black text-black dark:text-white p-4">
            <div className="flex flex-col items-center">
                <p className="text-3xl font-medium">Featured Products</p>
                <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
                {products.map(({ id, image, title, description }) => (
                    <div key={id} className="relative group rounded-xl overflow-hidden">
                        <div className="relative w-full h-80">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition duration-300 group-hover:brightness-75"
                            />
                        </div>

                        <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2 z-10">
                            <p className="font-medium text-xl lg:text-2xl">{title}</p>
                            <p className="text-sm lg:text-base leading-5 max-w-60">{description}</p>
                            <button
                                onClick={handleBuyNow}
                                className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
                                Buy now{" "}
                                <Image
                                    className="w-3 h-3"
                                    src={assets.redirect_icon}
                                    alt="Redirect Icon"
                                    width={15}
                                    height={15}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default FeaturedProduct;
