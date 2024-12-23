import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';

export default () => {
  const section = Section('Event: Ultimatum');

  section.addBlock({
    type: 'Ultimatum',
    card: Card(Card.THEMES.EVENTS, Card.TYPES.IMPORTANT, Card.SIZES.BIG),
    icon: MapIcon(MapIcon.SIZES.MEDIUM, MapIcon.COLORS.PURPLE, MapIcon.SHAPES.HEXAGON),
    effect: Effect(Effect.COLORS.PURPLE),
    sound: Sound(Sound.TYPES.IMPORTANCE_7),
  });

  return section;
};
