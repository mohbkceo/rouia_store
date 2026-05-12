import { cleanHtml } from "../../utils/cleanHtml.js";

export default function ProductDescription({ html }) {
  if (!html) return null;
  return (
    <div
  className="
    prose
    prose-sm
    sm:prose-base
    max-w-none
    text-brand/70
    leading-relaxed
    prose-img:rounded-2xl
    prose-headings:text-brand
    prose-strong:text-brand
  "
  dangerouslySetInnerHTML={{ __html: cleanHtml(html) }}
/>
  );
}
