import hexToRgba from './hex-to-rgba.js';
import { global } from '../configuration/index.js';

export default function getTextColor(backgroundHex) {
  const { r, g, b } = hexToRgba(backgroundHex);

  const linearR = r / 255 <= 0.03928 ? r / 255 / 12.92 : Math.pow((r / 255 + 0.055) / 1.055, 2.4);
  const linearG = g / 255 <= 0.03928 ? g / 255 / 12.92 : Math.pow((g / 255 + 0.055) / 1.055, 2.4);
  const linearB = b / 255 <= 0.03928 ? b / 255 / 12.92 : Math.pow((b / 255 + 0.055) / 1.055, 2.4);

  const luminance = 0.2126 * linearR + 0.7152 * linearG + 0.0722 * linearB;

  return luminance > 0.179
    ? global.primaryColors.black
    : global.primaryColors.white;
}
