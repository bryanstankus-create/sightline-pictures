/*
 * Navigation — Sightline Pictures
 * "Golden Frame" Design System
 * Sticky transparent-to-solid nav, gold hover underlines, all-caps Jost labels
 */

import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const LOGO_WHITE =
  "/images/logo-white.png";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Consulting", href: "/consulting" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(13, 11, 9, 0.96)"
            : "linear-gradient(to bottom, rgba(13,11,9,0.7) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184, 134, 42, 0.15)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/">
              <img
                src={LOGO_WHITE}
                alt="Sightline Pictures"
                className="h-12 w-auto object-contain"
                style={{ filter: "brightness(1)" }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`nav-link ${location === link.href ? "active" : ""}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: "oklch(0.62 0.12 68)",
                  transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: "oklch(0.62 0.12 68)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: "oklch(0.62 0.12 68)",
                  transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          background: "rgba(13, 11, 9, 0.98)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className="font-['Cormorant_Garamond'] text-4xl font-light tracking-wide"
                style={{ color: "oklch(0.92 0.02 75)" }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <div className="flex gap-6 mt-8">
            <a
              href="https://www.linkedin.com/company/sightline-pictures"
              target="_blank"
              rel="noopener noreferrer"
              className="label-text"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/sightlinepictures"
              target="_blank"
              rel="noopener noreferrer"
              className="label-text"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
