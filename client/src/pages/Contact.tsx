/*
 * Contact Page — Sightline Pictures
 * "Golden Frame" Design System
 * Cinematic contact form with dark aesthetic and gold accents
 */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PAGE_HERO =
  "/images/sunrise-8188929.webp";

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const contentRef = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a static site, open mailto as fallback
    const mailto = `mailto:bryan@sightline-pictures.com?subject=${encodeURIComponent(
      formState.subject || "Inquiry from Sightline Pictures Website"
    )}&body=${encodeURIComponent(
      `Name: ${formState.firstName} ${formState.lastName}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const inputStyle = (field: string) => ({
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${
      focused === field ? "oklch(0.62 0.12 68)" : "oklch(0.92 0.02 75 / 0.15)"
    }`,
    color: "oklch(0.92 0.02 75)",
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: "0.95rem",
    padding: "0.75rem 0",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s ease",
  });

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
            Contact
          </h1>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="py-28 md:py-36" ref={contentRef}>
        <div className="container">
          <div className="grid md:grid-cols-5 gap-16 lg:gap-24 items-start">
            {/* Left info */}
            <div className="md:col-span-2 flex flex-col gap-10">
              <div className="fade-in-up">
                <span className="label-text">Get in Touch</span>
                <div className="gold-rule-left mt-3 mb-6" />
                <h2
                  className="text-4xl md:text-5xl font-light leading-tight"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.92 0.02 75)",
                  }}
                >
                  We'd love to hear from you.
                </h2>
              </div>

              <div
                className="fade-in-up flex flex-col gap-8"
                style={{ transitionDelay: "0.1s" }}
              >
                <div>
                  <span className="label-text block mb-2">Email</span>
                  <a
                    href="mailto:bryan@sightline-pictures.com"
                    className="text-base transition-colors duration-300 hover:text-amber-400"
                    style={{
                      color: "oklch(0.92 0.02 75)",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    bryan@sightline-pictures.com
                  </a>
                </div>

                <div>
                  <span className="label-text block mb-2">Location</span>
                  <p
                    className="text-base"
                    style={{
                      color: "oklch(0.92 0.02 75)",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Los Angeles, CA
                  </p>
                </div>

                <div>
                  <span className="label-text block mb-3">Follow</span>
                  <div className="flex gap-6">
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

              {/* Quote */}
              <div
                className="fade-in-up p-6 mt-4"
                style={{
                  borderLeft: "1px solid oklch(0.62 0.12 68 / 0.4)",
                  transitionDelay: "0.2s",
                }}
              >
                <p
                  className="text-lg italic leading-relaxed"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.62 0.12 68)",
                  }}
                >
                  "The most compelling stories of our time."
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 fade-in-up" style={{ transitionDelay: "0.15s" }}>
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-20 text-center"
                  style={{ border: "1px solid oklch(0.62 0.12 68 / 0.3)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                    style={{ border: "1px solid oklch(0.62 0.12 68)" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="oklch(0.62 0.12 68)"
                      strokeWidth="1.5"
                    >
                      <path d="M4 10l4 4 8-8" />
                    </svg>
                  </div>
                  <h3
                    className="text-3xl font-light mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "oklch(0.92 0.02 75)",
                    }}
                  >
                    Message sent.
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "oklch(0.7 0.02 70)",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Your email client should have opened. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="label-text block mb-3">First Name</label>
                      <input
                        type="text"
                        required
                        value={formState.firstName}
                        onChange={(e) =>
                          setFormState({ ...formState, firstName: e.target.value })
                        }
                        onFocus={() => setFocused("firstName")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("firstName")}
                        placeholder="Bryan"
                      />
                    </div>
                    <div>
                      <label className="label-text block mb-3">Last Name</label>
                      <input
                        type="text"
                        required
                        value={formState.lastName}
                        onChange={(e) =>
                          setFormState({ ...formState, lastName: e.target.value })
                        }
                        onFocus={() => setFocused("lastName")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("lastName")}
                        placeholder="Stankus"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-text block mb-3">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("email")}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="label-text block mb-3">Subject</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("subject")}
                      placeholder="Project inquiry, partnership, etc."
                    />
                  </div>

                  <div>
                    <label className="label-text block mb-3">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle("message"),
                        resize: "none",
                        borderBottom: "none",
                        border: `1px solid ${
                          focused === "message"
                            ? "oklch(0.62 0.12 68)"
                            : "oklch(0.92 0.02 75 / 0.15)"
                        }`,
                        padding: "1rem",
                      }}
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="btn-gold">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
