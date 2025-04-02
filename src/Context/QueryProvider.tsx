
"use client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface Props {
    children: React.ReactNode
}


const Queryprovider = ({ children }: Props) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <div>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </div>
    )
}

export default Queryprovider;
