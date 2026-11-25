// A small family scene in two lines.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const scene = "Our seven-year-old made Mum's birthday breakfast by himself: cold toast, tea with salt in it. Mum ate every crumb, then asked to speak to the chef.";
const limit = 280;

if ([...scene].length > limit) throw new Error("scene is over 280 characters");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), scene);
