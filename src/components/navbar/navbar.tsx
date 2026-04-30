import React from "react";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-700/40 bg-[#0F172A]/95 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-2xl font-semibold tracking-tight text-[#E5E7EB]"
        >
          Akanni
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          <a href="#about" className="transition hover:text-[#7C3AED]">
            Sobre
          </a>
          <a href="#projects" className="transition hover:text-[#7C3AED]">
            Projetos
          </a>
          <a href="#results" className="transition hover:text-[#7C3AED]">
            Resultados
          </a>
          <a href="#contact" className="transition hover:text-[#7C3AED]">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
