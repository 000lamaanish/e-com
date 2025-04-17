"use client";

import { useCartStore } from "@/lib/store/cartstore";
import Image from "next/image";

export default function CartPage() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-4">
                                <Image src={item.image} alt={item.title} width={80} height={80} className="object-contain" />
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
