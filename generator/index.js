import path from 'node:path';
import fs from 'node:fs/promises';

import Filter from './entities/filter.js';
import sections from './sections/index.js';

import { FILTER_NAME } from './configuration.js';

const filter = new Filter();
filter.addSections(sections);

(async () => {
  const fileName = `${FILTER_NAME}.filter`;
  await fs.writeFile(path.resolve('..', fileName), `${filter}`, 'utf-8');
})();
