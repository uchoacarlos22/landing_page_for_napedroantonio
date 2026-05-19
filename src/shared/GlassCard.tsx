import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = true,
}) => {
  return (
    <div
      className={`bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-10 ${
        hoverEffect
          ? "hover:border-[#f9c03d]/40 hover:bg-white/[0.05] transition-all duration-300"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
