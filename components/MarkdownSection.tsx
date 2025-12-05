import { loadMarkdown } from "@/lib/loadMarkdown";

export default async function MarkdownSection() {
  const htmlContent = await loadMarkdown("skillList.md");

  return (
    <section className="prose dark:prose-invert mx-auto">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </section>
  );
}
