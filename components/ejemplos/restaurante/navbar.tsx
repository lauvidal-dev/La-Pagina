"use client";

import Link from "next/link";

export default function RestauranteNavbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-black tracking-wide"
        >
          Sabores<span className="text-orange-400">Urbanos</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-zinc-300">

          <a href="#inicio" className="hover:text-white transition">
            Inicio
          </a>

          <a href="#especialidades" className="hover:text-white transition">
            Especialidades
          </a>

          <a href="#galeria" className="hover:text-white transition">
            Galería
          </a>

          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>

        </nav>

        <button className="rounded-xl bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-400 transition">
          Reservar mesa
        </button>

      </div>
    </header>
  );
}