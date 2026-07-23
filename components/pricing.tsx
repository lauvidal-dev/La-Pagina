"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Landing",
    price: "USD 150",
    description: "Ideal para emprendedores y profesionales.",
    featured: false,
    features: [
      "Página de una sección",
      "Diseño Responsive",
      "Botón de WhatsApp",
      "Formulario de contacto",
      "Entrega rápida",
    ],
  },
  {
    name: "Business",
    price: "USD 350",
    description: "La opción más elegida por empresas.",
    featured: true,
    features: [
      "Hasta 5 páginas",
      "SEO básico",
      "Panel administrable",
      "Google Maps",
      "WhatsApp",
      "Hosting",
      "Dominio",
    ],
  },
  {
    name: "Premium",
    price: "Consultar",
    description: "Para proyectos personalizados.",
    featured: false,
    features: [
      "Sistema a medida",
      "Automatizaciones",
      "Integración con IA",
      "Dashboard",
      "Base de datos",
      "Soporte prioritario",
    ],
  },
];

export default function Pricing() {
  return (
    <section
        id="precios"
       className="relative py-32 bg-transparent"
      >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Planes
          </p>

          <h2 className="text-5xl font-black mt-4 text-white">
         Elegí el plan ideal para tu negocio
          </h2>

          <p className="text-zinc-400 mt-6 max-w-3xl mx-auto">
            Todos nuestros proyectos incluyen diseño moderno,
            optimización y soporte durante la puesta en marcha.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
              }}
              whileHover={{
                y: -10,
              }}
              className={`rounded-3xl border p-8 transition ${
                plan.featured
                  ? "border-blue-500 bg-blue-500/10 scale-105"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >

              {plan.featured && (

                <span className="inline-block mb-5 px-4 py-2 rounded-full bg-blue-600 text-sm font-semibold">
                  Más elegido
                </span>

              )}

              <h3 className="text-3xl font-bold">
                 {plan.name}
              </h3>

              <div className="text-5xl font-black mt-5">
                {plan.price}
              </div>

              <p className="text-zinc-400 mt-4">
                {plan.description}
              </p>

              <div className="space-y-4 mt-10">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex gap-3 items-center"
                  >
                    <Check
                      size={18}
                      className="text-green-400"
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <button
                className={`w-full mt-10 py-4 rounded-xl font-semibold transition ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-zinc-800 hover:bg-zinc-700"
                }`}
              >
                Solicitar presupuesto
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}