"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/Utils/Api";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};


export default function ProductList() {
    const [page, setPage] = useState(1);
    const limit = 8;

    const { data, error, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: () => fetchProducts<Product[]>("/products"),
    });

    const total = data?.length ?? 0;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const paginatedProducts = data?.slice(startIndex, startIndex + limit);

    const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {(error as Error).message}</p>;

    return (
        <div className="min-h-screen bg-gray-100 p-6 sm:p-10 bg-white dark:bg-black text-black dark:text-white p-4 select-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 select-none">
                {paginatedProducts?.map((product) => (
                    <Link key={product.id} href={`/productdetail/${product.id}`}>

                        <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 p-4 h-full hover:ring-2 hover:ring-yellow-500">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-32 h-32 object-contain mx-auto"
                            />
                            <h2 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[2.5rem]">
                                {product.title}
                            </h2>
                            <p className="text-lg font-bold text-red-600 mt-2">${product.price.toFixed(2)}</p>
                            <p className="text-xs text-gray-500">{product.category}</p>

                        </div>
                    </Link>
                ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-10 space-x-4">
                <Button
                    onClick={handlePrev}
                    disabled={page === 1}
                >
                    Previous
                </Button>
                <span className="text-white-700 font-medium">
                    Page {page} of {totalPages}
                </span>
                <Button
                    onClick={handleNext}
                    disabled={page === totalPages}
                >
                    Next
                </Button>
            </div>
        </div>

    );
}
