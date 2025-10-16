import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
            <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
            <p className="text-gray-400 mb-8">
                Página não encontrada ou foi movida.
            </p>

            <Link
                href="/"
                className="px-5 py-2 rounded-md bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 transition-all duration-200"
            >
                Voltar para Home
            </Link>
        </div>
    );
}
