export default function Work() {
  const projects = [
    "Anchor Branding",
    "Corporate Event",
    "Luxury Reel Edit",
    "Personal Brand Content",
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-gray-500 uppercase tracking-[6px] mb-8">
          Featured Work
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="aspect-video rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-2xl font-semibold hover:scale-[1.02] transition"
            >
              {project}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}