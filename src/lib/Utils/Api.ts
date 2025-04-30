import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Base API instance
const api = axios.create({
    baseURL: "https://fakestoreapi.com", // Base URL for API requests
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
});

// Generic GET request function
export async function fetchProducts<T>(endpoint: string): Promise<T> {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}
// Fetch function
const fetchProduct = async (id: string) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};

// React Query Hook
export function useProduct(id: string) {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProduct(id),
        enabled: !!id,
    });
}
// Function to fetch all products
const fetchAllProducts = async () => {
    const response = await api.get("/products");
    return response.data;
};

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchAllProducts,
    });
};

export default api; 
