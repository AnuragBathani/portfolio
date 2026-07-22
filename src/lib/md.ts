/**
 * Minimal inline markdown for trusted data strings: **bold** and *italic*.
 * Returns an HTML string for use with Astro's `set:html`.
 *
 * Order matters: escape HTML entities FIRST (so `&` in "MITRE ATT&CK" becomes
 * `&amp;`), then apply the markdown replacements.
 */
export function md(input: string): string {
  const escaped = input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-medium text-white">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
}
