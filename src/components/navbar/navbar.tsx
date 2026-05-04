"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Nome */}
        <a
          href="/"
          className="text-xl font-semibold tracking-tight text-[#E5E7EB] transition hover:opacity-80"
        >
          <span className="bg-linear-to-r from-[#7C3AED] to-[#22D3EE] bg-clip-text text-transparent">
            Akanni
          </span>{" "}
          Silva
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {["Sobre", "Projetos", "Resultados", "Contato"].map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase()}`}
              className="relative text-slate-300 transition hover:text-white"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-linear-to-r from-[#7C3AED] to-[#22D3EE] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-linear-to-r from-[#7C3AED] to-[#22D3EE] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-900/30 transition hover:scale-105 md:block"
        >
          Fale comigo
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-200 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0F172A] px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4 text-slate-300">
            {["Sobre", "Projetos", "Resultados", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="transition hover:text-white"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-lg bg-linear-to-r from-[#7C3AED] to-[#22D3EE] px-4 py-2 text-center text-white"
            >
              Fale comigo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
