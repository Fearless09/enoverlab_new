import { cn } from "@/utilities/utils";
import { LoaderCircle } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "transition-300 group relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        // Variants
        {
          "bg-primary-400 hover:bg-primary-300 focus-visible:ring-primary-300 text-white":
            variant === "primary",
          "bg-secondary-200 text-primary-50 shadow-sm hover:bg-white hover:shadow-lg focus-visible:ring-white":
            variant === "secondary",
          "border-primary-400 text-primary-400 hover:bg-primary-300 focus-visible:ring-primary-300 border-2 hover:text-white":
            variant === "outline",
          "text-[#646464] hover:bg-gray-100 focus-visible:ring-gray-300":
            variant === "ghost",
        },
        // Sizes
        {
          "min-h-9 px-3 text-sm": size === "sm",
          "min-h-12 px-6 text-base": size === "md",
          "min-h-14 px-8 text-lg": size === "lg",
        },
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <LoaderCircle className="animate-spin" /> : children}
    </button>
  );
}
