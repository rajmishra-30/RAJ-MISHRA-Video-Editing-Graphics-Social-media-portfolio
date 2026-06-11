"use client";

import Image from "next/image";

const tools = [
  { name: "Adobe Premiere Pro", image: "/tools/premiere.png" },
  { name: "After Effects", image: "/tools/aftereffects.png" },
  { name: "CapCut", image: "/tools/capcut.png" },
  { name: "Alight Motion", image: "/tools/alightmotion.png" },
  { name: "Sora AI", image: "/tools/sora.png" },
  { name: "Google Gemini", image: "/tools/gemini.png" },
  { name: "Claude", image: "/tools/claude.png" },
  { name: "Open Source AI", image: "/tools/opensource.png" },
  { name: "Topaz AI", image: "/tools/topaz.png" },
  { name: "Wink", image: "/tools/wink.png" },
  { name: "Canva", image: "/tools/canva.png" },
  { name: "Photoshop", image: "/tools/photoshop.png" },
];

export default function Toolkit() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-gray-500 tracking-[4px] uppercase text-[10px]">
            Toolkit
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-2">
            Software & AI Stack
          </h2>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 gap-y-8 gap-x-4 mt-8">
          {tools.map((tool) => {
            let size = 44;
            let extraClass = "";

            if (
              tool.name === "Photoshop" ||
              tool.name === "Canva" ||
              tool.name === "Topaz AI"
            ) {
              size = 52;
            }

            if (tool.name === "Wink") {
              size = 38;
            }

            if (tool.name === "Claude") {
              extraClass = "scale-75";
            }

            return (
              <div
                key={tool.name}
                className="group flex flex-col items-center text-center"
              >
                <div className="transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={size}
                    height={size}
                    className={`object-contain transition-all duration-300 ${extraClass}`}
                  />
                </div>

                <p className="mt-2 text-[10px] md:text-xs text-gray-500 leading-tight transition-all duration-300 group-hover:text-white">
                  {tool.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}