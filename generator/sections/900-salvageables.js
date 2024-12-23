import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Card from '../entities/card.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = new Section('Salvageables');

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

  section.addBlock(new Block({
    ...common,
    quality: `>= ${modes.EquipmentMinimumSalvageableQuality[modeId]}`,
  }));

  section.addBlock(new Block({
    ...common,
    sockets: '> 0',
  }));

  return section;
};
