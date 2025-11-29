"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2 select-none">
          <span className="text-2xl font-bold text-blue-900 tracking-wide uppercase">
            Nuxt
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-slate-500 text-sm">
          <Link href="/dashboard" className="hover:text-blue-900 transition">
            Dashboard
          </Link>
          <Link href="/teams" className="hover:text-blue-700 transition">
            Times
          </Link>
          <Link href="/projects" className="hover:text-blue-700 transition">
            Projetos
          </Link>
          <Link href="/clients" className="hover:text-blue-700 transition">
            Clientes
          </Link>
          <Link href="/techs" className="hover:text-blue-700 transition">
            Tecnologias
          </Link>
        </nav>

        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white-900/95 px-6 py-4 space-y-4 animate-in fade-in slide-in-from-top-2">
          <Link
            href="/dashboard"
            className="block text-slate-500 hover:text-blue-700 transition"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/teams"
            className="block text-slate-500 hover:text-blue-700 transition"
            onClick={() => setOpen(false)}
          >
            Times
          </Link>
          <Link
            href="/projects"
            className="block text-slate-500 hover:text-blue-700 transition"
            onClick={() => setOpen(false)}
          >
            Projetos
          </Link>
          <Link
            href="/clients"
            className="block text-slate-500 hover:text-blue-700 transition"
            onClick={() => setOpen(false)}
          >
            Clientes
          </Link>
          <Link
            href="/techs"
            className="block text-slate-500 hover:text-blue-700 transition"
            onClick={() => setOpen(false)}
          >
            Tecnologias
          </Link>
        </div>
      )}
    </header>
  );
}
