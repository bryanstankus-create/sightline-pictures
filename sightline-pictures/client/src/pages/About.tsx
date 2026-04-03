/*
 * About Page — Sightline Pictures
 * "Golden Frame" Design System
 * Company philosophy, Bryan Stankus bio, cinematic layout
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PAGE_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/sky-2479213_c85d9316.webp";
const BRYAN_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/bryan-stankus-headshot_e8441f4f.jpg";
const COMPANY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/mountains-6818253_00dcceef.webp";


export default function About() {
  const companyRef = useScrollReveal();
  const bryanRef = useScrollReveal();

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
            backgroundPosition: "center 30%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,11,9,0.5) 0%, rgba(13,11,9,0.4) 50%, rgba(13,11,9,0.95) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-12 text-center">
          <span className="label-text mb-3">Sightline Pictures</span>
          <h1
            className="text-5xl md:text-7xl font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "oklch(0.92 0.02 75)",
            }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* ── COMPANY PHILOSOPHY ── */}
      <section className="py-28 md:py-36" ref={companyRef}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-28 items-center">
            <div className="flex flex-col gap-6">
              <div className="fade-in-up">
                <span className="label-text">Our Mission</span>
                <div className="gold-rule-left mt-3 mb-6" />
                <h2
                  className="text-4xl md:text-5xl font-light leading-tight mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.92 0.02 75)",
                  }}
                >
                  A direct, laser-focused vision toward a goal
                </h2>
              </div>
              <div
                className="fade-in-up flex flex-col gap-5 text-base leading-relaxed"
                style={{
                  color: "oklch(0.7 0.02 70)",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  transitionDelay: "0.1s",
                }}
              >
                <p>
                  Your sightline is a hypothetical line from your eye to what is seen — your
                  visibility. At Sightline Pictures, we aim to raise the visibility of the
                  issues at the core of our projects in the minds and hearts of our audience.
                </p>
                <p>
                  Sightline focuses on producing meaningful, premium content across film,
                  television, documentary, and digital. We are passionate about telling big,
                  bold, purposeful stories for a global audience, with a strong emphasis on
                  human, wildlife, conservation, and climate stories.
                </p>
                <p>
                  Sightline also bridges the world of scripted film and television with
                  natural history. We believe in expanding the audience for impact-driven
                  filmmaking, and that means bringing everyone together under the same tent.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="fade-in-up relative" style={{ transitionDelay: "0.15s" }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={COMPANY_IMG}
                  alt="Sightline Pictures — Mountains"
                  className="w-full h-full object-cover"
                />
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
              {/* Offset accent block */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 -z-10"
                style={{ background: "oklch(0.62 0.12 68 / 0.08)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="container">
        <div className="gold-rule" />
      </div>

      {/* ── BRYAN STANKUS ── */}
      <section className="py-28 md:py-36" ref={bryanRef}>
        <div className="container">
          <div className="fade-in-up mb-16">
            <span className="label-text">Founder &amp; CEO</span>
            <div className="gold-rule-left mt-3 mb-6" />
            <h2
              className="text-4xl md:text-5xl font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "oklch(0.92 0.02 75)",
              }}
            >
              Bryan Stankus
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12 lg:gap-16 items-start">
            {/* Portrait */}
            <div
              className="fade-in-up md:col-span-1 relative"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img
                  src={BRYAN_IMG}
                  alt="Bryan Stankus — Founder & CEO, Sightline Pictures"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,11,9,0.5) 0%, transparent 50%)",
                  }}
                />
                <div
                  className="absolute top-0 left-0 w-12 h-12"
                  style={{
                    borderTop: "1px solid oklch(0.62 0.12 68)",
                    borderLeft: "1px solid oklch(0.62 0.12 68)",
                  }}
                />
              </div>
              <div
                className="mt-4 p-4"
                style={{ borderLeft: "1px solid oklch(0.62 0.12 68 / 0.4)" }}
              >
                <p
                  className="text-sm italic"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.62 0.12 68)",
                    lineHeight: 1.6,
                  }}
                >
                  "With Sightline Pictures, Bryan has committed to producing impact-driven
                  commercial stories across all mediums for a global audience to change the
                  narrative around the critical issues of our time."
                </p>
              </div>
            </div>

            {/* Bio text */}
            <div
              className="fade-in-up md:col-span-3 flex flex-col gap-5 text-base leading-relaxed"
              style={{
                color: "oklch(0.7 0.02 70)",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                transitionDelay: "0.15s",
              }}
            >
              <p>
                Bryan Stankus is a producer and former development executive with over a decade
                of experience shaping ambitious, compelling narratives in the film and television
                industry. Having worked at major film studios, global film financiers, and top
                talent agencies, he founded{" "}
                <span style={{ color: "oklch(0.92 0.02 75)" }}>Sightline Pictures</span>{" "}
                to bridge his industry expertise with his lifelong passion for conservation,
                climate initiatives, and bold, impact-driven storytelling. Bryan specializes in
                producing premium content with global appeal and strong human resonance, and is
                dedicated to telling stories that break through, spark conversation and drive
                positive change.
              </p>
              <p>
                Bryan serves on the board of{" "}
                <span style={{ color: "oklch(0.92 0.02 75)" }}>Open Planet Studios</span>{" "}
                (formerly Studio Silverback), one of the world's leading producers of impact
                films. The company specializes in groundbreaking content to drive change for our
                planet — from short films to strategic campaigns, immersive experiences, and
                global feature documentaries. The award-winning team have worked on landmark
                productions including <em>Ocean with David Attenborough</em> (National Geographic
                and Disney+), <em>Breaking Boundaries</em> (Netflix),{" "}
                <em>David Attenborough: A Life On Our Planet</em> (Netflix),{" "}
                <em>The Earthshot Prize: Restoring Our Planet</em> (BBC, Discovery+ and PBS),
                and <em>Seat At The Table</em> (YouTube Originals).
              </p>
              <p>
                Previously, Bryan served as a feature development executive at{" "}
                <span style={{ color: "oklch(0.92 0.02 75)" }}>SK Global Entertainment</span>{" "}
                (<em>Anyone But You</em>, <em>Crazy Rich Asians</em>, <em>Moneyball</em>,{" "}
                <em>Hell or High Water</em>, <em>The Place Beyond the Pines</em>), where he
                developed and packaged films, secured underlying intellectual property rights,
                and helped oversee the studio's strategic partnership with Warner Music Group.
                Fluent in Spanish, he also worked on SK Global's Latin American crossover and
                Spanish-language content strategy, including a strategic partnership with
                Elefantec Global.
              </p>
              <p>
                Before that, Bryan was a feature development executive at{" "}
                <span style={{ color: "oklch(0.92 0.02 75)" }}>
                  21st Century Fox's The Jackal Group
                </span>
                , where he played a key role in Baz Luhrmann's Academy Award–nominated{" "}
                <em>Elvis</em> (Austin Butler, Tom Hanks; $288M worldwide gross) and MGM's
                animated hit <em>The Addams Family</em> (Oscar Isaac, Charlize Theron, Allison
                Janney; $204M worldwide gross), shepherding the projects through development and
                production while collaborating closely with filmmakers, talent, and studio
                leadership.
              </p>
              <p>
                Bryan began his career at{" "}
                <span style={{ color: "oklch(0.92 0.02 75)" }}>WME</span>, assisting a senior
                crossover agent representing top-tier talent across film, television, sports,
                and new media, including M. Night Shyamalan, Tyler Perry, and the NFL. He also
                helped spearhead WME's LatinX initiative, a company-wide effort to champion
                LatinX talent and emerging voices across the industry.
              </p>
              <p
                style={{
                  color: "oklch(0.62 0.12 68)",
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                }}
              >
                With Sightline Pictures, Bryan has committed to producing impact-driven
                commercial stories across all mediums for a global audience to change the
                narrative around the critical issues of our time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
