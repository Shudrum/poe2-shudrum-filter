import Block from './block.js';

export default function Section(name) {
  const blocks = [];

  const instance = {
    addBlock(definition) {
      blocks.push(Block(definition));
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
