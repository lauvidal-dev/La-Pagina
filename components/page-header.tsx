type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="pt-40 pb-20 text-center bg-gradient-to-b from-zinc-950 to-black">

      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-6xl font-black">
          {title}
        </h1>

        <p className="text-zinc-400 text-xl mt-6">
          {subtitle}
        </p>

      </div>

    </section>
  );
}