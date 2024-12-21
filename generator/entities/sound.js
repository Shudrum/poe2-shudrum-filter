export default class Sound {
  #sound = 2;
  #disable = false;

  constructor(...args) {
    args.forEach((value) => {
      switch (value) {
        case 'IMPORTANCE_1': this.#sound = 1; break;
        case 'IMPORTANCE_2': this.#sound = 5; break;
        case 'IMPORTANCE_3': this.#sound = 2; break;
        case 'IMPORTANCE_4': this.#sound = 4; break;
        case 'IMPORTANCE_5': this.#sound = 13; break;
        case 'IMPORTANCE_6': this.#sound = 10; break;
        case 'IMPORTANCE_7': this.#sound = 3; break;
        case 'IMPORTANCE_8': this.#sound = 16; break;

        case 'WAYSTONE': this.#sound = 11; break;
        case 'UNIQUE': this.#sound = 6; break;
        case 'GEMS': this.#sound = 12; break;

        case 'VIBRANT_1': this.#sound = 7; break;
        case 'VIBRANT_2': this.#sound = 8; break;
        case 'VIBRANT_3': this.#sound = 9; break;
        case 'VIBRANT_4': this.#sound = 14; break;
        case 'VIBRANT_5': this.#sound = 15; break;

        case 'NONE': this.#disable = true; break;
      }
    });
  }

  toString() {
    if (this.#disable) {
      return 'PlayAlertSound None';
    }
    return `PlayAlertSound ${this.#sound} 300`;
  }
}

Sound.IMPORTANCE_1 = 'IMPORTANCE_1';
Sound.IMPORTANCE_2 = 'IMPORTANCE_2';
Sound.IMPORTANCE_3 = 'IMPORTANCE_3';
Sound.IMPORTANCE_4 = 'IMPORTANCE_4';
Sound.IMPORTANCE_5 = 'IMPORTANCE_5';
Sound.IMPORTANCE_6 = 'IMPORTANCE_6';
Sound.IMPORTANCE_7 = 'IMPORTANCE_7';
Sound.IMPORTANCE_8 = 'IMPORTANCE_8';
Sound.WAYSTONE = 'WAYSTONE';
Sound.UNIQUE = 'UNIQUE';
Sound.GEMS = 'GEMS';
Sound.VIBRANT_1 = 'VIBRANT_1';
Sound.VIBRANT_2 = 'VIBRANT_2';
Sound.VIBRANT_3 = 'VIBRANT_3';
Sound.VIBRANT_4 = 'VIBRANT_4';
Sound.VIBRANT_5 = 'VIBRANT_5';

Sound.NONE = 'NONE';
