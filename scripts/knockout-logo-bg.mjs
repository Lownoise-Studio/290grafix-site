/**
 * Removes a flat dark-grey matte (#121212 typical) while keeping true black strokes.
 * Black (0,0,0) is ~31 units from (18,18,18) in RGB space — keep tolerance ≤ 28.
 *
 * Override: LOGO_KEY_R=18 LOGO_KEY_G=18 LOGO_KEY_B=18 LOGO_TOL=26 node scripts/knockout-logo-bg.mjs
 */
import sharp from "sharp";
import { writeFileSync } from "fs";

const INPUT = "public/logo.png";
const OUTPUT = "public/logo.png";

const br = Number(process.env.LOGO_KEY_R ?? 18);
const bg = Number(process.env.LOGO_KEY_G ?? 18);
const bb = Number(process.env.LOGO_KEY_B ?? 18);
const TOLERANCE = Number(process.env.LOGO_TOL ?? 26);

const img = sharp(INPUT).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const w = info.width;
const h = info.height;
const idx = (x, y) => (y * w + x) * 4;

function dist(r, g, b) {
  return Math.hypot(r - br, g - bg, b - bb);
}

const out = Buffer.from(data);
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const i = idx(x, y);
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    if (dist(r, g, b) <= TOLERANCE) {
      out[i + 3] = 0;
    }
  }
}

const png = await sharp(out, {
  raw: { width: w, height: h, channels: 4 },
})
  .png()
  .toBuffer();

writeFileSync(OUTPUT, png);
console.log(
  `Wrote ${OUTPUT} (key RGB ${br},${bg},${bb}, tolerance ${TOLERANCE})`,
);
