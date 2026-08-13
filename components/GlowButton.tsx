import React from 'react';

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const GlowButton = ({ href, children, variant = 'primary' }: GlowButtonProps) => {
  const isPrimary = variant === 'primary';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-0.5 ${
        isPrimary
          ? 'border border-cyan-500/30 bg-slate-900/60 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]'
          : 'border border-slate-700/50 bg-slate-800/40 text-slate-300 hover:border-slate-500 hover:bg-slate-800/80 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
      }`}
    >
      <span>{children}</span>
      <span class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
};