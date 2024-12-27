import hexToFilterColor from '../../tools/hex-to-filter-color.js';
import getTextColor from '../../tools/get-text-color.js';
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

  function color(theme) {
    return hexToFilterColor(themes[theme][0]);
  }

  const instance = {
    [Symbol.for('nodejs.util.inspect.custom')]() {
      return { theme, size, type };
    },
    toText() {
      switch (type) {
        case Card.TYPES.NORMAL:
          return [
            `SetTextColor ${color(theme)}`,
            `SetBorderColor ${hexToFilterColor('0000')}`,
            `SetBackgroundColor ${hexToFilterColor(global.defaultTransparency)}`,
            `SetFontSize ${size}`,
          ].join('\n');
        case Card.TYPES.OUTLINE:
          return [
            `SetTextColor ${color(theme)}`,
            `SetBorderColor ${color(theme)}`,
            `SetBackgroundColor ${hexToFilterColor(global.defaultTransparency)}`,
            `SetFontSize ${size}`,
          ].join('\n');
        case Card.TYPES.IMPORTANT:
          return [
            `SetTextColor ${hexToFilterColor(getTextColor(themes[theme][0]))}`,
            `SetBorderColor ${color(theme)}`,
            `SetBackgroundColor ${color(theme)}`,
            `SetFontSize ${size}`,
          ].join('\n');
        case Card.TYPES.URGENT:
          return [
            `SetTextColor ${hexToFilterColor(getTextColor(themes[theme][0]))}`,
            `SetBorderColor ${hexToFilterColor(getTextColor(themes[theme][0]))}`,
            `SetBackgroundColor ${color(theme)}`,
            `SetFontSize ${size}`,
          ].join('\n');
      }
    },
  };

  return instance;
}

Card.THEMES = {
  ALERT: 'alert',
  BREACH: 'breach',
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
  URGENT: 'URGENT',
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
