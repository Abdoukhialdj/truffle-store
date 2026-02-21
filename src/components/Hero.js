"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const particlesRef = useRef(null);

    useEffect(() => {
        if (!particlesRef.current) return;
        const container = particlesRef.current;
        const count = 28;

        // Clear existing particles if any
        container.innerHTML = "";

        for (let i = 0; i < count; i++) {
            const dot = document.createElement("div");
            dot.className = "hero-particle";

            const x = Math.random() * 100;
            const size = Math.random() * 2.5 + 1;
            const duration = Math.random() * 8 + 6;
            const delay = Math.random() * 10;

            dot.style.cssText = `
        left: ${x}%;
        bottom: 0;
        width: ${size}px;
        height: ${size}px;
        --duration: ${duration}s;
        --delay: ${delay}s;
        opacity: 0;
      `;

            container.appendChild(dot);
        }
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero-overlay"></div>
            <div className="hero-particles" ref={particlesRef} id="heroParticles"></div>
            <div className="hero-content">
                <p className="hero-eyebrow">p2p&p2c Delivery · Europe</p>
                <h1 className="hero-title">
                    Premium Desert Truffles
                    <br />
                    <em>p2p&p2c Delivery to Europe</em>
                </h1>
                <p className="hero-subtitle">
                    High-quality fresh truffles supplied in bulk with fast and reliable hand-to-hand p2p&p2c delivery across
                    Europe.
                </p>
                <div className="hero-actions">
                    <a href="#contact" className="btn btn-primary" id="heroCtaBtn">
                        Request Wholesale Pricing
                    </a>
                    <a href="#varieties" className="btn btn-ghost">
                        Explore Varieties
                    </a>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-num">4+</span>
                        <span className="stat-label">Countries Served</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-num">100%</span>
                        <span className="stat-label">Quality Guarantee</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-num">24h</span>
                        <span className="stat-label">p2p&p2c Dispatch</span>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
