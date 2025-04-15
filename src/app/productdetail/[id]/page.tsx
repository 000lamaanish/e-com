import { fetchProducts } from "@/lib/Utils/Api";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";
import ProductClientView from "@/app/component/clientview"; // Assuming this is the client-side component

type Props = {
    params: { id: string };
};

export default async function ProductDetailPage({ params }: Props) {
    try {
        const product: Product = await fetchProducts(`/products/${params.id}`);
        return <ProductClientView product={product} />;
    } catch (error) {
        console.error("Error fetching product:", error);
        return notFound();
    }
}
