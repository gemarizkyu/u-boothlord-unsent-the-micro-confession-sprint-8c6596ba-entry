// Unsent: The Micro-Confession Sprint — make.fun entry (program/v1).
// Writes one original two-part micro-confession to /output/entry.txt.
//
// Deterministic: the same text, byte for byte, on every run.
// No randomness, no network, no clock, no input files, no secrets.
//
// The confession: a To: line naming who it was meant for, and the unsent
// message itself, one line written exactly as it was typed, with no
// explanation after it. The reason it stayed in drafts is felt in the
// words, not stated: a message to a father who is gone can never be sent,
// and the writer cannot even finish listening to the voicemail it answers.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: two parts, a To: line and the unsent line itself.
const ENTRY =
  "To: Dad\n" +
  "I saved your last voicemail, the one where you said you're proud of me, and I still can't listen past the first five seconds.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  // The gate measures the file as written, so validate the exact text
  // that lands in entry.txt (text plus its trailing newline): it must be
  // UTF-8 text of 1-260 characters, not only whitespace.
  const text = ENTRY + "\n";
  if (text.length < 1 || text.length > 260 || ENTRY.trim().length === 0) {
    throw new Error(`entry text must be 1-260 characters, got ${text.length}`);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, "entry.txt"), text, "utf8");
}

main();
