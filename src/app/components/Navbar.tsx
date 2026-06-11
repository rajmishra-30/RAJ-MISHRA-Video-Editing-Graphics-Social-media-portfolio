"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", id: "hero" },
  { name: "Showreel", id: "showreel" },
  { name: "Reel Covers", id: "covers" },
  { name: "Work", id: "portfolio" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-black tracking-wider text-white"
          >
            RAJ
          </button>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm transition-all duration-300 ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="
              hidden md:flex
              px-5 py-2
              rounded-full
              bg-white
              text-black
              text-sm
              font-medium
              hover:scale-105
              transition-all
            "
          >
            Let's Talk
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-16 left-0 w-full z-40 md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col py-4">

            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`py-3 text-center transition-all ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="
                mt-3
                mx-4
                py-3
                rounded-full
                bg-white
                text-black
                font-medium
              "
            >
              Let's Talk
            </button>

          </div>
        </div>
      )}
    </>
  );
}