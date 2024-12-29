import hexToFilterColor from '../../tools/hex-to-filter-color.js';
import getTextColor from '../../tools/get-text-color.js';
import { global, themes } from '../../configuration/index.js';

const VALUES = {
  SOUND_NONE: 0,
  SOUND_IMPORTANCE_1: 1,
  SOUND_IMPORTANCE_2: 5,
  SOUND_IMPORTANCE_3: 2,
  SOUND_IMPORTANCE_5: 13,
  SOUND_IMPORTANCE_6: 10,
  SOUND_IMPORTANCE_7: 3,
  SOUND_IMPORTANCE_8: 16,
  SOUND_SIMPLE_SIGNAL: 11,
  SOUND_VIBRANT_1: 7,
  SOUND_VIBRANT_2: 8,
  SOUND_VIBRANT_3: 9,
  SOUND_VIBRANT_4: 14,
  SOUND_VIBRANT_5: 15,
  SOUND_WAYSTONE: 4,
  SOUND_UNIQUE: 6,
  SOUND_GEMS: 12,

  ICON_NONE: '',
  ICON_CIRCLE: 'Circle',
  ICON_DIAMOND: 'Diamond',
  ICON_HEXAGON: 'Hexagon',
  ICON_SQUARE: 'Square',
  ICON_STAR: 'Star',
  ICON_TRIANGLE: 'Triangle',
  ICON_CROSS: 'Cross',
  ICON_MOON: 'Moon',
  ICON_RAINDROP: 'Raindrop',
  ICON_KITE: 'Kite',
  ICON_PENTAGON: 'Pentagon',
  ICON_UPSIDE_DOWN_HOUSE: 'UpsideDownHouse',

  SIZE_TINY: 25,
  SIZE_SMALLEST: 27,
  SIZE_SMALL: 30,
  SIZE_MEDIUM: 34,
  SIZE_BIG: 39,
  SIZE_BIGGEST: 45,

  ICON_SIZE_SMALL: 2,
  ICON_SIZE_MEDIUM: 1,
  ICON_SIZE_BIG: 0,
};

export default function ItemDisplay(...args) {
  let theme = THEME.NORMALS;
  let type = TYPE.NORMAL;
  let size = SIZE.MEDIUM;
  let beam = BEAM.NONE;
  let icon = ICON.NONE;
  let iconSize = ICON_SIZE.SMALL;
  let sound = SOUND.NONE;

  function applyArguments(...args) {
    args.forEach((value) => {
      if (!value) return;

      if (Object.values(TYPE).includes(value)) {
        type = value;
      } else if (Object.values(SIZE).includes(value)) {
        size = value;
      } else if (Object.values(THEME).includes(value)) {
        theme = value;
      } else if (Object.values(BEAM).includes(value)) {
        beam = value;
      } else if (Object.values(ICON).includes(value)) {
        icon = value;
      } else if (Object.values(ICON_SIZE).includes(value)) {
        iconSize = value;
      } else if (Object.values(SOUND).includes(value)) {
        sound = value;
      } else {
        throw new Error(`Invalid Card argument: ${value}`);
      }
    });
  }

  function getTheme(theme) {
    return themes.find(({ key }) => key === theme);
  }

  function color(theme) {
    return hexToFilterColor(getTheme(theme).color);
  }

  function textColor(theme) {
    return hexToFilterColor(getTextColor(getTheme(theme).color));
  }

  function ItemDisplayInstance(...args) {
    return ItemDisplay(...[theme, type, size, beam, icon, iconSize, sound, ...args]);
  }

  applyArguments(...args);

  ItemDisplayInstance[Symbol.for('nodejs.util.inspect.custom')] = () => {
    return {
      theme,
      size,
      type,
      beam,
      icon,
      iconSize,
      sound,
    };
  };

  ItemDisplayInstance.toText = () => {
    const rows = [];

    switch (type) {
      case TYPE.NORMAL:
        rows.push(
          `SetTextColor ${color(theme)}`,
          `SetBackgroundColor ${hexToFilterColor(global.defaultTransparency)}`,
          `SetFontSize ${VALUES[size]}`,
        );
        break;
      case TYPE.OUTLINE:
        rows.push(
          `SetTextColor ${color(theme)}`,
          `SetBorderColor ${color(theme)}`,
          `SetBackgroundColor ${hexToFilterColor(global.defaultTransparency)}`,
          `SetFontSize ${VALUES[size]}`,
        );
        break;
      case TYPE.INVERTED:
        rows.push(
          `SetTextColor ${textColor(theme)}`,
          `SetBorderColor ${color(theme)}`,
          `SetBackgroundColor ${color(theme)}`,
          `SetFontSize ${VALUES[size]}`,
        );
        break;
      case TYPE.INVERTED_OUTLINE:
        rows.push(
          `SetTextColor ${textColor(theme)}`,
          `SetBorderColor ${hexToFilterColor(global.primaryColors.white)}`,
          `SetBackgroundColor ${color(theme)}`,
          `SetFontSize ${VALUES[size]}`,
        );
        break;
      case TYPE.URGENT: {
        rows.push(
          `SetTextColor ${textColor('URGENT')}`,
          `SetBorderColor ${hexToFilterColor(global.primaryColors.white)}`,
          `SetBackgroundColor ${color('URGENT')}`,
          `SetFontSize ${VALUES[size]}`,
        );
        break;
      }
    }

    if (beam !== BEAM.NONE) {
      rows.push([
        'PlayEffect',
        getTheme(theme).gameColor,
        beam === BEAM.TEMPORARY && 'Temp',
      ].filter(Boolean).join(' '));
    }

    if (sound !== SOUND.NONE) {
      rows.push(`PlayAlertSound ${VALUES[sound]} 300`);
    }

    if (icon !== ICON.NONE) {
      rows.push([
        'MinimapIcon',
        VALUES[iconSize],
        getTheme(theme).gameColor,
        VALUES[icon],
      ].join(' '));
    }

    return rows;
  };

  return ItemDisplayInstance;
}

export const THEME = {
  ALERT: 'ALERT',
  BREACH: 'BREACH',
  CHARMS: 'CHARMS',
  CURRENCIES: 'CURRENCIES',
  EVENTS: 'EVENTS',
  EXPEDITIONS: 'EXPEDITIONS',
  FLASKS: 'FLASKS',
  GEMS: 'GEMS',
  GOLD: 'GOLD',
  JEWELS: 'JEWELS',
  MAGICS: 'MAGICS',
  NORMALS: 'NORMALS',
  RARES: 'RARES',
  RUNES: 'RUNES',
  TABLETS: 'TABLETS',
  UNIQUES: 'UNIQUES',
  WAYSTONES: 'WAYSTONES',
};

export const SOUND = {
  NONE: 'SOUND_NONE',

  IMPORTANCE_1: 'SOUND_IMPORTANCE_1',
  IMPORTANCE_2: 'SOUND_IMPORTANCE_2',
  IMPORTANCE_3: 'SOUND_IMPORTANCE_3',
  IMPORTANCE_5: 'SOUND_IMPORTANCE_5',
  IMPORTANCE_6: 'SOUND_IMPORTANCE_6',
  IMPORTANCE_7: 'SOUND_IMPORTANCE_7',
  IMPORTANCE_8: 'SOUND_IMPORTANCE_8',

  SIMPLE_SIGNAL: 'SOUND_SIMPLE_SIGNAL',

  VIBRANT_1: 'SOUND_VIBRANT_1',
  VIBRANT_2: 'SOUND_VIBRANT_2',
  VIBRANT_3: 'SOUND_VIBRANT_3',
  VIBRANT_4: 'SOUND_VIBRANT_4',
  VIBRANT_5: 'SOUND_VIBRANT_5',

  WAYSTONE: 'SOUND_WAYSTONE',
  UNIQUE: 'SOUND_UNIQUE',
  GEMS: 'SOUND_GEMS',
};

export const TYPE = {
  NORMAL: 'TYPE_NORMAL',
  OUTLINE: 'TYPE_OUTLINE',
  INVERTED: 'TYPE_INVERTED',
  INVERTED_OUTLINE: 'TYPE_INVERTED_OUTLINE',
  URGENT: 'TYPE_URGENT',
};

export const SIZE = {
  TINY: 'SIZE_TINY',
  SMALLEST: 'SIZE_SMALLEST',
  SMALL: 'SIZE_SMALL',
  MEDIUM: 'SIZE_MEDIUM',
  BIG: 'SIZE_BIG',
  BIGGEST: 'SIZE_BIGGEST',
};

export const ICON_SIZE = {
  SMALL: 'ICON_SIZE_SMALL',
  MEDIUM: 'ICON_SIZE_MEDIUM',
  BIG: 'ICON_SIZE_BIG',
};

export const ICON = {
  NONE: 'ICON_NONE',
  CIRCLE: 'ICON_CIRCLE',
  DIAMOND: 'ICON_DIAMOND',
  HEXAGON: 'ICON_HEXAGON',
  SQUARE: 'ICON_SQUARE',
  STAR: 'ICON_STAR',
  TRIANGLE: 'ICON_TRIANGLE',
  CROSS: 'ICON_CROSS',
  MOON: 'ICON_MOON',
  RAINDROP: 'ICON_RAINDROP',
  KITE: 'ICON_KITE',
  PENTAGON: 'ICON_PENTAGON',
  UPSIDE_DOWN_HOUSE: 'ICON_UPSIDE_DOWN_HOUSE',
};

export const BEAM = {
  NONE: 'BEAM_NONE',
  SHOW: 'BEAM_SHOW',
  TEMPORARY: 'BEAM_TEMPORARY',
};

ItemDisplay.LOWEST = (...args) => ItemDisplay(
  SIZE.SMALLEST,
  TYPE.NORMAL,
  ...args,
);

ItemDisplay.LOW = (...args) => ItemDisplay(
  SIZE.SMALL,
  TYPE.OUTLINE,
  ...args,
);

ItemDisplay.MEDIUM = (...args) => ItemDisplay(
  SIZE.MEDIUM,
  TYPE.INVERTED,
  BEAM.SHOW,
  ...args,
);

ItemDisplay.IMPORTANT = (...args) => ItemDisplay(
  SIZE.BIG,
  TYPE.INVERTED_OUTLINE,
  BEAM.SHOW,
  ICON_SIZE.MEDIUM,
  ...args,
);

ItemDisplay.CRITICAL = (...args) => ItemDisplay(
  THEME.ALERT,
  SIZE.BIGGEST,
  TYPE.INVERTED_OUTLINE,
  BEAM.SHOW,
  ICON_SIZE.BIG,
  SOUND.IMPORTANCE_1,
  ...args,
);
