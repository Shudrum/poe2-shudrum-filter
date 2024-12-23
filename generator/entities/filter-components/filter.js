import { pascalCase } from 'change-case';

import { global } from '../../configuration/index.js';

export default class Filter {
  #header;
  #mode;
  #modeId;
  #sections;

  constructor(mode, header) {
    this.#header = header.replace('{MODE}', pascalCase(mode));
    this.#mode = mode;
    this.#modeId = global.modes.indexOf(this.#mode);
    this.#sections = [];
  }

  addSection(section) {
    this.#sections.push(section);
  }

  addSections(sections) {
    this.#sections = [
      ...this.#sections,
      ...sections.map((section) => section({ mode: this.#mode, modeId: this.#modeId })),
    ].filter(Boolean);
  }

  toString() {
    return this.#sections.reduce((prev, section) => {
      return `${prev}\n${section.generateText()}`;
    }, this.#header);
  }
}
