"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Service", href: "#service" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-bg transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-edge"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

        {/* Wordmark */}
        <a
          href="#"
          className="font-display font-bold text-ivory tracking-tight text-base md:text-lg"
          aria-label="Seify Studios — home"
        >
          Seify Studios
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-dim text-sm hover:text-ivory transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 text-sm font-semibold bg-gold text-bg hover:bg-gold/85 transition-colors duration-200 tracking-wide"
          >
            Start your project
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
        >
          <span
            className={`block h-px bg-ivory transition-transform duration-300 origin-center ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px bg-ivory transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px bg-ivory transition-transform duration-300 origin-center ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
            className="overflow-hidden md:hidden bg-bg border-b border-edge"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-dim text-base hover:text-ivory transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 w-full text-center px-5 py-3 text-sm font-semibold bg-gold text-bg hover:bg-gold/85 transition-colors"
              >
                Start your project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
