// components/ProjectCard.tsx
export interface ProjectProps {
  title: string;
  subtitle?: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  metric,
  metricLabel,
  tags,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-cyan-500/40 transition-colors duration-200">
      <div>
        {/* Header & Subtitle */}
        <div className="flex justify-between items-start gap-4">
          <div>
            {subtitle && (
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-1">
                {subtitle}
              </span>
            )}
            <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
          </div>

          {/* Key Metric Callout (e.g. Uptime, Latency) */}
          {metric && (
            <div className="text-right shrink-0">
              <span className="text-xl md:text-2xl font-black font-mono text-cyan-300">
                {metric}
              </span>
              {metricLabel && (
                <span className="block text-[10px] uppercase font-mono text-gray-400 tracking-wider">
                  {metricLabel}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Project Description */}
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* External Links */}
      {(liveUrl || githubUrl) && (
        <div className="mt-6 pt-4 border-t border-white/5 flex gap-3 text-xs font-mono">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
            >
              Live Demo ↗
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}