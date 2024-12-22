import Section from '../entities/section.js';
import Block from '../entities/block.js';
import { MINIMUM_AREA_LEVEL, VARIABLES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Useless items');

  section.addBlock(new Block({
    visible: false,
    class: [
      'Boots',
      'QuarterStaff',
      'Crossbow',
      'Body Armour',
      'Two Hand Mace',
      'Gloves',
      'Focus',
      'Wand',
      'One Hand Mace',
      'Helmet',
      'Shield',
      'Quiver',
      'Sceptre',
      'Bow',
      'Staff',
    ],
    rarity: '<= Magic',
    areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
    itemLevel: `< ${VARIABLES.MIN_ITEM_LEVEL_NORMAL_MAGIC_RARE[mode]}`,
  }));

  return section;
};
