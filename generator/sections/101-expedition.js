import Section from '../entities/section.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';

export default () => {
  const section = new Section('Event: Expedition');

  section.addBlock({
    class: 'Currency',
    type: 'Artifact',
    card: new Card(Card.THEMES.EXPEDITIONS, Card.TYPES.OUTLINE, Card.SIZES.MEDIUM),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.DIAMOND,
    ),
    effect: new Effect(Effect.COLORS.CYAN),
    sound: new Sound(Sound.TYPES.IMPORTANCE_6),
  });

  section.addBlock({
    class: 'Currency',
    type: 'Exotic Coinage',
    card: new Card(Card.THEMES.EXPEDITIONS, Card.TYPES.IMPORTANT, Card.SIZES.BIG),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.STAR,
    ),
    effect: new Effect(Effect.COLORS.CYAN),
    sound: new Sound(Sound.TYPES.IMPORTANCE_3),
  });

  return section;
};
