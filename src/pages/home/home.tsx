import ProjectCardCompact from "../../components/cards/projectCardCompact";
import { projects } from "../../data/projects";

function Home() {
  return (
    <main className="bg-[#0F172A]">
      <section id="home" className="relative overflow-hidden">
        {/* fundo gradiant */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#020617] to-[#0F172A]" />

        {/* efeito de brilho */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#7C3AED]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#22C55E]/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
            {/* texto */}
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-slate-700/70 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#22C55E]">
                Portfólio profissional
              </span>

              <h1 className="mt-8 text-4xl sm:text-6xl font-semibold leading-tight text-[#E5E7EB]">
                Construo sistemas e automações que{" "}
                <span className="text-[#7C3AED]">resolvem problemas reais</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Desenvolvedor em formação com foco em aplicações fullstack,
                organização de dados e automação de processos. Experiência
                prática com React, TypeScript e NestJS aplicada a projetos reais
                e estudos orientados a impacto.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#7C3AED]/30 hover:scale-105 transition"
                >
                  Falar comigo
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-8 py-3 text-sm font-semibold text-[#E5E7EB] hover:border-[#7C3AED] hover:text-[#7C3AED] transition"
                >
                  Ver projetos
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              {/* Glow atrás da imagem */}
              <div className="absolute inset-0 bg-[#7C3AED]/20 blur-2xl rounded-full" />

              <img
                src="https://i.postimg.cc/25nqgMYY/akanni029gmail-com-11zon-(1)-(1).jpg"
                alt="Akanni Silva"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#1E293B] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="relative container mx-auto px-6 py-24">
        <div className="grid gap-8 xl:grid-cols-[1.9fr_1fr]">
          {/* BLOCO PRINCIPAL */}
          <div className="rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-[#7C3AED]">
              Experiência e impacto
            </span>

            <h2 className="mt-6 text-3xl font-semibold text-[#E5E7EB]">
              Tecnologia aplicada com foco em eficiência real
            </h2>

            <p className="mt-4 text-slate-300 max-w-2xl">
              Experiência prática conectando desenvolvimento, automação e
              análise de dados para gerar melhoria de processos e resultados
              mensuráveis.
            </p>

            {/* GRID */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Automação",
                  value: "+80%",
                  desc: "Performance em contatos (Multicréditos)",
                },
                {
                  title: "Conversão",
                  value: "+30%",
                  desc: "Aumento em fechamento de vendas",
                },
                {
                  title: "Engajamento",
                  value: "+73%",
                  desc: "Tráfego pago otimizado",
                },
                {
                  title: "Vendas",
                  value: "+100%",
                  desc: "Crescimento mensal e-commerce",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-[#0F172A]/60 p-6 transition hover:border-[#7C3AED] hover:-translate-y-1"
                >
                  <p className="text-xs uppercase text-slate-400 tracking-wider">
                    {item.title}
                  </p>

                  <p className="mt-3 text-3xl font-semibold text-[#22C55E]">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300 transition">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* COMPETÊNCIAS */}
          <div className="rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-xl">
            <span className="text-xs uppercase tracking-[0.4em] text-[#7C3AED]">
              Competências
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-[#E5E7EB]">
              Onde gero valor
            </h3>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Fullstack",
                  desc: "React, TypeScript, NestJS e APIs REST estruturadas",
                },
                {
                  title: "Dados & Processos",
                  desc: "Modelagem, validação e organização de fluxos",
                },
                {
                  title: "Automação",
                  desc: "Workflows para ganho de escala e eficiência",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-white/10 bg-[#0F172A]/60 hover:border-[#7C3AED] transition"
                >
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#7C3AED]">
            Projetos
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white">
            Construídos para resolver problemas reais
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide py-5">
          {projects.map((project) => (
            <ProjectCardCompact key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 pb-32">
        <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111827] to-[#020617] p-12 text-center overflow-hidden">
          {/* glow */}
          <div className="absolute inset-0 bg-[#7C3AED]/10 blur-3xl opacity-30" />

          <p className="text-xs uppercase tracking-[0.4em] text-[#7C3AED]">
            Contato
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white">
            Vamos construir algo juntos
          </h2>

          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Buscando oportunidade de estágio para aplicar desenvolvimento,
            automação e análise de dados em problemas reais.
          </p>

          <a
            href="mailto:seu-email@exemplo.com"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-[#7C3AED]/30 hover:scale-105 transition"
          >
            Entrar em contato
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
