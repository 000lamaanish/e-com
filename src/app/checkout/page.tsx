"use client";

import { useCartStore } from "@/lib/store/cartstore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
    const cartItems = useCartStore((state) => state.cart);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handlePlaceOrder = () => {
        console.log("Place Order clicked!");
        if (isClient) {
            console.log("Routing to /userDetail...");
            router.push("/userDetail");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
                            <div>
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-gray-500">₹{item.price}</p>
                                <p className="text-gray-500">Qty: {item.quantity}</p>
                            </div>
                            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <button
                    onClick={handlePlaceOrder}
                    className="mt-6 w-full py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-lg"
                >
                    Place Order
                </button>
            )}
        </div>
    );
}
