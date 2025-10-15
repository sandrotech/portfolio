"use client";

import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
    const { toasts } = useToast();
    return (
        <div className="fixed top-4 right-4 z-[1000] flex flex-col gap-2">
            {toasts.map(({ id, title, description }) => (
                <div
                    key={id}
                    className="bg-neutral-900 border border-accent/40 rounded-lg px-4 py-3 text-sm text-white shadow-lg animate-in fade-in slide-in-from-right"
                >
                    <p className="font-medium text-accent">{title}</p>
                    {description && <p className="text-gray-300 mt-1">{description}</p>}
                </div>
            ))}
        </div>
    );
}
