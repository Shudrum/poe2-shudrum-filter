import Section from '../entities/section.js';
import { global, modes } from '../configuration/index.js';
import Card from '../entities/card.js';

export default ({ modeId }) => {
  const section = new Section('Amulets, rings & belts');

  const common = {
    class: ['Amulets', 'Rings', 'Belts'],
    areaLevel: `>= ${global.startingAreaLevel}`,
    itemLevel: `>= ${modes.EquipmentMinimumNormalItemLevel[modeId]}`,
  };

  section.addBlock({
    ...common,
    rarity: 'Normal',
    card: new Card(Card.THEMES.NORMAL, Card.SIZES.BIG, Card.TYPES.OUTLINE),
  });

  section.addBlock({
    ...common,
    rarity: 'Magic',
    card: new Card(Card.THEMES.MAGICS, Card.SIZES.BIG, Card.TYPES.OUTLINE),
  });

  section.addBlock({
    ...common,
    rarity: 'Rare',
    card: new Card(Card.THEMES.RARES, Card.SIZES.BIG, Card.TYPES.OUTLINE),
  });

  return section;
};
