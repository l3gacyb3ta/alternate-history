const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// "1974-05-18" → "18 May 1974"; "2010-09" → "September 2010"; "1968" → "1968".
export function displayDate(date: string, override?: string): string {
  if (override) return override;
  const [y, m, d] = date.split('-');
  if (d) return `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`;
  if (m) return `${MONTHS[Number(m) - 1]} ${y}`;
  return y;
}

export function catalogNumber(n: number): string {
  return String(n).padStart(3, '0');
}

// import.meta.env.BASE_URL may or may not carry a trailing slash.
export function withBase(base: string, path: string): string {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
