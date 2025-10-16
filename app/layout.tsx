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
      <body className="bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
