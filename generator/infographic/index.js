import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import pug from 'pug';
import * as sass from 'sass';
import * as prettier from 'prettier';
import { chromium } from 'playwright';

import { modes, themes } from '../configuration/index.js';
import getTextColor from '../tools/get-text-color.js';

if (process.env.NODE_ENV === 'development') {
  console.clear();
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getModes() {
  return [{
    title: 'Waystone',
    items: [{
      label: 'Waystones maximum level gap',
      values: modes.waystones.hideStartingLevelGap,
    }],
  }, {
    title: 'Currencies',
    items: [{
      label: 'Shards',
      values: modes.currencies.displayShards,
    }, {
      label: 'Chance shards',
      values: modes.currencies.displayChanceShards,
    }, {
      label: 'Tier 3 currencies',
      values: modes.currencies.displayTier3,
    }, {
      label: 'Gold starting value',
      values: modes.currencies.gold.minimumDisplayedAmount,
    }],
  }, {
    title: 'Items',
    items: [{
      label: 'Display chanceable white bases',
      values: [true, true, true],
    }, {
      label: 'Display only expert magics',
      values: [true, true, true],
    }, {
      label: 'Display only expert rares',
      values: [false, false, false],
    }],
  }, {
    title: 'Salvageables',
    items: [{
      label: 'Minimum quality for Armourer',
      values: modes.equipment.salavageable.minimumArmourerQuality,
    }, {
      label: 'Minimum quality for Arcanist',
      values: modes.equipment.salavageable.minimumArcanistQuality,
    }, {
      label: 'Minimum quality for Whetstone',
      values: modes.equipment.salavageable.minimumWhetstoneQuality,
    }, {
      label: 'Minimum sockets',
      values: modes.equipment.salavageable.minimumSockets,
    }],
  }, {
    title: 'Miscellaneous',
    items: [{
      label: 'Minimum flasks quality',
      values: modes.flasks.minimumQuality,
    }, {
      label: 'Display charms',
      values: modes.charms.display,
    }, {
      label: 'Display basic runes',
      values: modes.runes.displayBasic,
    }],
  }];
}

async function loadThemes() {
  return themes.reduce((prev, current) => {
    if (!current.label) {
      return prev;
    }
    if (current.title) {
      prev.push({ title: current.title, items: [] });
    }
    prev.at(-1).items.push({
      ...current,
      text: getTextColor(current.color),
    });
    return prev;
  }, []);
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
    modes: getModes(),
    fontData: await fs.readFile(
      path.resolve(__dirname, '../assets/fontin-small-caps.ttf'),
      'base64',
    ),
  }, {
    pretty: true,
    escape: false,
  });

  await page.setContent(html);
  await page.waitForFunction(() => document.fonts.ready);

  await page.locator('#capture-zone').screenshot({
    path: process.env.NODE_ENV === 'development'
      ? path.resolve(__dirname, '../generated', 'infographic.png')
      : path.resolve(__dirname, '../../.github', 'infographic.png'),
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
