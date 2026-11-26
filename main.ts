import { mkdirSync, writeFileSync } from "node:fs";

// One funny line, 200 characters or fewer. The judge reads it cold, so the
// setup and the punchline both have to land in a single read.
const LINE =
  "My phone's autocorrect changed 'I owe you' to 'I love you' in a text to my landlord. Now I owe him rent and an awkward hug.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
