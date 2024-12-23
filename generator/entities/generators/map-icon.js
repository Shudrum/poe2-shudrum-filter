export default function MapIcon(...args) {
  let size = MapIcon.SIZES.SMALL;
  let color = MapIcon.COLORS.WHITE;
  let shape = MapIcon.SHAPES.CIRCLE;
  let disabled = false;

  args.forEach((value) => {
    if (Object.values(MapIcon.SIZES).includes(value)) {
      size = value;
    } else if (Object.values(MapIcon.COLORS).includes(value)) {
      color = value;
    } else if (Object.values(MapIcon.SHAPES).includes(value)) {
      shape = value;
    } else if (value === MapIcon.NONE) {
      disabled = true;
    } else {
      throw new Error(`Invalid MapIcon argument: ${value}`);
    }
  });

  const instance = {
    [Symbol.for('nodejs.util.inspect.custom')]() {
      return { size, color, shape, disabled };
    },
    toText() {
      if (disabled) {
        return 'MinimapIcon -1';
      }
      return `MinimapIcon ${size} ${color} ${shape}`;
    },
  };

  return instance;
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
