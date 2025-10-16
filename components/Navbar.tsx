"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderGit2, Brain, Settings } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projetos", href: "/projetos", icon: FolderGit2 },
    { name: "Memória", href: "/memoria", icon: Brain },
    { name: "Configurações", href: "/configuracoes", icon: Settings },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    // Detectar se é mobile
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <AnimatePresence>
            <motion.nav
                key={isMobile ? "mobile" : "desktop"}
                initial={{ opacity: 0, y: isMobile ? 50 : -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: isMobile ? 50 : -50 }}
                transition={{ duration: 0.4 }}
                className={`fixed z-50 flex ${isMobile
                        ? "bottom-0 left-0 right-0 flex-row justify-around items-center h-[70px] bg-black/70 backdrop-blur-md border-t border-white/10"
                        : "top-1/2 -translate-y-1/2 left-6 flex-col gap-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-3 shadow-[0_0_25px_rgba(0,255,255,0.05)]"
                    }`}
            >
                {items.map(({ name, href, icon: Icon }) => {
                    const active = pathname === href;
                    return (
                        <Link key={href} href={href} className="relative group">
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                className={`p-3 rounded-xl transition-all duration-200 ${active
                                        ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.3)]"
                                        : "text-gray-400 hover:text-white hover:bg-cyan-500/10"
                                    }`}
                            >
                                <Icon className="w-5 h-5 md:w-6 md:h-6" />
                            </motion.div>
                            {!isMobile && (
                                <span className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-xs text-cyan-300 bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm transition">
                                    {name}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </motion.nav>
        </AnimatePresence>
    );
}
