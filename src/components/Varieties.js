"use client";

import { useRef, useState, useEffect } from "react";

export default function Varieties({ onSelectPackage }) {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const packages = [
        {
            qty: "5kg",
            grade: "Sampler Pack",
            name: "5 kg",
            desc: "Perfect for sampling our quality or for small artisanal boutiques.",
            image: "/5kg.png",
            tags: ["White Truffle", "Grade A", "p2p&p2c Delivery"],
        },
        {
            qty: "10kg",
            grade: "Starter Pack",
            name: "10 kg",
            desc: "Ideal for first-time buyers and small-scale wholesale orders.",
            image: "/10kg.png",
            tags: ["White Truffle", "Grade A", "p2p&p2c Delivery"],
        },
        {
            qty: "25kg",
            grade: "Standard Package",
            name: "25 kg",
            desc: "Our most popular bulk package — perfect for regular wholesale buyers.",
            image: "/25kg.png",
            tags: ["White Truffle", "Grade A", "p2p&p2c Delivery"],
            featured: true,
            badge: "Best Value",
        },
        {
            qty: "50kg",
            grade: "Bulk Order",
            name: "50 kg",
            desc: "Maximum volume for large distributors and commercial partners.",
            image: "/50kg.png",
            tags: ["White Truffle", "Grade A", "p2p&p2c Delivery"],
        },
    ];

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener("scroll", checkScroll);
            checkScroll();
            // Also check on resize
            window.addEventListener("resize", checkScroll);
            return () => {
                el.removeEventListener("scroll", checkScroll);
                window.removeEventListener("resize", checkScroll);
            };
        }
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 350; // Approximating card width + gap
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="varieties" id="varieties">
            <div className="container">
                <div className="section-header" data-animate="fade-up">
                    <span className="section-tag">White Truffle</span>
                    <h2 className="section-title">
                        Wholesale <em>Packages</em>
                    </h2>
                    <p className="section-subtitle">
                        Premium Grade A White Truffle — available in four bulk package sizes for every order scale.
                    </p>
                </div>

                <div className="varieties-wrapper" data-animate="fade-up">
                    <button
                        className={`scroll-arrow prev ${!canScrollLeft ? "disabled" : ""}`}
                        onClick={() => scroll("left")}
                        aria-label="Previous packages"
                    >
                        ←
                    </button>

                    <div className="cards-grid horizontal-scroll" ref={scrollRef}>
                        {packages.map((pkg, idx) => (
                            <div
                                key={pkg.qty}
                                className={`product-card ${pkg.featured ? "featured" : ""}`}
                                onClick={() => onSelectPackage(pkg.qty)}
                                style={{ cursor: "pointer" }}
                            >
                                {pkg.badge && <div className="card-badge">{pkg.badge}</div>}
                                <div className="card-image">
                                    <img src={pkg.image} alt={pkg.name} />
                                </div>
                                <div className="card-body">
                                    <div className="card-grade">{pkg.grade}</div>
                                    <h3 className="card-name">{pkg.name}</h3>
                                    <p className="card-desc">{pkg.desc}</p>
                                    <div className="card-meta">
                                        {pkg.tags.map((tag) => (
                                            <span key={tag} className="card-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        className="card-order-btn"
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onSelectPackage(pkg.qty);
                                        }}
                                    >
                                        Order this package →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className={`scroll-arrow next ${!canScrollRight ? "disabled" : ""}`}
                        onClick={() => scroll("right")}
                        aria-label="Next packages"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
