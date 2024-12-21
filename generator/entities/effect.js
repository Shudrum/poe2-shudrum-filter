export default class Effect {
  #color = Effect.COLORS.WHITE;
  #temporary = false;

  constructor(...args) {
    args.forEach((value) => {
      if (Object.values(Effect.COLORS).includes(value)) {
        this.#color = value;
      } else if (value === Effect.TEMPORARY) {
        this.#temporary = true;
      } else {
        throw new Error(`Invalid Effect argument: ${value}`);
      }
    });
  }

  toString() {
    return `PlayEffect ${this.#color}${this.#temporary ? ' Temp' : ''}`;
  }
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
