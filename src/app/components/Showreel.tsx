"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Showreel() {
  const [open, setOpen] = useState(false);

  return (
    <section id="showreel" className="py-8 px-4 bg-black">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-gray-500 tracking-[4px] uppercase text-[10px]">
            Showreel
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-1">
            Motion Edits
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-6 relative aspect-video rounded-xl overflow-hidden border border-white/10"
        >

          <video
            className="w-full h-full object-cover"
            src="/videos/showreel.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <div
            onClick={() => setOpen(true)}
            className="absolute inset-0 cursor-pointer"
          />

        </motion.div>

      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
         <video
            src="/videos/showreel.mp4"
            controls
            autoPlay
            className="max-h-[90vh] max-w-[90vw]"
          />
        </div>
      )}

    </section>
  );
}