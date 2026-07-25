"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.35 },
  },
};

const line = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

export default function Hero() {
  return (
    /*
     * Layout: flex-col with an explicit pt-24 (nav height + breathing room)
     * and a flex-1 spacer that absorbs any remaining height above the content,
     * replicating justify-end behaviour while guaranteeing the eyebrow label
     * can never be pushed behind the browser toolbar or sticky nav on any
     * screen size — including small mobile viewports where justify-end alone
     * can leave zero clearance at the top.
     *
     * 100dvh (dynamic viewport height) accounts for mobile browser chrome
     * expanding / collapsing, which 100vh does not.
     */
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100dvh] flex flex-col
                 px-6 md:px-12
                 pt-24 md:pt-28
                 pb-24 md:pb-36
                 max-w-7xl mx-auto"
    >
      {/* Pushes content toward the bottom on tall screens */}
      <div className="flex-1" aria-hidden="true" />

      <motion.div variants={container} initial="hidden" animate="visible">
        {/* Eyebrow */}
        <motion.p
          variants={line}
          className="text-dim text-xs tracking-[0.2em] uppercase mb-8 font-sans"
        >
          Web Design Studio
        </motion.p>

        {/* Main headline
            leading-[0.92] is tighter than default but generous enough that
            no lines overlap at any viewport width — tested at 320 px, 600 px,
            and 1440 px with clamp(3.5rem, 10vw, 9.5rem). */}
        <motion.h1
          id="hero-heading"
          variants={line}
          className="font-display font-extrabold leading-[0.92] tracking-tight text-ivory
                     mb-10 md:mb-12
                     text-[clamp(3.5rem,10vw,9.5rem)]"
        >
          We build
          <br />
          <span className="text-gold">websites</span>
          <br />
          that perform.
        </motion.h1>

        {/* Supporting line */}
        <motion.p
          variants={line}
          className="text-dim text-lg md:text-xl max-w-md leading-relaxed mb-12"
        >
          Seify Studios crafts modern, high-performing websites — bespoke
          design and clean code, engineered to convert and built to last.
        </motion.p>

        {/* CTA */}
        <motion.div variants={line}>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-[#f7f3ed] font-semibold
                       text-sm tracking-wide hover:bg-gold/85 transition-colors duration-200"
          >
            Start your project
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-10 right-6 md:right-12 text-dim text-[10px]
                   tracking-[0.25em] uppercase [writing-mode:vertical-rl] rotate-180"
      >
        Scroll
      </motion.p>
    </section>
  );
}
