/*
 * Seify Studios — single-page marketing site
 *
 * Sections (in order):
 *   Nav      — sticky navigation
 *   Hero     — statement headline + CTA
 *   Service  — website design & development deep-dive   (id="service")
 *   Process  — 4-step framework                         (id="process")
 *   Contact  — closing CTA + contact form               (id="contact")
 *   Footer   — studio name, email, copyright
 *
 * TODO: Add a <Portfolio /> section between Service and Process
 *       when ready — import the component and drop it in below Service.
 */

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Service />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
