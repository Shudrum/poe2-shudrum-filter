import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import ItemDisplay, { ICON, THEME } from '../entities/generators/item-display.js';
import Area from '../entities/generators/area.js';

export default ({ modeId }) => {
  const section = Section('Salvageables');

  const common = {
    area: Area.FROM_STARTING_AREA,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CIRCLE),
  };

  // Armourer's Scrap

  section.addBlock({
    area: Area.FROM_STARTING_AREA,
    class: ['Body Armour', 'Gloves', 'Boots', 'Helmet'],
    rarity: '<= Magic',
    quality: `>= ${modes.equipment.salavageable.minimumArmourerQuality[modeId]}`,
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CIRCLE),
  });

  // Others

  section.addBlock({
    ...common,
    display: ItemDisplay.LOW(THEME.NORMAL, ICON.CIRCLE),
    quality: `>= ${modes.EquipmentMinimumSalvageableQuality[modeId]}`,
  });

  section.addBlock({
    ...common,
    display: ItemDisplay.LOW(THEME.NORMAL, ICON.CIRCLE),
    sockets: `> ${modes.EquipmentMinimumSalvageableSockets[modeId] - 1}`,
  });

  return section;
};
