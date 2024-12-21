export default class MinimapIcon {
  #size = 2;
  #color = 'White';
  #shape = 'Circle';
  #disable = false;

  constructor(...args) {
    args.forEach((value) => {
      switch (value) {
        case 'SIZE_SMALL': this.#size = 2; break;
        case 'SIZE_MEDIUM': this.#size = 1; break;
        case 'SIZE_BIG': this.#size = 0; break;

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

        case 'SHAPE_CIRCLE': this.#shape = 'Circle'; break;
        case 'SHAPE_DIAMOND': this.#shape = 'Diamond'; break;
        case 'SHAPE_HEXAGON': this.#shape = 'Hexagon'; break;
        case 'SHAPE_SQUARE': this.#shape = 'Square'; break;
        case 'SHAPE_STAR': this.#shape = 'Star'; break;
        case 'SHAPE_TRIANGLE': this.#shape = 'Triangle'; break;
        case 'SHAPE_CROSS': this.#shape = 'Cross'; break;
        case 'SHAPE_MOON': this.#shape = 'Moon'; break;
        case 'SHAPE_RAINDROP': this.#shape = 'Raindrop'; break;
        case 'SHAPE_KITE': this.#shape = 'Kite'; break;
        case 'SHAPE_PENTAGON': this.#shape = 'Pentagon'; break;
        case 'SHAPE_UPSIDE_DOWN_HOUSE': this.#shape = 'UpsideDownHouse'; break;

        case 'DISABLE': this.#disable = true;
      }
    });
  }

  toString() {
    if (this.#disable) {
      return 'SetMinimapIcon -1';
    }
    return `SetMinimapIcon ${this.#size} ${this.#color} ${this.#shape}`;
  }
}

MinimapIcon.SIZE_SMALL = 'SIZE_SMALL';
MinimapIcon.SIZE_MEDIUM = 'SIZE_MEDIUM';
MinimapIcon.SIZE_BIG = 'SIZE_BIG';

MinimapIcon.COLOR_WHITE = 'COLOR_WHITE';
MinimapIcon.COLOR_RED = 'COLOR_RED';
MinimapIcon.COLOR_GREEN = 'COLOR_GREEN';
MinimapIcon.COLOR_BLUE = 'COLOR_BLUE';
MinimapIcon.COLOR_BROWN = 'COLOR_BROWN';
MinimapIcon.COLOR_YELLOW = 'COLOR_YELLOW';
MinimapIcon.COLOR_CYAN = 'COLOR_CYAN';
MinimapIcon.COLOR_GREY = 'COLOR_GREY';
MinimapIcon.COLOR_ORANGE = 'COLOR_ORANGE';
MinimapIcon.COLOR_PINK = 'COLOR_PINK';
MinimapIcon.COLOR_PURPLE = 'COLOR_PURPLE';

MinimapIcon.SHAPE_CIRCLE = 'SHAPE_CIRCLE';
MinimapIcon.SHAPE_DIAMOND = 'SHAPE_DIAMOND';
MinimapIcon.SHAPE_HEXAGON = 'SHAPE_HEXAGON';
MinimapIcon.SHAPE_SQUARE = 'SHAPE_SQUARE';
MinimapIcon.SHAPE_STAR = 'SHAPE_STAR';
MinimapIcon.SHAPE_TRIANGLE = 'SHAPE_TRIANGLE';
MinimapIcon.SHAPE_CROSS = 'SHAPE_CROSS';
MinimapIcon.SHAPE_MOON = 'SHAPE_MOON';
MinimapIcon.SHAPE_RAINDROP = 'SHAPE_RAINDROP';
MinimapIcon.SHAPE_KITE = 'SHAPE_KITE';
MinimapIcon.SHAPE_PENTAGON = 'SHAPE_PENTAGON';
MinimapIcon.SHAPE_UPSIDE_DOWN_HOUSE = 'SHAPE_UPSIDE_DOWN_HOUSE';

MinimapIcon.DISABLE = 'DISABLE';
