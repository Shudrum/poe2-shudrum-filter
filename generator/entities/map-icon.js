export default class MapIcon {
  #size = MapIcon.SIZES.SMALL;
  #color = MapIcon.COLORS.WHITE;
  #shape = MapIcon.SHAPES.CIRCLE;
  #disable = false;

  constructor(...args) {
    args.forEach((value) => {
      if (Object.values(MapIcon.SIZES).includes(value)) {
        this.#size = value;
      } else if (Object.values(MapIcon.COLORS).includes(value)) {
        this.#color = value;
      } else if (Object.values(MapIcon.SHAPES).includes(value)) {
        this.#shape = value;
      } else if (value === MapIcon.NONE) {
        this.#disable = true;
      } else {
        throw new Error(`Invalid MapIcon argument: ${value}`);
      }
    });
  }

  toString() {
    if (this.#disable) {
      return 'MinimapIcon -1';
    }
    return `MinimapIcon ${this.#size} ${this.#color} ${this.#shape}`;
  }
}

MapIcon.SIZES = {
  SMALL: 2,
  MEDIUM: 1,
  BIG: 0,
};

MapIcon.COLORS = {
  WHITE: 'White',
  RED: 'Red',
  GREEN: 'Green',
  BLUE: 'Blue',
  BROWN: 'Brown',
  YELLOW: 'Yellow',
  CYAN: 'Cyan',
  GREY: 'Grey',
  ORANGE: 'Orange',
  PINK: 'Pink',
  PURPLE: 'Purple',
};

MapIcon.SHAPES = {
  CIRCLE: 'Circle',
  DIAMOND: 'Diamond',
  HEXAGON: 'Hexagon',
  SQUARE: 'Square',
  STAR: 'Star',
  TRIANGLE: 'Triangle',
  CROSS: 'Cross',
  MOON: 'Moon',
  RAINDROP: 'Raindrop',
  KITE: 'Kite',
  PENTAGON: 'Pentagon',
  UPSIDE_DOWN_HOUSE: 'UpsideDownHouse',
};

MapIcon.NONE = 'NONE';
