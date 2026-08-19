# evidence

Measurements taken 2026-07-27 from live stylesheets, so future revisions don't
re-derive them from memory. Where a claim in SKILL.md is contestable, it should
be traceable to a number here.

## Typography, three sites

|              | arcades.agency | sr.ht | millmint |
|---|---|---|---|
| body font    | `sans-serif` | `sans-serif` (overrides its own stack back to it) | system stack |
| base / lead  | 16px / 1.5 | 1rem / 1.5 | 16px / 1.5 |
| text         | `#0a0a0a` | `#212529` | `#262626` |
| muted        | `#666666` | `#6c757d` | `#737373` |
| accent       | inverted block on hover | `#007bff` (stock Bootstrap, unchanged) | `#de1857` |
| measure      | 620px prose / 800px main | 960px container | 85% |
| radius       | 0 | dead Bootstrap rules | dead rules |

No webfont for body text on any of the three. All three at 16/1.5. The three
muted greys are the same grey.

## Class vocabulary

```
sourcehut : 31 classes on the entire page,  1 utility (text-muted)
millmint  : 275 classes on the entire page, 0 utilities
```

sourcehut's complete bespoke set: `event`, `event-list`, `header-extension`,
`header-tabbed`, `icon`, `login`, `markdown`, `project-events`,
`project-summary`, `readme`, `view-more`.

sourcehut ships Bootstrap 4 and does not use it: `form-control` ×100,
`input-group-prepend` ×40, `custom-select` ×36, `btn-primary` ×20, `.flex` ×60
defined — **zero** used on the page. Live Bootstrap: `container`, `row`,
`col-md-*`, navbar classes, `nav-tabs`, `text-muted`.

millmint contains **no Bootstrap signatures at all**. An earlier reading called
it Bootstrap-derived on the basis of a `.25rem` border-radius; that was
numerology and it was wrong.

millmint flag namespace: 225 defined, 108 two-letter ISO, 117 invented.

## Image set, hue counts

Ten specimens; hues excluding paper and ink, and what each names.

1. SunView 1.1 — 0 (1-bit; dither carries tone)
2. Galvanic compatibility chart — 0 (fill-fraction glyph carries a 5-step scale)
3. Architectural axonometric — 3: cyan=proposed, red=people, green=planting
4. Invented flag sheet — ~6 flats shared across two dozen designs
5. NASA Form 1368A — 2: red field, blue type
6. IBM OS/360 chart — 3: yellow=job mgmt, green=data mgmt, orange=task mgmt
7. RCA Spectra 70 — 2: red duotone, violet subhead
8. DDR 35 poster — 3: orange, blue, white (see note)
9. Isotype economic atlas — 3 + four distinct hatch/stipple patterns
10. Salon skug poster — 3: red, acid yellow, grey

**Note on the neutrals.** Specimens 2, 5, 6, 8, and 9 are photographs of paper
printed between 1966 and 1984. The cream/tan cast in those scans is the stock
yellowing, not a chosen colour — the DDR poster and the NASA placard were both
white. Recorded here as white so the hue counts are not misread as a licence to
use cream. See SKILL.md §1.2.

Maximum is four. In 3, 6, and 9 the color is literally a legend. Zero shadows
across all ten. Zero rounded corners except where depicting a physical object.

Edition-stamp instances: `NASA FORM 1368A AUG 78 PREVIOUS EDITION IS OBSOLETE`;
`ZV25-6156-0`; `GRAFIK: NGUYEN GOBBER`; `Shell Tool 1.1` in every title bar;
`last edit: Mon Jul 20 04:11:24 2026` on arcades.agency.
