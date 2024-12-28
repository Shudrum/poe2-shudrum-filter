import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import pug from 'pug';
import * as prettier from 'prettier';
import { chromium } from 'playwright';

import { global, themes } from '../configuration/index.js';
import getTextColor from '../tools/get-text-color.js';
import hexToRgba from '../tools/hex-to-rgba.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function getThemes() {
  return Object.entries(themes).reduce((prev, [key, value]) => [
    ...prev,
    {
      key: key.toUpperCase(),
      color: value[0],
      text: getTextColor(value[0]),
    },
  ], []);
}

export default async function generatePreview() {
  /* global document */

  const browser = await chromium.launch();
  const page = await browser.newPage({
    deviceScaleFactor: 4,
  });

  const defaultBackground = hexToRgba(global.defaultTransparency);
  const html = pug.renderFile(path.resolve(__dirname, 'template.pug'), {
    themes: await getThemes(),
    defaultBackground: `rgba(${[
      defaultBackground.r,
      defaultBackground.g,
      defaultBackground.b,
      defaultBackground.a / 255,
    ].join(', ')})`,
    fontData: await fs.readFile(
      path.resolve(__dirname, '../assets/fontin-small-caps.ttf'),
      'base64',
    ),
  }, {
    escape: false,
  });

  await page.setContent(html);
  await page.waitForFunction(() => document.fonts.ready);

  await page.locator('#capture-zone').screenshot({
    path: path.resolve(__dirname, '../generated', 'preview.png'),
    omitBackground: true,
  });

  await fs.writeFile(
    path.resolve(__dirname, '../generated/preview.html'),
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

  await browser.close();
}
