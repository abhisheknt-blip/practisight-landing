import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ size = "md", variant = "light", className }: LogoProps) {
  const sizeConfig = {
    sm: {
      icon: "w-8 h-8",
      text: "text-xl",
      rounded: "rounded-lg",
      iconSize: 20,
    },
    md: {
      icon: "w-10 h-10",
      text: "text-2xl",
      rounded: "rounded-lg",
      iconSize: 24,
    },
    lg: {
      icon: "w-14 h-14",
      text: "text-4xl",
      rounded: "rounded-xl",
      iconSize: 32,
    },
  };

  const config = sizeConfig[size];
  const practiTextClass = variant === "light" ? "text-gray-900" : "text-white";
  const sightTextClass =
    variant === "light" ? "text-blue-600" : "text-blue-400";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex items-center justify-center bg-blue-600",
          config.icon,
          config.rounded
        )}
      >
        <TrendingUp
          className="text-white"
          size={config.iconSize}
          strokeWidth={2.5}
        />
      </div>
      <span className={cn("font-bold", config.text)}>
        <span className={practiTextClass}>Practi</span>
        <span className={sightTextClass}>Sight</span>
      </span>
    </div>
  );
}
