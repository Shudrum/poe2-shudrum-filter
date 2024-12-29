import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import ItemDisplay, { ICON, THEME } from '../entities/generators/item-display.js';
import Area from '../entities/generators/area.js';

export default ({ modeId }) => {
  const section = Section('Salvageables');

  const common = {
    area: Area.FROM_STARTING_AREA,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.NORMAL, ICON.CIRCLE),
  };

  section.addBlock({
    ...common,
    quality: `>= ${modes.EquipmentMinimumSalvageableQuality[modeId]}`,
  });

  section.addBlock({
    ...common,
    sockets: `> ${modes.EquipmentMinimumSalvageableSockets[modeId] - 1}`,
  });

  return section;
};
