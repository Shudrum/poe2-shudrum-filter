export default function Effect(...args) {
  let color = Effect.COLORS.WHITE;
  let temporary = false;
  let disabled = false;

  args.forEach((value) => {
    if (Object.values(Effect.COLORS).includes(value)) {
      color = value;
    } else if (value === Effect.TEMPORARY) {
      temporary = true;
    } else if (value === Effect.NONE) {
      disabled = true;
    } else {
      throw new Error(`Invalid Effect argument: ${value}`);
    }
  });

  const instance = {
    [Symbol.for('nodejs.util.inspect.custom')]() {
      return { color, temporary, disabled };
    },
    toText() {
      if (disabled) {
        return 'PlayEffect None';
      }
      return `PlayEffect ${color}${temporary ? ' Temp' : ''}`;
    },
  };

  return instance;
}

Effect.COLORS = {
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

Effect.TEMPORARY = 'TEMPORARY';

Effect.NONE = 'NONE';
