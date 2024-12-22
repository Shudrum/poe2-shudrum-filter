import Section from '../entities/section.js';
import Block from '../entities/block.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = new Section('Useless items');

  const classes = [
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
  ];

  section.addBlock(new Block({
    visible: false,
    class: classes,
    rarity: 'Magic',
    areaLevel: `>= ${global.startingAreaLevel}`,
    itemLevel: `< ${modes.EquipmentMinimumMagicItemLevel[modeId]}`,
  }));

  section.addBlock(new Block({
    visible: false,
    class: classes,
    rarity: 'Normal',
    areaLevel: `>= ${global.startingAreaLevel}`,
    itemLevel: `< ${modes.EquipmentMinimumNormalItemLevel[modeId]}`,
  }));

  return section;
};
