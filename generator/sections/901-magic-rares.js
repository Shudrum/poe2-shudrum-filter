import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = new Section('Magic and rare items');

  const common = {
    areaLevel: `>= ${global.startingAreaLevel}`,
  };

  section.addBlock(new Block({
    ...common,
    rarity: 'Magic',
    itemLevel: `>= ${modes.EquipmentMinimumMagicItemLevel[modeId]}`,
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.BLUE,
      MapIcon.SHAPES.CIRCLE,
    ),
  }));

  section.addBlock(new Block({
    ...common,
    rarity: 'Rare',
    itemLevel: `>= ${modes.EquipmentMinimumRareItemLevel[modeId]}`,
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CIRCLE,
    ),
  }));

  return section;
};
