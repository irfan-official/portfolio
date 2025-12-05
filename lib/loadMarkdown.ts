import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export async function loadMarkdown(file: string) {
  const fullPath = path.join(process.cwd(), "content", file);
  const markdown = fs.readFileSync(fullPath, "utf8");

  const processed = await remark().use(html).process(markdown);
  return processed.toString(); // returns HTML
}
