export default function hexToRgba(hex) {
  hex = hex.replace(/^#/, '');

  if (![3, 4, 6, 8].includes(hex.length)) {
    throw new Error('Invalid hex color format. Must be 3, 4, 6, or 8 characters.');
  }

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map((char) => char + char).join('');
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) : 255;

  return { r, g, b, a };
}
