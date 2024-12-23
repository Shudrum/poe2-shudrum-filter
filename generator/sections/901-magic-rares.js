import Section from '../entities/filter-components/section.js';
import MapIcon from '../entities/map-icon.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Magic and rare items');

  const common = {
    areaLevel: `>= ${global.startingAreaLevel}`,
  };

  section.addBlock({
    ...common,
    rarity: 'Magic',
    itemLevel: `>= ${modes.EquipmentMinimumMagicItemLevel[modeId]}`,
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.BLUE,
      MapIcon.SHAPES.CIRCLE,
    ),
  });

  section.addBlock({
    ...common,
    rarity: 'Rare',
    itemLevel: `>= ${modes.EquipmentMinimumRareItemLevel[modeId]}`,
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CIRCLE,
    ),
  });

  return section;
};
