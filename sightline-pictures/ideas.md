# Sightline Pictures — Design Brainstorm

## Context
A film and documentary production company focused on wildlife conservation and climate stories. Founder Bryan Stankus has a Hollywood pedigree. The brand aesthetic centers on dark, cinematic visuals with warm gold/amber sunrise/sunset tones. The site needs to feel premium, purposeful, and emotionally resonant — not generic.

---

<response>
<probability>0.07</probability>
<idea>

## Option A: "Noir Horizon" — Cinematic Brutalism

**Design Movement:** Cinematic Brutalism meets Film Noir editorial

**Core Principles:**
1. Raw typographic power — oversized, cropped, bleeding-edge letterforms
2. High contrast: near-black backgrounds against warm amber/gold highlights
3. Asymmetric tension — deliberate imbalance creates visual drama
4. Restraint in color: only black, off-white, and one gold accent tone

**Color Philosophy:**
- Background: `#0a0806` (near-black with warm undertone)
- Gold accent: `#c9922a` (burnished amber, not yellow-gold)
- Text: `#e8dcc8` (warm cream, not pure white)
- Rationale: Evokes old film stock, darkroom amber light, and the weight of serious documentary work

**Layout Paradigm:**
- Full-bleed hero with massive logotype overlay
- Content sections use a 9-column asymmetric grid — text anchored left, imagery bleeding right
- Navigation: thin horizontal bar, all-caps spaced tracking, minimal
- Projects presented as a vertical editorial list — no cards, just typographic hierarchy

**Signature Elements:**
1. Horizontal rule dividers with a single gold pixel accent
2. Oversized section numbers in a light weight as background texture
3. Film-grain CSS texture overlay on all hero images (5% opacity noise)

**Interaction Philosophy:**
- Hover states reveal gold underlines that draw in from left
- Page transitions: horizontal wipe (like a film cut)
- Cursor changes to crosshair on interactive elements

**Animation:**
- Entrance: text lines slide up with staggered delay (0.1s per line)
- Parallax: hero image moves at 0.3x scroll speed
- No bouncy easing — only `cubic-bezier(0.25, 0.1, 0.25, 1)` (film-like linear)

**Typography System:**
- Display: `Playfair Display` (serif, editorial weight for headings)
- Body: `DM Sans` (clean, modern, readable)
- Accent: `Cormorant Garamond` italic for pull quotes and taglines
- Tracking: wide letter-spacing on all-caps labels (`0.2em`)

</idea>
</response>

<response>
<probability>0.08</probability>
<idea>

## Option B: "Golden Frame" — Cinematic Widescreen Immersion ✅ CHOSEN

**Design Movement:** Prestige Television / A24 Film aesthetic — dark, atmospheric, emotionally intelligent

**Core Principles:**
1. Immersive full-bleed photography as the primary design element
2. Typographic restraint — let images breathe, text serves as caption to the visual
3. Warm amber/gold as the only accent color, used sparingly for maximum impact
4. Horizontal cinematic proportions — widescreen thinking applied to web layout

**Color Philosophy:**
- Background: `#0d0b09` (deep charcoal-black with warm brown undertone)
- Gold: `#b8862a` (antique gold — references sunset, film frames, prestige)
- Text: `#f0e6d3` (warm ivory — like aged paper or film grain)
- Muted text: `#8a7a68` (warm taupe for secondary info)
- Rationale: The palette is drawn from the uploaded sunset images — the deep shadow areas and the golden light breaking through. It evokes both the natural world and the craft of cinema.

**Layout Paradigm:**
- Sticky transparent-to-solid navigation that transitions on scroll
- Hero: full-viewport image with logo centered, subtle vignette, and a single line tagline
- Sections alternate between full-bleed image panels and contained text columns
- Projects: horizontal scroll cards with cinematic aspect ratios (16:9)
- About: split layout — large portrait area left, text right

**Signature Elements:**
1. Thin gold horizontal rule (`1px`) used as section separators and accent lines
2. Letterboxed image treatment — thin black bars top/bottom on hero images
3. All-caps spaced tracking for section labels (`PROJECTS`, `ABOUT`, etc.)

**Interaction Philosophy:**
- Navigation links: gold underline slides in from left on hover
- Project cards: subtle scale (1.02) + brightness lift on hover
- Buttons: outlined gold, fill on hover with smooth 300ms transition

**Animation:**
- Scroll-triggered fade-up for text blocks (framer-motion)
- Parallax depth on hero section (image moves slower than scroll)
- Navigation fades from transparent to `rgba(13,11,9,0.95)` on scroll

**Typography System:**
- Display: `Cormorant Garamond` (elegant serif, cinematic, editorial — used for H1/H2)
- Body: `Jost` (geometric sans-serif, clean, modern — used for body and nav)
- Labels: `Jost` all-caps with wide tracking for UI labels
- Hierarchy: Display at 72-96px for heroes, 36-48px for section heads

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

## Option C: "Field Notes" — Documentary Naturalism

**Design Movement:** Editorial naturalism — National Geographic meets Criterion Collection

**Core Principles:**
1. Organic texture and warmth — feels like a field journal, not a tech startup
2. Earth tones with amber accents — rooted in the natural world
3. Mixed typographic registers — serif headlines with monospaced data labels
4. Content-first: generous margins, long-form friendly, no visual noise

**Color Philosophy:**
- Background: `#1a1610` (dark warm brown — like rich soil)
- Accent: `#d4a843` (warm honey gold)
- Text: `#ede0c8` (warm off-white)
- Secondary: `#5c4f3a` (mid-tone warm brown for borders/dividers)
- Rationale: Draws from the earth, not the sky — grounded, serious, naturalistic

**Layout Paradigm:**
- Two-column editorial grid with generous gutters
- Navigation: left-anchored vertical sidebar on desktop, collapses to top bar on mobile
- Projects displayed as a magazine-style feature layout — one dominant image, supporting text
- Strong use of pull quotes and callout typography

**Signature Elements:**
1. Thin ruled lines (`border-top`) in warm brown used as typographic dividers
2. Monospaced labels for metadata (project type, status, year)
3. Subtle paper texture overlay on background sections

**Interaction Philosophy:**
- Hover: color temperature shift (cooler to warmer) rather than scale changes
- Links: underline that fades in
- Minimal animation — the content is the experience

**Animation:**
- Slow fade-in on scroll (opacity 0→1, 600ms)
- No movement animations — stillness reflects the documentary ethos
- Subtle grain animation on hero (CSS noise filter)

**Typography System:**
- Display: `Libre Baskerville` (classic serif, authoritative)
- Body: `Source Sans 3` (clean, legible, editorial)
- Labels: `Space Mono` (monospaced — field notes, data, metadata)

</idea>
</response>

---

## Selected Approach: **Option B — "Golden Frame"**

This approach best matches the brief: dark and cinematic, gold/sunset accents, premium production company feel, conservation/climate aesthetic without being heavy-handed. The A24/prestige TV aesthetic positions Sightline Pictures as a serious, world-class production company.
