"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

const tutoriais = [
    {
        titulo: "Como configurar o ambiente Django + Next.js",
        resumo: "Integração completa entre backend e frontend com deploy via CapRover.",
        link: "#",
    },
    {
        titulo: "Criando API com FastAPI e autenticação JWT",
        resumo: "Guia prático para construir uma API moderna com segurança e performance.",
        link: "#",
    },
];

export default function BlogSection() {
    return (
        <section className="grid gap-6 sm:grid-cols-2">
            {tutoriais.map((item, i) => (
                <Card
                    key={i}
                    className="bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                            {item.titulo}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">{item.resumo}</p>

                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="px-3 py-1 text-sm bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 rounded-md transition">
                                    Ler mais
                                </button>
                            </DialogTrigger>
                            <DialogContent className="bg-black/90 border border-white/10 text-white">
                                <h2 className="text-xl font-semibold mb-2">{item.titulo}</h2>
                                <p>
                                    Este conteúdo será exibido dentro do modal de leitura
                                    detalhada.
                                </p>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>
            ))}
        </section>
    );
}
