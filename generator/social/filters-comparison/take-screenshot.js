import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const configuration = JSON.parse(
    await fs.readFile(path.resolve(__dirname, '../../configuration/modes.json')),
  );

  const preparedData = Object.values(configuration).map(
    ([standard, intermediate, expert, { label, title } = {}]) => {
      if (!label) return null;
      return {
        label,
        title,
        standard,
        intermediate,
        expert,
      };
    },
  ).filter(Boolean);

  const browser = await chromium.launch();
  const page = await browser.newPage({
    deviceScaleFactor: 4,
  });

  const fontData = await fs.readFile(
    path.resolve(__dirname, 'fontin-small-caps.ttf'),
    'base64',
  );

  let template = await fs.readFile(path.resolve(__dirname, 'template.html'), 'utf-8');
  template = template.replace('{{fontData}}', fontData);

  await page.setContent(template);

  await page.evaluate((data) => {
    /* global document */

    const renderCellContent = (value) => {
      if (typeof value === 'boolean') {
        /* eslint-disable @stylistic/js/max-len */
        return value
          ? '<svg class="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>'
          : '<svg class="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>';
        /* eslint-enable @stylistic/js/max-len */
      }
      return value;
    };

    const tableBody = document.getElementById('table-body');
    data.forEach(({ label, title, standard, intermediate, expert }) => {
      if (title) {
        const titleRow = document.createElement('tr');
        titleRow.innerHTML = `
          <td class="row-title" colspan="6">${title}</td>
        `;
        tableBody.appendChild(titleRow);
      }

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${label}</td>
        <td>${renderCellContent(standard)}</td>
        <td></td>
        <td>${renderCellContent(intermediate)}</td>
        <td></td>
        <td>${renderCellContent(expert)}</td>
      `;
      tableBody.appendChild(row);
    });
  }, preparedData);

  await page.waitForFunction(() => document.fonts.ready);

  await page.locator('#capture-zone').screenshot({
    path: path.resolve(__dirname, '../../../.github', 'filters-comparison.png'),
    omitBackground: true,
  });

  await browser.close();
})();
