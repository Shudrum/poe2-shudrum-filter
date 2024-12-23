import { Section } from '../entities/filter/index.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';

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
