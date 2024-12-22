import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';
import { THEMES } from '../configuration.js';

export default () => {
  const section = new Section('Uniques');

  section.addBlock(new Block({
    rarity: 'Unique',
    card: new Card(
      THEMES.UNIQUE,
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
  }));

  return section;
};
