import CaseCard from "../../components/cards/caseCard";
import { cases } from "../../data/cases";

function Resultados() {
  return (
    <section className="min-h-screen bg-[#0F172A] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">
            Resultados
          </span>

          <h1 className="mt-4 text-4xl font-semibold text-white">
            Aplicação prática de tecnologia em cenários reais
          </h1>

          <p className="mt-4 text-slate-400">
            Casos desenvolvidos com foco em resolução de problemas, organização
            de sistemas e análise de dados.
          </p>
        </div>

        {/* cases */}
        <div className="space-y-10">
          {cases.map((item) => (
            <CaseCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resultados;
