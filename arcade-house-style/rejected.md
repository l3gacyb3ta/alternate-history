# rejected

Things that came close and were wrong. One line each on why. Append as you go —
this file encodes more taste than any positive description will.

- **Bootstrap/Bulma component sets** — fine as a grid and navbar, never as an
  identity. Using `.btn-primary` means the button was designed by someone who
  had never seen the page.
- **Tailwind utility classes** — they make the markup the stylesheet, which
  destroys the domain-noun naming that most of this style depends on.
- **The tinted-card layout** (white rounded rect on `#f9fafb`) — the single most
  templated pattern on the web. Separate regions with a 1px rule instead.
- **Smooth gradients as background fields** — dither instead. The skug poster
  and every 1-bit interface get more depth out of halftone than a gradient does.
- **Sourcehut's colors** — they're stock Bootstrap 4 (`#007bff`, `#dc3545`) that
  nobody ever changed. Admire the density and the tables, not the palette.
- **Slate/zinc greys in genuine dark mode** — the closest call on the list. A
  blue-tinted dark grey is defensible in isolation, and plenty of good dark
  interfaces use one. Banned anyway, because it never arrives in isolation: it
  arrives with the gradient headline and the pulsing dot. arcades.agency's dark
  mode is `#eee` on `#171717` — neutral, and 15:1. Use that shape instead.
- **The pulsing "Live" dot** — it looks like information and carries none. It
  says data *could* be fresh, not that it *is*. A printed timestamp is strictly
  more informative and costs the same. Related: three of them on one page has
  been observed in the wild.
- **One-word pill badges** — the appeal is real (status wants to be scannable),
  the execution isn't. A pill can't be sorted, compared, or aligned. Put the
  status in a table column where forty of them line up.
- **Emoji as bullets** — reads as enthusiasm substituting for hierarchy, and
  breaks the greyscale discipline every specimen in this skill maintains.
- **"Greys are neutral or warm"** — the original wording of the blue-grey ban.
  Naming warm as the sanctioned alternative to blue read as an instruction, and
  output drifted to tan and taupe where a plain grey or white was right. A
  prohibition must not offer an escape hatch. Now: greys are neutral, warm is a
  tolerance of a degree or two, never a target.
- **Invented form numbers** — `FORM 003-A · REV 2 · SHEET 1 OF 4` on a landing
  page with no sheets. The NASA stamp works because 1368A was a real form
  number. Fabricated provenance is costume; a git SHA or a deploy date is the
  same gesture and is true.
- **Simulated paper** — scan lines, grain overlays, fold creases, torn edges.
  Dither is a rendering technique and stays; distressing pretends the artifact
  is a photograph of an object, which is the whole failure in one move.
- **Frames, caps, and stamps used together without budget** — each is
  defensible once. Stacked on one surface they stop reading as information
  design and start reading as an industrial-manufacturer impression.
