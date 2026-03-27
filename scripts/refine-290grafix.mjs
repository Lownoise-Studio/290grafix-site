/**
 * Refines public/290grafix-clean.svg: merge paths, remove noise, restructure groups.
 * Does not retrace — only concatenates / filters existing path data.
 */
import fs from 'fs';
import { optimize } from 'svgo';

const SRC = new URL('../public/290grafix-clean.svg', import.meta.url);
const OUT = new URL('../public/290grafix-clean.svg', import.meta.url);

const svg = fs.readFileSync(SRC, 'utf8');

function bbox(d) {
  const nums = d.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi);
  if (!nums || nums.length < 2) return null;
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const x = +nums[i],
      y = +nums[i + 1];
    if (Number.isFinite(x) && Number.isFinite(y)) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
  if (!Number.isFinite(minX)) return null;
  const w = maxX - minX,
    h = maxY - minY;
  return { minX, minY, maxX, maxY, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2, area: w * h, w, h };
}

function parseGroups(xml) {
  const groups = [];
  const re = /<g\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/g>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    groups.push({ id: m[1], inner: m[2] });
  }
  return groups;
}

function extractPaths(inner) {
  const paths = [];
  const re = /<path\b([^/]*?)\/>/g;
  let m;
  while ((m = re.exec(inner)) !== null) {
    const tag = m[1];
    const dMatch = /d="([^"]*)"/.exec(tag);
    if (!dMatch) continue;
    const fillMatch = /fill="([^"]+)"/i.exec(tag);
    // SVGO often drops fill="#000000" (initial fill default). Keep those paths on re-run.
    const fill = normFill(fillMatch ? fillMatch[1] : '#000000');
    paths.push({ d: dMatch[1].trim(), fill });
  }
  return paths;
}

function mergeDs(paths) {
  return paths.map((p) => p.d).join(' ');
}

function normFill(f) {
  if (!f) return '';
  const u = f.toUpperCase();
  if (u === '#FFF') return '#FFFFFF';
  if (u === '#EB6A20') return '#EB6A20';
  if (u === '#000' || u === '#000000') return '#000000';
  return f;
}

function isDripOrange(p) {
  const b = bbox(p.d);
  if (!b || normFill(p.fill) !== '#EB6A20') return false;
  // Bottom-right drip / splatter (distinct from main shell & X fill)
  if (b.minX >= 370 && b.cy >= 220 && b.area < 1200) return true;
  if (b.minX >= 398 && b.cy >= 217 && b.area < 3500) return true;
  return false;
}

function filterNoise(paths, fill) {
  const MIN = fill === '#000000' ? 72 : fill === '#EB6A20' ? 20 : 40;
  return paths.filter((p) => {
    const b = bbox(p.d);
    if (!b) return false;
    if (b.area < MIN) return false;
    return true;
  });
}

const groups = parseGroups(svg);
const byId = Object.fromEntries(groups.map((g) => [g.id, extractPaths(g.inner)]));

const g5 = byId['group-5-outer-stroke-layer'] || [];
const g1 = byId['group-1-290'] || byId['group-1-text-290'] || [];
const g2 = byId['group-2-grafix'] || byId['group-2-text-grafix'] || [];
const g3 = byId['group-3-underline-swoosh'] || [];
const g4 = byId['group-4-drip-element'] || [];

const seen = new Set();
function dedupe(paths) {
  return paths.filter((p) => {
    const k = normFill(p.fill) + '|' + p.d;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const g5dedup = dedupe([...g5]);
const dripFrom5 = g5dedup.filter(isDripOrange);
const g5outer = g5dedup.filter((p) => !isDripOrange(p));
const g4orange = dedupe(g4.filter((p) => normFill(p.fill) === '#EB6A20'));

const g5oF = filterNoise(g5outer, '#EB6A20');
const dripF = filterNoise([...dripFrom5, ...g4orange], '#EB6A20');

const g1w = filterNoise(
  g1.filter((p) => normFill(p.fill) === '#FFFFFF'),
  '#FFFFFF'
);
const g1k = filterNoise(
  g1.filter((p) => normFill(p.fill) === '#000000'),
  '#000000'
);

const g2orange = filterNoise(
  g2.filter((p) => normFill(p.fill) === '#EB6A20'),
  '#EB6A20'
);
const g2w = filterNoise(
  g2.filter((p) => normFill(p.fill) === '#FFFFFF'),
  '#FFFFFF'
);
const g2k = filterNoise(
  g2.filter((p) => normFill(p.fill) === '#000000'),
  '#000000'
);

const g3w = filterNoise(
  g3.filter((p) => normFill(p.fill) === '#FFFFFF'),
  '#FFFFFF'
);

const pathEl = (fill, d, whiteCrisp = false) =>
  whiteCrisp
    ? `<path fill="${fill}" stroke="#000000" stroke-width=".45" stroke-linejoin="round" paint-order="stroke fill" d="${d}"/>`
    : `<path fill="${fill}" stroke="none" d="${d}"/>`;

const merged5 = g5oF.length ? pathEl('#EB6A20', mergeDs(g5oF)) : '';
const mergedDrip = dripF.length ? pathEl('#EB6A20', mergeDs(dripF)) : '';

const merged1w = g1w.length ? pathEl('#FFFFFF', mergeDs(g1w), true) : '';
const merged1k = g1k.length ? pathEl('#000000', mergeDs(g1k)) : '';

const merged2o = g2orange.length ? pathEl('#EB6A20', mergeDs(g2orange)) : '';
const merged2w = g2w.length ? pathEl('#FFFFFF', mergeDs(g2w), true) : '';
const merged2k = g2k.length ? pathEl('#000000', mergeDs(g2k)) : '';

const merged3 = g3w.length ? pathEl('#FFFFFF', mergeDs(g3w), true) : '';

const body = `
  <g id="group-5-outer-stroke-layer">${merged5}</g>
  <g id="group-1-290">${merged1w}${merged1k}</g>
  <g id="group-2-grafix">${merged2o}${merged2w}${merged2k}</g>
  <g id="group-3-underline-swoosh">${merged3}</g>
  <g id="group-4-drip-element">${mergedDrip}</g>`;

let out = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 358" width="1024" height="574" role="img" aria-label="290 Grafix">${body.replace(/\s+/g, ' ')}
</svg>`;

const result = optimize(out, {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: false,
          collapseGroups: false,
          mergePaths: false,
          // Keep explicit fill on black paths (default fill is black; SVGO would drop the attribute).
          removeUselessStrokeAndFill: false,
        },
      },
    },
  ],
});

let data = result.data
  .replace(/fill="#eb6a20"/gi, 'fill="#EB6A20"')
  .replace(/fill="#fff"/gi, 'fill="#FFFFFF"');

// SVGO drops fill="#000000" (initial fill default). Restore only those paths.
data = data.replace(/<path d="/g, '<path fill="#000000" stroke="none" d="');

// SVGO strips our hairline stroke used for crisp white on dark backgrounds.
data = data.replace(
  /<path fill="#FFFFFF" d="/g,
  '<path fill="#FFFFFF" stroke="#000000" stroke-width=".45" stroke-linejoin="round" paint-order="stroke fill" d="'
);
data = data.replace(/<path fill="#EB6A20" d="/g, '<path fill="#EB6A20" stroke="none" d="');
data = data.replace(/<path fill="#000000" d="/g, '<path fill="#000000" stroke="none" d="');

fs.writeFileSync(OUT, data);
const n = (data.match(/<path/g) || []).length;
console.log('paths:', n, 'bytes:', data.length);
