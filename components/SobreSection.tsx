export default function SobreSection() {
    const itens = [
        {
            emoji: "🎓",
            titulo: "Formação",
            texto:
                "Graduado em Análise de Sistemas (Estácio), MBA em IA & Analytics (Cruzeiro do Sul), Técnico em Redes (EEEP Ícaro).",
        },
        {
            emoji: "💼",
            titulo: "Experiência",
            texto:
                "Atuação como Analista de Sistemas em hospitais, desenvolvendo APIs, sistemas e liderando equipes.",
        },
        {
            emoji: "🛠️",
            titulo: "Stack",
            texto:
                "Python, Django, React, APIs REST, Docker, GitHub Actions, Zabbix, Linux, PostgreSQL, Oracle Cloud, e mais.",
        },
        {
            emoji: "🚀",
            titulo: "Destaques",
            texto:
                "Liderança técnica, automações, suporte estratégico e foco em performance e valor real.",
        },
    ]

    return (
        <section id="sobre" className="py-16 bg-neutral-950 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-12 bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                    Minha Jornada
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {itens.map((i, index) => (
                        <div
                            key={index}
                            className="border border-neutral-800 p-6 rounded-xl bg-black/50 hover:border-accent transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {i.emoji} {i.titulo}
                            </h3>
                            <p className="text-gray-300">{i.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
