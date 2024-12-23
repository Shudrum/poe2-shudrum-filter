import Section from '../entities/filter-components/section.js';
import MapIcon from '../entities/map-icon.js';
import Card from '../entities/card.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Salvageables');

  const common = {
    areaLevel: `>= ${global.startingAreaLevel}`,
    rarity: '<= Rare',
    card: new Card(Card.THEMES.CURRENCY, Card.TYPES.OUTLINE, Card.SIZES.MEDIUM),
    icon: new MapIcon(
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
