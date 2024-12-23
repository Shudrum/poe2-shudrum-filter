import Section from '../entities/filter-components/section.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Useless items');

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
    itemLevel: `< ${modes.EquipmentMinimumNormalItemLevel[modeId]}`,
  });

  return section;
};
