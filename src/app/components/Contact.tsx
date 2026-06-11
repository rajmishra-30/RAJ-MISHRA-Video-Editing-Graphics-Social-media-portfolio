"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black">

      <div className="max-w-4xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          className="text-gray-500 tracking-[6px] uppercase text-xs"
        >
          Let’s Work Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mt-3"
        >
          Build Something Premium
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-5 text-gray-500 text-sm max-w-2xl mx-auto"
        >
          I help creators, anchors, and brands build high-impact short-form content
          and visual identity that actually converts attention into growth.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:yourmail@gmail.com"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            Instagram
          </a>
        </motion.div>

      </div>

    </section>
  );
}