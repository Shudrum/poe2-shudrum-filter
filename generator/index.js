import path from 'node:path';
import fs from 'node:fs/promises';

import { pascalCase } from 'change-case';

import Filter from './entities/filter.js';
import loadSections from './sections/index.js';

import { MODES, FILTER_NAME } from './configuration.js';

(async () => {
  const sections = await loadSections();

  await Promise.all(Object.values(MODES).map(async (mode) => {
    const filter = new Filter(mode);
    filter.addSections(sections);

    const fileName = `${FILTER_NAME}${pascalCase(mode)}.filter`;
    await fs.writeFile(path.resolve('..', fileName), `${filter}`, 'utf-8');
  }));
})();
