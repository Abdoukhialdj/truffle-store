"use client";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header" data-animate="fade-up">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">
                        Request <em>Direct Wholesale Offer</em>
                    </h2>
                    <p className="section-subtitle">
                        Contact us directly via WhatsApp or Email for current pricing and customized p2p&p2c delivery solutions.
                    </p>
                    <div className="contact-methods" data-animate="fade-up">
                        <div className="contact-btns">
                            <a
                                href="https://wa.me/213540397301"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-btn whatsapp"
                                id="whatsappBtn"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.127 1.533 5.862L0 24l6.335-1.51A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.859 9.859 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z" />
                                </svg>
                                <span>WhatsApp</span>
                                <span className="btn-detail">+213 540 397 301</span>
                            </a>
                            <a href="mailto:m2d.khial@gmail.com" className="contact-btn email" id="emailBtn">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span>Email Us</span>
                                <span className="btn-detail">m2d.khial@gmail.com</span>
                            </a>
                        </div>
                        <p className="direct-contact-note">We typically respond within 24 business hours.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
