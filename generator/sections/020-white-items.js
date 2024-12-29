import { Section } from '../entities/filter/index.js';
import { global, modes, whiteItems } from '../configuration/index.js';
import ItemDisplay, { THEME, ICON, ICON_SIZE } from '../entities/generators/item-display.js';

export default ({ modeId }) => {
  const section = Section('White items');

  const commonSelector = {
    areaLevel: `>= ${global.startingAreaLevel}`,
    itemLevel: `>= ${modes.EquipmentMinimumBaseNormalItemLevel[modeId]}`,
    rarity: 'Normal',
  };

  const display = ItemDisplay.MEDIUM(THEME.NORMAL, ICON.CIRCLE, ICON_SIZE.SMALL);

  whiteItems.forEach((selector) => {
    section.addBlock({
      ...commonSelector,
      ...selector,
      display,
    });
  });

  return section;
};
