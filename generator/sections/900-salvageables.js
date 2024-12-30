import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import ItemDisplay, { ICON, THEME } from '../entities/generators/item-display.js';
import Area from '../entities/generators/area.js';

export default ({ modeId }) => {
  const section = Section('Salvageables');

  const classes = {
    armourer: ['Body Armour', 'Gloves', 'Boots', 'Helmet'],
    arcanist: ['Sceptre', 'Staff', 'Wand'],
    whetstone: [
      'Bow', 'Crossbow', 'Focus', 'One Hand Mace', 'QuarterStaff', 'Quiver',
      'Shield', 'Two Hand Mace',
    ],
  };

  //
  // Armourer's Scrap
  //

  section.addBlock({
    area: Area.FROM_STARTING_AREA,
    class: classes.armourer,
    rarity: '<= Magic',
    quality: `>= ${modes.equipment.salavageable.minimumArmourerQuality[modeId]}`,
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CROSS),
  });

  section.addBlock({
    visible: false,
    area: Area.FROM_STARTING_AREA,
    class: classes.armourer,
    rarity: '<= Magic',
    quality: '> 0',
    display: ItemDisplay.LOW(THEME.CURRENCIES),
  });

  section.addBlock({
    area: Area.UNDER_STARTING_AREA,
    class: classes.armourer,
    rarity: '<= Magic',
    quality: '> 0',
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CROSS),
  });

  //
  // Arcanist's Scrap
  //

  section.addBlock({
    area: Area.FROM_STARTING_AREA,
    class: classes.arcanist,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CROSS),
    quality: `>= ${modes.equipment.salavageable.minimumArcanistQuality[modeId]}`,
  });

  section.addBlock({
    visible: false,
    area: Area.FROM_STARTING_AREA,
    class: classes.arcanist,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES),
    quality: '> 0',
  });

  section.addBlock({
    area: Area.UNDER_STARTING_AREA,
    class: classes.arcanist,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CROSS),
    quality: '> 0',
  });

  //
  // Whetstone's Scrap
  //

  section.addBlock({
    area: Area.FROM_STARTING_AREA,
    class: classes.whetstone,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CROSS),
    quality: `>= ${modes.equipment.salavageable.minimumWhetstoneQuality[modeId]}`,
  });

  section.addBlock({
    visible: false,
    area: Area.FROM_STARTING_AREA,
    class: classes.whetstone,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES),
    quality: '> 0',
  });

  section.addBlock({
    area: Area.UNDER_STARTING_AREA,
    class: classes.whetstone,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CROSS),
    quality: '> 0',
  });

  //
  // Sockets's Scrap
  //

  section.addBlock({
    area: Area.FROM_STARTING_AREA,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CROSS),
    sockets: `> ${modes.equipment.salavageable.minimumSockets[modeId] - 1}`,
  });

  section.addBlock({
    visible: false,
    area: Area.FROM_STARTING_AREA,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES),
    quality: '> 0',
  });

  section.addBlock({
    area: Area.UNDER_STARTING_AREA,
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.CURRENCIES, ICON.CROSS),
    quality: '> 0',
  });

  return section;
};
