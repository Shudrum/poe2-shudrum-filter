import hexToRgba from '../../tools/hex-to-rgba.js';
import hexToFilterColor from '../../tools/hex-to-filter-color.js';
import { global, themes } from '../../configuration/index.js';

export default function Card(...args) {
  let theme = Card.THEMES.NORMAL;
  let type = Card.TYPES.NORMAL;
  let size = Card.SIZES.MEDIUM;

  args.forEach((value) => {
    if (Object.values(Card.TYPES).includes(value)) {
      type = value;
    } else if (Object.values(Card.SIZES).includes(value)) {
      size = value;
    } else if (Object.values(Card.THEMES).includes(value)) {
      theme = value;
    } else if (Object.keys(value).includes('FULL') && Object.keys(value).includes('TEXT')) {
      theme = value;
    } else {
      throw new Error(`Invalid Card argument: ${value}`);
    }
  });

  function color(theme, type) {
    return hexToFilterColor(themes[theme][type === 'light' ? 1 : 0]);
  }

  function getTextColor(backgroundHex) {
    const { r, g, b } = hexToRgba(backgroundHex);

    const linearR = r / 255 <= 0.03928 ? r / 255 / 12.92 : Math.pow((r / 255 + 0.055) / 1.055, 2.4);
    const linearG = g / 255 <= 0.03928 ? g / 255 / 12.92 : Math.pow((g / 255 + 0.055) / 1.055, 2.4);
    const linearB = b / 255 <= 0.03928 ? b / 255 / 12.92 : Math.pow((b / 255 + 0.055) / 1.055, 2.4);

    const luminance = 0.2126 * linearR + 0.7152 * linearG + 0.0722 * linearB;

    return luminance > 0.179
      ? hexToFilterColor(global.primaryColors.black)
      : hexToFilterColor(global.primaryColors.white);
  }

  const instance = {
    toString() {
      switch (type) {
        case Card.TYPES.NORMAL:
          return [
            `SetTextColor ${color(theme, 'light')}`,
            `SetBorderColor ${hexToFilterColor('0000')}`,
            `SetBackgroundColor ${hexToFilterColor(global.defaultTransparency)}`,
            `SetFontSize ${size}`,
          ].join('\n');
        case Card.TYPES.OUTLINE:
          return [
            `SetTextColor ${color(theme, 'light')}`,
            `SetBorderColor ${color(theme, 'light')}`,
            `SetBackgroundColor ${hexToFilterColor(global.defaultTransparency)}`,
            `SetFontSize ${size}`,
          ].join('\n');
        case Card.TYPES.IMPORTANT:
          return [
            `SetTextColor ${getTextColor(themes[theme][0])}`,
            `SetBorderColor ${color(theme, 'normal')}`,
            `SetBackgroundColor ${color(theme, 'normal')}`,
            `SetFontSize ${size}`,
          ].join('\n');
      }
    },
  };

  return instance;
}

Card.THEMES = {
  ALERT: 'alert',
  CHARMS: 'charms',
  CURRENCY: 'currency',
  EVENTS: 'events',
  EXPEDITIONS: 'expeditions',
  FLASKS: 'flasks',
  GEMS: 'gems',
  GOLD: 'gold',
  JEWELS: 'jewels',
  MAGICS: 'magics',
  NORMAL: 'normal',
  RARES: 'rares',
  RUNES: 'runes',
  TABLETS: 'tablets',
  UNIQUES: 'uniques',
  WAYSTONES: 'waystones',
};

Card.TYPES = {
  IMPORTANT: 'IMPORTANT',
  OUTLINE: 'OUTLINE',
  NORMAL: 'NORMAL',
};

Card.SIZES = {
  TINY: 20,
  SMALL: 25,
  MEDIUM: 35,
  BIG: 45,
  VALUE_15: 15,
  VALUE_20: 20,
  VALUE_25: 25,
  VALUE_30: 30,
  VALUE_35: 35,
  VALUE_40: 40,
  VALUE_45: 45,
};
