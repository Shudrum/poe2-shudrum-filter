import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import pug from 'pug';
import * as sass from 'sass';
import * as prettier from 'prettier';
import { chromium } from 'playwright';

import getTextColor from '../tools/get-text-color.js';

if (process.env.NODE_ENV === 'development') {
  console.clear();
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function loadThemes() {
  return Object.values(Object.values(JSON.parse(
    await fs.readFile(path.resolve(__dirname, '../configuration/themes.json')),
  )).reduce((prev, current) => {
    if (current[1].title) {
      prev.push({ title: current[1].title, items: [] });
    }
    prev.at(-1).items.push({
      label: current[1].label,
      text: getTextColor(current[0]),
      color: current[0],
    });
    return prev;
  }, []));
}

async function loadModes() {
  return Object.values(Object.values(JSON.parse(
    await fs.readFile(path.resolve(__dirname, '../configuration/modes.json')),
  )).reduce((prev, current) => {
    if (!current[3]) {
      return prev;
    }
    if (current[3].title) {
      prev.push({ title: current[3].title, items: [] });
    }
    prev.at(-1).items.push({
      label: current[3].label,
      standard: current[0],
      intermediate: current[1],
      expert: current[2],
    });
    return prev;
  }, []));
}

async function loadStyle() {
  return await sass.compileAsync(path.resolve(__dirname, './style.scss'));
}

(async () => {
  /* global document */

  const browser = await chromium.launch();
  const page = await browser.newPage({
    deviceScaleFactor: 4,
  });

  const html = pug.renderFile(path.resolve(__dirname, 'template.pug'), {
    style: (await loadStyle()).css,
    themes: await loadThemes(),
    modes: await loadModes(),
    fontData: await fs.readFile(path.resolve(__dirname, './fontin-small-caps.ttf'), 'base64'),
  }, {
    pretty: true,
    escape: false,
  });

  await page.setContent(html);
  await page.waitForFunction(() => document.fonts.ready);

  await page.locator('#capture-zone').screenshot({
    path: process.env.NODE_ENV === 'development'
      ? path.resolve(__dirname, '../generated', 'filters-comparison.png')
      : path.resolve(__dirname, '../../.github', 'filters-comparison.png'),
    omitBackground: true,
  });

  if (process.env.NODE_ENV === 'development') {
    await fs.writeFile(
      path.resolve(__dirname, '../generated/infographic.html'),
      await prettier.format(html, {
        parser: 'html',
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: 'ignore',
      }),
      'utf-8',
    );
  }

  await browser.close();
})();