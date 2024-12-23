import Block from './block.js';

export default function Section(name) {
  const blocks = [];

  const instance = {
    addBlock(definition) {
      const block = Block(definition);
      blocks.push(block);
      return block;
    },
    generateText() {
      return blocks.reduce((prev, block) => [
        ...prev,
        ...block.generate(),
        '',
      ], [
        '#',
        `# ${name.toUpperCase()}`,
        '#',
        '',
      ]).join('\n');
    },
  };

  return instance;
}
