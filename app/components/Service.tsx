import FadeIn from "./FadeIn";

/* ─── Edit service deliverables here ─────────────────────────── */
const included = [
  {
    num: "01",
    label: "Custom design",
    desc: "Every pixel crafted to reflect your brand — no templates, no shortcuts. Designed from scratch to stand apart.",
  },
  {
    num: "02",
    label: "Responsive build",
    desc: "Pixel-perfect on every screen, from mobile to widescreen. Layout, typography, and interactions all adapt gracefully.",
  },
  {
    num: "03",
    label: "Fast & modern tech",
    desc: "Built with clean, maintainable code. Optimised for Core Web Vitals, accessibility, and long-term performance.",
  },
  {
    num: "04",
    label: "Built to convert",
    desc: "Strategy-led design that turns visitors into leads. Every section is considered, every call-to-action intentional.",
  },
];

export default function Service() {
  return (
    <section
      id="service"
      aria-labelledby="service-heading"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section label */}
      <FadeIn>
        <p className="text-dim text-[10px] tracking-[0.25em] uppercase mb-16">
          01 — Service
        </p>
      </FadeIn>

      {/*
       * Heading is full-width — not inside a grid column — so no word
       * can ever overflow into adjacent content at any viewport width.
       * The font can now be generous because the full container is available.
       */}
      <FadeIn delay={0.1}>
        <h2
          id="service-heading"
          className="font-display font-extrabold leading-[0.92] tracking-tight text-ivory
                     text-[clamp(2rem,5.5vw,5.5rem)] mb-10 md:mb-12"
        >
          Website Design
          <br />
          &amp; Development
        </h2>
      </FadeIn>

      {/* Intro paragraph — tucked right below the heading */}
      <FadeIn delay={0.2}>
        <div className="flex justify-start mb-20 md:mb-28">
          <p className="text-dim text-lg leading-relaxed max-w-md">
            We do one thing and we do it exceptionally well. From initial
            concept through to launch, every project receives our complete
            focus — no junior handoffs, no rushed timelines. Just a website
            your business can be proud of.
          </p>
        </div>
      </FadeIn>

      {/* Divider */}
      <div className="border-t border-edge" />

      {/* Deliverables — mapped for easy editing */}
      {included.map(({ num, label, desc }, i) => (
        <FadeIn key={num} delay={i * 0.08}>
          <div className="grid md:grid-cols-[3.5rem_1fr_1fr] gap-x-8 gap-y-2 md:gap-12 py-8 border-b border-edge items-start group cursor-default">
            <span className="text-dim text-xs font-sans tracking-wider pt-1">
              {num}
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-ivory group-hover:text-gold transition-colors duration-300">
              {label}
            </h3>
            <p className="text-dim leading-relaxed text-sm md:text-base">{desc}</p>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
