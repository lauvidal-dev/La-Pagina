"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import PortfolioModal from "@/components/ejemplos/portfolio-modal";
import Restaurante from "@/components/ejemplos/restaurante/restaurante";

const projects = [
  {
    category: "Restaurante",
    title: "Sabores Urbanos",
    description:
      "Landing moderna con menú digital, reservas online y botón de WhatsApp.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    category: "Estudio Jurídico",
    title: "Lex & Asociados",
    description:
      "Sitio institucional elegante para transmitir confianza y captar nuevos clientes.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "E-commerce",
    title: "Tech Store",
    description:
      "Tienda online con catálogo de productos, carrito de compras y pagos digitales.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="portfolio"
      className="relative py-32 overflow-hidden bg-transparent"
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f274f] via-[#050816] to-[#23164d]" />

        <div className="absolute -top-48 -left-40 w-[700px] h-[700px] rounded-full bg-blue-500/15 blur-[180px]" />

        <div className="absolute top-20 -right-40 w-[700px] h-[700px] rounded-full bg-violet-500/15 blur-[180px]" />

        <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-cyan-500/10 blur-[220px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Ejemplos de lo que podemos crear
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            Cada proyecto está diseñado para transmitir profesionalismo,
            generar confianza y convertir visitantes en clientes.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-lg group"
            >
              <div
                className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-3xl font-black text-white">
                  {project.category}
                </span>
              </div>

              <div className="p-8">
                <span className="text-sm text-blue-400 uppercase tracking-widest">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  {project.description}
                </p>

                <button
                onClick={() => setOpen(true)}
                 className="mt-8 flex items-center gap-2 font-semibold text-white transition group-hover:text-blue-400">
                  Ver proyecto
                  <ArrowUpRight size={18} />
                </button>
                
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <PortfolioModal
        open={open}
        onClose={() => setOpen(false)}
        fullUrl="/portfolio/Portfolio_ejemplos/restaurante"
      >
        <Restaurante />
      </PortfolioModal>

    </section>
  );
}