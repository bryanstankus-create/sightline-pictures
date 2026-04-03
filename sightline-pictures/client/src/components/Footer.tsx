/*
 * Footer — Sightline Pictures
 * "Golden Frame" Design System
 * Dark background, gold rule divider, Jost labels, social links
 */

import { Link } from "wouter";

const LOGO_GOLD =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/LOGO_GoldCropped_dd4aba0c.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-16"
      style={{ background: "oklch(0.09 0.01 60)", borderTop: "1px solid rgba(184,134,42,0.2)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <img
                src={LOGO_GOLD}
                alt="Sightline Pictures"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p
              className="text-sm max-w-xs"
              style={{ color: "oklch(0.55 0.03 70)", fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: 1.7 }}
            >
              Premium film &amp; documentary production.<br />
              The most compelling stories of our time.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-3">
            <span className="label-text mb-2">Navigate</span>
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Consulting", href: "/consulting" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="text-sm transition-colors duration-300 hover:text-amber-400"
                  style={{ color: "oklch(0.7 0.02 70)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Contact + Social */}
          <div className="flex flex-col gap-3">
            <span className="label-text mb-2">Connect</span>
            <a
              href="mailto:bryan@sightline-pictures.com"
              className="text-sm transition-colors duration-300 hover:text-amber-400"
              style={{ color: "oklch(0.7 0.02 70)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              bryan@sightline-pictures.com
            </a>
            <span
              className="text-sm"
              style={{ color: "oklch(0.7 0.02 70)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              Los Angeles, CA
            </span>
            <div className="flex gap-5 mt-2">
              <a
                href="https://www.linkedin.com/in/bryan-stankus-87537547/"
                target="_blank"
                rel="noopener noreferrer"
                className="label-text hover:text-amber-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(184,134,42,0.12)" }}>
          <p
            className="text-xs text-center"
            style={{ color: "oklch(0.45 0.02 70)", fontFamily: "'Jost', sans-serif", letterSpacing: "0.1em" }}
          >
            © {year} SIGHTLINE PICTURES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
