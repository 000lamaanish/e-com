"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Product } from "@/types/product";

const AddToCartButtons = dynamic(() => import("./addtocart"), {
    ssr: false,
});

export default function ProductClientView({ product }: { product: Product }) {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto bg-white p-8 shadow-md rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full max-w-md object-contain"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                        <p className="text-lg text-gray-600 mb-1">Category: <span className="capitalize">{product.category}</span></p>
                        <p className="text-2xl text-red-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
                        <hr className="my-4" />
                        <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>
                    </div>

                    {/* Add to Cart / Buy Now Buttons */}
                    <div className="mt-6">
                        <AddToCartButtons product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
