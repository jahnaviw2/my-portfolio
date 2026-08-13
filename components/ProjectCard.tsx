import React from 'react';
import { GlowButton } from './GlowButton';

interface ProjectCardProps {
  title: string;
  subtitle?: string; // Added optional prop
  description: string;
  metric?: string;
  metricLabel?: string; // Added optional prop
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  metric,
  metricLabel,
  tags,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-lg transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
      {/* Header & Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-slate-100 transition-colors group-hover:text-cyan-300">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            {subtitle}
          </p>
        )}

        <p className="text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {(metric || metricLabel) && (
          <div className="mt-2 inline-block rounded-lg border border-emerald-500/20 bg-emerald-950/30 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-sm">
            {metric} {metricLabel}
          </div>
        )}
      </div>

      {/* Footer: Badges & Glow Buttons */}
      <div className="mt-6 space-y-4">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3 py-1 text-xs text-cyan-300 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          {liveUrl && (
            <GlowButton href={liveUrl} variant="primary">
              Live Demo
            </GlowButton>
          )}
          <GlowButton href={githubUrl} variant={liveUrl ? 'secondary' : 'primary'}>
            GitHub Code
          </GlowButton>
        </div>
      </div>
    </div>
  );
};