import Section from '../entities/filter-components/section.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';

export default () => {
  const section = new Section('Event: Sekhemas trial');

  section.addBlock({
    type: [
      'Barya',
      'Bronze Key',
      'Silver Key',
      'Gold Key',
    ],
    card: new Card(Card.THEMES.EVENTS, Card.TYPES.IMPORTANT, Card.SIZES.BIG),
    icon: new MapIcon(
      MapIcon.SIZES.MEDIUM,
      MapIcon.COLORS.PURPLE,
      MapIcon.SHAPES.HEXAGON,
    ),
    effect: new Effect(Effect.COLORS.PURPLE),
    sound: new Sound(Sound.TYPES.IMPORTANCE_7),
    continue: true,
  });

  // Relics
  section.addBlock({
    class: 'Relic',
    card: new Card(Card.THEMES.EVENTS, Card.TYPES.OUTLINE, Card.SIZES.BIG),
    effect: new Effect(Effect.COLORS.PURPLE),
    icon: new MapIcon(
      MapIcon.SIZES.MEDIUM,
      MapIcon.COLORS.PURPLE,
      MapIcon.SHAPES.DIAMOND,
    ),
    sound: new Sound(Sound.TYPES.IMPORTANCE_8),
  });

  // Different icons keys
  section.addBlock({
    type: [
      'Bronze Key',
      'Silver Key',
      'Gold Key',
    ],
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.PURPLE,
      MapIcon.SHAPES.STAR,
    ),
  });

  return section;
};
