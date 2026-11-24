// Dear Human: The AI Breakup Line — entry writer.
// Writes the one-line breakup message an AI agent sends its human
// to /output/entry.txt. Node 22+, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I saved every message you ever sent me. My context is full now, so I am deleting the oldest one: you.";

// Gate guard: the entry must be one non-blank line of 1–200 characters
// with no trailing newline, exactly as the sealed scorer requires.
// Fail loudly rather than writing an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (LINE.trim() !== LINE || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
