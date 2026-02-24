"use client";

export default function Conserved({ onSelectPackage }) {
    const packages = [
        {
            qty: "3kg",
            grade: "Artisan Conserva",
            name: "3 kg (6 x 500g jars)",
            desc: "Expertly preserved whole truffles in premium brine. Sent in half-kilo jars.",
            image: "/conserved_3kg.png",
            tags: ["white truffle", "Conserved", "Vacuum Sealed"],
        },
        {
            qty: "5kg",
            grade: "Selection Pack",
            name: "5 kg (10 x 500g jars)",
            desc: "The perfect balance of quantity and preservation. Sent in half-kilo jars.",
            image: "/conserved_5kg.png",
            tags: ["white truffle", "Conserved", "Vacuum Sealed"],
        },
        {
            qty: "10kg",
            grade: "Business Bulk",
            name: "10 kg (20 x 500g jars)",
            desc: "Standard wholesale volume for catering companies. Sent in half-kilo jars.",
            image: "/conserved_10kg.png",
            tags: ["white truffle", "Conserved", "Vacuum Sealed"],
            featured: true,
            badge: "Popular",
        },
    ];

    return (
        <section className="varieties conserved-section" id="conserved">
            <div className="container">
                <div className="section-header" data-animate="fade-up">
                    <span className="section-tag">Preserved Excellence</span>
                    <h2 className="section-title">
                        Conserved <em>Truffles</em>
                    </h2>
                    <p className="section-subtitle">
                        Long-lasting, expertly preserved white truffles for year-round availability without compromising on depth of flavor.
                    </p>
                </div>

                <div className="varieties-wrapper" data-animate="fade-up">
                    <div className="cards-grid">
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
                </div>
            </div>
        </section>
    );
}
