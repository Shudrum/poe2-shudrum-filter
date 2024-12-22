import hexToRgba from './hex-to-rgba.js';

export default function hexToFilterColor(hex) {
  const { r, g, b, a } = hexToRgba(hex);
  if (a !== 255) {
    return `${r} ${g} ${b} ${a}`;
  }
  return `${r} ${g} ${b}`;
}
