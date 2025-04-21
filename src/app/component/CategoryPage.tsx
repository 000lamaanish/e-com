"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CategoryPage() {
    const [categories, setCategories] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

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
                    }}
                >
                    <h3>{category.toUpperCase()}</h3>
                </div>
            ))}
        </div>
    );
}
