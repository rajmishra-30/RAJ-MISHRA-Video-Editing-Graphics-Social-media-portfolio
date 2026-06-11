"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section 
     id = "contact"
     className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-500 tracking-[4px] uppercase text-[10px]">
          Contact
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          Let's Work Together
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Need premium short-form edits, personal branding content,
          anchor edits, wedding emcee content, voiceovers, or vox pop
          videos? Let's create content that captures attention and
          leaves an impact.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://www.instagram.com/raj_.ov?igsh=NDQ2NWwweW1xeXp4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
          >
            <FaInstagram size={18} />
            Instagram
          </a>

          <a
            href="https://wa.me/917827364319"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href="mailto:rajmishraofficial27@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="tel:+917289029725"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
          >
            <Phone size={18} />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}