import type { Project } from "../../data/projects";

type Props = {
  project: Project;
};

function ProjectListItem({ project }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg hover:border-[#7C3AED] transition">
      {project.context && (
        <span className="text-xs uppercase tracking-widest text-slate-400">
          {project.context}
        </span>
      )}

      <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>

      {/* 🔥 descrição MÉDIA */}
      <p className="mt-3 text-sm text-slate-400">
        {project.description.summary}
      </p>

      {/* stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-[#020617] border border-slate-700 px-3 py-1 rounded-full text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* impacto */}
      {project.impact && (
        <p className="mt-4 text-xs text-[#22C55E]">{project.impact}</p>
      )}

      {/* links */}
      <div className="mt-6 flex gap-4 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-slate-400 hover:text-white"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="text-slate-400 hover:text-white"
          >
            Demo →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectListItem;
