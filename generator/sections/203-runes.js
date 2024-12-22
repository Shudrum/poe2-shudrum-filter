import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import { COLORS, VARIABLES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Runes');

  section.setCommon({
    type: 'Rune',
  });

  section.addBlock(new Block({
    text: COLORS.RUNES,
    border: COLORS.RUNES,
    font: 35,
    effect: new Effect(Effect.COLORS.CYAN, Effect.TEMPORARY),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.CIRCLE,
    ),
    continue: true,
  }));

  if (!VARIABLES.RUNES_DISPLAY[mode]) {
    section.addBlock(new Block({
      visible: false,
      effect: new Effect(Effect.NONE),
      icon: new MapIcon(MapIcon.NONE),
    }));
  }

  return section;
};
