import { GithubIcon, LinkedinIcon } from "@sanity/icons";
import { Mail } from "lucide-react";

function Contato() {
  return (
    <section className="min-h-screen bg-[#0F172A] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">
            Contato
          </span>

          <h1 className="mt-4 text-4xl font-semibold text-white">
            Vamos construir algo juntos
          </h1>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Estou aberto a oportunidades de estágio e projetos que envolvam
            desenvolvimento backend, dados e arquitetura de sistemas.
          </p>
        </div>

        {/* CARDS DE CONTATO */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* EMAIL */}
          <a
            href="mailto:akanni029@gmail.com"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-[#7C3AED]"
          >
            <Mail className="text-[#7C3AED]" />
            <h3 className="mt-4 text-lg font-semibold text-white">Email</h3>
            <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300">
              akanni029@gmail.com
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/akannisilva/"
            target="_blank"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-[#7C3AED]"
          >
            <LinkedinIcon className="text-[#7C3AED] size-8.5" />
            <h3 className="mt-4 text-lg font-semibold text-white">LinkedIn</h3>
            <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300">
              Conecte-se comigo
            </p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Akanni-Silva"
            target="_blank"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-[#7C3AED]"
          >
            <GithubIcon className="text-[#7C3AED] size-8.5" />
            <h3 className="mt-4 text-lg font-semibold text-white">GitHub</h3>
            <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300">
              Veja meus projetos
            </p>
          </a>
        </div>

        {/* CTA FINAL */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#020617] p-8 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Interessado em trabalhar comigo?
          </h2>

          <p className="mt-3 text-slate-400">
            Me envie um email ou me chame no LinkedIn — respondo rápido 🚀
          </p>

          <a
            href="mailto:akanni029@gmail.com"
            className="mt-6 inline-block rounded-xl bg-[#7C3AED] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6D28D9]"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;
