"use client";

import { useQuery } from "@tanstack/react-query"; 
import { useRouter } from "next/navigation";

export default function CategoryPage() {
    const router = useRouter();

    const { data: categories = [], isLoading, isError } = useQuery<string[]>({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        },
    });

    const handleCategoryClick = (category: string) => {
        router.push(`/category/${category}`);
    };

    if (isLoading) return <div style={{ padding: "2rem" }}>Loading categories...</div>;
    if (isError) return <div style={{ padding: "2rem" }}>Failed to load categories.</div>;
    return (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", padding: "2rem" }}>
            {categories.map((category) => (
                <div
                    key={category}
                    onClick={() => router.push(`/category/${category}`)}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "2rem",
                        cursor: "pointer",
                        backgroundColor: "#f8f8f8",
                        width: "200px",
                        textAlign: "center",
                        transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f8f8f8")}
                >
                    <h3>{category.toUpperCase()}</h3>
                </div>
            ))}
        </div>
    );
}
