"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const categories = {
  emcee: {
    title: "Wedding Emcee",
    videos: [
      "https://d3gm94gqgc6zff.cloudfront.net/file.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/AVANTIKA EVENT(SHADI) CC.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/final men in love.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/lv_0_20250504181723.mp4",
    ],
  },

  anchoring: {
    title: "Anchoring",
    videos: [
      "https://d3gm94gqgc6zff.cloudfront.net/lv_0_20260303023823_1.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/AVANTIKA'S REEL INDEPENDENCE DAY.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/AVANTIKA'S FINAL REEL BABY SHOWERRR.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/ICHHARA from Loona.mp4",
    ],
  },

  voice: {
    title: "Voiceovers",
    videos: [
      "https://d3gm94gqgc6zff.cloudfront.net/lv_0_20260611141141.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/lv_0_20260611141313.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/DOC-20250422-WA0002..mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/lv_0_20250422211649.mp4",
    ],
  },

  voxpop: {
    title: "Vox Pop",
    videos: [
      "https://d3gm94gqgc6zff.cloudfront.net/SIGN OF CHEATERR (1).mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/OLDEST LANGUAGE IN THE WORLD.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/HOTTEST GENZ ACTOR FINAL.mp4",
      "https://d3gm94gqgc6zff.cloudfront.net/first day of college life.mp4",
    ],
  },
};

export default function PortfolioWork() {
  const [active, setActive] =
    useState<keyof typeof categories>("emcee");

  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  const playVideo = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  const pauseVideo = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  };

  return (
    <section id="portfolio" className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-gray-500 tracking-[4px] uppercase text-[10px]">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Featured Work
          </h2>
        </div>

        {/* CATEGORY */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {Object.entries(categories).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActive(key as keyof typeof categories)}
              className={`px-5 py-2 rounded-full border transition ${
                active === key
                  ? "bg-white text-black"
                  : "bg-white/5 text-white border-white/10 hover:bg-white/10"
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>

        {/* VIDEOS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-12"
          >
            <h3 className="text-center text-2xl font-semibold mb-8">
              {categories[active].title}
            </h3>

            <div className="flex justify-center flex-wrap gap-5">

              {categories[active].videos.map((video, i) => (
                <div key={i} className="group relative">

                  <video
                    src={video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={
                      video.includes("AVANTIKA EVENT(SHADI)")
                        ? "/thumbnails/emcee2.jpg"
                        : undefined
                    }
                    className="
                      w-[160px]
                      md:w-[190px]
                      aspect-[9/16]
                      object-cover
                      rounded-xl
                      border border-white/10
                      bg-black
                      transition-transform duration-300
                      group-hover:scale-[1.03]
                    "
                    onMouseEnter={playVideo}
                    onMouseLeave={pauseVideo}
                    onClick={() => setFullscreenVideo(video)}
                  />

                  <button
                    onClick={() => setFullscreenVideo(video)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-black/70 p-2 rounded-full"
                  >
                    <Maximize2 size={16} />
                  </button>

                </div>
              ))}

            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* FULLSCREEN */}
      <AnimatePresence>
        {fullscreenVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setFullscreenVideo(null)}
              className="absolute top-5 right-5 bg-white/10 p-2 rounded-full text-white"
            >
              <X size={22} />
            </button>

            <video
              src={fullscreenVideo}
              controls
              autoPlay
              className="max-h-[90vh] rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}