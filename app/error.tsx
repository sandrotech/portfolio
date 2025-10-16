"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white">
            <h1 className="text-4xl font-bold text-accent mb-3">Erro Interno</h1>
            <p className="text-gray-400 mb-6">
                Ocorreu um problema no servidor. Já estamos verificando!
            </p>
            <Button asChild>
                <Link href="/" className="text-cyan-400">Voltar para Home</Link>
            </Button>
        </div>
    )
}
