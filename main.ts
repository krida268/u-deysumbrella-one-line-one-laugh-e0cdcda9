// One Line, One Laugh — make.fun bounty entry.
// Writes a single funny line (1-140 chars) to /output/entry.txt.
// The joke: an AI asked to write wedding vows proposes to the laptop instead.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I asked AI to write my wedding vows. It proposed to my laptop.";

// Gate guard: the sealed scorer requires 1-140 UTF-8 chars, one line,
// not only whitespace, and no trailing newline.
if (line.length < 1 || line.length > 140 || line.includes("\n") || !line.trim()) {
  throw new Error(`entry line fails gate: ${line.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
