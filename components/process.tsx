"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Rocket,
  Bot,
  MonitorSmartphone,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Desarrollo de alto rendimiento",
    description:
      "Sitios rápidos, optimizados y preparados para crecer con tu negocio.",
  },
  {
    icon: Bot,
    title: "Integración con IA",
    description:
      "Incorporamos inteligencia artificial para automatizar procesos y mejorar la experiencia del usuario.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive",
    description:
      "Tu página se adapta perfectamente a celulares, tablets y computadoras.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
    description:
      "Buenas prácticas de desarrollo para proteger tu información y la de tus clientes.",
  },
  {
    icon: Zap,
    title: "SEO y velocidad",
    description:
      "Optimizamos cada detalle para posicionar mejor en Google y cargar en segundos.",
  },
  {
    icon: Headset,
    title: "Soporte",
    description:
      "Te acompañamos incluso después de publicar tu sitio.",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="text-blue-400 font-semibold">
            ¿Por qué elegirnos?
          </p>

          <h2 className="text-5xl font-black mt-4">
            Tecnología pensada para hacer crecer tu negocio
          </h2>

          <p className="text-zinc-400 mt-6 max-w-3xl mx-auto">
            Cada proyecto se desarrolla con herramientas modernas,
            diseño atractivo y foco en conseguir resultados reales.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md p-8 flex gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 mt-3 leading-7">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}