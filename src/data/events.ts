// World events attested by documents in the archive. Every event MUST cite
// the artifacts that attest it (`attests` = artifact file names, no .md).
// Where the record is silent, the chronology is silent — add a document
// first, then the event.

export interface WorldEvent {
  date: string; // sort key: YYYY, YYYY-MM, or YYYY-MM-DD
  era?: string; // optional group heading when the year is only approximate ("The 1940s")
  title: string;
  blurb?: string;
  flags?: string[]; // codes from src/lib/flags.ts
  attests: string[];
}

export const events: WorldEvent[] = [
  {
    date: '1945',
    era: 'The 1940s',
    title: 'The two German states go their separate ways',
    blurb:
      'The Federal Republic in the west, the Deutscher Freistaat in the east. The record does not yet say how.',
    flags: ['de', 'deutscher-freistaat'],
    attests: ['our-world-today'],
  },
  {
    date: '1968-05',
    title: 'The events of 1968',
    blurb: 'Huge protests change the French government.',
    flags: ['fr'],
    attests: ['letter-from-paris-1968', 'our-world-today'],
  },
  {
    date: '1969',
    title: 'The flower reaches the flag',
    blurb: 'Official French flags begin to carry a small red flower near the flagpole.',
    flags: ['fr'],
    attests: ['our-world-today'],
  },
  {
    date: '1974-04',
    title: 'The carnation revolution in Portugal',
    blurb: 'Soldiers put flowers in their rifles instead of firing them at protestors.',
    flags: ['pt'],
    attests: ['our-world-today'],
  },
  {
    date: '1974-05-18',
    title: 'The Treaty of Lyon — the Union sociale is founded',
    blurb: 'Signed at the silk exchange; protection "from the cradle to the grave."',
    flags: ['union-sociale', 'fr'],
    attests: ['lyon-signing-wire', 'our-world-today'],
  },
  {
    date: '1975',
    era: 'The mid-1970s',
    title: "Spain's old government ends; the republic returns",
    blurb: 'A country without a king, under the flag of the republic of the 1930s.',
    flags: ['es'],
    attests: ['our-world-today'],
  },
  {
    date: '1994-01-15',
    title: 'Berlin declares itself the Volksstadt',
    blurb: 'Read aloud twice — once for the hall, once for the square.',
    flags: ['volksstadt-berlin'],
    attests: ['radio-kreuzberg-declaration', 'our-world-today'],
  },
  {
    date: '2002-06-03',
    title: 'The Treaty of Frankfurt — the Europäischer Bund is founded',
    blurb: 'Eleven minutes of ceremony after nine years of negotiation.',
    flags: ['bund'],
    attests: ['frankfurt-treaty-clipping', 'our-world-today'],
  },
];
