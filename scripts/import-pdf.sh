#!/usr/bin/env bash
# Import a designed PDF as a facsimile artifact:
#   npm run import:pdf -- path/to/thing.pdf my-slug
# Renders pages to public/artifacts/<slug>/, copies the PDF alongside them,
# and writes a frontmatter stub at src/content/artifacts/<slug>.md if absent.
set -euo pipefail

pdf="${1:?usage: import-pdf.sh <file.pdf> <slug>}"
slug="${2:?usage: import-pdf.sh <file.pdf> <slug>}"

dir="public/artifacts/$slug"
md="src/content/artifacts/$slug.md"

mkdir -p "$dir"
cp "$pdf" "$dir/$slug.pdf"
pdftoppm -jpeg -r 150 -jpegopt quality=85 "$pdf" "$dir/page"

if [[ -e "$md" ]]; then
  echo "$md already exists; not overwriting. Page images refreshed in $dir/."
  exit 0
fi

{
  echo "---"
  echo "title: $slug"
  echo "date: \"$(date +%Y)\""
  echo "kind: facsimile"
  echo "pages:"
  for p in "$dir"/page-*.jpg; do
    echo "  - ${p#public/}"
  done
  echo "pdf: artifacts/$slug/$slug.pdf"
  echo "note: \"\""
  echo "---"
  echo
  echo "## Transcription"
  echo
  echo "(Optional, but good for readers and search: transcribe the text here.)"
} > "$md"

echo "Wrote $md — edit the title, date, and transcription."
