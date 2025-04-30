"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const router = useRouter();

    const handleSearchSubmit = () => {
        if (searchQuery.trim() !== "") {
            router.push(`/searchresult?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="p-4">
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search for a product..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <Button onClick={handleSearchSubmit}>Search</Button>
            </div>
        </div>
    );
};

export default Searchbar;
