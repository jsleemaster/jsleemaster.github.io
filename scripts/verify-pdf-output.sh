#!/usr/bin/env bash
set -euo pipefail

PDF_PATH="${1:-resume/resume.pdf}"
TEXT_PATH="$(mktemp)"

if ! command -v pdftotext >/dev/null 2>&1; then
  echo "::error::pdftotext is required. Install poppler-utils."
  exit 1
fi

if ! command -v pdffonts >/dev/null 2>&1; then
  echo "::error::pdffonts is required. Install poppler-utils."
  exit 1
fi

pdftotext "$PDF_PATH" "$TEXT_PATH"

grep -q "이순명" "$TEXT_PATH" || {
  echo "::error::PDF text layer does not contain the full Korean name."
  exit 1
}

grep -q "도전에 두려움" "$TEXT_PATH" || {
  echo "::error::PDF text layer does not contain the expected summary phrase."
  exit 1
}

FONTS_OUTPUT="$(pdffonts "$PDF_PATH")"

grep -Eiq "Pretendard|Noto.*(KR|CJK)" <<< "$FONTS_OUTPUT" || {
  echo "::error::PDF does not appear to embed a Korean-capable font."
  echo "$FONTS_OUTPUT"
  exit 1
}

echo "PDF output verification passed."
