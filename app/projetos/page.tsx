"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Globe, GitBranch } from "lucide-react";

const projetos = [
  {
    titulo: "ArenaConnect",
    descricao: "Plataforma de gestão esportiva para arenas e grupos.",
    icone: <Globe className="w-5 h-5 text-cyan-400" />,
    link: "https://arenaconnect.alessandrosantos.dev",
  },
  {
    titulo: "ERP Cometa",
    descricao: "Sistema ERP modular para controle administrativo e fiscal.",
    icone: <Code className="w-5 h-5 text-cyan-400" />,
    link: "#",
  },
  {
    titulo: "SportConnect",
    descricao: "Plataforma esportiva com ranking, reservas e IA preditiva.",
    icone: <GitBranch className="w-5 h-5 text-cyan-400" />,
    link: "https://sportconnect.alessandrosantos.dev",
  },
];

export default function ProjetosPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#101010] text-white px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-cyan-400">Projetos</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Soluções reais desenvolvidas com tecnologia, design e propósito.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Card className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.05)] hover:border-cyan-400/40 transition-all">
                <CardHeader className="flex items-center gap-3 text-cyan-300">
                  {p.icone}
                  <h2 className="text-lg font-semibold group-hover:text-white transition">
                    {p.titulo}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{p.descricao}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
