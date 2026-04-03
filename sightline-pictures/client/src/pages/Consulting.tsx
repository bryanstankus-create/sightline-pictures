/*
 * Consulting + Partnerships Page — Sightline Pictures
 * "Golden Frame" Design System
 */

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PAGE_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/sunrise-8675236_9a87e028.webp";

const services = [
  {
    number: "01",
    title: "Content Development",
    description:
      "From initial concept to fully packaged project, we work with partners to develop compelling narratives with commercial appeal and global reach.",
  },
  {
    number: "02",
    title: "Brand Partnerships",
    description:
      "We connect conservation-focused brands and organizations with premium storytelling opportunities that authentically align with their mission and audience.",
  },
  {
    number: "03",
    title: "Impact Strategy",
    description:
      "We help organizations translate their conservation and climate work into powerful stories that drive awareness, engagement, and action.",
  },
  {
    number: "04",
    title: "Industry Consulting",
    description:
      "Drawing on over a decade of experience at major studios, agencies, and production companies, we provide strategic guidance for navigating the film and television landscape.",
  },
];

export default function Consulting() {
  const contentRef = useScrollReveal();
  const servicesRef = useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.115 0.012 60)" }}>
      <Navigation />

      {/* ── PAGE HERO ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PAGE_HERO})`,
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,11,9,0.5) 0%, rgba(13,11,9,0.3) 50%, rgba(13,11,9,0.95) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-12 text-center px-6">
          <span className="label-text mb-3">Sightline Pictures</span>
          <h1
            className="text-4xl md:text-6xl font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "oklch(0.92 0.02 75)",
            }}
          >
            Consulting &amp; Partnerships
          </h1>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-28 md:py-36" ref={contentRef}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="fade-in-up">
              <span className="label-text">Work With Us</span>
              <div className="gold-rule-left mt-3 mb-6" />
              <h2
                className="text-4xl md:text-5xl font-light leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.92 0.02 75)",
                }}
              >
                Bridging storytelling with purpose
              </h2>
            </div>
            <div
              className="fade-in-up text-base leading-relaxed"
              style={{
                color: "oklch(0.7 0.02 70)",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                transitionDelay: "0.1s",
              }}
            >
              <p className="mb-4">
                Sightline Pictures brings together the worlds of premium entertainment and
                impact-driven storytelling. We partner with brands, organizations, and
                fellow creatives who share our belief that cinema can change minds, shift
                perspectives, and drive meaningful action.
              </p>
              <p>
                Whether you're looking to develop original content, align your brand with
                purpose-driven projects, or navigate the complexities of the film and
                television industry — we'd love to explore what's possible together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="container">
        <div className="gold-rule" />
      </div>

      {/* ── SERVICES ── */}
      <section className="py-28 md:py-36" ref={servicesRef}>
        <div className="container">
          <div className="fade-in-up mb-16">
            <span className="label-text">What We Offer</span>
            <div className="gold-rule-left mt-3 mb-6" />
            <h2
              className="text-4xl md:text-5xl font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "oklch(0.92 0.02 75)",
              }}
            >
              Areas of Collaboration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ background: "oklch(0.62 0.12 68 / 0.12)" }}
          >
            {services.map((service, i) => (
              <div
                key={service.number}
                className="fade-in-up p-10 lg:p-14 group"
                style={{
                  background: "oklch(0.115 0.012 60)",
                  transitionDelay: `${i * 0.08}s`,
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "oklch(0.13 0.012 60)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "oklch(0.115 0.012 60)")
                }
              >
                <div
                  className="text-5xl font-light mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.62 0.12 68 / 0.4)",
                  }}
                >
                  {service.number}
                </div>
                <h3
                  className="text-2xl font-light mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.92 0.02 75)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "oklch(0.7 0.02 70)",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="fade-in-up mt-16 p-12 text-center"
            style={{ border: "1px solid oklch(0.62 0.12 68 / 0.2)" }}
          >
            <h3
              className="text-3xl md:text-4xl font-light mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "oklch(0.92 0.02 75)",
              }}
            >
              Ready to collaborate?
            </h3>
            <p
              className="text-sm mb-8 max-w-md mx-auto"
              style={{
                color: "oklch(0.7 0.02 70)",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
              }}
            >
              We're always open to conversations with like-minded storytellers, brands, and
              organizations who believe in the power of purposeful cinema.
            </p>
            <Link href="/contact">
              <button className="btn-gold">Get in Touch</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
