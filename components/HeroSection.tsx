"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section className="text-center py-20 bg-black text-white">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <Image
                    src="/perfil.jpeg"
                    alt="Alessandro"
                    width={120}
                    height={120}
                    className="rounded-full mb-4 object-cover"
                />
                <h1 className="text-3xl md:text-5xl font-bold uppercase">
                    Alessandro Santos
                </h1>
                <p className="text-gray-300 mt-2 text-lg">
                    Ideias nascem na sua mente. Juntos, fazemos acontecer.
                </p>
                <Button
                    asChild
                    className="mt-6 bg-accent text-black hover:opacity-90 transition"
                >
                    <a href="#contato">Contato</a>
                </Button>
                <div className="flex space-x-6 mt-6 text-2xl">
                    <a
                        href="https://github.com/sandrotech"
                        target="_blank"
                        className="hover:text-accent transition"
                    >
                        <i className="bi bi-github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alessandro-barbosa/"
                        target="_blank"
                        className="hover:text-accent transition"
                    >
                        <i className="bi bi-linkedin" />
                    </a>
                    <a
                        href="https://wa.me/5585988102690"
                        target="_blank"
                        className="hover:text-accent transition"
                    >
                        <i className="bi bi-whatsapp" />
                    </a>
                </div>
            </div>
        </section>
    )
}
