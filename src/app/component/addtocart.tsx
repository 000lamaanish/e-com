"use client";

import { Product } from "@/types/product";

export default function AddToCartButtons({ product }: { product: Product }) {
    const handleAddToCart = () => {
        console.log("Added to cart:", product.title);
    };

    const handleBuyNow = () => {
        console.log("Buy now clicked for:", product.title);
    };

    return (
        <div className="flex gap-4">
            <button onClick={handleAddToCart} className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-md font-semibold shadow-sm transition">
                Add to Cart
            </button>
            <button onClick={handleBuyNow} className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-md font-semibold shadow-sm transition">
                Buy Now
            </button>

        </div>
    );
}
