export default function Varieties({ onSelectPackage }) {
    const packages = [
        {
            qty: "5kg",
            grade: "Sampler Pack",
            name: "5 kg",
            desc: "Perfect for sampling our quality or for small artisanal boutiques.",
            image: "/5kg.jpg",
            tags: ["White Truffle", "Grade A", "p2p&p2c Delivery"],
        },
        {
            qty: "10kg",
            grade: "Starter Pack",
            name: "10 kg",
            desc: "Ideal for first-time buyers and small-scale wholesale orders.",
            image: "/10kg.jpg",
            tags: ["White Truffle", "Grade A", "p2p&p2c Delivery"],
        },
        {
            qty: "25kg",
            grade: "Standard Package",
            name: "25 kg",
            desc: "Our most popular bulk package — perfect for regular wholesale buyers.",
            image: "/25kg.jpg",
            tags: ["White Truffle", "Grade A", "p2p&p2c Delivery"],
            featured: true,
            badge: "Best Value",
        },
        {
            qty: "50kg",
            grade: "Bulk Order",
            name: "50 kg",
            desc: "Maximum volume for large distributors and commercial partners.",
            image: "/50kg.jpg",
            tags: ["White Truffle", "Grade A", "p2p&p2c Delivery"],
        },
    ];

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
                <div className="cards-grid">
                    {packages.map((pkg, idx) => (
                        <div
                            key={pkg.qty}
                            className={`product-card ${pkg.featured ? "featured" : ""}`}
                            data-animate="fade-up"
                            data-delay={idx * 150}
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
            </div>
        </section>
    );
}
