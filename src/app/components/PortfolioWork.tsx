"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const categories = {
  anchoring: {
    title: "Anchoring",
    videos: [
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
    ],
  },

  emcee: {
    title: "Wedding Emcee",
    videos: [
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
    ],
  },

  voice: {
    title: "Voiceovers",
    videos: [
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
    ],
  },

  voxpop: {
    title: "Vox Pop",
    videos: [
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
      "/videos/placeholder.mp4",
    ],
  },
};

export default function PortfolioWork() {
  const [active, setActive] =
    useState<keyof typeof categories>("anchoring");

  const [fullscreenVideo, setFullscreenVideo] =
    useState<string | null>(null);

  return (
    <section
      id="portfolio"
      className="py-16 px-4 bg-black"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center">
          <p className="text-gray-500 tracking-[4px] uppercase text-[10px]">
            Portfolio
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Featured Work
          </h2>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">

          {Object.entries(categories).map(([key, value]) => (
            <button
              key={key}
              onClick={() =>
                setActive(key as keyof typeof categories)
              }
              className={`px-5 py-2 rounded-full transition-all duration-300 border

              ${
                active === key
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-white border-white/10 hover:bg-white/10"
              }
            `}
            >
              {value.title}
            </button>
          ))}

        </div>

        {/* ACTIVE CATEGORY */}
        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-12"
          >

            <h3 className="text-center text-2xl font-semibold mb-8">
              {categories[active].title}
            </h3>

            {/* VIDEOS */}
            <div className="flex justify-center flex-wrap gap-5">

              {categories[active].videos.map((video, i) => (
                <div
                  key={i}
                  className="group relative"
                >
                  <video
                    src={video}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) =>
                      e.currentTarget.play()
                    }
                    onMouseLeave={(e) =>
                      e.currentTarget.pause()
                    }
                    className="
                      w-[150px]
                      md:w-[190px]
                      aspect-[9/16]
                      object-cover
                      rounded-xl
                      border
                      border-white/10
                      bg-neutral-900
                    "
                  />

                  <button
                    onClick={() =>
                      setFullscreenVideo(video)
                    }
                    className="
                      absolute
                      top-2
                      right-2
                      opacity-0
                      group-hover:opacity-100
                      transition
                      bg-black/70
                      p-2
                      rounded-full
                    "
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              ))}

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* FULLSCREEN MODAL */}

      <AnimatePresence>

        {fullscreenVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-50
              bg-black/95
              flex
              items-center
              justify-center
              p-4
            "
          >
            <button
              onClick={() =>
                setFullscreenVideo(null)
              }
              className="
                absolute
                top-5
                right-5
                bg-white/10
                p-2
                rounded-full
              "
            >
              <X size={22} />
            </button>

            <video
              src={fullscreenVideo}
              controls
              autoPlay
              className="
                max-h-[90vh]
                rounded-xl
              "
            />
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}