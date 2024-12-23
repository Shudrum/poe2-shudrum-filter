import path from 'node:path';
import fs from 'node:fs/promises';
import { platform } from 'node:os';
import { fileURLToPath } from 'node:url';

import { pascalCase } from 'change-case';

import { global } from './configuration/index.js';
import { Filter } from './entities/filter/index.js';
import loadSections from './sections/index.js';

if (process.env.NODE_ENV === 'development') {
  console.clear();
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ensureGeneratedFolder() {
  try {
    await fs.mkdir(path.resolve(__dirname, 'generated'));
  } catch {
    // Do nothing
  }
}

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

  let deployFiltersToGame = false;
  if (process.env.NODE_ENV === 'development') {
    if (gameDirectory && (await fs.stat(gameDirectory)).isDirectory()) {
      console.log('Path of Exile 2 is installed. Filters will be deployed on the game folder.');
      deployFiltersToGame = true;
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

    if (process.env.NODE_ENV === 'development' && deployFiltersToGame) {
      await fs.writeFile(path.resolve(gameDirectory, fileName), generatedFilter, 'utf-8');
    }

    if (process.env.NODE_ENV === 'development') {
      await ensureGeneratedFolder();
      await fs.writeFile(path.resolve(__dirname, 'generated', fileName), generatedFilter, 'utf-8');
    } else {
      await fs.writeFile(path.resolve('..', fileName), generatedFilter, 'utf-8');
    }
  }));
})();
