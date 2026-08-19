import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artifacts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artifacts' }),
  schema: z.object({
    title: z.string(),
    // In-world date. "YYYY", "YYYY-MM", or "YYYY-MM-DD" — sorted lexically.
    date: z.string(),
    // Optional override for how the date is printed ("circa September 2010").
    dateDisplay: z.string().optional(),
    kind: z
      .enum(['document', 'letter', 'telegram', 'memo', 'clipping', 'transcript', 'facsimile'])
      .default('document'),
    author: z.string().optional(),
    recipient: z.string().optional(),
    // Clipping: the publication. Transcript: the station or venue.
    source: z.string().optional(),
    // In-world reference number, if the document carries one. Never invented by the site.
    ref: z.string().optional(),
    series: z.string().optional(),
    // Polities appearing in the document — codes from src/lib/flags.ts.
    flags: z.array(z.string()).default([]),
    // Archivist's note — Arcade's out-of-world voice, rendered apart from the document.
    note: z.string().optional(),
    sample: z.boolean().default(false),
    // Facsimile only: page images under public/, and the source PDF.
    pages: z.array(z.string()).optional(),
    pdf: z.string().optional(),
  }),
});

export const collections = { artifacts };
