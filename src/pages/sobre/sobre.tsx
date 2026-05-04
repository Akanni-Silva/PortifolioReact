import React from "react";

function Sobre() {
  return (
    <section className="min-h-screen bg-[#0F172A] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* HEADER COM IMAGEM */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* FOTO */}
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 bg-[#7C3AED]/20 blur-2xl rounded-full" />

            <img
              src="https://i.postimg.cc/25nqgMYY/akanni029gmail-com-11zon-(1)-(1).jpg"
              alt="Akanni Silva"
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#1E293B] shadow-2xl"
            />
          </div>

          {/* TEXTO */}
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">
              Sobre mim
            </span>

            <h1 className="mt-4 text-4xl font-semibold text-white leading-tight">
              Construo soluções digitais com foco em eficiência, automação e
              impacto real
            </h1>

            <p className="mt-6 text-slate-400 leading-relaxed">
              Estudante de Análise e Desenvolvimento de Sistemas, com
              experiência prática em desenvolvimento fullstack e automação de
              processos. Minha trajetória combina tecnologia com visão de
              negócio, sempre buscando melhorar performance, organização e
              tomada de decisão.
            </p>
          </div>
        </div>

        {/* BLOCOS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* BLOCO 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white">
              Minha trajetória
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Inicio minha carreira atuando com atendimento e vendas, onde
              desenvolvo forte capacidade de comunicação, organização e foco em
              resultados. Ao longo dessa experiência, passo a estruturar
              processos e criar workflows que aumentam eficiência operacional e
              conversão.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Com a transição para tecnologia, começo a aplicar esses mesmos
              princípios no desenvolvimento de sistemas, criando aplicações com
              arquitetura organizada, integração de dados e automação de
              processos.
            </p>
          </div>

          {/* BLOCO 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white">
              Como eu trabalho
            </h2>

            <ul className="mt-4 space-y-4 text-slate-400">
              <li>
                Estruturo problemas antes de sair codando, buscando clareza no
                fluxo e nos dados.
              </li>
              <li>
                Desenvolvo aplicações organizadas, com separação de
                responsabilidades e foco em manutenção.
              </li>
              <li>
                Conecto tecnologia com impacto real (performance, automação e
                UX).
              </li>
            </ul>
          </div>

          {/* BLOCO 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white">
              Stack principal
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "NestJS",
                "Node.js",
                "MySQL",
                "TypeORM",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-[#020617] px-4 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* BLOCO 4 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white">Objetivo atual</h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Busco oportunidades de estágio onde eu possa evoluir tecnicamente
              e contribuir com soluções práticas, especialmente em automação,
              dados e melhoria de processos.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Interesse em atuar próximo a operações, usando tecnologia para
              gerar eficiência e escala.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-slate-700/60 bg-[#111827]/90 p-10 text-center">
          <h3 className="text-2xl text-white">Vamos construir algo juntos</h3>

          <p className="mt-4 text-slate-400">
            Aberto a oportunidades de estágio e projetos em tecnologia.
          </p>

          <a
            href="contato"
            className="mt-8 inline-flex rounded-full bg-[#7C3AED] px-8 py-3 text-white font-semibold hover:scale-105 transition"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
