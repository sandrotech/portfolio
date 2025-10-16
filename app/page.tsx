"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#101010] text-white">
      {/* Fundo com brilho e partículas sutis */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(0,191,166,0.05),_transparent_70%)] animate-fade-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(0,125,255,0.08),_transparent_60%)] animate-fade-slower" />

      {/* Partículas leves animadas */}
      <div className="absolute w-full h-full overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-30"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
            }}
            animate={{
              y: [Math.random() * 100 + "vh", -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Card central */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,191,166,0.1)] rounded-2xl px-8 py-12 max-w-lg w-[90%]"
      >
        {/* Foto com destaque minimalista e foco visual */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="relative mb-8 flex items-center justify-center"
        >
          {/* Anel de energia translúcido e animado */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,rgba(0,191,166,0.15),rgba(0,191,255,0.25),rgba(0,191,166,0.15))] blur-2xl"
          />

          {/* Círculo de luz suave no fundo da imagem */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />

          {/* Imagem principal */}
          <Image
            src="/perfil.jpeg"
            alt="Alessandro Santos"
            width={220}
            height={220}
            priority
            className="rounded-full border-[2px] border-cyan-400/70 shadow-[0_0_30px_rgba(0,255,255,0.1)] object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </motion.div>


        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-2"
        >
          Alessandro Santos
        </motion.h1>

        {/* 🔥 Slogan original restaurado */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-sm md:text-base mb-8 max-w-xs"
        >
          Ideias nascem na mente. Aqui, elas ganham vida.
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            className="bg-accent text-black hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <a href="/projetos">Ver Projetos</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-black transition-all duration-200"
          >
            <a href="mailto:contato@alessandrosantos.dev">Entrar em Contato</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Gradiente suave no rodapé */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
