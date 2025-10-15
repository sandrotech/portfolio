import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white">
            <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
            <p className="text-gray-400 mb-6">Ops! A página que você procura não existe.</p>
            <Button asChild>
                <a href="/">Voltar para Home</a>
            </Button>
        </div>
    )
}
