import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadConfiguration(name) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, `${name}.json`), 'utf-8'));
}

export const global = loadConfiguration('global');
export const modes = loadConfiguration('modes');
export const themes = loadConfiguration('themes');
