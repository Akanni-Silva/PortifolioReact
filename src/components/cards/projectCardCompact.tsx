// components/cards/ProjectCardCompact.tsx

import type { Project } from "../../models/projectsModel";

type Props = {
  project: Project;
};

export default function ProjectCardCompact({ project }: Props) {
  return (
    <div className="min-w-[280px] max-w-[280px] group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:-translate-y-2 hover:border-[#7C3AED]">
      <span className="text-xs text-[#7C3AED]">{project.context}</span>

      <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>

      <p className="mt-3 text-sm text-slate-400 group-hover:text-slate-300">
        {project.description.card}
      </p>

      {/* glow */}
      <div className="absolute inset-0 rounded-2xl bg-[#7C3AED]/0 group-hover:bg-[#7C3AED]/5 transition" />
    </div>
  );
}
