import { Section } from '../entities/filter/index.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';

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
