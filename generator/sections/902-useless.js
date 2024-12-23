import { Section } from '../entities/filter/index.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
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

  section.addBlock({
    visible: false,
    class: classes,
    rarity: 'Magic',
    areaLevel: `>= ${global.startingAreaLevel}`,
    itemLevel: `< ${modes.EquipmentMinimumMagicItemLevel[modeId]}`,
  });

  section.addBlock({
    visible: false,
    class: classes,
    rarity: 'Normal',
    areaLevel: `>= ${global.startingAreaLevel}`,
  });

  return section;
};
