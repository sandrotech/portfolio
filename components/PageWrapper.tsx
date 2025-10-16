"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function PageWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AnimatePresence mode="wait">
            <motion.main
                key={Math.random()}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="min-h-screen pt-20"
            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}
