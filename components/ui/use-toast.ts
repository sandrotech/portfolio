"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ToastData = {
    id: number;
    title: string;
    description?: string;
};

type ToastContextType = {
    toasts: ToastData[];
    toast: (data: Omit<ToastData, "id">) => void;
};

const ToastContext = createContext<ToastContextType>({
    toasts: [],
    toast: () => { },
});

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const toast = (data: Omit<ToastData, "id">) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { ...data, id }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3500);
    };

    return (
        <ToastContext.Provider value= {{ toasts, toast }
}>
    { children }
    </ToastContext.Provider>
  );
}

export function useToast() {
    return useContext(ToastContext);
}
