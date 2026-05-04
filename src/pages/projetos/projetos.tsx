import ProjectListItem from "../../components/cards/projectCard";
import { projects } from "../../data/projects";

function Projetos() {
  return (
    <section className="min-h-screen bg-[#0F172A] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">
            Portfólio
          </span>

          <h1 className="mt-4 text-4xl font-semibold text-white">
            Projetos que demonstram aplicação prática de tecnologia
          </h1>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Projetos com foco em backend, dados e arquitetura.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
