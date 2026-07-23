"use client";

import { X, Maximize2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fullUrl: string;
}

export default function PortfolioModal({
  open,
  onClose,
  children,
  fullUrl,
}: Props) {
  if (!open) return null;

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

const [active, setActive] = useState("Hamburguesas");

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-lg flex items-center justify-center p-8">

      <div className="relative w-full max-w-7xl h-[90vh] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">

        <div className="h-14 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-6">

          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="flex gap-3">

            <Link
              href={fullUrl}
              className="p-2 rounded-lg hover:bg-zinc-800 transition"
            >
              <Maximize2 size={18} />
            </Link>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-zinc-800 transition"
            >
              <X size={18} />
            </button>

          </div>

        </div>

        <div className="h-[calc(90vh-56px)] overflow-auto">
          {children}
        </div>

      </div>

    </div>
  );
}