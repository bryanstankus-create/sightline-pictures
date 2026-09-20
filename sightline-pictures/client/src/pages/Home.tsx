/*
 * Home Page — Sightline Pictures
 * "Golden Frame" Design System
 * Full-bleed hero with parallax, about preview, projects grid, CTA section
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// CDN Assets
const HERO_BG =
  "/images/cliff-twilight-hero.webp"; // dark sea cliff at twilight — naturally dark with thin amber horizon
const LOGO_GOLD =
  "/images/logo-gold.png";
const LOGO_WHITE =
  "/images/logo-white.png";
const ABOUT_IMG =
  "/images/yosemite-922757.webp";
const SUNRISE_IMG =
  "/images/sunrise-8901014.webp";
const PROJECT_1_IMG =
  "/images/sunrise-8188929.webp"; // COVE Feature Film
const PROJECT_2_IMG =
  "/images/henry-forest.webp"; // Henry and the Silver Forest
const PROJECT_3_IMG =
  "/images/solar-cell-4045029.webp"; // COVE Documentary
const PROJECT_4_IMG =
  "/images/the-return-landscape.webp"; // The Return
const PROJECT_5_IMG =
  "/images/spring-4267503.webp"; // Daktari
const PROJECT_6_IMG =
  "/images/waves-8585265.webp"; // Living with Great Whites
const CTA_BG =
  "/images/sunrise-8675236.webp";

const projects = [
  {
    title: "Cove",
    type: "Feature Film",
    status: "In Development",
    image: PROJECT_1_IMG,
    description: "A scripted drama rooted in the fight for our oceans.",
    writer: "Charles Leavitt",
  },
  {
    title: "Henry & the Silver Forest",
    type: "Feature Film",
    status: "In Development",
    image: PROJECT_2_IMG,
    description: "A coming-of-age story about a boy on a farm on the edge of a forbidden forest.",
    writer: "David Fowler",
  },
  {
    title: "George Cove & the Lost Century",
    type: "Feature Documentary",
    status: "In Development",
    image: PROJECT_3_IMG,
    description: "A cinematic exploration of solar energy and the global energy transition.",
  },
  {
    title: "The Return",
    type: "Feature Documentary",
    status: "In Development",
    image: PROJECT_4_IMG,
    description: "A cinematic journey into the wild, exploring resilience, renewal, and humanity's relationship with the natural world.",
    director: "Brian Skerry",
  },
  {
    title: "Daktari",
    type: "Documentary Series",
    status: "In Development",
    image: PROJECT_5_IMG,
    description: "An intimate portrait of wildlife conservation on the frontlines of Africa.",
  },
  {
    title: "Living with Great Whites",
    type: "Feature Documentary",
    status: "In Development",
    image: PROJECT_6_IMG,
    description: "Reframing humanity's most feared predator through the lens of science and empathy.",
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.115 0.012 60)" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden grain-overlay"
        style={{ minHeight: "100svh" }}
      >
        {/* Parallax background */}
        <div
          className="absolute inset-0 w-full"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            transform: `translateY(${scrollY * 0.3}px)`,
            height: "120%",
            top: "-10%",
          }}
        />

        {/* Gradient overlays — moderate overlay for the amber-teal sky image */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,11,9,0.35)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,11,9,0.1) 0%, rgba(13,11,9,0.05) 40%, rgba(13,11,9,0.3) 75%, rgba(13,11,9,0.88) 100%)",
          }}
        />
        <div className="absolute inset-0 vignette" />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <img
            src={LOGO_GOLD}
            alt="Sightline Pictures"
            className="w-72 md:w-96 lg:w-[28rem] mb-8 object-contain"
            style={{
              filter: "drop-shadow(0 4px 24px rgba(184,134,42,0.3))",
              animation: "fadeInDown 1.2s ease forwards",
            }}
          />
          <div
            className="gold-rule w-16 mx-auto mb-6"
            style={{ animation: "fadeIn 1.6s ease 0.4s both" }}
          />
          <p
            className="text-sm md:text-base tracking-widest uppercase mb-12"
            style={{
              color: "oklch(0.92 0.02 75)",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.3em",
              animation: "fadeIn 1.6s ease 0.6s both",
            }}
          >
            The most compelling stories of our time.
          </p>
          <Link href="/projects">
            <button
              className="btn-gold"
              style={{ animation: "fadeIn 1.6s ease 0.9s both" }}
            >
              View Projects
            </button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: "fadeIn 2s ease 1.5s both" }}
        >
          <span
            className="label-text"
            style={{ fontSize: "0.6rem", letterSpacing: "0.25em" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.62 0.12 68), transparent)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section
        className="py-16"
        style={{ background: "oklch(0.09 0.01 60)", borderTop: "1px solid rgba(184,134,42,0.12)", borderBottom: "1px solid rgba(184,134,42,0.12)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "oklch(0.62 0.12 68 / 0.1)" }}>
            {[
              { label: "Film & Television", desc: "Premium scripted and unscripted content for global audiences" },
              { label: "Documentary", desc: "Feature and series documentaries rooted in conservation and climate" },
              { label: "Impact Storytelling", desc: "Stories that spark conversation and drive meaningful change" },
            ].map((pillar, i) => (
              <div
                key={i}
                className="px-10 py-10"
                style={{ background: "oklch(0.09 0.01 60)" }}
              >
                <div className="gold-rule-left mb-4" />
                <h3
                  className="text-xl font-light mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.92 0.02 75)" }}
                >
                  {pillar.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.55 0.03 70)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-28 md:py-36" ref={aboutRef}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="fade-in-up relative">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={ABOUT_IMG}
                  alt="Sightline Pictures — Yosemite"
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.8s ease" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)")
                  }
                />
                {/* Gold corner accent */}
                <div
                  className="absolute top-0 left-0 w-12 h-12"
                  style={{
                    borderTop: "1px solid oklch(0.62 0.12 68)",
                    borderLeft: "1px solid oklch(0.62 0.12 68)",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-12 h-12"
                  style={{
                    borderBottom: "1px solid oklch(0.62 0.12 68)",
                    borderRight: "1px solid oklch(0.62 0.12 68)",
                  }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6">
              <div className="fade-in-up">
                <span className="label-text">Who We Are</span>
                <div className="gold-rule-left mt-3 mb-6" />
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.92 0.02 75)",
                  }}
                >
                  Raising the visibility of stories that matter
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
                  Your sightline is a hypothetical line from your eye to what is seen — your
                  visibility. At Sightline Pictures, we aim to raise the visibility of the
                  issues at the core of our projects in the minds and hearts of our audience.
                  Sightline also implies a direct, laser-focused, vision toward a goal. Ours
                  is entertaining audiences while telling impactful stories with a purpose.
                </p>
                <p className="mb-4">
                  Sightline focuses on producing meaningful, premium content across film,
                  television, documentary, and digital. We are passionate about telling big,
                  bold, purposeful stories for a global audience, with a strong emphasis on
                  human, wildlife, conservation, and climate stories. We believe in stories that entertain and drive action.
                </p>
                <p>
                  Sightline also bridges the world of scripted film and television with
                  natural history. We believe in expanding the audience for impact-driven
                  filmmaking, and that means bringing everyone together under the same tent.
                </p>
              </div>
              <div className="fade-in-up mt-4" style={{ transitionDelay: "0.2s" }}>
                <Link href="/about">
                  <button className="btn-gold">Our Story</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="container">
        <div className="gold-rule" />
      </div>

      {/* ── PROJECTS ── */}
      <section className="py-28 md:py-36" ref={projectsRef}>
        <div className="container">
          <div className="fade-in-up flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="label-text">Current Projects</span>
              <div className="gold-rule-left mt-3 mb-4" />
              <h2
                className="text-4xl md:text-5xl font-light"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.92 0.02 75)",
                }}
              >
                In Development
              </h2>
            </div>
            <Link href="/projects">
              <span
                className="label-text hover:text-amber-400 transition-colors"
                style={{ fontSize: "0.7rem" }}
              >
                View All Projects →
              </span>
            </Link>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Link href="/projects" key={i}>
                <div
                  className="fade-in-up group relative overflow-hidden cursor-pointer"
                  style={{
                    aspectRatio: "16/9",
                    transitionDelay: `${i * 0.08}s`,
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(13,11,9,0.92) 0%, rgba(13,11,9,0.3) 60%, transparent 100%)",
                    }}
                  />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="label-text block mb-2">{project.type}</span>
                    <h3
                      className="text-2xl md:text-3xl font-light mb-1"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "oklch(0.92 0.02 75)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <div
                      className="flex items-center gap-2 mt-2"
                      style={{ color: "oklch(0.62 0.12 68)" }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "oklch(0.62 0.12 68)" }}
                      />
                      <span
                        className="text-xs tracking-widest uppercase"
                        style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
                      >
                        {project.status}
                      </span>
                    </div>
                    {project.writer && (
                      <p
                        className="text-xs mt-1 italic"
                        style={{
                          color: "oklch(0.55 0.03 70)",
                          fontFamily: "'Cormorant Garamond', serif",
                        }}
                      >
                        Written by {project.writer}
                      </p>
                    )}
                  </div>
                  {/* Gold border on hover */}
                  <div
                    className="absolute inset-0 border border-transparent group-hover:border-amber-600/40 transition-colors duration-500"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-36 overflow-hidden grain-overlay"
        ref={ctaRef}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${CTA_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(13,11,9,0.92) 0%, rgba(13,11,9,0.7) 50%, rgba(13,11,9,0.85) 100%)",
          }}
        />
        <div className="relative z-10 container">
          <div className="max-w-xl">
            <div className="fade-in-up">
              <span className="label-text">Get in Touch</span>
              <div className="gold-rule-left mt-3 mb-6" />
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.92 0.02 75)",
                }}
              >
                We'd love to work with you.
              </h2>
              <p
                className="text-base mb-10 leading-relaxed"
                style={{
                  color: "oklch(0.7 0.02 70)",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                }}
              >
                Whether you're a filmmaker, conservationist, brand, or storyteller —
                if you believe in the power of purposeful cinema, let's talk.
              </p>
              <Link href="/contact">
                <button className="btn-gold">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
