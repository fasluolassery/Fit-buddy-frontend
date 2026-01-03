import React from "react";

const FluidBackground: React.FC = () => {
  return (
    <div className="bg-surface-main fixed inset-0 -z-10 overflow-hidden">
      {/* Primary Fluid Glow */}
      <div className="bg-brand-primary/10 animate-slow-drift absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full blur-[120px]" />

      {/* Secondary Accent Glow */}
      <div
        className="bg-brand-primary/5 animate-slow-drift absolute -right-[5%] top-[20%] h-[35%] w-[35%] rounded-full blur-[100px]"
        style={{ animationDelay: "-5s", animationDirection: "reverse" }}
      />

      {/* Deep Bottom Glow */}
      <div
        className="bg-brand-primary/5 animate-slow-drift absolute -bottom-[20%] left-[20%] h-[50%] w-[50%] rounded-full blur-[150px]"
        style={{ animationDelay: "-10s" }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};

export default FluidBackground;
