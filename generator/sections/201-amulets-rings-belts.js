import { Section } from '../entities/filter/index.js';
import { global, modes } from '../configuration/index.js';
import ItemDisplay, { THEME } from '../entities/generators/item-display.js';

export default ({ modeId }) => {
  const section = Section('Amulets, rings & belts');

  const common = {
    class: ['Amulets', 'Rings', 'Belts'],
    areaLevel: `>= ${global.startingAreaLevel}`,
    itemLevel: `>= ${modes.EquipmentMinimumBaseNormalItemLevel[modeId]}`,
  };

  section.addBlock({
    ...common,
    rarity: 'Normal',
    display: ItemDisplay.MEDIUM(THEME.NORMAL),
  });

  return section;
};
