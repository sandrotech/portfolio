"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Trash2, Edit3, PlusCircle, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Registro = {
  id: number;
  titulo: string;
  categoria: string;
  conteudo: string;
};

export default function MemoriaPage() {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [busca, setBusca] = useState("");
  const [novo, setNovo] = useState(false);
  const [editando, setEditando] = useState<Registro | null>(null);
  const [form, setForm] = useState({ titulo: "", categoria: "", conteudo: "" });
  const { toast } = useToast();

  useEffect(() => {
    const dados = localStorage.getItem("memorias");
    if (dados) setRegistros(JSON.parse(dados));
  }, []);

  useEffect(() => {
    localStorage.setItem("memorias", JSON.stringify(registros));
  }, [registros]);

  const handleSalvar = () => {
    if (!form.titulo.trim()) return;

    if (editando) {
      setRegistros((prev) =>
        prev.map((r) => (r.id === editando.id ? { ...form, id: r.id } : r))
      );
      toast({
        title: "Registro atualizado!",
        description: "As alterações foram salvas com sucesso.",
      });
      setEditando(null);
    } else {
      setRegistros((prev) => [
        ...prev,
        {
          id: Date.now(),
          titulo: form.titulo,
          categoria: form.categoria,
          conteudo: form.conteudo,
        },
      ]);
      toast({
        title: "Registro salvo!",
        description: "Sua memória técnica foi atualizada com sucesso.",
      });
    }

    setForm({ titulo: "", categoria: "", conteudo: "" });
    setNovo(false);
  };

  const handleEditar = (r: Registro) => {
    setEditando(r);
    setForm(r);
    setNovo(true);
  };

  const handleExcluir = (id: number) => {
    setRegistros((prev) => prev.filter((r) => r.id !== id));
    toast({
      title: "Registro removido",
      description: "O item foi deletado da memória.",
    });
  };

  const filtrados = registros.filter(
    (r) =>
      r.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      r.categoria.toLowerCase().includes(busca.toLowerCase()) ||
      r.conteudo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-neutral-950 text-white py-20 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10 text-accent"
        >
          Memória Técnica
        </motion.h1>

        {/* Barra de busca + botão novo */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <Input
            placeholder="Buscar por título, categoria ou conteúdo..."
            className="w-full sm:w-1/2 bg-neutral-900 border-neutral-800 text-gray-200"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <Dialog open={novo} onOpenChange={setNovo}>
            <DialogTrigger asChild>
              <Button className="bg-accent text-black hover:opacity-90">
                <PlusCircle className="mr-2 h-4 w-4" /> Novo Registro
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-neutral-900 border-neutral-800 text-white max-w-lg">
              <DialogHeader>
                <DialogTitle>
                  {editando ? "Editar Registro" : "Novo Registro"}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-3 mt-4">
                <Input
                  placeholder="Título"
                  className="bg-neutral-950 border-neutral-800 text-gray-100"
                  value={form.titulo}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, titulo: e.target.value }))
                  }
                />
                <Input
                  placeholder="Categoria (ex: Docker, Django, Linux...)"
                  className="bg-neutral-950 border-neutral-800 text-gray-100"
                  value={form.categoria}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, categoria: e.target.value }))
                  }
                />
                <Textarea
                  placeholder="Conteúdo, comandos ou notas..."
                  className="bg-neutral-950 border-neutral-800 text-gray-100 h-40"
                  value={form.conteudo}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, conteudo: e.target.value }))
                  }
                />
                <div className="flex justify-end">
                  <Button onClick={handleSalvar} className="bg-accent text-black">
                    <Save className="mr-2 h-4 w-4" />
                    Salvar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Listagem */}
        {filtrados.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">
            Nenhum registro encontrado.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtrados.map((r) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="bg-neutral-900/70 border-neutral-800 hover:border-accent transition h-full flex flex-col group">
                  <CardHeader>
                    <h2 className="text-lg font-semibold text-accent mb-1 group-hover:text-white transition">
                      {r.titulo}
                    </h2>
                    <p className="text-gray-400 text-sm">{r.categoria}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono bg-neutral-950 p-3 rounded-lg border border-neutral-800 group-hover:border-accent/30 transition">
                      {r.conteudo}
                    </pre>
                  </CardContent>
                  <div className="flex justify-end gap-2 p-4 border-t border-neutral-800">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-neutral-700 text-gray-300 hover:text-accent"
                      onClick={() => handleEditar(r)}
                    >
                      <Edit3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-neutral-700 text-gray-300 hover:text-red-500"
                      onClick={() => handleExcluir(r.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
