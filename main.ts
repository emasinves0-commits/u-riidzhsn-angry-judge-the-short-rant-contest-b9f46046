import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "I have spent twenty minutes trying to peel this single, skin-tight plastic seal off a store-bought jar of pickles, and now my fingernail is bleeding, the seal is still perfectly intact, and I’m pretty sure the jar is mocking my weakness by slowly rotating in my grip.";

const MIN_CHARS = 1;
const MAX_CHARS = 400;

function validate(text: string): void {
  const length = [...text].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${length}`);
  }
}

validate(RANT);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
