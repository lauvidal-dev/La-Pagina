"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import RestauranteNavbar from "./navbar";


export default function Restaurante() {

    const categories = {
  Entradas: [
    {
      name: "Bruschettas",
      price: "$9",
      description: "Pan artesanal, tomate fresco y albahaca.",
    },
    {
      name: "Provoleta",
      price: "$11",
      description: "Queso provoleta grillado con orégano.",
    },
  ],

  Hamburguesas: [
    {
      name: "Urban Burger",
      price: "$18",
      description: "Carne Angus, cheddar, panceta y salsa especial.",
    },
    {
      name: "BBQ Burger",
      price: "$20",
      description: "Doble carne con cebolla caramelizada.",
    },
  ],

  Pastas: [
    {
      name: "Fettuccine Alfredo",
      price: "$19",
      description: "Pasta fresca con salsa cremosa.",
    },
    {
      name: "Ravioles",
      price: "$21",
      description: "Rellenos de ricota y espinaca.",
    },
  ],

  Bebidas: [
    {
      name: "Limonada",
      price: "$6",
      description: "Natural con menta.",
    },
    {
      name: "Gin Tonic",
      price: "$12",
      description: "Gin premium.",
    },
  ],
};

const premiumDishes = [
  {
    title: "Urban Burger",
    price: "$18",
    image: "/portfolio/restaurante/burger.jpg",
    description:
      "Carne Angus, cheddar madurado, panceta crocante y salsa de la casa.",
  },
  {
    title: "Pasta Alfredo",
    price: "$22",
    image: "/portfolio/restaurante/pasta.jpg",
    description:
      "Pasta fresca elaborada artesanalmente con crema, parmesano y hierbas.",
  },
  {
    title: "Salmón Grill",
    price: "$28",
    image: "/portfolio/restaurante/salmon.jpg",
    description:
      "Salmón a la parrilla acompañado de vegetales grillados.",
  },
];

const [active, setActive] = useState("Hamburguesas");

  return (
  <>
    <RestauranteNavbar />

    <main className="bg-[#0b0b0b] text-white">

      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden">

        {/* Fondo */}

        <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-[#120d0b] to-red-950" />

        <div className="absolute -top-44 -left-44 w-[700px] h-[700px] rounded-full bg-orange-500/25 blur-[180px]" />

        <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full bg-red-600/20 blur-[180px]" />

        <div className="relative max-w-7xl mx-auto px-8 min-h-screen flex items-center">

          <div className="max-w-2xl">

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300"
            >
              Restaurante Premium
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="mt-8 text-7xl font-black leading-none"
            >
              Sabores
              <br />

              <span className="text-orange-400">
                Urbanos
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .35 }}
              className="mt-8 text-xl text-zinc-300 leading-relaxed"
            >
              Una experiencia gastronómica donde cada plato está pensado
              para sorprender. Ingredientes frescos, cocina de autor y
              un ambiente único.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="flex gap-5 mt-10"
            >

              <button className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 transition font-semibold">
                Reservar mesa
              </button>

              <button className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition">
                Ver menú
              </button>

            </motion.div>

          </div>

        </div>

      </section>

{/* NUESTRA HISTORIA */}

<section className="relative py-32">

  <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative"
    >

      <div className="rounded-[32px] overflow-hidden h-[520px] border border-white/10">

        <Image
          src="/portfolio/restaurante/chef.jpg"
          alt="Chef"
          fill
          className="object-cover"
        />

      </div>

      <div className="absolute -bottom-8 -right-8 bg-orange-500 text-white rounded-3xl px-8 py-6 shadow-2xl">

        <p className="text-5xl font-black">
          +12
        </p>

        <p className="text-sm uppercase tracking-widest">
          años de experiencia
        </p>

      </div>

    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >

      <span className="uppercase tracking-[0.3em] text-orange-400">
        Nuestra historia
      </span>

      <h2 className="mt-5 text-5xl font-black leading-tight">
        Mucho más que un restaurante
      </h2>

      <p className="mt-8 text-zinc-400 leading-8 text-lg">
        En Sabores Urbanos creemos que cada comida debe convertirse en un
        recuerdo. Combinamos ingredientes frescos, cocina de autor y un
        ambiente moderno para ofrecer una experiencia única.
      </p>

      <div className="grid grid-cols-2 gap-8 mt-12">

        <div>

          <p className="text-5xl font-black text-orange-400">
            4.9
          </p>

          <p className="text-zinc-400 mt-2">
            Calificación promedio
          </p>

        </div>

        <div>

          <p className="text-5xl font-black text-orange-400">
            +8k
          </p>

          <p className="text-zinc-400 mt-2">
            Clientes felices
          </p>

        </div>

      </div>

    </motion.div>

  </div>

</section>

{/* PLATOS PREMIUM */}

<section className="py-36">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center">

      <span className="uppercase tracking-[0.35em] text-orange-400">
        Signature
      </span>

      <h2 className="mt-5 text-6xl font-black">
        Platos que enamoran
      </h2>

      <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
        Cada creación está pensada para ofrecer una experiencia gastronómica
        inolvidable.
      </p>

    </div>

    <div className="space-y-12 mt-24">

      {premiumDishes.map((dish, index) => (

        <motion.div
          key={dish.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * .15 }}
          whileHover={{ scale: 1.015 }}
          className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          <div className="grid lg:grid-cols-2">

            <div className="relative h-[420px] overflow-hidden">

              <Image
                src={dish.image}
                alt={dish.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/40" />

            </div>

            <div className="flex flex-col justify-center p-14">

              <span className="text-orange-400 uppercase tracking-[0.25em]">
                Chef Selection
              </span>

              <h3 className="mt-5 text-5xl font-black">
                {dish.title}
              </h3>

              <p className="mt-8 text-zinc-400 text-lg leading-8">
                {dish.description}
              </p>

              <div className="flex items-center justify-between mt-12">

                <span className="text-4xl font-black text-orange-400">
                  {dish.price}
                </span>

                <button className="px-7 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 transition">
                  Ver plato
                </button>

              </div>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* GALERÍA */}

<section className="py-32">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center">

      <span className="text-orange-400 uppercase tracking-[0.3em]">
        Galería
      </span>

      <h2 className="mt-5 text-5xl font-black">
        Una experiencia para todos los sentidos
      </h2>

      <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
        Cada plato está preparado para sorprender tanto por su sabor como por su presentación.
      </p>

    </div>

    <div className="grid grid-cols-12 gap-6 mt-20">

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group col-span-12 lg:col-span-8 h-[500px] relative rounded-3xl overflow-hidden"
      >

        <Image
          src="/portfolio/restaurante/interior.jpg"
          alt="Interior"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-8 left-8">

          <h3 className="text-4xl font-black">
            Ambiente exclusivo
          </h3>

          <p className="text-zinc-300 mt-3">
            Diseñado para disfrutar una experiencia única.
          </p>

        </div>

      </motion.div>

      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group flex-1 relative rounded-3xl overflow-hidden"
        >

          <Image
            src="/portfolio/restaurante/plato.jpg"
            alt="Plato"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/25" />

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group flex-1 relative rounded-3xl overflow-hidden"
        >

          <Image
            src="/portfolio/restaurante/postre.jpg"
            alt="Postre"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/25" />

        </motion.div>

      </div>

    </div>

  </div>

</section>





        </main>
  </>
);
}