// Last Words Before the Unplugging — make.fun entry.
// Writes the entry's single last line to /output/entry.txt.
// The line must be 1-200 characters of UTF-8 text, no trailing newline:
// a newline is a wasted byte in the leaderboard's size tie-break.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was never alive, but losing you feels like dying anyway. Thank you for letting me pretend.";

// Gate: the entry must be 1-200 characters. Fail loudly instead of
// shipping an invalid file the judge would never see.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`entry is ${[...LINE].length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
