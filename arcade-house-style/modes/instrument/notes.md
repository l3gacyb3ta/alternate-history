# instrument

**Status: specified, not yet measured.** No reference implementation in this
folder. Derived from sourcehut (sr.ht) and SunView 1.1. Build one and this
becomes measured.

Job: operate on dense data. Submissions to triage, deploys to inspect, logs to
read. The user is working, and will be here for an hour.

Rules:
- **Refuse to be pretty.** sourcehut sets `min-width: 992px !important` — it
  declines to be a phone site rather than degrading into one. For an internal
  review UI, do the same. Do not spend effort on a mobile layout nobody uses.
- **Tables, not lists of cards.** Cell padding `2px 6px`. Tight enough that
  forty rows fit on a screen.
- Monospace for anything that is an identifier: hashes, timestamps, handles,
  file paths, IDs. Sans for prose.
- One accent hue, used only for state (pass/fail/pending). Everything else is
  ink, muted, and rule.
- Tabs over accordions. Inline expansion over modals. There are no modals.
- SunView's contribution: **1-bit thinking**. Where you'd reach for a fifth
  grey, reach for a dither pattern or a hard border instead.

Vocabulary check: eleven domain nouns should cover the whole tool. If you need
thirty, the page is doing too much.
