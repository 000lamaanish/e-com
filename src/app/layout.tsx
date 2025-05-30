
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
      <head>
        <title>MyApp | Fast & Modern Web Experience</title>
        <meta
          name="description"
          content="Welcome to MyApp – a fast, modern, and accessible web app experience. Log in, manage your profile, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
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
