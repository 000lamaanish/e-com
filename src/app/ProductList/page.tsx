"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/Utils/Api"; // Import the reusable function
import Link from "next/link";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};


export default function ProductList() {
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: () => fetchProducts<Product[]>("/products"), // Reusing the function
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {(error as Error).message}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 sm:p-10 bg-gray-100 min-h-screen">
            {data?.map((product) => (
                <Link key={product.id} href={`/productdetail/${product.id}`}>

                    <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 p-4 h-full hover:ring-2 hover:ring-yellow-500">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-32 h-32 object-contain mx-auto" />
                        <h2 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[2.5rem]">{product.title}</h2>
                        <p className="text-lg font-bold text-red-600 mt-2">${product.price.toFixed(2)}</p>
                        <p className="text-xs text-gray-500">{product.category}</p>
                        <button className="mt-4 w-full py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition">
                            View Product
                        </button>
                    </div>
                </Link>
            ))}
        </div>

    );
}
