export default function Footer() {
    return (
        <footer className="text-center py-6 border-t border-neutral-800 bg-black text-gray-400">
            <div className="flex justify-center gap-6 mb-3">
                <a
                    href="https://github.com/sandrotech"
                    target="_blank"
                    className="hover:text-accent"
                >
                    <i className="bi bi-github text-xl" />
                </a>
                <a
                    href="https://www.linkedin.com/in/alessandro-barbosa/"
                    target="_blank"
                    className="hover:text-accent"
                >
                    <i className="bi bi-linkedin text-xl" />
                </a>
                <a
                    href="https://wa.me/5585988102690"
                    target="_blank"
                    className="hover:text-accent"
                >
                    <i className="bi bi-whatsapp text-xl" />
                </a>
            </div>
            <p>&copy; 2025 Alessandro. Todos os direitos reservados.</p>
        </footer>
    );
}
