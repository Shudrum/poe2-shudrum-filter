import { Section } from '../entities/filter/index.js';
import { Area, Card, MapIcon } from '../entities/generators/index.js';
import { modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Magic and rare items');

  const common = {
    area: Area.FROM_STARTING_AREA,
  };

  section.addBlock({
    ...common,
    rarity: 'Magic',
    itemLevel: `>= ${modes.EquipmentMinimumMagicItemLevel[modeId]}`,
    card: Card(Card.THEMES.MAGICS, Card.SIZES.SMALL),
    icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.BLUE, MapIcon.SHAPES.CIRCLE),
  });

  section.addBlock({
    ...common,
    rarity: 'Rare',
    itemLevel: `>= ${modes.EquipmentMinimumRareItemLevel[modeId]}`,
    card: Card(Card.THEMES.RARES, Card.SIZES.MEDIUM),
    icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.CIRCLE),
  });

  return section;
};
