import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import PageWrapper from "@/components/PageWrapper";

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
      <body className="bg-background text-foreground antialiased relative overflow-hidden selection:bg-accent/20 selection:text-accent">
        {/* Fundo animado com código */}
        <div className="absolute inset-0 z-0 opacity-[0.05] text-[12px] font-mono text-cyan-300 whitespace-pre leading-relaxed animate-scrollCode select-none pointer-events-none">
          {`const dev = {
  name: "Alessandro Santos",
  stack: ["Python", "Django", "Next.js", "DevOps"],
  focus: "Soluções integradas e automação inteligente",
  motto: "Code. Create. Connect."
};`}
        </div>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="relative z-10 px-4 md:px-8 pt-6 pb-20 md:pb-10 md:ml-[90px] lg:ml-[110px] flex justify-center items-center min-h-screen transition-all duration-300">
            <PageWrapper>{children}</PageWrapper>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
