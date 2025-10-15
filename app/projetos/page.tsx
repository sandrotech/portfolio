"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projetos = [
  {
    nome: "ArenaConnect",
    descricao:
      "Plataforma de reservas e gestão esportiva. Controle de quadras, pagamentos, ligas e relatórios.",
    stack: ["Django", "React", "Docker", "PostgreSQL"],
    link: "https://arena.alessandrosantos.dev",
    img: "/arena.png",
  },
  {
    nome: "ERP Cometa",
    descricao:
      "Sistema ERP modular para supermercados, com gestão de notas, estoque e automações fiscais.",
    stack: ["Python", "Django Rest", "React", "PostgreSQL"],
    link: "https://erp.alessandrosantos.dev",
    img: "/cometa.png",
  },
  {
    nome: "SportConnect",
    descricao:
      "Rede social multi-esporte para arenas, times e professores. Inclui ranking, matchmaking e pagamentos PIX com split.",
    stack: ["Next.js", "Django API", "Tailwind", "Docker"],
    link: "https://sportconnect.alessandrosantos.dev",
    img: "/sportconnect.png",
  },
];

export default function ProjetosPage() {
  return (
    <section className="min-h-screen bg-neutral-950 text-white py-20 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-accent"
        >
          Projetos Recentes
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-neutral-900/80 border border-neutral-800 hover:border-accent transition shadow-lg overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={p.img}
                    alt={p.nome}
                    className="w-full h-40 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-5">
                  <h2 className="text-xl font-semibold mb-2 text-accent">
                    {p.nome}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4">{p.descricao}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full bg-accent text-black hover:opacity-90"
                  >
                    <a href={p.link} target="_blank">
                      Acessar Projeto
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
