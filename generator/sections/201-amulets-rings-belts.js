import { Section } from '../entities/filter/index.js';
import { global, modes } from '../configuration/index.js';
import { Card } from '../entities/generators/index.js';

export default ({ modeId }) => {
  const section = Section('Amulets, rings & belts');

  const common = {
    class: ['Amulets', 'Rings', 'Belts'],
    areaLevel: `>= ${global.startingAreaLevel}`,
    itemLevel: `>= ${modes.EquipmentMinimumBaseNormalItemLevel[modeId]}`,
  };

  section.addBlock({
    ...common,
    rarity: 'Normal',
    card: Card(Card.THEMES.NORMAL, Card.SIZES.BIG, Card.TYPES.OUTLINE),
  });

  section.addBlock({
    ...common,
    rarity: 'Magic',
    card: Card(Card.THEMES.MAGICS, Card.SIZES.BIG, Card.TYPES.OUTLINE),
  });

  section.addBlock({
    ...common,
    rarity: 'Rare',
    card: Card(Card.THEMES.RARES, Card.SIZES.BIG, Card.TYPES.OUTLINE),
  });

  return section;
};
