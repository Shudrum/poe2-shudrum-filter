import { pascalCase } from 'change-case';

import { global } from '../../configuration/index.js';

const WIDTH = 80;

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
    const sections = this.#sections.reduce((prev, section) => {
      return [
        ...prev,
        ''.padEnd(WIDTH, '#'),
        `## ${section.name.toUpperCase().padEnd(WIDTH - 6)} ##`,
        ''.padEnd(WIDTH, '#'),
        ...section.generateBlocks(),
        '',
      ];
    }, []).join('\n');

    return `${this.#header}\n${sections}`;
  }
}
