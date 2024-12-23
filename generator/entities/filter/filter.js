import { pascalCase } from 'change-case';

import { global } from '../../configuration/index.js';

export default function Filter(mode, header) {
  const modeId = global.modes.indexOf(mode);
  const sections = [];

  const instance = {
    addSection(section) {
      sections.push(section);
    },
    setSections(sectionsList) {
      sectionsList.map((section) => {
        sections.push(section({ mode, modeId }));
      }).filter(Boolean);
      return instance;
    },
    generateText() {
      return sections.reduce((prev, section) => {
        return `${prev}\n${section.generateText()}`;
      }, header.replace('{{MODE}}', pascalCase(mode)));
    },
  };

  return instance;
}
