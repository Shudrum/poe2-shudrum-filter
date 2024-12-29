import { Section } from '../entities/filter/index.js';
import Area from '../entities/generators/area.js';
import ItemDisplay, { ICON, THEME } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Useless items');

  const classes = [
    'Body Armour',
    'Boots',
    'Bow',
    'Crossbow',
    'Focus',
    'Gloves',
    'Helmet',
    'One Hand Mace',
    'QuarterStaff',
    'Quiver',
    'Sceptre',
    'Shield',
    'Staff',
    'Two Hand Mace',
    'Wand',
  ];

  //
  // Magics
  //

  section.addBlock({
    visible: false,
    class: classes,
    rarity: 'Magic',
    area: Area.FROM_STARTING_AREA,
    display: ItemDisplay.LOWEST(THEME.MAGICS),
  });

  section.addBlock({
    visible: false,
    class: classes,
    rarity: 'Magic',
    area: Area.UNDER_STARTING_AREA,
    display: ItemDisplay.LOWEST(THEME.MAGICS, ICON.CIRCLE),
  });

  //
  // Normals
  //

  section.addBlock({
    visible: false,
    class: classes,
    rarity: 'Normal',
    area: Area.FROM_STARTING_AREA,
    display: ItemDisplay.LOWEST(THEME.NORMALS),
  });

  section.addBlock({
    visible: false,
    class: classes,
    rarity: 'Normal',
    area: Area.UNDER_STARTING_AREA,
    display: ItemDisplay.LOWEST(THEME.NORMALS, ICON.CIRCLE),
  });

  return section;
};
