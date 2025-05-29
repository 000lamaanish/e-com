
import "./globals.css";
import QueryProvider from "@/Context/QueryProvider";
import { ThemeProvider } from "./component/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Navbar />
            {children}
            <br />
            <br />
            <Footer />
          </QueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
