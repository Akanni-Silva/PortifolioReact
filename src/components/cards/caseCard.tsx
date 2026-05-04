import type { Case } from "../../data/cases";

type Props = {
  data: Case;
};

function CaseCard({ data }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:border-[#7C3AED]">
      
      {/* título */}
      <h2 className="text-2xl font-semibold text-white">
        {data.title}
      </h2>

      <p className="mt-2 text-sm text-[#7C3AED]">
        {data.type}
      </p>

      {/* conteúdo */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">

        {/* problema */}
        <div>
          <h4 className="text-sm font-semibold text-white">Problema</h4>
          <p className="mt-2 text-sm text-slate-400">
            {data.problem}
          </p>
        </div>

        {/* ações */}
        <div>
          <h4 className="text-sm font-semibold text-white">Ação</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-400">
            {data.actions.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* resultados */}
        <div>
          <h4 className="text-sm font-semibold text-white">Resultado</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-400">
            {data.results.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* stack */}
      {data.stack && (
        <div className="mt-6 flex flex-wrap gap-2">
          {data.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-[#020617] border border-slate-700 px-3 py-1 rounded-full text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default CaseCard;