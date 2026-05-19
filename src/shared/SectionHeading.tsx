import React from "react";

interface SectionHeadingProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  description: string;
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <span className="text-[#f9c03d] font-black tracking-widest uppercase text-xs mb-4 inline-block">
        {badge}
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
        {title}
      </h2>
      <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};
