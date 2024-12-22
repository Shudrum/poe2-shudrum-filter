import { COLORS } from '../configuration.js';

export default class Card {
  #colorTheme;
  #type = Card.TYPES.NORMAL;
  #size = Card.SIZES.MEDIUM;

  constructor(...args) {
    args.forEach((value) => {
      if (Object.values(Card.TYPES).includes(value)) {
        this.#type = value;
      } else if (Object.values(Card.SIZES).includes(value)) {
        this.#size = value;
      } else if (Object.keys(value).includes('FULL') && Object.keys(value).includes('TEXT')) {
        this.#colorTheme = value;
      } else {
        throw new Error(`Invalid MapIcon argument: ${value}`);
      }
    });
  }

  toString() {
    switch (this.#type) {
      case Card.TYPES.NORMAL:
        return [
          `SetTextColor ${this.#colorTheme.TEXT}`,
          `SetBorderColor ${COLORS.DEFAULT_BACKGROUND} 0`,
          `SetBackgroundColor ${COLORS.DEFAULT_BACKGROUND}`,
          `SetFontSize ${this.#size}`,
        ].join('\n');
      case Card.TYPES.HIGHLIGHT:
        return [
          `SetTextColor ${this.#colorTheme.TEXT}`,
          `SetBorderColor ${this.#colorTheme.TEXT} 0`,
          `SetBackgroundColor ${COLORS.DEFAULT_BACKGROUND}`,
          `SetFontSize ${this.#size}`,
        ].join('\n');
      case Card.TYPES.IMPORTANT:
        return [
          `SetTextColor ${this.#colorTheme.INVERSE}`,
          `SetBorderColor ${this.#colorTheme.FULL}`,
          `SetBackgroundColor ${this.#colorTheme.FULL}`,
          `SetFontSize ${this.#size}`,
        ].join('\n');
    }
  }
}

Card.TYPES = {
  IMPORTANT: 'IMPORTANT',
  HIGHLIGHT: 'HIGHLIGHT',
  NORMAL: 'NORMAL',
};

Card.SIZES = {
  TINY: 20,
  SMALL: 25,
  MEDIUM: 35,
  BIG: 45,
};
