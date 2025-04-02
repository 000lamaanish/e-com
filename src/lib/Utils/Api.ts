import axios from "axios";

// Base API instance
const api = axios.create({
    baseURL: "https://fakestoreapi.com", // Base URL for API requests
    timeout: 5000, // Request timeout in milliseconds
    headers: { "Content-Type": "application/json" }, // Default headers
});

// Generic GET request function
export async function fetchData<T>(endpoint: string): Promise<T> {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}

export default api; // Exporting the axios instance if needed elsewhere
