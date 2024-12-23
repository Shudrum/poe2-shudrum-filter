import { Section } from '../entities/filter/index.js';
import { Card, MapIcon } from '../entities/generators/index.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Salvageables');

  const common = {
    areaLevel: `>= ${global.startingAreaLevel}`,
    rarity: '<= Rare',
    card: Card(Card.THEMES.CURRENCY, Card.TYPES.OUTLINE, Card.SIZES.MEDIUM),
    icon: MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.GREY,
      MapIcon.SHAPES.CIRCLE,
    ),
  };

  section.addBlock({
    ...common,
    quality: `>= ${modes.EquipmentMinimumSalvageableQuality[modeId]}`,
  });

  section.addBlock({
    ...common,
    sockets: '> 0',
  });

  return section;
};
