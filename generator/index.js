import path from 'node:path';
import fs from 'node:fs/promises';
import { platform } from 'node:os';
import { fileURLToPath } from 'node:url';

import { pascalCase } from 'change-case';

import { global } from './configuration/index.js';
import { Filter } from './entities/filter/index.js';
import loadSections from './sections/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const sections = await loadSections();
  const header = await fs.readFile(path.resolve(__dirname, 'configuration', 'header.txt'), 'utf-8');

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
    if (gameDirectory && (await fs.stat(gameDirectory)).isDirectory()) {
      console.log('Path of Exile 2 is installed. Filters are goind to be deployed');
      deployFilters = true;
    } else {
      console.log('Path of Exile 2 seems to not be installed. Skipping the filters deployment');
    }
  }

  await Promise.all(Object.values(global.modes).map(async (mode) => {
    // On the development environment, a single mode to build can be passed as
    // the environment variable MODE. If defined and does not match: skip the
    // build.
    if (process.env.NODE_ENV === 'development' && process.env.MODE && process.env.MODE !== mode) {
      return;
    }

    const generatedFilter = new Filter(mode, header)
      .setSections(sections)
      .generateText();

    const fileName = global.filterName.replace('{{mode}}', pascalCase(mode));
    await fs.writeFile(path.resolve('..', fileName), generatedFilter, 'utf-8');
    if (deployFilters) {
      await fs.writeFile(path.resolve(gameDirectory, fileName), generatedFilter, 'utf-8');
    }
  }));
})();
