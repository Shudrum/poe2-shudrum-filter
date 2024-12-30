import { Section } from '../entities/filter/index.js';
import { importantItems } from '../configuration/index.js';
import ItemDisplay, { ICON } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Important items');

  const display = ItemDisplay.CRITICAL(ICON.STAR);

  importantItems.forEach((selector) => {
    section.addBlock({
      ...selector,
      display,
    });
  });

  return section;
};
