import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          JL<span className="text-blue-500">Studio</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-zinc-300">

  <Link href="/" className="hover:text-white transition">
    Inicio
  </Link>

  <Link href="/portfolio" className="hover:text-white transition">
    Portfolio
  </Link>

  <Link href="/precios" className="hover:text-white transition">
    Precios
  </Link>

  <Link href="/contact" className="hover:text-white transition">
    Contacto
  </Link>

</nav>

        <Link
        href="/contact"
        className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-xl"
        >
          ¡Comencemos!
        </Link>

      </div>
    </header>
  );
}