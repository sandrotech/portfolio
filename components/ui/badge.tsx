import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export function Badge({ className, ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full border border-transparent",
                className
            )}
            {...props}
        />
    );
}
