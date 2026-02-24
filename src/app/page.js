"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Varieties from "@/components/Varieties";
import Conserved from "@/components/Conserved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const handleSelectPackage = () => {
    // Smooth scroll to contact
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const navH = document.getElementById("navbar")?.offsetHeight || 0;
      const top = contactSection.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Scroll animations observer
    const animatedEls = document.querySelectorAll("[data-animate]");

    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const delay = parseInt(el.dataset.delay || 0, 10);

        setTimeout(() => {
          el.classList.add("in-view");
        }, delay);

        scrollObserver.unobserve(el);
      });
    }, observerOptions);

    animatedEls.forEach((el) => scrollObserver.observe(el));

    return () => scrollObserver.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Varieties onSelectPackage={handleSelectPackage} />
      <Conserved onSelectPackage={handleSelectPackage} />
      <Contact />
      <Footer />
    </main>
  );
}
