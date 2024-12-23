import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';

export default () => {
  const section = Section('Event: Expedition');

  section.addBlock({
    class: 'Currency',
    type: 'Artifact',
    card: Card(Card.THEMES.EXPEDITIONS, Card.TYPES.OUTLINE, Card.SIZES.MEDIUM),
    icon: MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.DIAMOND,
    ),
    effect: Effect(Effect.COLORS.CYAN),
    sound: Sound(Sound.TYPES.IMPORTANCE_6),
  });

  section.addBlock({
    class: 'Currency',
    type: 'Exotic Coinage',
    card: Card(Card.THEMES.EXPEDITIONS, Card.TYPES.IMPORTANT, Card.SIZES.BIG),
    icon: MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.STAR,
    ),
    effect: Effect(Effect.COLORS.CYAN),
    sound: Sound(Sound.TYPES.IMPORTANCE_3),
  });

  return section;
};
