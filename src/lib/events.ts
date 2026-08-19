import { parse } from 'yaml';
import { z } from 'astro/zod';
import raw from '../data/events.yaml?raw';
import { FLAGS } from './flags';

const eventSchema = z.object({
  date: z.coerce.string(),
  era: z.string().optional(),
  title: z.string(),
  blurb: z.string().optional(),
  flags: z.array(z.string()).default([]),
  attests: z.array(z.string()).min(1, 'every event must cite at least one artifact'),
});

export type WorldEvent = z.infer<typeof eventSchema>;

function load(): WorldEvent[] {
  const result = z.array(eventSchema).safeParse(parse(raw));
  if (!result.success) {
    throw new Error(`src/data/events.yaml is malformed:\n${result.error.message}`);
  }
  for (const event of result.data) {
    for (const code of event.flags) {
      if (!FLAGS[code]) {
        throw new Error(
          `events.yaml: "${event.title}" uses unknown flag code "${code}" — ` +
            `valid codes: ${Object.keys(FLAGS).join(', ')}`
        );
      }
    }
  }
  return result.data;
}

export const events = load();
