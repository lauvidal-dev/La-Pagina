interface Props {
  children: React.ReactNode;
  glow?: "strong" | "medium" | "soft";
}

export default function SectionWrapper({
  children,
  glow = "soft",
}: Props) {
  const styles = {
    strong: {
      background:
        "linear-gradient(to right,#14315f,#050816,#2a1755)",
      blur:
        "bg-blue-500/30 w-[700px] h-[700px]",
    },

    medium: {
      background:
        "linear-gradient(to bottom,#0b1222,#05070f)",
      blur:
        "bg-blue-500/15 w-[600px] h-[600px]",
    },

    soft: {
      background:
        "linear-gradient(to bottom,#05070f,#030303)",
      blur:
        "bg-blue-500/8 w-[500px] h-[500px]",
    },
  };

  const current = styles[glow];

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: current.background }}
      />

      <div
        className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full blur-[180px] -z-10 ${current.blur}`}
      />

      {children}
    </section>
  );
}