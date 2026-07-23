import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-black text-white">
              JL<span className="text-blue-500">Studio</span>
            </h2>

            <p className="mt-4 text-zinc-400">
              Creamos páginas web modernas,
              rápidas y preparadas para hacer crecer tu negocio.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">
              Navegación
            </h3>

            <div className="flex flex-col gap-3">

              <Link href="/" className="text-zinc-400 hover:text-white">
                Inicio
              </Link>

              <Link href="/servicios" className="text-zinc-400 hover:text-white">
                Servicios
              </Link>

              <Link href="/portfolio" className="text-zinc-400 hover:text-white">
                Portfolio
              </Link>

              <Link href="/precios" className="text-zinc-400 hover:text-white">
                Precios
              </Link>

              <Link href="/contact" className="text-zinc-400 hover:text-white">
                Contacto
              </Link>

            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">
              Contacto
            </h3>

            <p className="text-zinc-400">
              contacto@jlstudio.com
            </p>

            <p className="text-zinc-400 mt-2">
              WhatsApp
            </p>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500">
          © 2026 JL Studio. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}