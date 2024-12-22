import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import { COLORS } from '../configuration.js';

export default () => {
  const section = new Section('Event: Expedition');

  section.addBlock(new Block({
    class: 'Currency',
    type: 'Artifact',

    text: COLORS.EXPEDITION,
    border: COLORS.EXPEDITION,
    font: 30,

    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.DIAMOND,
    ),
    effect: new Effect(Effect.COLORS.CYAN),
    sound: new Sound(Sound.TYPES.IMPORTANCE_6),
  }));

  section.addBlock(new Block({
    class: 'Currency',
    type: 'Exotic Coinage',

    text: COLORS.BLACK,
    border: COLORS.EXPEDITION,
    background: COLORS.EXPEDITION,
    font: 40,

    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.STAR,
    ),
    effect: new Effect(Effect.COLORS.CYAN),
    sound: new Sound(Sound.TYPES.IMPORTANCE_3),
  }));

  return section;
};
