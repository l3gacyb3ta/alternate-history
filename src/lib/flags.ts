// Flags of the Restored record — real and invented polities in one namespace,
// drawn from the descriptions and artwork in catalog no. 006 ("Our World Today").
// One shared palette across every design; simplified renderings, 4:3.

const INK = '#1a1a1a';
const RED = '#c8322b';
const GOLD = '#f2c744';
const GOLD_DEEP = '#d9a832';
const BLUE = '#2b3a8c';
const GREEN = '#2e7d43';
const PURPLE = '#5b3a80';
const ROSE = '#e25c6e'; // garance rosée
const SILVER = '#c0c4cc';

const box = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">${inner}</svg>`;

export interface FlagDef {
  name: string;
  svg: string;
}

export const FLAGS: Record<string, FlagDef> = {
  'union-sociale': {
    name: 'Union sociale',
    svg: box(
      `<rect width="640" height="480" fill="${ROSE}"/>` +
        `<circle cx="320" cy="240" r="130" fill="${RED}"/>` +
        `<clipPath id="flag-clip-union-sociale"><circle cx="320" cy="240" r="130"/></clipPath>` +
        `<g clip-path="url(#flag-clip-union-sociale)">` +
        `<g fill="${GOLD}">` +
        [123, 175, 227, 279, 331]
          .map((y) => `<rect x="190" y="${y}" width="260" height="26"/>`)
          .join('') +
        `</g><g fill="${GOLD_DEEP}">` +
        [203, 255, 307, 359, 411]
          .map((x) => `<rect x="${x}" y="110" width="26" height="260"/>`)
          .join('') +
        `</g></g>`
    ),
  },

  bund: {
    name: 'Europäischer Bund',
    svg: box(
      `<rect width="640" height="480" fill="${BLUE}"/>` +
        `<g stroke="${SILVER}" stroke-width="11" fill="none">` +
        [
          [320, 115], [408, 152], [445, 240], [408, 328],
          [320, 365], [232, 328], [195, 240], [232, 152],
        ]
          .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="50"/>`)
          .join('') +
        `</g>` +
        `<g fill="${SILVER}">` +
        `<path d="M320,182 L333,227 L378,240 L333,253 L320,298 L307,253 L262,240 L307,227 Z"/>` +
        `<path d="M320,204 L329,231 L356,240 L329,249 L320,276 L311,249 L284,240 L311,231 Z" transform="rotate(45 320 240)"/>` +
        `</g>`
    ),
  },

  fr: {
    name: 'France',
    svg: box(
      `<rect width="640" height="480" fill="${BLUE}"/>` +
        `<rect x="213" width="214" height="480" fill="#ffffff"/>` +
        `<rect x="427" width="213" height="480" fill="${RED}"/>` +
        `<g fill="${RED}">` +
        `<circle cx="66" cy="58" r="10"/><circle cx="47" cy="72" r="10"/>` +
        `<circle cx="54" cy="94" r="10"/><circle cx="78" cy="94" r="10"/>` +
        `<circle cx="85" cy="72" r="10"/><circle cx="66" cy="78" r="13"/>` +
        `</g><circle cx="66" cy="78" r="6" fill="${GOLD}"/>`
    ),
  },

  de: {
    name: 'Federal Republic',
    svg: box(
      `<rect width="640" height="480" fill="${INK}"/>` +
        `<rect y="160" width="640" height="160" fill="${RED}"/>` +
        `<rect y="320" width="640" height="160" fill="${GOLD}"/>`
    ),
  },

  'de-gdr': {
    name: 'German Democratic Republic',
    svg: box(
      `<rect width="640" height="480" fill="${INK}"/>` +
        `<rect y="160" width="640" height="160" fill="${RED}"/>` +
        `<rect y="320" width="640" height="160" fill="${GOLD}"/>` +
        // state emblem, simplified: rye wreath, compass, hammer
        `<circle cx="320" cy="240" r="86" stroke="${GOLD}" stroke-width="15" fill="none"/>` +
        `<circle cx="320" cy="187" r="9" stroke="${GOLD}" stroke-width="9" fill="none"/>` +
        `<g stroke="${GOLD}" stroke-width="11" fill="none">` +
        `<path d="M314,194 L278,286 M326,194 L362,286"/>` +
        `</g>` +
        `<rect x="313" y="222" width="14" height="74" fill="${GOLD}"/>` +
        `<path d="M290,212 L350,212 L358,234 L282,234 Z" fill="${GOLD}"/>`
    ),
  },

  'de-freistaat': {
    name: 'Deutscher Freistaat',
    svg: box(
      `<rect width="640" height="480" fill="${INK}"/>` +
        `<rect y="160" width="640" height="160" fill="${RED}"/>` +
        `<rect y="320" width="640" height="160" fill="${GOLD}"/>` +
        `<circle cx="320" cy="240" r="95" fill="#ffffff"/>` +
        `<g stroke="${INK}" stroke-width="14" fill="none" stroke-linecap="square">` +
        `<polyline points="260,225 260,165 320,215 380,165 380,225"/>` +
        `<polyline points="260,315 260,255 320,305 380,255 380,315"/>` +
        `</g>`
    ),
  },

  'volksstadt-berlin': {
    name: 'Volksstadt Berlin',
    svg: box(
      `<polygon points="0,0 640,0 0,480" fill="${INK}"/>` +
        `<polygon points="640,0 640,480 0,480" fill="${RED}"/>` +
        `<circle cx="320" cy="240" r="105" fill="#ffffff"/>` +
        `<g fill="${INK}">` +
        `<circle cx="304" cy="170" r="10"/><circle cx="336" cy="170" r="10"/>` +
        `<circle cx="320" cy="192" r="26"/>` +
        `<ellipse cx="320" cy="258" rx="36" ry="52"/>` +
        `<ellipse cx="283" cy="246" rx="12" ry="30" transform="rotate(14 283 246)"/>` +
        `<ellipse cx="357" cy="246" rx="12" ry="30" transform="rotate(-14 357 246)"/>` +
        `<ellipse cx="302" cy="315" rx="13" ry="20"/><ellipse cx="338" cy="315" rx="13" ry="20"/>` +
        `</g>`
    ),
  },

  gb: {
    name: 'United Kingdom',
    svg: box(
      `<rect width="640" height="480" fill="${BLUE}"/>` +
        `<g stroke="#ffffff" stroke-width="96"><path d="M0,0 640,480 M640,0 0,480"/></g>` +
        `<g stroke="${RED}" stroke-width="32"><path d="M0,0 640,480 M640,0 0,480"/></g>` +
        `<g stroke="#ffffff" stroke-width="160"><path d="M320,0 V480 M0,240 H640"/></g>` +
        `<g stroke="${RED}" stroke-width="96"><path d="M320,0 V480 M0,240 H640"/></g>`
    ),
  },

  it: {
    name: 'Italy',
    svg: box(
      `<rect width="640" height="480" fill="${GREEN}"/>` +
        `<rect x="213" width="214" height="480" fill="#ffffff"/>` +
        `<rect x="427" width="213" height="480" fill="${RED}"/>`
    ),
  },

  es: {
    name: 'Spain (republic)',
    svg: box(
      `<rect width="640" height="480" fill="${RED}"/>` +
        `<rect y="160" width="640" height="160" fill="${GOLD}"/>` +
        `<rect y="320" width="640" height="160" fill="${PURPLE}"/>`
    ),
  },

  pt: {
    name: 'Portugal',
    svg: box(
      `<rect width="320" height="480" fill="${GREEN}"/>` +
        `<rect x="320" width="320" height="480" fill="${RED}"/>` +
        `<path d="M268,262 C340,300 420,296 500,258" stroke="${GREEN}" stroke-width="18" fill="none"/>` +
        `<polygon points="386,290 442,258 436,302" fill="${GREEN}"/>` +
        `<g fill="${RED}">` +
        `<circle cx="232" cy="196" r="34"/><circle cx="196" cy="222" r="34"/>` +
        `<circle cx="268" cy="222" r="34"/><circle cx="208" cy="260" r="34"/>` +
        `<circle cx="256" cy="260" r="34"/><circle cx="232" cy="234" r="40"/>` +
        `</g>`
    ),
  },
};
