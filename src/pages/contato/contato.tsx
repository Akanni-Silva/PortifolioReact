import { GithubIcon, LinkedinIcon } from "@sanity/icons";
import { Mail } from "lucide-react";
import { useState } from "react";

function Contato() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contato de ${form.name} via portfólio`);

    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`,
    );

    window.location.href = `mailto:akanni029@gmail.com?subject=${subject}&body=${body}`;
  };
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=akanni029@gmail.com"
            target="_blank"
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
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#020617] p-8">
          <h2 className="text-2xl font-semibold text-white text-center">
            Interessado em trabalhar comigo?
          </h2>

          <p className="mt-3 text-slate-400 text-center">
            Me mande uma mensagem diretamente por aqui 🚀
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 max-w-xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
            />

            <textarea
              name="message"
              placeholder="Sua mensagem"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-linear-to-r from-[#7C3AED] to-[#22D3EE] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-900/30 transition hover:scale-105"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;
