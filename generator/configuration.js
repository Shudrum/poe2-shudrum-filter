export const FILTER_NAME = 'ShudrumFilter';
export const MINIMUM_AREA_LEVEL = 65;

export const DEBUG = true;

export const VARIABLES = {
  MIN_ITEM_LEVEL_NORMAL_MAGIC_RARE: {
    STANDARD: 65,
    EXPERT: 65,
  },
  MIN_GOLD_TO_DISPLAY: {
    STANDARD: 50,
    EXPERT: 100,
  },
  SALVAGEABLE_MIN_QUALITY: {
    STANDARD: 1,
    EXPERT: 10,
  },
  FLASKS_MIN_QUALITY: {
    STANDARD: 5,
    EXPERT: 10,
  },
  RUNES_DISPLAY: {
    STANDARD: true,
    EXPERT: false,
  },
  CURRENCIES: {
    DISPLAY_SHARDS: {
      STANDARD: true,
      EXPERT: false,
    },
    DISPLAY_CHANCE_SHARDS: {
      STANDARD: true,
      EXPERT: true,
    },
    DISPLAY_TIER_2: {
      STANDARD: true,
      EXPERT: false,
    },
  },
  WAYSTONES: {
    HIDE_GAP: {
      STANDARD: 6,
      EXPERT: 2,
    },
  },
  CHARMS_DISPLAY: {
    STANDARD: true,
    EXPERT: false,
  },
};

export const COLORS = {
  DEFAULT_BACKGROUND: '0 0 0 224',
  BLACK: '0 0 0',
  WHITE: '200 200 200',
  GOLD: '197 170 88',
  EVENT: '143 26 207',
  EXPEDITION: '30 231 238',
  MAGIC: '136 136 255',
  RARE: '255 255 119',
  UNIQUE: '30 231 238',
  CHARMS: '192 128 254',
  RUNES: '27 162 155',
  FLASKS: '30 231 238',
  GEMS: '27 162 155',
  JEWELS: '67 202 27',
  CURRENCY: '170 158 130',
  ALERT: '233 24 40',
  WAYSTONES: '96 96 96',
  TABLETS: '38 0 86',
};

export const THEMES = {
  UNIQUE: {
    INVERSE: COLORS.BLACK,
    FULL: '175 96 37',
    TEXT: '175 96 37',
  },
  ALERT: {
    INVERSE: COLORS.WHITE,
    FULL: '177 15 15',
    TEXT: '177 15 15',
  },
  WAYSTONES: {
    INVERSE: COLORS.WHITE,
    FULL: '74 68 58',
    TEXT: '146 135 115',
  },
};

export const MODES = {
  STANDARD: 'STANDARD',
  EXPERT: 'EXPERT',
};
