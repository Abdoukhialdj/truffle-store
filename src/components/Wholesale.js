export default function Wholesale() {
    return (
        <section className="wholesale" id="wholesale">
            <div className="container">
                <div className="wholesale-inner">
                    <div className="wholesale-text" data-animate="fade-right">
                        <span className="section-tag">Bulk Supply</span>
                        <h2 className="section-title">
                            Wholesale &amp;
                            <br />
                            <em>p2p&p2c Delivery Services</em>
                        </h2>
                        <p className="wholesale-intro">
                            We offer end-to-end wholesale p2p&p2c delivery solutions for importers, distributors, and food industry
                            partners across Europe.
                        </p>
                        <ul className="wholesale-list">
                            <li>
                                <span className="wl-icon">◈</span>
                                <div>
                                    <strong>Bulk Quantities Available</strong>
                                    <p>From 10kg to multi-ton container orders — flexible to your needs.</p>
                                </div>
                            </li>
                            <li>
                                <span className="wl-icon">◈</span>
                                <div>
                                    <strong>Custom Packaging</strong>
                                    <p>Branded or private-label packaging options available for retail and HoReCa.</p>
                                </div>
                            </li>
                            <li>
                                <span className="wl-icon">◈</span>
                                <div>
                                    <strong>Temperature-Controlled p2p&p2c Delivery</strong>
                                    <p>Hand-to-hand cold-chain delivery ensuring freshness from our hands directly to yours.</p>
                                </div>
                            </li>
                            <li>
                                <span className="wl-icon">◈</span>
                                <div>
                                    <strong>Fast p2p&p2c Delivery Across Europe</strong>
                                    <p>Direct hand-to-hand delivery to all major European destinations within 24–72 hours.</p>
                                </div>
                            </li>
                            <li>
                                <span className="wl-icon">◈</span>
                                <div>
                                    <strong>Delivery Documentation Provided</strong>
                                    <p>Full compliance with EU food regulations — certificates, invoices, and p2p&p2c handover records.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="wholesale-map" data-animate="fade-left">
                        <div className="map-card">
                            <div className="map-header">
                                <span className="map-title">p2p&p2c Coverage – Europe</span>
                                <span className="map-sub">40+ destinations</span>
                            </div>
                            <div className="map-visual">
                                <svg viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="europe-svg">
                                    <path
                                        d="M150 30 L170 25 L190 35 L200 50 L195 70 L185 80 L190 95 L200 110 L210 130 L220 145 L215 165 L200 175 L190 190 L175 200 L160 210 L145 220 L130 215 L115 205 L100 195 L90 180 L80 165 L75 145 L85 130 L95 115 L90 100 L85 85 L95 70 L100 55 L115 40 L130 32 Z"
                                        fill="#1a1a1a"
                                        stroke="#B8963E"
                                        strokeWidth="1.2"
                                        opacity="0.8"
                                    />
                                    <path
                                        d="M95 70 L75 65 L60 70 L50 85 L55 100 L70 105 L80 95 L90 100 L95 115 L85 130 L75 145 L65 155 L70 170 L80 165"
                                        fill="#1a1a1a"
                                        stroke="#B8963E"
                                        strokeWidth="1"
                                        opacity="0.6"
                                    />
                                    <path
                                        d="M200 110 L220 105 L235 115 L240 130 L235 145 L220 145"
                                        fill="#1a1a1a"
                                        stroke="#B8963E"
                                        strokeWidth="1"
                                        opacity="0.6"
                                    />
                                    <path
                                        d="M145 220 L148 240 L145 255 L135 260 L125 250 L130 235 L130 215"
                                        fill="#1a1a1a"
                                        stroke="#B8963E"
                                        strokeWidth="1"
                                        opacity="0.6"
                                    />
                                    <circle cx="120" cy="90" r="3" fill="#B8963E" />
                                    <circle cx="155" cy="75" r="3" fill="#B8963E" />
                                    <circle cx="180" cy="100" r="3" fill="#B8963E" />
                                    <circle cx="100" cy="120" r="3" fill="#B8963E" />
                                    <circle cx="165" cy="140" r="3" fill="#B8963E" />
                                    <circle cx="140" cy="165" r="3" fill="#B8963E" />
                                    <circle cx="200" cy="130" r="3" fill="#B8963E" />
                                    <circle cx="80" cy="110" r="3" fill="#B8963E" />
                                    <circle cx="155" cy="75" r="8" stroke="#B8963E" strokeWidth="0.5" opacity="0.4" className="pulse-ring" />
                                    <circle cx="180" cy="100" r="8" stroke="#B8963E" strokeWidth="0.5" opacity="0.4" className="pulse-ring" />
                                </svg>
                            </div>
                            <div className="map-countries">
                                <span>France</span>
                                <span>Germany</span>
                                <span>Italy</span>
                                <span>Spain</span>
                                <span>Netherlands</span>
                                <span>Belgium</span>
                                <span>Austria</span>
                                <span>+ 33 more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
