"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { Download, Upload, Moon, Sun } from "lucide-react";

export default function ConfigPage() {
  const { theme, setTheme } = useTheme();
  const [memorias, setMemorias] = useState<any[]>([]);

  useEffect(() => {
    const dados = localStorage.getItem("memorias");
    if (dados) setMemorias(JSON.parse(dados));
  }, []);

  const exportar = () => {
    const blob = new Blob([JSON.stringify(memorias, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "memorias_backup.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const conteudo = evt.target?.result as string;
      try {
        const json = JSON.parse(conteudo);
        setMemorias(json);
        localStorage.setItem("memorias", JSON.stringify(json));
      } catch {
        alert("Arquivo inválido.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <section className="min-h-screen bg-neutral-950 text-white py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-accent"
        >
          Configurações
        </motion.h1>

        <div className="space-y-10">
          {/* Tema */}
          <div className="flex items-center justify-between p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold text-accent mb-1">Tema</h3>
              <p className="text-gray-400 text-sm">
                Escolha entre modo claro ou escuro.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="text-gray-400 h-5 w-5" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(val) => setTheme(val ? "dark" : "light")}
              />
              <Moon className="text-gray-400 h-5 w-5" />
            </div>
          </div>

          {/* Exportar */}
          <div className="flex items-center justify-between p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold text-accent mb-1">
                Backup Local
              </h3>
              <p className="text-gray-400 text-sm">
                Exporte ou importe suas memórias técnicas em JSON.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={exportar}
                className="bg-accent text-black hover:opacity-90"
              >
                <Download className="mr-2 h-4 w-4" /> Exportar
              </Button>
              <Label
                htmlFor="importar"
                className="cursor-pointer bg-transparent border border-accent text-accent px-4 py-2 rounded-md hover:bg-accent hover:text-black transition flex items-center gap-2"
              >
                <Upload className="h-4 w-4" /> Importar
              </Label>
              <input
                id="importar"
                type="file"
                accept="application/json"
                className="hidden"
                onChange={importar}
              />
            </div>
          </div>

          {/* Futuro */}
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
            <h3 className="text-lg font-semibold text-accent mb-1">
              Integrações futuras
            </h3>
            <p className="text-gray-400 text-sm">
              Aqui serão adicionadas opções para login, sincronização com API
              Django e preferências personalizadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
