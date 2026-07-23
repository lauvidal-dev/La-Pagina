"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f274f] via-[#050816] to-[#23164d]" />

        <div className="absolute -top-60 -left-40 w-[900px] h-[900px] rounded-full bg-blue-500/35 blur-[220px]" />

        <div className="absolute -top-32 -right-52 w-[800px] h-[800px] rounded-full bg-violet-500/30 blur-[220px]" />

        <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cyan-500/25 blur-[220px]" />
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen px-8 lg:px-10 pt-28 pb-16 grid lg:grid-cols-2 gap-24 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
            Desarrollo Web • IA • Automatización
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            Creamos
            <span className="text-blue-500"> páginas web </span>
            que generan clientes.
          </h1>

          <p className="mt-8 text-zinc-300 text-2xl leading-relaxed max-w-2xl">
            Diseñamos experiencias digitales modernas, veloces y optimizadas
            para que tu negocio destaque frente a la competencia.
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-[0_0_35px_rgba(59,130,246,.45)]">
              Solicitar presupuesto
            </button>

            <button className="px-8 py-4 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition">
              Ver proyectos →
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-zinc-400">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span>+30 proyectos entregados</span>
          </div>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-12 rounded-full bg-blue-500/30 blur-[160px]" />

            <div className="relative w-[620px] rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,.25)]">
              {/* Barra navegador */}
              <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-5 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <div className="p-6">
                {/* Hero del sitio */}
                <div className="relative h-60 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-700">
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="relative h-full flex flex-col justify-center px-8">
                    <span className="text-blue-100 uppercase tracking-[0.3em] text-xs">
                      JL Studio
                    </span>

                    <h3 className="text-4xl font-black text-white mt-2">
                      Diseño Web Premium
                    </h3>

                    <p className="text-white/80 mt-4 max-w-xs">
                      Sitios modernos, rápidos y preparados para convertir
                      visitas en clientes.
                    </p>

                    <div className="mt-6">
                      <div className="inline-flex rounded-xl bg-white text-blue-700 px-5 py-2 font-semibold">
                        Empezar →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tarjetas */}
                <div className="grid grid-cols-2 gap-5 mt-6">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-blue-500/40 transition">
                    <div className="text-blue-400 text-sm font-semibold">
                      Velocidad
                    </div>

                    <div className="text-white text-3xl font-black mt-2">
                      95+
                    </div>

                    <div className="text-zinc-400 text-sm mt-2">
                      Lighthouse Score
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-cyan-500/40 transition">
                    <div className="text-cyan-400 text-sm font-semibold">
                      Conversión
                    </div>

                    <div className="text-white text-3xl font-black mt-2">
                      +40%
                    </div>

                    <div className="text-zinc-400 text-sm mt-2">
                      Más consultas
                    </div>
                  </div>
                </div>

                {/* Botón */}
                <button className="mt-6 w-full rounded-xl bg-blue-600 hover:bg-blue-500 transition py-3 font-semibold">
                  Solicitar presupuesto
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}