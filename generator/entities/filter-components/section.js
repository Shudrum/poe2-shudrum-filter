import Block from './block.js';

export default class Section {
  #name;
  #blocks;

  constructor(name) {
    this.#name = name;
    this.#blocks = [];
  }

  get name() {
    return this.#name;
  }

  generateBlocks() {
    return this.#blocks.reduce((prev, block) => [
      ...prev,
      '',
      ...block.generate(),
    ], []);
  }

  addBlock(blocDefinition) {
    this.#blocks.push(new Block(blocDefinition));
  }
}
