// Tell a Whole Story in 32 Characters
// Writes a single Wi-Fi network name (<= 32 chars) to /output/entry.txt.
// The output path can be overridden with ENTRY_OUT for local verification.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = "Dad left everything to the cat.";

const outPath = process.env.ENTRY_OUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} chars to ${outPath}: ${ENTRY}`);
