import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon } from '../entities/generators/index.js';

export default () => {
  const section = Section('Jewels');

  section.addBlock({
    class: 'Jewel',
    rarity: '<= Rare',
    card: Card(Card.THEMES.JEWELS, Card.SIZES.BIG, Card.TYPES.OUTLINE),
    icon: MapIcon(MapIcon.SIZES.MEDIUM, MapIcon.COLORS.GREEN, MapIcon.SHAPES.PENTAGON),
    effect: Effect(Effect.COLORS.GREEN, Effect.TEMPORARY),
  });

  return section;
};
