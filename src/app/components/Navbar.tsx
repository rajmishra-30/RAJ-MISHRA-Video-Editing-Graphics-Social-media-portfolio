"use client";

import { useState, useEffect } from "react";

const links = [
  { name: "Home", id: "hero" },
  { name: "Showreel", id: "showreel" },
  { name: "Covers", id: "covers" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center py-3">

        <div className="font-bold text-white">
          Raj Edits
        </div>

        <div className="flex gap-6 text-sm">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() =>
                document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
              }
              className={`transition ${
                active === link.id
                  ? "text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}