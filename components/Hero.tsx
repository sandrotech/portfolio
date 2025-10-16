"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 bg-black overflow-hidden">
            {/* fundo animado */}
            <div className="absolute inset-0 bg-gradient-hero opacity-10 blur-3xl" />
            {/* camada principal */}
            <div className="relative z-10 glass p-8 rounded-2xl">
                <Image
                    src="/perfil.jpeg"
                    alt="Alessandro"
                    width={130}
                    height={130}
                    className="rounded-full border-4 border-accent shadow-lg mb-6 object-cover"
                />
                <h1 className="text-4xl md:text-5xl font-bold uppercase text-white mb-3">
                    Alessandro Santos
                </h1>
                <p className="text-gray-400 mb-6">
                    Ideias nascem na mente. Aqui, elas ganham vida.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild className="bg-accent text-black hover:opacity-90">
                        <a href="/projetos">Ver Projetos</a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-black"
                    >
                        <a href="/memoria">Abrir Memória Técnica</a>
                    </Button>
                </div>
            </div>
        </section>

    );
}
