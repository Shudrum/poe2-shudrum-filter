import fs from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '../');

const loadSections = async () => {
  const sectionFiles = (await fs.readdir(__dirname))
    .filter((file) => file.endsWith('.js') && file !== 'index.js')
    .sort();

  const sections = await Promise.all(
    sectionFiles.map(async (file) => {
      const filePath = join(__dirname, file);
      const fileURL = pathToFileURL(filePath).href;
      const module = await import(fileURL);
      return module.default;
    }),
  );

  return sections;
};

export default loadSections;
