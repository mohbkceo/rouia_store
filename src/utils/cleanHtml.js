// Basic HTML sanitizer — replace with DOMPurify if available
export function cleanHtml(html) {
  if (typeof window !== "undefined" && window.DOMParser) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    // Remove script/style tags
    doc.querySelectorAll("script, style").forEach((el) => el.remove());
    return doc.body.innerHTML;
  }
  return html;
}
