/*
 * Projects Page — Sightline Pictures
 * "Golden Frame" Design System
 * Cinematic project cards with full-bleed imagery and editorial alternating layout
 *
 * Project order (as of latest update):
 *   01 — COVE (Feature Film) — highest priority, scripted
 *   02 — Henry and the Silver Forest (Feature Film) — coming-of-age
 *   03 — COVE (Feature Documentary) — ocean/solar/renewable energy
 *   04 — The Return (Feature Documentary) — directed by Brian Skerry
 *   05 — Daktari (Documentary Series) — Africa wildlife vets
 *   06 — Living with Great Whites (Feature Documentary) — sharks / ocean waves
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PAGE_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/solar-cell-4045029_85b01459.webp";

// CDN image references
const IMG_SUNRISE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/sunrise-8188929_f848556a.webp"; // warm sunrise — COVE Feature Film
const IMG_HENRY =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/henry-forest_1e54ff0f.jpg"; // golden meadow — Henry
const IMG_SOLAR =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/solar-cell-4045029_85b01459.webp"; // solar panels — COVE Documentary
const IMG_THE_RETURN =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/the-return-landscape_2e6fd4cb.jpg"; // dramatic Icelandic landscape — The Return
const IMG_DAKTARI =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/spring-4267503_f2ab4b33.webp"; // figure in haze — Daktari
const IMG_SHARKS =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663484975968/GHiwpBE3WhpYdjDoRCvc6Y/waves-8585265_029c4d63.webp"; // crashing ocean waves — Living with Great Whites

const projects = [
  {
    id: "01",
    title: "Cove",
    subtitle: "Feature Film",
    status: "Currently in Development",
    image: IMG_SUNRISE,
    description:
      "A scripted feature film rooted in the fight for our oceans. Written by Charles Leavitt, the acclaimed screenwriter behind Blood Diamond, Cove weaves a dramatic, character-driven narrative around the environmental and human stakes of coastal conservation.",
    writer: "Charles Leavitt",
    writerCredits: "Blood Diamond",
    tags: ["Scripted", "Drama", "Ocean"],
  },
  {
    id: "02",
    title: "Henry & the Silver Forest",
    subtitle: "Feature Film",
    status: "Currently in Development",
    image: IMG_HENRY,
    logline:
      "When Henry, a shy boy haunted by the mysterious disappearance of his parents, ventures into the forbidden forest where they vanished, he uncovers a dark force draining the life from the land. With the help of Violet, his fearless friend, Henry must find the courage to save the forest and confront the wounds in his own family before it's too late.",
    description:
      "The Silver Forest blends magical realism and surrealism with the immense beauty of the natural world — a classic, timeless fable in the tradition of Charlotte's Web, The Little Prince, The Hobbit, and Beasts of the Southern Wild. Told through the eyes of a child, a simple forest becomes vast, epic, and full of wonder. It's a coming-of-age story, a journey into nature's beauty, and a cautionary tale about the fragility of our planet. A film for all ages: kids will be captivated by its sense of adventure and pure wonder, while adults will be moved by its emotional depth and complex themes.",
    writer: "David Fowler",
    writerCredits: "The Dinosaurs (Netflix), Our Universe (Netflix), Tiny World (Apple TV+), Disneynature",
    tags: ["Scripted", "Coming-of-Age", "Family", "Magical Realism"],
  },
  {
    id: "03",
    title: "George Cove & the Lost Century",
    subtitle: "Feature Documentary",
    status: "Currently in Development",
    image: IMG_SOLAR,
    description:
      "A cinematic feature documentary exploring the urgent promise of solar and renewable energy — and the communities, innovators, and landscapes at the heart of the global energy transition. George Cove & the Lost Century takes audiences inside one of the defining stories of our time.",
    tags: ["Solar", "Renewable Energy", "Documentary"],
  },
  {
    id: "04",
    title: "The Return",
    subtitle: "Feature Documentary",
    status: "Currently in Development",
    image: IMG_THE_RETURN,
    description:
      "A feature documentary directed by Brian Skerry — one of the world's foremost ocean photographers and storytellers. The Return is a cinematic journey into the wild, exploring themes of resilience, renewal, and humanity's relationship with the natural world.",
    director: "Brian Skerry",
    tags: ["Documentary", "Wildlife", "Ocean"],
  },
  {
    id: "05",
    title: "Daktari",
    subtitle: "Documentary Series",
    status: "Currently in Development",
    image: IMG_DAKTARI,
    description:
      "An intimate, immersive documentary series following wildlife veterinarians and conservationists on the frontlines of Africa's most critical conservation battles. Daktari — Swahili for 'doctor' — brings viewers face to face with the human and animal stories at the heart of the continent's wildlife crisis.",
    tags: ["Wildlife", "Africa", "Series"],
  },
  {
    id: "06",
    title: "Living with Great Whites",
    subtitle: "Feature Documentary",
    status: "Currently in Development",
    image: IMG_SHARKS,
    description:
      "A landmark feature documentary that reframes humanity's most feared predator through the lens of science, empathy, and ecological urgency. Moving beyond myth and sensationalism, this film seeks to transform how we understand — and protect — the great white shark.",
    tags: ["Ocean", "Wildlife", "Documentary"],
  },
];

export default function Projects() {
  const headerRef = useScrollReveal();
  const projectsRef = useScrollReveal();

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
            backgroundPosition: "center 40%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,11,9,0.5) 0%, rgba(13,11,9,0.3) 50%, rgba(13,11,9,0.95) 100%)",
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
            Projects
          </h1>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20" ref={headerRef}>
        <div className="container">
          <div className="max-w-2xl fade-in-up">
            <p
              className="text-lg leading-relaxed"
              style={{
                color: "oklch(0.7 0.02 70)",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
              }}
            >
              All current Sightline Pictures projects are in active development. Each project
              reflects our commitment to premium, impact-driven storytelling at the
              intersection of cinema and conservation.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECT LIST ── */}
      <section className="pb-28" ref={projectsRef}>
        <div className="container">
          <div className="flex flex-col gap-0">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="fade-in-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Divider */}
                <div className="gold-rule mb-0" />

                <div
                  className={`grid md:grid-cols-2 gap-0 ${
                    i % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      i % 2 === 1 ? "md:col-start-2" : ""
                    }`}
                    style={{ aspectRatio: "16/10", minHeight: "280px" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(13,11,9,0.2) 0%, transparent 50%)",
                      }}
                    />
                    {/* Project number */}
                    <div
                      className="absolute top-6 right-6"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "4rem",
                        fontWeight: 300,
                        color: "rgba(184,134,42,0.25)",
                        lineHeight: 1,
                      }}
                    >
                      {project.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center p-10 lg:p-16 ${
                      i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                    }`}
                    style={{ background: "oklch(0.13 0.012 60)" }}
                  >
                    <span className="label-text mb-3">{project.subtitle}</span>
                    <h2
                      className="text-4xl md:text-5xl font-light mb-4"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "oklch(0.92 0.02 75)",
                        lineHeight: 1.15,
                      }}
                    >
                      {project.title}
                    </h2>

                    {/* Status badge */}
                    <div className="flex items-center gap-2 mb-6">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "oklch(0.62 0.12 68)" }}
                      />
                      <span
                        className="text-xs tracking-widest uppercase"
                        style={{
                          color: "oklch(0.62 0.12 68)",
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>

                    {(project as any).logline && (
                      <p
                        className="text-base leading-relaxed mb-5 italic"
                        style={{
                          color: "oklch(0.82 0.04 70)",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.05rem",
                          lineHeight: 1.65,
                          borderLeft: "2px solid oklch(0.62 0.12 68 / 0.4)",
                          paddingLeft: "1rem",
                        }}
                      >
                        {(project as any).logline}
                      </p>
                    )}
                    <p
                      className="text-base leading-relaxed mb-6"
                      style={{
                        color: "oklch(0.7 0.02 70)",
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {project.description}
                    </p>

                    {(project.writer || project.director) && (
                      <div
                        className="pt-4 mt-2"
                        style={{ borderTop: "1px solid oklch(0.62 0.12 68 / 0.2)" }}
                      >
                        <p
                          className="text-sm"
                          style={{
                            color: "oklch(0.55 0.03 70)",
                            fontFamily: "'Jost', sans-serif",
                            fontWeight: 300,
                          }}
                        >
                          {project.writer ? "Written by" : "Directed by"}{" "}
                          <span
                            style={{
                              color: "oklch(0.92 0.02 75)",
                              fontFamily: "'Cormorant Garamond', serif",
                              fontStyle: "italic",
                              fontSize: "1rem",
                            }}
                          >
                            {project.writer || project.director}
                          </span>
                          {project.writerCredits && (
                            <span style={{ color: "oklch(0.55 0.03 70)" }}>
                              {" "}({project.writerCredits})
                            </span>
                          )}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs tracking-wider uppercase"
                          style={{
                            border: "1px solid oklch(0.62 0.12 68 / 0.3)",
                            color: "oklch(0.62 0.12 68)",
                            fontFamily: "'Jost', sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="gold-rule" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
