"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save, Trash2 } from "lucide-react";

type Registro = {
  id: number;
  titulo: string;
  conteudo: string;
};

export default function MemoriaPage() {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [novo, setNovo] = useState({ titulo: "", conteudo: "" });

  useEffect(() => {
    const salvos = localStorage.getItem("memoria");
    if (salvos) setRegistros(JSON.parse(salvos));
  }, []);

  useEffect(() => {
    localStorage.setItem("memoria", JSON.stringify(registros));
  }, [registros]);

  const handleSalvar = () => {
    if (!novo.titulo) return;
    setRegistros([...registros, { ...novo, id: Date.now() }]);
    setNovo({ titulo: "", conteudo: "" });
  };

  const handleExcluir = (id: number) =>
    setRegistros(registros.filter((r) => r.id !== id));

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#101010] text-white px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-cyan-400 text-center">
          Memória Técnica
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Input
            placeholder="Título"
            className="bg-white/5 border-white/10 text-white"
            value={novo.titulo}
            onChange={(e) => setNovo({ ...novo, titulo: e.target.value })}
          />
          <Button onClick={handleSalvar} className="bg-cyan-500 text-black">
            <Save className="w-4 h-4 mr-1" /> Salvar
          </Button>
        </div>

        <Textarea
          placeholder="Conteúdo / comandos / anotações..."
          className="bg-white/5 border-white/10 text-gray-200 mb-8 min-h-[120px]"
          value={novo.conteudo}
          onChange={(e) => setNovo({ ...novo, conteudo: e.target.value })}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {registros.map((r) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.05)] group">
                <CardContent className="p-5">
                  <h2 className="text-lg font-semibold mb-2 text-cyan-300">
                    {r.titulo}
                  </h2>
                  <p className="text-gray-400 text-sm whitespace-pre-wrap mb-4">
                    {r.conteudo}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleExcluir(r.id)}
                    className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
                  >
                    <Trash2 className="w-4 h-4 mr-1" /> Excluir
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
