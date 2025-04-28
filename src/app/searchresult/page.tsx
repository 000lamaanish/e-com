"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useProducts } from "@/lib/Utils/Api";
import Image from "next/image";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

const SearchResults = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";

    const { data: products, isLoading, error } = useProducts();

    const filteredProducts = useMemo(() => {
        if (!products) return [];
        return products.filter((product: Product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [products, query]);

    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error) return <p>Error: {error.message}</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>

            {filteredProducts.length === 0 ? (
                <p>No products found</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map((product: Product) => (
                        <div key={product.id} className="border p-4 rounded shadow-md">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={200}
                                height={200}
                                className="object-contain h-48 w-full"
                            />
                            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                            <p className="text-gray-600 text-sm">
                                {product.description.slice(0, 100)}...
                            </p>
                            <p className="mt-2 font-bold text-yellow-600">
                                Price: ${product.price}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;
