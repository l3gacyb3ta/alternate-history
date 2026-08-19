# portal

**Status: measured.** `tokens.css` is transcribed from the live
arcades.agency stylesheet, not reconstructed.

Job: a personal document. An index, a memex, a set of links with opinions
attached. The reader is browsing, not operating.

What makes it portal rather than instrument:
- Ornament lives in *content*, never in chrome. The 88x31 buttons, the webring
  badges, the random are.na image — those are the decoration, and they are
  things rather than styling.
- Zero chrome otherwise. No navbar component, no sidebar, no breadcrumbs.
  A `nav` with four monospace links and that's it.
- Prose measure is hard-capped at 620px even though the page is 960px. The
  page being wider than the text is intentional; tables and grids use the
  extra width, paragraphs never do.

The two moves worth stealing deliberately:
1. **Inverted-block hover.** Solid `#0a0a0a` background, `#fdf6e3` text, no
   transition, no underline change. It reads as a terminal selection.
2. **Narrowing at large viewports.** Over 2500px the body shrinks to 640px.
   Almost nothing does this and it's correct.

Headings: h1 is `font-weight: normal`, h2 is uppercase, h3 is capitalized.
The hierarchy is carried by case and spacing, not weight.
