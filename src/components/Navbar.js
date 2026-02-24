"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);

            // Active section detection
            const sections = document.querySelectorAll("section[id]");
            const scrollMid = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollMid >= top && scrollMid < bottom) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Fresh", href: "#varieties" },
        { label: "Conserved", href: "#conserved" },
        { label: "Contact Us", href: "#contact", className: "nav-cta" },
    ];

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navH = document.getElementById("navbar")?.offsetHeight || 0;
            const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
            window.scrollTo({ top, behavior: "smooth" });
        }
        closeMenu();
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="nav-container">
                <a href="#hero" className="logo" onClick={(e) => handleSmoothScroll(e, "#hero")}>
                    <span className="logo-icon">✦</span>
                    <span className="logo-text">TruffleDirect</span>
                </a>
                <ul className={`nav-links ${isOpen ? "open" : ""}`} id="navLinks">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className={`${link.className || ""} ${activeSection === link.href.substring(1) ? "active-nav" : ""}`}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={`hamburger ${isOpen ? "active" : ""}`}
                    id="hamburger"
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
