"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#101010] px-4">
      {/* Fundo com brilho leve */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,191,166,0.05),_transparent_70%)] blur-3xl" />

      {/* Card central com efeito glass minimalista */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-md w-full"
      >
        {/* Foto com leve destaque */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/30 via-transparent to-transparent blur-md" />
          <Image
            src="/perfil.jpeg"
            alt="Alessandro Santos"
            width={180}
            height={180}
            priority
            className="rounded-full border-2 border-accent object-cover shadow-lg"
          />
        </div>

        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white mb-2"
        >
          ALESSANDRO SANTOS
        </motion.h1>

        {/* Frase */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-sm md:text-base max-w-xs mb-6"
        >
          Ideias nascem na mente. Aqui, elas ganham vida.
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button
            asChild
            className="bg-accent text-black hover:opacity-90 text-sm md:text-base"
          >
            <a href="/projetos">Ver Projetos</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-black text-sm md:text-base"
          >
            <a href="/memoria">Memória Técnica</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
