import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';
import { global } from '../configuration/index.js';

export default () => {
  if (!global.debug) return null;

  const section = Section('Debug: 3 colors = not managed by the filter');

  section.addBlock({
    areaLevel: `>= ${global.startingAreaLevel}`,
    card: Card(Card.SIZES.BIG, Card.TYPES.IMPORTANT, Card.THEMES.ALERT),
    effect: Effect(Effect.COLORS.GREEN),
    sound: Sound(Sound.TYPES.VIBRANT_2),
    icon: MapIcon(MapIcon.COLORS.PINK, MapIcon.SIZES.MEDIUM, MapIcon.SHAPES.UPSIDE_DOWN_HOUSE),
  });

  return section;
};
