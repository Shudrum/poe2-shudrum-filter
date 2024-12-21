export default class Effect {
  #color = 'White';
  #temporary = false;

  constructor(...args) {
    args.forEach((value) => {
      switch (value) {
        case 'COLOR_WHITE': this.#color = 'White'; break;
        case 'COLOR_RED': this.#color = 'Red'; break;
        case 'COLOR_GREEN': this.#color = 'Green'; break;
        case 'COLOR_BLUE': this.#color = 'Blue'; break;
        case 'COLOR_BROWN': this.#color = 'Brown'; break;
        case 'COLOR_YELLOW': this.#color = 'Yellow'; break;
        case 'COLOR_CYAN': this.#color = 'Cyan'; break;
        case 'COLOR_GREY': this.#color = 'Grey'; break;
        case 'COLOR_ORANGE': this.#color = 'Orange'; break;
        case 'COLOR_PINK': this.#color = 'Pink'; break;
        case 'COLOR_PURPLE': this.#color = 'Purple'; break;

        case 'TEMPORARY': this.#temporary = true; break;
      }
    });
  }

  toString() {
    return `PlayEffect ${this.#color}${this.#temporary ? ' Temp' : ''}`;
  }
}

Effect.COLOR_WHITE = 'COLOR_WHITE';
Effect.COLOR_RED = 'COLOR_RED';
Effect.COLOR_GREEN = 'COLOR_GREEN';
Effect.COLOR_BLUE = 'COLOR_BLUE';
Effect.COLOR_BROWN = 'COLOR_BROWN';
Effect.COLOR_YELLOW = 'COLOR_YELLOW';
Effect.COLOR_CYAN = 'COLOR_CYAN';
Effect.COLOR_GREY = 'COLOR_GREY';
Effect.COLOR_ORANGE = 'COLOR_ORANGE';
Effect.COLOR_PINK = 'COLOR_PINK';
Effect.COLOR_PURPLE = 'COLOR_PURPLE';

Effect.TEMPORARY = 'TEMPORARY';
