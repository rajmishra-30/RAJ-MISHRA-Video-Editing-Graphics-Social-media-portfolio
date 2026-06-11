"use client";

import {
  Clapperboard,
  Palette,
  Sparkles,
  Film,
  Scissors,
  Mic,
  AudioWaveform,
  Brush,
  Layers,
  Camera,
  MonitorPlay,
  WandSparkles,
} from "lucide-react";

const skills = [
  {
    icon: Clapperboard,
    title: "Short Form Editing",
  },
  {
    icon: Palette,
    title: "Color Correction",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
  },
  {
    icon: Film,
    title: "B-Roll Integration",
  },
  {
    icon: Scissors,
    title: "Cuts & Transitions",
  },
  {
    icon: Mic,
    title: "Voiceover Content",
  },
  {
    icon: AudioWaveform,
    title: "Audio Sync & Cleanup",
  },
  {
    icon: Brush,
    title: "Professional Reel Covers",
  },
  {
    icon: Layers,
    title: "Content Repurposing",
  },
  {
    icon: Camera,
    title: "Anchor & Emcee Edits",
  },
  {
    icon: MonitorPlay,
    title: "Vox Pop Editing",
  },
  {
    icon: WandSparkles,
    title: "Personal Branding Content",
  },
];

export default function Skills() {
  return (
    <section
     id = "skills"
     className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <p className="text-gray-500 tracking-[4px] uppercase text-[10px]">
            Expertise
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Skills & Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="
                  group
                  border border-white/10
                  bg-white/5
                  rounded-2xl
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/30
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
                "
              >
                <Icon
                  size={26}
                  className="
                    mb-4
                    text-white
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                />

                <h3 className="text-sm md:text-base font-medium">
                  {skill.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}