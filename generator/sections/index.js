import fs from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { DEBUG } from '../configuration.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '../');

const loadSections = async () => {
  const sectionFiles = (await fs.readdir(__dirname))
    .filter((file) => file.endsWith('.js') && file !== 'index.js')
    .sort();

  const sections = await Promise.all(
    sectionFiles.map(async (file) => {
      const module = await import(join(__dirname, file));
      return module.default;
    }),
  );

  return DEBUG ? sections : sections.filter((section) => section.name !== 'debug');
};

export default loadSections;
