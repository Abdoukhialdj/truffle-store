export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-text" data-animate="fade-right">
                        <span className="section-tag">Who We Are</span>
                        <h2 className="section-title">
                            A Fresh Start
                            <br />
                            <em>Built on Real Truffles</em>
                        </h2>
                        <p className="about-body">
                            We are a new, independent truffle supplier just getting started — and we're proud of it. No inflated
                            claims, no borrowed credentials. Just a real product, sourced directly, delivered hand-to-hand to buyers
                            across Europe who appreciate quality and transparency.
                        </p>
                        <ul className="about-pillars">
                            <li>
                                <span className="pillar-icon">🌿</span>
                                <div>
                                    <strong>Directly Sourced</strong>
                                    <p>We work directly with truffle harvesters — no middlemen, no markups, just fresh product from the source.</p>
                                </div>
                            </li>
                            <li>
                                <span className="pillar-icon">👁</span>
                                <div>
                                    <strong>Honest & Transparent</strong>
                                    <p>We are just starting out. We don't have years of certifications yet — but we have integrity and a genuine product.</p>
                                </div>
                            </li>
                            <li>
                                <span className="pillar-icon">🤝</span>
                                <div>
                                    <strong>p2p&p2c — person to person & person to company</strong>
                                    <p>Every order is handled personally. You talk to us directly, not a call centre — and we deliver hand-to-hand.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="about-visual" data-animate="fade-left">
                        <div className="about-card gold-border">
                            <p className="about-quote">
                                "We may be new, but the truffles are real, the quality is genuine, and every delivery is made with care
                                — directly from us to you."
                            </p>
                            <span className="about-quote-author">— TruffleDirect Team</span>
                        </div>
                        <div className="about-badges">
                            <div className="badge">New & Independent</div>
                            <div className="badge">Direct from Harvest</div>
                            <div className="badge">p2p&p2c Delivery</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
