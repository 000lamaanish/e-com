"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/Utils/Api"; // Import the reusable function

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};


export default function Home() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchData<Product[]>("/products"), // Reusing the function
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data?.map((product) => (
        <div key={product.id} className="border p-4 shadow-lg rounded-lg">
          <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mx-auto" />
          <h2 className="font-bold text-lg mt-2">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p className="text-sm">{product.category}</p>
        </div>
      ))}
    </div>
  );
}
