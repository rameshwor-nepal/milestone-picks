import { cn } from "@/utils/cn/utils";
import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "destructive" | "outline";
}

function getBadgeClasses(variant: BadgeProps["variant"]) {
    const baseClasses =
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

    const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
        default:
            "border-transparent bg-gold text-white hover:bg-gold/80",
        secondary:
            "border-transparent bg-green-500 text-white hover:bg-green-500/80",
        destructive:
            "border-transparent bg-red-600 text-white hover:bg-red-600/80",
        outline: "text-gold border-[1px] border-gold",
    };

    return cn(baseClasses, variants[variant ?? "default"]);
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div className={cn(getBadgeClasses(variant), className)} {...props} />
    );
}

export { Badge };
