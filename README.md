# althistdocs

An archive of documents from timelines that never happened, by Arcade Wise.
Static site built with [Astro](https://astro.build), styled per
`arcade-house-style/` (factbook mode). No client-side JavaScript.

## Working on it

```sh
nix develop          # node + poppler
npm install          # first time only
npm run dev          # http://localhost:4321/althistdocs
npm run build        # static site → dist/
```

## Adding an artifact (the 30-second version)

Drop a markdown file in `src/content/artifacts/`. Only `title` and `date` are
required:

```yaml
---
title: "Wire from the Lisbon station"
date: "1948-03-11"       # in-world date: YYYY, YYYY-MM, or YYYY-MM-DD
kind: telegram           # letter | telegram | memo | clipping | transcript | facsimile | document
---
Body in plain markdown.
```

Everything below is optional:

| field | what it does |
|---|---|
| `dateDisplay` | overrides how the date prints ("circa September 2010") |
| `author` / `recipient` | in-world names; the memo layout uses them as FROM/TO |
| `source` | clipping: the publication; transcript: the station |
| `ref` | an in-world reference number, if the document carries one |
| `series` | groups multi-part correspondence |
| `flags` | polities appearing in the document, e.g. `[union-sociale, fr]` — codes from `src/lib/flags.ts`; shown in the catalog and provenance |
| `note` | your out-of-world archivist's note, shown apart from the document |
| `sample` | marks placeholder content in the catalog |

The catalog sorts by `date` (lexically — zero-pad months and days). Prev/next
links follow chronology.

## Adding a designed PDF (facsimile)

```sh
npm run import:pdf -- path/to/thing.pdf my-slug
```

This renders pages to `public/artifacts/my-slug/`, copies the PDF for
download, and stubs `src/content/artifacts/my-slug.md`. Edit the stub's title
and date, and add a transcription in the body — it's what readers with screen
readers (and search engines) get.

On wide screens the PDF itself is embedded in the browser's native viewer
(zoomable, searchable). The page images are only the fallback for phones,
where inline PDF embedding is unreliable — if you don't care about that,
delete the `pages:` list from the stub and skip the images entirely; the
viewer and download link are driven by `pdf:` alone.

## The chronology

`/chronology` merges two registers on one spine: world events and the
documents themselves. Events live in `src/data/events.yaml` — same syntax as
artifact frontmatter, comments welcome; the header of that file documents the
fields. Each event must cite the artifacts that attest it
(`attests: [artifact-file-name]`); where the record is silent, the chronology
stays silent. Add a document first, then the event.

The build **fails on purpose** if an event uses a flag code that isn't in
`src/lib/flags.ts` or cites an artifact that doesn't exist — a typo can't
silently render as a missing glyph or `no. 000`.

Flags are inline SVGs in `src/lib/flags.ts`, real and invented polities in one
namespace, all drawn from one shared palette (that's what makes invented
things look like they come from one place). Add a flag there and use it in an
event's `flags: [...]`, or render one anywhere with
`<Flag code="union-sociale" />`.

## Deploying

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`
(enable Pages → Source: GitHub Actions in the repo settings). The site is
configured in `astro.config.mjs` for `arcadewise.github.io/althistdocs`; if
the repo name or domain changes, change `site`/`base` there.

## License

Everything in this repository — documents, world, and site — is
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/),
© Arcade Wise. Full legal code in [LICENSE.md](LICENSE.md).

## Design notes

The design rules live in `arcade-house-style/SKILL.md` — read it before
restyling anything. Two registers, kept separate on purpose: documents speak
in-world (their typography is the data — mono caps *is* a telegram), and the
archivist's notes in muted grey are Arcade speaking as themself. One deliberate
deviation: newspaper clippings set their body in Georgia (a system serif) as
diegetic printed-matter typography.
