import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';

export default () => {
  const section = Section('Uniques');

  section.addBlock({
    rarity: 'Unique',
    card: Card(
      Card.THEMES.UNIQUES,
      Card.TYPES.IMPORTANT,
      Card.SIZES.BIG,
    ),
    icon: MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.BROWN,
      MapIcon.SHAPES.STAR,
    ),
    effect: Effect(Effect.COLORS.BROWN),
    sound: Sound(Sound.TYPES.UNIQUE),
  });

  return section;
};
