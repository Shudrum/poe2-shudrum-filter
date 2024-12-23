import Section from '../entities/filter-components/section.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';

export default () => {
  const section = Section('Uniques');

  section.addBlock({
    rarity: 'Unique',
    card: new Card(
      Card.THEMES.UNIQUES,
      Card.TYPES.IMPORTANT,
      Card.SIZES.BIG,
    ),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.BROWN,
      MapIcon.SHAPES.STAR,
    ),
    effect: new Effect(Effect.COLORS.BROWN),
    sound: new Sound(Sound.TYPES.UNIQUE),
  });

  return section;
};
