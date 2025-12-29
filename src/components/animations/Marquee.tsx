"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  className = "",
  direction = "left",
  speed = "normal",
  pauseOnHover = false,
}: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap",
        pauseOnHover && "hover:[&>div]:pause",
        className
      )}
    >
      <div
        className="inline-flex"
        style={{
          animation: `marquee ${speedMap[speed]} linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <span className="inline-flex items-center">{children}</span>
        <span className="inline-flex items-center">{children}</span>
      </div>
    </div>
  );
}
