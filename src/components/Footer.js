export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <a href="#hero" className="logo">
                            <span className="logo-icon">✦</span>
                            <span className="logo-text">TruffleDirect</span>
                        </a>
                        <p>
                            Premium desert truffles, <br />
                            delivered hand-to-hand across Europe.
                        </p>
                    </div>
                    <div className="footer-links">
                        <a href="#about">About</a>
                        <a href="#varieties">Varieties</a>
                        <a href="#wholesale">Wholesale</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-copy">
                        <p>© 2026 TruffleDirect. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
