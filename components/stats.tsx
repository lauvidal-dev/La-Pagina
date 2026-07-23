"use client";

import { motion } from "framer-motion";
import { Briefcase, Smile, Clock3, Star } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "+25",
    label: "Proyectos completados",
  },
  {
    icon: Smile,
    value: "100%",
    label: "Clientes satisfechos",
  },
  {
    icon: Clock3,
    value: "24 hs",
    label: "Tiempo de respuesta",
  },
  {
    icon: Star,
    value: "5★",
    label: "Calificación",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
        {/* Fondo */}
<div className="absolute inset-0 -z-10">
  <div className="absolute inset-0 bg-gradient-to-b from-[#081a33] to-[#030712]" />

  <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-500/15 blur-[180px]" />
</div>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-blue-400" />

                </div>

                <h3 className="text-5xl font-black text-white">
                  {stat.value}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {stat.label}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}