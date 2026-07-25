import FadeIn from "./FadeIn";

/* ─── Edit process steps here ────────────────────────────────── */
const steps = [
  {
    num: "01",
    label: "Discover",
    desc: "We begin by understanding your business, your customers, and your goals. A focused discovery session ensures everything that follows is grounded in strategy — not guesswork.",
  },
  {
    num: "02",
    label: "Design",
    desc: "We craft a visual direction that is uniquely yours — bold, purposeful, and built around how your audience thinks and feels. Iterations happen until it's exactly right.",
  },
  {
    num: "03",
    label: "Build",
    desc: "Clean, performant code on a modern stack. Fast-loading, fully accessible, and engineered to scale. Built to survive long after the handover.",
  },
  {
    num: "04",
    label: "Launch",
    desc: "We handle the full go-live process, test every interaction rigorously, and make sure everything is solid before the keys change hands. Then we see you off right.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section label */}
      <FadeIn>
        <p className="text-dim text-[10px] tracking-[0.25em] uppercase mb-16">
          02 — Process
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          id="process-heading"
          className="font-display font-extrabold leading-tight tracking-tight text-ivory mb-20 md:mb-24
                     text-[clamp(2.5rem,5vw,4.5rem)]"
        >
          How we work
        </h2>
      </FadeIn>

      {/* Steps — mapped from the array above for easy editing */}
      <div>
        {steps.map(({ num, label, desc }, i) => (
          <FadeIn key={num} delay={i * 0.1}>
            <div className="grid md:grid-cols-[3.5rem_1fr_1.2fr] gap-x-8 gap-y-4 md:gap-12 py-10 md:py-14 border-t border-edge last:border-b group cursor-default">
              {/* Step number */}
              <span className="text-gold text-xs font-sans tracking-wider self-start pt-3">
                {num}
              </span>

              {/* Step name — large editorial */}
              <h3 className="font-display font-extrabold tracking-tight text-ivory group-hover:text-gold transition-colors duration-500
                             text-[clamp(2.25rem,4vw,3.75rem)] leading-none self-start">
                {label}
              </h3>

              {/* Description */}
              <p className="text-dim leading-relaxed self-start md:pt-3 max-w-sm text-sm md:text-base">
                {desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
