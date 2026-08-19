# placard

**Status: specified, not yet measured.** Derived from NASA Form 1368A, the RCA
Spectra 70 cover, the DDR 35 poster, and the Salon skug poster.

Job: land in four seconds. YSWS landing pages, challenge announcements, the
thing a sixteen-year-old sees before deciding whether to care.

This is the mode with the most room to be loud, and it is still not a hero
section. Rules:

- **Three colors, flat, no gradients.** NASA: red/blue/white. RCA:
  black/red/violet. skug: red/acid-yellow/grey. DDR: orange/blue/white.
  Pick three, use them at full saturation, never tint them. The cream you see
  in the reference scans is fifty years of paper aging — these were printed on
  white. Default to white or a neutral grey; never tan or sepia.
- **One keyline frame** carries the structure — a nested pair at most, and only
  where it separates two genuinely different kinds of content. The NASA placard
  has exactly one nesting. Three frames is a costume (SKILL.md §1.0b).
- **Display type is huge and set in caps or near-caps**, with a horizontal rule
  used as a separator inside the type block rather than around it.
- **Duotone photography**, never full color, never a stock photo at 40% opacity
  with text on top. RCA's cover is one red-channel photograph on black.
- **A layout system, visible.** skug's poster is a recursive halving grid — the
  same tile subdivides down the page, labels riding black bars at each level.
  DDR's is a stepped skyline. There is always a rule producing the composition,
  and the viewer can see what the rule is.
- Dithered halftone for any large color field. Never a smooth gradient. Render
  it live — CSS `repeating-linear-gradient`, an SVG `<pattern>`, a canvas
  ordered dither. Never a paper-texture PNG laid over the top.
- One edition stamp in the footer, carrying real data — build SHA, deploy date,
  cohort, designer (SKILL.md §3). Never an invented form number.

**Digital-native check.** Three of the four specimens are 1970-84 and this mode
drifts toward period cosplay if left alone. The corrective is method, not
restraint: skug (2025) earns its look from a recursive halving grid that is a
loop in code. Prefer composition rules that are *generated* — subdivision,
tiling, a grid derived from the actual number of items, dither computed at
render. A layout that could only exist because a machine drew it is the point.
A layout that pretends a machine didn't is the failure.
