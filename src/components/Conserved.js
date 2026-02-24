"use client";

import { useRef, useState, useEffect } from "react";

export default function Conserved({ onSelectPackage }) {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const packages = [
        {
            qty: "3kg",
            grade: "Artisan Conserva",
            name: "3 kg",
            desc: "Expertly preserved whole truffles in premium brine, ideal for high-end restaurants.",
            image: "/conserved_3kg.png",
            tags: ["Black Truffle", "Conserved", "Vacuum Sealed"],
        },
        {
            qty: "5kg",
            grade: "Selection Pack",
            name: "5 kg",
            desc: "The perfect balance of quantity and preservation for boutique wholesalers.",
            image: "/conserved_5kg.png",
            tags: ["Black Truffle", "Conserved", "Vacuum Sealed"],
        },
        {
            qty: "10kg",
            grade: "Business Bulk",
            name: "10 kg",
            desc: "Standard wholesale volume for catering companies and large kitchens.",
            image: "/conserved_10kg.png",
            tags: ["Black Truffle", "Conserved", "Vacuum Sealed"],
            featured: true,
            badge: "Popular",
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
            window.addEventListener("resize", checkScroll);
            return () => {
                el.removeEventListener("scroll", checkScroll);
                window.removeEventListener("resize", checkScroll);
            };
        }
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 350;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="varieties conserved-section" id="conserved">
            <div className="container">
                <div className="section-header" data-animate="fade-up">
                    <span className="section-tag">Preserved Excellence</span>
                    <h2 className="section-title">
                        Conserved <em>Truffles</em>
                    </h2>
                    <p className="section-subtitle">
                        Long-lasting, expertly preserved black truffles for year-round availability without compromising on depth of flavor.
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
                                    <div className="img-placeholder" style={{
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#B8963E',
                                        fontSize: '0.8rem',
                                        flexDirection: 'column',
                                        gap: '10px'
                                    }}>
                                        <span style={{ fontSize: '2rem' }}>💎</span>
                                        <span>Conserved {pkg.name}</span>
                                    </div>
                                    {/* <img src={pkg.image} alt={pkg.name} /> */}
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
                                        Order Conserved →
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
