"use client";

import { useCartStore } from "@/lib/store/cartstore";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function AddToCartButtons({ product }: { product: Product }) {
    const addToCart = useCartStore((state) => state.addToCart);
    const router = useRouter();

    const handleAdd = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
        toast.success(`${product.title} added to cart`);
    };

    const handleBuyNow = () => {
        handleAdd();
        router.push("/checkout");
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 text-black dark:text-white p-4 rounded-2xl shadow-lg backdrop-blur-sm">

            <Button
                onClick={handleAdd}
                className="w-full sm:w-1/2 bg-black border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white text-sm font-medium py-2 px-3 rounded-md transition"
            >
                🛒 Add to Cart
            </Button>

            <Button
                onClick={handleBuyNow}
                className="w-full sm:w-1/2 bg-orange-500 text-white hover:bg-orange-600 text-sm font-medium py-2 px-3 rounded-md transition"
            >
                ⚡ Buy Now
            </Button>

        </div>
    );
}
