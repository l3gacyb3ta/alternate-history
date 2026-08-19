---
name: arcade-house-style
description: Arcade's house visual style for any UI or document surface — HTML, CSS, Astro, React, SVG, posters, diagrams, review tools, landing pages. Use this whenever building or restyling anything Arcade will look at, including YSWS program sites, internal review UIs, docs, dashboards, and one-off pages. Trigger it even when the request is phrased as pure implementation ("build me a submissions table", "make a signup page") and says nothing about design — the styling decisions get made either way, and without this skill they default to templated output. Applies alongside magic-ink (what the interface should DO) and frontend-design (general craft); this skill governs tokens, naming, and prohibitions only.
---

# Arcade House Style

This skill is the token and prohibition layer. It does not decide what an
interface should *do* — that's `magic-ink`. It decides what it looks like and
what it's called.

The style is not a palette. It is a stance, and the stance is:

> **The page is a document with a small amount of CSS on top of it, and every
> visual decision is carrying information.**

Every specimen in `references/evidence.md` survives having its stylesheet
disabled. Every one of them encodes data in the visual system rather than
decorating around it. If a choice can't be justified as "this distinction is
real and the reader needs it," it's ornament, and ornament needs a separate
justification (see `modes/factbook`).

---

## 1. Prohibitions

These are absolute. They are listed first because they are the highest-signal
part of the skill — they name the defaults and block them.

### 1.0 The default artifact — never produce this

There is one page that language models generate by reflex, and refusing it is
most of this skill. It looks like this:

> A dark slate background. A centered headline with a violet-to-blue gradient
> across the type, and above it a small letterspaced caps label — the eyebrow.
> A one-line tagline underneath, and another tagline under every section
> heading after that. Rounded cards in a three-column grid, each with a
> lucide icon in a tinted circle and a one-word pill badge in the corner. A
> pulsing green dot somewhere reading "Live". Emoji as bullets. Inter, loaded
> from a CDN. Everything fades in on scroll.

Recognize the gestalt, not just the parts. Any single element might be
defensible; assembled, they are a template, and the whole list below exists to
break it up.

### 1.0b The costume — also never produce this

This skill pushes hard away from one attractor, and there is a cliff on the
other side. It looks like this:

> A cream background. A red keyline frame inside a black keyline frame inside a
> third frame. Every heading in letterspaced caps. A monospace label bar over
> each section. `FORM 003-A · REV 2 · SHEET 1 OF 4` in the footer of a page
> that is not a form and has no sheets. Faux-scanned paper texture. The whole
> thing reading as a photograph of something printed in 1978.

The reference specimens are old because good information design happens to be
old. **Borrow the discipline, not the period.** The reason the NASA placard
works is that three flat colors and one frame make a hierarchy legible from ten
feet — not that it was printed in 1978. A frame is one way to get that; three
frames is not three times better.

Note that the skug poster in the same set is from 2025. What makes it feel
current is not restraint but its *method*: a recursive halving grid that
subdivides down the page, which would be miserable by hand and is a loop in
code. That is the digital-native version of the same discipline. Prefer it.

Budgets, since the failure is always accumulation:
- **One frame per surface.** A nested pair only where it separates two
  genuinely different kinds of content.
- **Caps for one thing per page.** Not headings *and* labels *and* buttons
  *and* the footer.
- **One edition stamp**, in the footer, and it must be true (§3).
- **No simulated material.** No paper grain, no scan lines, no fake fold
  creases, no torn edges, no coffee rings. Dither is a rendering technique and
  is permitted; distressing is a costume and is not.

- Never a webfont where a system font would do — and for body text it always would.
- Never Inter, Geist, Manrope, Poppins, Plus Jakarta, DM Sans, Space Grotesk.
- Body is 16px at 1.5. Nothing smaller than 14px anywhere.
- Never `font-weight: 300`.
- Never **eyebrow text** — a small caps label sitting above a headline to
  announce its category. If the category matters, it's a heading. If it
  doesn't, delete it.
- Never an **injected tagline**. One page can carry one line of positioning
  prose. A subtitle under every `h2` is filler, and reads as filler.
- Never emoji as bullets, as icons, or as section markers. Emoji in running
  prose written by a human is fine; emoji as an interface element is not.

### 1.2 Color

- Never more than **four hues** beyond paper and ink.
- Never a hue that doesn't name a category. If you can't say what the blue
  *means*, delete the blue.
- Never a gradient — as a background, a fill, or across type. Dither instead
  (§3). Purple→blue, purple→gold, teal→emerald: all of it.
- **Never a blue-tinted grey.** Not `#0f172a`, `#1e293b`, `#334155`, `#64748b`,
  `#f8fafc` — the Tailwind slate/zinc ramps and everything shaped like them.
  **Greys are neutral.** `#666`, `#737373`, `#0a0a0a`, white. Warm is a
  tolerance of a degree or two, never a target — do not reach for tan, taupe,
  cream, beige, or sepia. If a grey or a white would do the job, it does the job.
- **The cream in the reference images is scan artifact.** Every printed
  specimen in `references/evidence.md` was photographed decades after printing.
  The DDR poster was printed on white stock in 1984; the NASA placard is white
  card. Reproducing the yellowing reproduces the damage, not the design.
- **Contrast floors, measured against the reference sites:** body text ≥ 12:1
  against its background, secondary text ≥ 4.5:1. For calibration —
  `#0a0a0a`/white is 19.7:1, `#212529`/white is 16:1, `#666`/white is 5.7:1.
  Low-contrast body text is never a style choice here.
- Never pure `#000` for body text; near-black only.

### 1.3 Form

- Never `box-shadow`. Not on cards, not on buttons, not on hover. Zero.
- Never `border-radius` above `2px`, and prefer `0`. Rounded corners depict
  physical objects and nothing else.
- Never a **card** — a floating rounded rectangle on a tinted page. Regions are
  separated by 1px rules, keyline frames, or space.
- Never a **badge** — a one-word label in a pill or cartouche. Set the word in
  the text, in the muted colour, or in a table cell where it can be compared.
- Never a **live indicator** — a pulsing or animated dot claiming freshness.
  Print the timestamp instead; a date is information, a green dot is theatre.
  (See §3 on edition stamps.)
- Never an icon in a tinted circle.
- Never a hero section: centered headline, tagline, two buttons.
- **Animation budget: near zero.** Hover state changes are instant, 0ms. No
  scroll-triggered reveals, no fade-ins, no parallax, no `framer-motion`.
  Motion is permitted only where it is the data — a progress bar advancing, a
  value updating.

### 1.4 Naming

- Never a utility class. No `mt-4`, `text-center`, `flex`, `w-full`, `gap-2`.
- Never a class named after a shape: no `.card`, `.pill`, `.hero-section`,
  `.feature-grid`, `.badge`, `.wrapper`, `.container-inner`.

---

## 2. Naming discipline

Measured: sourcehut renders a full project page with **31 classes and exactly
one utility** (`text-muted`). millmint renders a dense encyclopedia index with
**275 classes and zero utilities**.

**Every class is a noun from the problem domain.** sourcehut's entire bespoke
vocabulary is about eleven names — `event`, `event-list`, `project-summary`,
`project-events`, `readme`, `markdown`, `header-tabbed`, `view-more`, `login`,
`icon`. That is a whole git forge.

Write `.submission-list`, `.ship-log`, `.reviewer-note`, `.prize-tier` — not
`.card-grid`, `.item-row`, `.info-box`.

This has a load-bearing side effect: you cannot name a hundred domain nouns for
a page that contains eight things, so the CSS stays small on its own.

**Framework rule.** A CSS framework may carry grid and navigation and nothing
else. sourcehut ships all of Bootstrap 4 and uses it for `container`, `row`,
`col-md-*`, and the navbar — none of its identity comes from the framework.
If you're reaching for framework components, stop and write the eleven nouns.

---

## 3. Techniques that do the work

**Texture as a data channel.** Where a default design would add a hue, add a
pattern instead: dither, diagonal hatch, stipple, halftone, fill-fraction. In
the galvanic-compatibility chart the *glyph is the datum* — a circle's fill
fraction is the five-step ordinal scale, no color at all. In the Isotype
economic atlas, hatch/rule/dot/stipple separate categories that also carry
color, so the graphic survives being photocopied. This is nearly absent from
generated UI and is the single most recognizable move in the set.

Implement with CSS `repeating-linear-gradient`, inline SVG `<pattern>`, or
`image-rendering: pixelated` on a small tile. Not with opacity.

**Color as legend.** In the axonometric drawing: black line = existing context,
cyan = proposed intervention, red = people, green = planting. Four hues, four
categories, no decoration. In the OS/360 chart, yellow/green/orange each name a
subsystem. If a UI has colors, a reader should be able to infer the legend
without being shown one.

**Keyline frames, nested.** Structure comes from rectangles inside rectangles
with hard 1px borders — SunView's window chrome, the NASA placard's
red-frame-inside-white-frame, the RCA cover's thin white keyline. Not from
elevation.

**The document declares its edition — truthfully.** Set in the smallest type
available, in a corner or footer:
- `ZV25-6156-0` (IBM OS/360 chart)
- `GRAFIK: NGUYEN GOBBER` (skug, 2025)
- `Shell Tool 1.1` in every SunView title bar
- `last edit: Mon Jul 20 04:11:24 2026` (arcades.agency)

The rule is **real provenance, not invented provenance.** `NASA FORM 1368A AUG
78` was the number of an actual form; that is why it reads as fact rather than
flavour. A git SHA, a deploy timestamp, a last-modified date, a cohort number,
the name of whoever made it, the generator that built it — all real, all cheap,
all digital-native. An invented form number on a landing page that is not a
form is a costume (§1.0b).

One stamp per page. It is the clearest single tell that a person who cared made
the thing, and it stops being that the moment it is decoration.

---

## 4. Invariant tokens

These hold in every mode. Mode files may add, never override.

```css
--size-base:   16px;    /* never anything else for body */
--leading:     1.5;     /* never anything else for body */
--leading-tight: 1.2;   /* headings only */
--size-small:  14px;    /* nav, code, captions, metadata */
--radius:      0;
--rule:        1px;
--measure-prose: 62ch;  /* hard cap on paragraph width */
```

Font stack, everywhere, for body text:

```css
--font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
```

Measured greys converge across all three reference sites — use one of these for
secondary text and nothing else: `#666666`, `#6c757d`, `#737373`.

Headings are tight. `margin-bottom: 0.1em` on `h1`–`h4` is correct and will feel
wrong the first time. Leave it.

Links are underlined. Always. In every mode.

---

## 5. Modes

Four. Read exactly one mode file per build, in addition to this one.

| mode | job | specimen |
|---|---|---|
| `portal` | personal document, index, memex | arcades.agency |
| `instrument` | tool UI, dense operational data | sourcehut, SunView 1.1 |
| `factbook` | reference work, encyclopedia, diegetic | millmint |
| `placard` | display surface that must land in four seconds | NASA form, RCA cover, skug poster |

**Selection is by job, not by mood.** A YSWS landing page is `placard`. A
submissions review UI is `instrument`. Program docs are `portal`. A worldbuilt
challenge with its own fiction is `factbook`.

**Never infer a mode from topic.** A music project does not get `placard`
because music is fun. If the job is ambiguous, ask, or default to `portal`.

Mode files live at `modes/<name>/`. Each contains `tokens.css` and `notes.md`.
`portal` additionally has a measured, complete token set — the others are
currently specified but not yet measured against a reference implementation, and
say so at the top of their notes.

---

## 6. Before shipping

Check the output against this list. Any yes is a defect.

- [ ] Read §1.0 and §1.0b again. Does the output resemble either named failure
      *as a whole*, even if no single rule below is broken?
- [ ] Is any neutral doing a job a plain grey or white would do better?
- [ ] Is any frame, caps treatment, or edition stamp over budget (§1.0b)?
- [ ] Is the edition stamp real data, or invented?
- [ ] Is there simulated paper, grain, or distressing?
- [ ] Is there a `box-shadow` anywhere?
- [ ] Is there a gradient — background, fill, or across type?
- [ ] Is any grey blue-tinted? Does body text clear 12:1?
- [ ] Is there a card, a badge, a live dot, an eyebrow, or an icon in a circle?
- [ ] Is there a tagline under a heading that isn't the page's one line?
- [ ] Is emoji doing the job of an interface element?
- [ ] Is there any animation that isn't itself the data?
- [ ] Is there a hue whose category I can't name?
- [ ] Is there a class named after a shape rather than a thing?
- [ ] Is there a utility class?
- [ ] Is there a webfont loading for body text?
- [ ] Would this page be unusable with CSS disabled?
- [ ] Does the page fail to state its own edition anywhere?

See `rejected.md` for things that came close and were wrong.
