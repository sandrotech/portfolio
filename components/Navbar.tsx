"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const nav = [
    { name: "Home", href: "/" },
    { name: "Projetos", href: "/projetos" },
    { name: "Memória Técnica", href: "/memoria" },
    { name: "Configurações", href: "/config" },
];

export default function Navbar() {
    const path = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-neutral-800 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 h-16">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-widest text-accent"
                >
                    AS
                </Link>

                <ul className="hidden md:flex space-x-8 text-sm">
                    {nav.map((i) => (
                        <li key={i.name}>
                            <Link
                                href={i.href}
                                className={`transition ${path === i.href
                                        ? "text-accent"
                                        : "text-gray-300 hover:text-accent"
                                    }`}
                            >
                                {i.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <button className="md:hidden text-gray-200">
                            <Menu />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-black border-neutral-800">
                        <ul className="flex flex-col mt-12 space-y-6 text-lg text-gray-100">
                            {nav.map((i) => (
                                <li key={i.name}>
                                    <Link
                                        href={i.href}
                                        onClick={() => setOpen(false)}
                                        className={`${path === i.href
                                                ? "text-accent"
                                                : "text-gray-300 hover:text-accent"
                                            }`}
                                    >
                                        {i.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
