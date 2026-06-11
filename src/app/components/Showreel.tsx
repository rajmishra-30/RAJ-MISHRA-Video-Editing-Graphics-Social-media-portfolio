"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Showreel() {
  const [open, setOpen] = useState(false);

  return (
    <section id="showreel" className="pt-0 md:pt-2 pb-6 md:pb-8 px-4 bg-black -mt-12 md:mt-0">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-gray-500 tracking-[4px] uppercase text-[10px]">
            Showreel
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-1">
            Professional Edits
          </h2>
        </motion.div>

        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-6 relative aspect-video rounded-xl overflow-hidden border border-white/10"
        >
          <video
            className="w-full h-full object-cover"
            src="https://d3gm94gqgc6zff.cloudfront.net/showreel.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          <div
            onClick={() => setOpen(true)}
            className="absolute inset-0 cursor-pointer"
          />
        </motion.div>

      </div>

      {/* FULLSCREEN MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

          {/* CLOSE BUTTON (WEB + MOBILE) */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 left-5 bg-white/10 hover:bg-white/20 p-2 rounded-full z-50"
          >
            <X size={22} />
          </button>

          {/* VIDEO */}
          <video
            src="https://d3gm94gqgc6zff.cloudfront.net/showreel.mp4"
            controls
            autoPlay
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
          />
        </div>
      )}

    </section>
  );
}