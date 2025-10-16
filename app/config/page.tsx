"use client";

import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ConfiguracoesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#101010] text-white px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-cyan-400 text-center">
          Configurações
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-8 shadow-[0_0_25px_rgba(0,255,255,0.05)] space-y-6">
          <div className="flex items-center justify-between">
            <Label className="text-gray-300">Modo escuro</Label>
            <Switch checked />
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-gray-300">Animações</Label>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-gray-300">Som de interface</Label>
            <Switch />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
