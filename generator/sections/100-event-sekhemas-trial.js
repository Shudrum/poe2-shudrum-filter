import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';

export default () => {
  const section = Section('Event: Sekhemas trial');

  // Baryas and keys are important

  const important = {
    card: Card(Card.THEMES.EVENTS, Card.TYPES.IMPORTANT, Card.SIZES.BIG),
    effect: Effect(Effect.COLORS.PURPLE),
    sound: Sound(Sound.TYPES.IMPORTANCE_7),
  };

  section.addBlock({
    type: 'Barya',
    ...important,
    icon: MapIcon(MapIcon.SIZES.MEDIUM, MapIcon.COLORS.PURPLE, MapIcon.SHAPES.HEXAGON),
  });

  section.addBlock({
    type: ['Bronze Key', 'Silver Key', 'Gold Key'],
    ...important,
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.PURPLE, MapIcon.SHAPES.STAR),
  });

  // Relics

  section.addBlock({
    class: 'Relic',
    card: Card(Card.THEMES.EVENTS, Card.TYPES.OUTLINE, Card.SIZES.BIG),
    effect: Effect(Effect.COLORS.PURPLE),
    icon: MapIcon(MapIcon.SIZES.MEDIUM, MapIcon.COLORS.PURPLE, MapIcon.SHAPES.DIAMOND),
    sound: Sound(Sound.TYPES.IMPORTANCE_8),
  });

  return section;
};
