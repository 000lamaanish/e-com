import { create } from "zustand";

type CartItem = {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
};

type CartState = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (item) =>
        set((state) => {
            const existing = state.cart.find((p) => p.id === item.id);
            if (existing) {
                return {
                    cart: state.cart.map((p) =>
                        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                    ),
                };
            }
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }),
    removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
    clearCart: () => set({ cart: [] }),
}));
