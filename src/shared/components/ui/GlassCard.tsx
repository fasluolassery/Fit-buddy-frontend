import React, { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-[32px] transition-all duration-500 ${
        hover ? "hover:border-brand-primary/30 hover:bg-zinc-900/60" : ""
      } ${className}`}
    >
      {/* Luxury Gradient Accent */}
      <div className="via-brand-primary/20 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

      {/* Subtle Inner Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
