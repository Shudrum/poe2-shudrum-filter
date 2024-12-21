import Section from '../entities/section.js';
import Block from '../entities/block.js';

import { MINIMUM_AREA_LEVEL } from '../configuration.js';

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
  itemLevel: `< ${MINIMUM_AREA_LEVEL}`,
}));

export default section;
