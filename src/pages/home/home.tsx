import React from "react";

function Home() {
  return (
    <main className="bg-[#0F172A]">
      <section id="home" className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-700/70 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E]">
              Portfólio profissional
            </span>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-[#E5E7EB] sm:text-6xl">
              Crio experiências digitais memoráveis para marcas que querem
              crescer.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Sou um desenvolvedor front-end com foco em design limpo,
              usabilidade e resultados comerciais. Meu trabalho combina estética
              profissional com interfaces rápidas e acessíveis.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1E3A8A] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1E3A8A]/20 transition hover:bg-[#223f9f]"
              >
                Vamos conversar
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-7 py-3 text-sm font-semibold text-[#E5E7EB] transition hover:border-[#7C3AED] hover:text-[#7C3AED]"
              >
                Ver projetos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="container mx-auto px-6 py-16">
        <div className="grid gap-8 xl:grid-cols-[1.9fr_1fr]">
          <div className="rounded-[2rem] bg-[#111827]/90 p-8 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.8)] sm:p-10">
            <span className="text-sm uppercase tracking-[0.35em] text-[#7C3AED]">
              Métricas e resultados
            </span>
            <h2 className="mt-5 text-3xl font-semibold text-[#E5E7EB]">
              Entregas orientadas à qualidade, velocidade e impacto.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Projetos com foco em geração de valor, sempre respeitando prazos e
              garantindo uma experiência clara e elegante para o usuário.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#0F172A] border border-slate-700/60 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Satisfação
                </p>
                <p className="mt-4 text-3xl font-semibold text-[#22C55E]">
                  95%
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Clientes com aprovação final e entrega no prazo.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[#0F172A] border border-slate-700/60 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Performance
                </p>
                <p className="mt-4 text-3xl font-semibold text-[#22C55E]">
                  +120%
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Crescimento médio de engajamento em projetos entregues.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[#0F172A] border border-slate-700/60 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Projetos
                </p>
                <p className="mt-4 text-3xl font-semibold text-[#22C55E]">
                  30+
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Projetos desenvolvidos com design responsivo e identidade
                  forte.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[#0F172A] border border-slate-700/60 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Eficiência
                </p>
                <p className="mt-4 text-3xl font-semibold text-[#22C55E]">
                  100%
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Compromisso com entregas em tempo e suporte profissional.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#111827]/90 p-8 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.8)] sm:p-10">
            <span className="text-sm uppercase tracking-[0.35em] text-[#7C3AED]">
              Serviços
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-[#E5E7EB]">
              Como posso ajudar seu negócio
            </h3>
            <ul className="mt-8 space-y-4 text-slate-300">
              <li className="rounded-3xl border border-slate-700/60 bg-[#0F172A]/60 p-5">
                <p className="font-semibold text-[#E5E7EB]">
                  Design de interface
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Layouts claros, modernos e alinhados à identidade visual da
                  sua marca.
                </p>
              </li>
              <li className="rounded-3xl border border-slate-700/60 bg-[#0F172A]/60 p-5">
                <p className="font-semibold text-[#E5E7EB]">
                  Desenvolvimento front-end
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Sites rápidos e responsivos com foco em experiência e
                  conversão.
                </p>
              </li>
              <li className="rounded-3xl border border-slate-700/60 bg-[#0F172A]/60 p-5">
                <p className="font-semibold text-[#E5E7EB]">
                  Consultoria digital
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Estratégias para posicionar sua presença online com
                  credibilidade e impacto.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7C3AED]">
            Projetos recentes
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#E5E7EB]">
            Trabalhos pensados para resultados reais
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-slate-700/70 bg-[#111827]/90 p-6 transition hover:-translate-y-1 hover:border-[#7C3AED]">
            <span className="inline-flex rounded-full bg-[#7C3AED]/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#7C3AED]">
              E-commerce
            </span>
            <h3 className="mt-5 text-xl font-semibold text-[#E5E7EB]">
              Loja de moda premium
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Interface limpa, busca rápida e checkout otimizado para maior
              conversão.
            </p>
          </article>
          <article className="rounded-[2rem] border border-slate-700/70 bg-[#111827]/90 p-6 transition hover:-translate-y-1 hover:border-[#7C3AED]">
            <span className="inline-flex rounded-full bg-[#7C3AED]/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#7C3AED]">
              Landing page
            </span>
            <h3 className="mt-5 text-xl font-semibold text-[#E5E7EB]">
              Apresentação corporativa
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Experiência elegante e direta para captar leads qualificados.
            </p>
          </article>
          <article className="rounded-[2rem] border border-slate-700/70 bg-[#111827]/90 p-6 transition hover:-translate-y-1 hover:border-[#7C3AED]">
            <span className="inline-flex rounded-full bg-[#7C3AED]/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#7C3AED]">
              Portfólio
            </span>
            <h3 className="mt-5 text-xl font-semibold text-[#E5E7EB]">
              Identidade digital
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Sites institucionais com visual refinado e navegação intuitiva.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 pb-24">
        <div className="rounded-[2rem] border border-slate-700/60 bg-[#111827]/90 p-10 text-center shadow-[0_35px_90px_-45px_rgba(15,23,42,0.8)]">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7C3AED]">
            Vamos trabalhar juntos
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#E5E7EB]">
            Seu próximo projeto merece um site com personalidade.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-7 text-slate-300">
            Estou pronto para ajudar sua marca a se destacar com um portfólio ou
            site corporativo forte, rápido e elegante.
          </p>
          <a
            href="mailto:seu-email@exemplo.com"
            className="mt-8 inline-flex rounded-full bg-[#1E3A8A] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#223f9f]"
          >
            Enviar mensagem
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
