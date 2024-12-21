import path from 'node:path';
import fs from 'node:fs/promises';

import Filter from './entities/filter.js';
import loadSections from './sections/index.js';

import { FILTER_NAME } from './configuration.js';

(async () => {
  const filter = new Filter();
  filter.addSections(await loadSections());

  const fileName = `${FILTER_NAME}.filter`;
  await fs.writeFile(path.resolve('..', fileName), `${filter}`, 'utf-8');
})();
