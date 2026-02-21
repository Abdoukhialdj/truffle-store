"use client";

import { useState, useRef, useEffect } from "react";

export default function Contact({ selectedQuantity }) {
    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        country: "",
        email: "",
        phone: "",
        quantity: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [shaking, setShaking] = useState(false);

    const formRef = useRef(null);

    useEffect(() => {
        if (selectedQuantity) {
            setFormData((prev) => ({ ...prev, quantity: selectedQuantity }));
        }
    }, [selectedQuantity]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        const requiredFields = ["companyName", "contactPerson", "country", "email", "phone", "quantity"];
        let isValid = true;

        requiredFields.forEach((field) => {
            if (!formData[field].trim()) {
                isValid = false;
            }
        });

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            isValid = false;
        }

        if (!isValid) {
            setShaking(true);
            setTimeout(() => setShaking(false), 400);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/m2d.khial@gmail.com", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: "New p2p&p2c Truffle Inquiry!",
                    _template: "table",
                }),
            });

            const result = await response.json();

            if (response.ok && result.success === "true") {
                setShowSuccess(true);
                setFormData({
                    companyName: "",
                    contactPerson: "",
                    country: "",
                    email: "",
                    phone: "",
                    quantity: "",
                    message: "",
                });
                setTimeout(() => setShowSuccess(false), 6000);
            } else {
                throw new Error(result.message || "Form submission failed");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Problem sending inquiry. Error: " + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header" data-animate="fade-up">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">
                        Request <em>p2p&p2c Delivery Pricing</em>
                    </h2>
                    <p className="section-subtitle">
                        Fill in your details and we will respond with a tailored p2p&p2c wholesale delivery offer within 24 hours.
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
                        <p className="direct-contact-note">Prefer to reach out directly? Message us on WhatsApp or send an Email.</p>
                    </div>
                </div>
                <form
                    className={`contact-form ${shaking ? "shake" : ""}`}
                    id="contactForm"
                    data-animate="fade-up"
                    onSubmit={handleSubmit}
                    ref={formRef}
                    noValidate
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="companyName">
                                Company Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                placeholder="Your company name"
                                required
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactPerson">
                                Contact Person <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="contactPerson"
                                name="contactPerson"
                                placeholder="Full name"
                                required
                                value={formData.contactPerson}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="country">
                                Country <span className="required">*</span>
                            </label>
                            <select id="country" name="country" required value={formData.country} onChange={handleChange}>
                                <option value="" disabled>
                                    Select your country
                                </option>
                                {[
                                    "Austria",
                                    "Belgium",
                                    "Bulgaria",
                                    "Croatia",
                                    "Cyprus",
                                    "Czech Republic",
                                    "Denmark",
                                    "Estonia",
                                    "Finland",
                                    "France",
                                    "Germany",
                                    "Greece",
                                    "Hungary",
                                    "Ireland",
                                    "Italy",
                                    "Latvia",
                                    "Lithuania",
                                    "Luxembourg",
                                    "Malta",
                                    "Netherlands",
                                    "Norway",
                                    "Poland",
                                    "Portugal",
                                    "Romania",
                                    "Slovakia",
                                    "Slovenia",
                                    "Spain",
                                    "Sweden",
                                    "Switzerland",
                                    "United Kingdom",
                                    "Other",
                                ].map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">
                                Email Address <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@company.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">
                                Phone / WhatsApp <span className="required">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="e.g. +33 6 12 34 56 78"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">
                            Package / Quantity <span className="required">*</span>
                        </label>
                        <select id="quantity" name="quantity" required value={formData.quantity} onChange={handleChange}>
                            <option value="" disabled>
                                Select a package
                            </option>
                            <option value="10kg">10 kg — Starter Pack</option>
                            <option value="25kg">25 kg — Standard Package (Best Value)</option>
                            <option value="50kg">50 kg — Bulk Order</option>
                            <option value="custom">Custom quantity (specify in message "3kg minimum")</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell us about your requirements, preferred truffle varieties, delivery schedule, etc."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-footer">
                        <button
                            type="submit"
                            className="btn btn-primary btn-large"
                            id="submitBtn"
                            disabled={isSubmitting}
                            style={{ opacity: isSubmitting ? 0.7 : 1 }}
                        >
                            <span className="btn-text">{isSubmitting ? "Sending…" : "Send Inquiry"}</span>
                            <span className="btn-icon">{isSubmitting ? "⟳" : "→"}</span>
                        </button>
                        <p className="form-note">We typically respond within 24 business hours.</p>
                    </div>
                    <div className={`form-success ${showSuccess ? "visible" : ""}`} id="formSuccess">
                        <span className="success-icon">✦</span>
                        <strong>Thank you for your inquiry!</strong>
                        <p>We'll be in touch within 24 hours with a personalized wholesale offer.</p>
                    </div>
                </form>
            </div>
            <style jsx>{`
        .shake {
          animation: shake 0.4s ease;
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-8px);
          }
          40% {
            transform: translateX(8px);
          }
          60% {
            transform: translateX(-5px);
          }
          80% {
            transform: translateX(5px);
          }
        }
      `}</style>
        </section>
    );
}
