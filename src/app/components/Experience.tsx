"use client";

import Image from "next/image";

const experiences = [
  {
    logo: "/brands/geeksforgeeks.png",
    title: "GeeksforGeeks",
    role: "Leading Social Media & PR",
    description:
      "Managing digital presence, audience engagement, content strategy, brand communication, and growth-focused initiatives.",
  },
  {
    logo: "/brands/rajov.png",
    title: "Raj.ov",
    role: "Founder & Video Editor",
    description:
      "Creating short-form content, premium reel covers, personal branding assets, and high-retention edits across multiple niches.",
  },
];

export default function Experience() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <p className="text-gray-500 tracking-[4px] uppercase text-[10px]">
            Experience
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Experience & Leadership
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Building digital presence through content, branding, storytelling,
            and audience-focused creative strategy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/25
                hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              "
            >
              <Image
                src={item.logo}
                alt={item.title}
                width={80}
                height={80}
                className="
                  mx-auto
                  object-contain
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              />

              <h3 className="text-xl font-semibold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.role}
              </p>

              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}