import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { AnimatePresence, motion } from "framer-motion";

export const metadata = {
  title: "Alessandro DevHub",
  description: "Central pessoal de projetos e memórias técnicas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent">
        <Providers>
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              key={Math.random()}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="min-h-screen pt-20"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
