import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@sanity/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F172A]">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-[#E5E7EB]">
              <span className="bg-linear-to-r from-[#7C3AED] to-[#22D3EE] bg-clip-text text-transparent">
                Akanni
              </span>{" "}
              Silva
            </h2>
            <p className="mt-2 max-w-sm text-sm text-slate-400">
              Desenvolvendo soluções modernas com foco em backend, dados e
              experiências digitais bem construídas.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-sm text-slate-400">
            <Link to="/sobre" className="transition hover:text-white">
              Sobre
            </Link>
            <Link to="/projetos" className="transition hover:text-white">
              Projetos
            </Link>
            <Link to="/resultados" className="transition hover:text-white">
              Resultados
            </Link>
            <Link to="/contato" className="transition hover:text-white">
              Contato
            </Link>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Akanni-Silva"
              target="_blank"
              className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-[#7C3AED] hover:text-white"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/akannisilva/"
              target="_blank"
              className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-[#22D3EE] hover:text-white"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=akanni029@gmail.com"
              target="_blank"
              className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-[#7C3AED] hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center gap-4 text-xs text-slate-500 md:flex-row ">
          <p>© 2026 Akanni Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
