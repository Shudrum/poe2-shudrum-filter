import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import Area from '../entities/generators/area.js';
import ItemDisplay, { ICON, SIZE, THEME } from '../entities/generators/item-display.js';

export default ({ modeId }) => {
  const section = Section('Magic and rare items');

  const common = {
    area: Area.FROM_STARTING_AREA,
  };

  section.addBlock({
    ...common,
    rarity: 'Magic',
    itemLevel: `>= ${modes.EquipmentMinimumMagicItemLevel[modeId]}`,
    display: ItemDisplay.LOWEST(THEME.MAGICS, ICON.CIRCLE),
  });

  section.addBlock({
    ...common,
    rarity: 'Rare',
    itemLevel: `>= ${modes.EquipmentMinimumRareItemLevel[modeId]}`,
    display: ItemDisplay.LOWEST(THEME.RARES, SIZE.SMALL, ICON.CIRCLE),
  });

  section.addBlock({
    ...common,
    visible: false,
    rarity: 'Normal',
    display: ItemDisplay.LOWEST(THEME.NORMAL, SIZE.SMALL),
  });

  return section;
};
