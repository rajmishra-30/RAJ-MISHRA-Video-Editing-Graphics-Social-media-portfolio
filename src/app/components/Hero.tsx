"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex items-center justify-center bg-black px-4 pt-10 pb-8"
    >
      <div className="text-center max-w-4xl">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-500 tracking-[4px] uppercase text-[10px]"
        >
          Personal Branding • Short Form Content
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mt-2"
        >
          RAJ
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-lg md:text-xl text-gray-300"
        >
          Short Form Content Expert
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-gray-500 text-xs md:text-sm max-w-2xl mx-auto"
        >
          Combining powerful video editing, premium reel covers, and strategic
          visual storytelling to help creators, anchors, and brands build a
          stronger digital presence.
        </motion.p>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-3 gap-4 md:gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-4xl font-bold">
              <CountUp end={70} duration={2} />+
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              Clients Served
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold">
              <CountUp end={500} duration={2.5} />+
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              Videos Edited
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold">
              <CountUp end={10} duration={3} />M+
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              Views Generated
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}