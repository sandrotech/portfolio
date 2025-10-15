"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

const tutoriais = [
    {
        titulo: "Deploy Django com Gunicorn e Nginx",
        texto: "Guia passo a passo para colocar seu projeto Django em produção no Ubuntu.",
    },
    {
        titulo: "Adicionar HTTPS com Let's Encrypt",
        texto: "Aprenda a instalar e renovar certificados SSL grátis com Certbot.",
    },
    {
        titulo: "Usando GitHub Actions",
        texto: "Automatize testes e deploys com GitHub Actions.",
    },
]

export default function BlogSection() {
    return (
        <section id="blog" className="py-16 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8 text-accent">
                    Blog Técnico
                </h2>
                <p className="text-center text-gray-400 mb-12">
                    Tutoriais, dicas e comandos úteis para desenvolvimento e deploy.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tutoriais.map((t, i) => (
                        <Dialog key={i}>
                            <DialogTrigger asChild>
                                <Card className="bg-neutral-900 border-neutral-800 hover:border-accent transition cursor-pointer">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-accent">
                                            {t.titulo}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-400 text-sm">{t.texto}</p>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="bg-neutral-950 text-white border-neutral-800 max-w-3xl">
                                <h3 className="text-2xl font-semibold mb-4">{t.titulo}</h3>
                                <p>{t.texto}</p>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    )
}
