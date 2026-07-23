"use client";

import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-32 overflow-hidden bg-transparent"
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1631] via-[#050816] to-[#1c123f]" />

        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-500/15 blur-[180px]" />

        <div className="absolute top-10 -right-32 w-[650px] h-[650px] rounded-full bg-violet-500/15 blur-[180px]" />

        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-cyan-500/10 blur-[220px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Contacto
          </p>

          <h2 className="text-5xl font-black mt-4">
            Hablemos de tu próximo proyecto
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Contanos tu idea y te responderemos con una propuesta
            personalizada para llevar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Nombre"
                className="bg-zinc-900/70 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="bg-zinc-900/70 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition"
              />

              <input
                type="text"
                placeholder="Empresa (opcional)"
                className="bg-zinc-900/70 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition"
              />

              <textarea
                rows={6}
                placeholder="Contanos sobre tu proyecto..."
                className="bg-zinc-900/70 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition resize-none"
              />

              <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 transition rounded-xl py-4 font-semibold shadow-[0_0_30px_rgba(59,130,246,.35)]">
                <Send size={18} />
                Enviar mensaje
              </button>
            </div>
          </motion.div>

          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >
            <h3 className="text-3xl font-bold">
              Estamos listos para ayudarte
            </h3>

            <p className="text-zinc-400 mt-5 leading-8">
              Si necesitás una página web, una tienda online o una solución
              personalizada, escribinos. Respondemos en menos de 24 horas.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center">
                  <Mail className="text-blue-400" />
                </div>

                <div>
                  <p className="text-zinc-400 text-sm">Email</p>
                  <p className="font-semibold">hola@jlstudio.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-green-600/20 flex items-center justify-center">
                  <Phone className="text-green-400" />
                </div>

                <div>
                  <p className="text-zinc-400 text-sm">WhatsApp</p>
                  <p className="font-semibold">+54 9 11 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center">
                  <FaInstagram className="text-violet-400 text-2xl" />
                </div>

                <div>
                  <p className="text-zinc-400 text-sm">Instagram</p>
                  <p className="font-semibold">@jlstudio</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-600/20 flex items-center justify-center">
                  <MapPin className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-zinc-400 text-sm">Ubicación</p>
                  <p className="font-semibold">Argentina</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}