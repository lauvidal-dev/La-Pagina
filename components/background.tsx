export default function Background() {
  return (
    <>
      {/* Fondo */}
      <div className="fixed inset-0 -z-50 bg-[#030712]" />

      {/* Glow superior izquierdo */}
      <div className="fixed -top-60 -left-60 w-[900px] h-[900px] rounded-full bg-blue-500/30 blur-[220px] -z-40" />

      {/* Glow superior derecho */}
      <div className="fixed -top-40 -right-60 w-[800px] h-[800px] rounded-full bg-violet-500/25 blur-[220px] -z-40" />

      {/* Glow inferior */}
      <div className="fixed bottom-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cyan-500/20 blur-[220px] -z-40" />

      {/* Grid */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}