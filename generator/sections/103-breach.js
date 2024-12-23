import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';

export default () => {
  const section = Section('Event: Breach');

  section.addBlock({
    type: 'Breach',
    card: Card(Card.THEMES.BREACH, Card.TYPES.IMPORTANT, Card.SIZES.MEDIUM),
    icon: MapIcon(MapIcon.SIZES.MEDIUM, MapIcon.COLORS.PURPLE, MapIcon.SHAPES.KITE),
    effect: Effect(Effect.COLORS.PURPLE),
    sound: Sound(Sound.TYPES.IMPORTANCE_6),
  });

  return section;
};
