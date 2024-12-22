import path from 'node:path';
import fs from 'node:fs/promises';
import { platform } from 'node:os';
import { fileURLToPath } from 'node:url';

import { pascalCase } from 'change-case';

import Filter from './entities/filter.js';
import loadSections from './sections/index.js';
import { MODES, FILTER_NAME } from './configuration.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const sections = await loadSections();
  const header = await fs.readFile(path.resolve(__dirname, 'header.txt'), 'utf-8');

  const gameDirectory = process.env.NODE_ENV === 'development' && platform() === 'win32'
    ? path.join(
      process.env.USERPROFILE,
      'Documents',
      'My Games',
      'Path of Exile 2',
    )
    : null;

  let deployFilters = false;
  if (process.env.NODE_ENV === 'development') {
    if (gameDirectory && !(await fs.stat(gameDirectory)).isDirectory()) {
      console.log('Path of Exile 2 seems to not be installed. Skipping the filters deployment');
    } else {
      console.log('Path of Exile 2 in installed. Filters are goind to be deployed');
      deployFilters = true;
    }
  }

  await Promise.all(Object.values(MODES).map(async (mode) => {
    const filter = new Filter(mode, header);
    filter.addSections(sections);

    const fileName = `${FILTER_NAME}${pascalCase(mode)}.filter`;
    await fs.writeFile(path.resolve('..', fileName), `${filter}`, 'utf-8');
    if (deployFilters) {
      await fs.writeFile(path.resolve(gameDirectory, fileName), `${filter}`, 'utf-8');
    }
  }));
})();
