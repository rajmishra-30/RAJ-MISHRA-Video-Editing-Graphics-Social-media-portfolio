"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const covers = [
  "/images/ai_repair_20260608132928702.jpg",
  "/images/image.png",
  "/images/quality_restoration_20260608035749301.jpg",
  "/images/IMG_20260608_154546_161.jpg",
  "/images/IMG_20260608_163920_840.jpg",
  "/images/IMG_20260608_115449.jpg",
];

export default function Covers() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="covers" className="py-8 px-4 bg-black">

      <div className="max-w-5xl mx-auto">

        {/* HEADER (fade in on load) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 tracking-[4px] uppercase text-[10px]">
            Covers
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-1">
            Reel Cover Designs
          </h2>
        </motion.div>

        {/* GRID (fade + smooth entry on mobile load) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 grid grid-cols-2 md:grid-cols-6 gap-2"
        >
          {covers.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActive(img)}
              className="aspect-[9/16] rounded-lg overflow-hidden border border-white/10"
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setActive(null)}
          >

            {/* BACK BUTTON */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 left-4 bg-white/10 p-2 rounded-full text-white"
            >
              <X size={20} />
            </button>

            {/* IMAGE */}
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={active}
              className="max-h-[85vh] max-w-[85vw] rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}