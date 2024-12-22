const WIDTH = 80;

export default class Filter {
  #mode;
  #sections;

  constructor(mode) {
    this.#mode = mode;
    this.#sections = [];
  }

  addSection(section) {
    this.#sections.push(section);
  }

  addSections(sections) {
    this.#sections = [
      ...this.#sections,
      ...sections.map((section) => section(this.#mode)),
    ].filter(Boolean);
  }

  toString() {
    const header = [
      '#',
      '# Shudrum filter',
      '#',
      '# Filter designed to keep a pleasant filter for every step of the late game.',
      '# Repository: ',
      '#',
      '',
      '',
    ].join('\n');

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

    return `${header}${sections}`;
  }
}
