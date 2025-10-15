"use client";

import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ToastProvider>
                {children}
                <Toaster />
            </ToastProvider>
        </ThemeProvider>
    );
}
