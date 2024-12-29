import { Section } from '../entities/filter/index.js';
import Area from '../entities/generators/area.js';
import ItemDisplay, { ICON, SIZE, THEME } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Magic and rare items');

  const common = {
    area: Area.FROM_STARTING_AREA,
  };

  // Magic items

  section.addBlock({
    ...common,
    rarity: 'Magic',
    type: ['Expert '],
    area: Area.FROM_STARTING_AREA,
    display: ItemDisplay.LOWEST(THEME.MAGICS, ICON.CIRCLE),
  });

  section.addBlock({
    ...common,
    visible: false,
    rarity: 'Magic',
    area: Area.FROM_STARTING_AREA,
    display: ItemDisplay.LOWEST(THEME.MAGICS),
  });

  section.addBlock({
    ...common,
    rarity: 'Magic',
    area: Area.UNDER_STARTING_AREA,
    display: ItemDisplay.LOWEST(THEME.MAGICS, ICON.CIRCLE),
  });

  // Rare items

  section.addBlock({
    ...common,
    rarity: 'Rare',
    display: ItemDisplay.LOWEST(THEME.RARES, SIZE.SMALL, ICON.CIRCLE),
  });

  return section;
};
