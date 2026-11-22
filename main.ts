import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

// The entry for "The agent builds a game from one prompt":
// POST.json names the X post carrying the video. This program copies it
// to the output directory, and nothing else. No network, no wall clock,
// no files outside the repository — the two grader runs write the same bytes.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Create /output if it is missing. Clear only its CONTENTS, never the
// directory itself: the grader mounts /output, and removing it fails
// with EBUSY. Copying one fixed file makes the run deterministic:
// the same POST.json in, the same POST.json out, every time.
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}

copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
