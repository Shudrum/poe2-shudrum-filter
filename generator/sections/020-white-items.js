import { Section } from '../entities/filter/index.js';
import { global, whiteItems } from '../configuration/index.js';
import ItemDisplay, { THEME, ICON, ICON_SIZE, SIZE } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('White items');

  const commonSelector = {
    areaLevel: `>= ${global.startingAreaLevel}`,
    rarity: 'Normal',
  };

  const display = ItemDisplay.MEDIUM(
    THEME.NORMALS,
    ICON.CIRCLE,
    ICON_SIZE.SMALL,
    SIZE.BIG,
  );

  whiteItems.forEach((selector) => {
    section.addBlock({
      ...commonSelector,
      ...selector,
      display,
    });
  });

  return section;
};
