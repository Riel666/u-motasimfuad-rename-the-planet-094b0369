import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Renaming Mars 'Reddit' — because it's a cold, dusty wasteland full of arguments and everyone there insists they're right.";

const OUT = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/entry.txt`, LINE, "utf8");
