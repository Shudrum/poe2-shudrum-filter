import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import { COLORS, MINIMUM_AREA_LEVEL, VARIABLES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Flasks');

  section.setCommon({
    type: 'Flask',
    rarity: '<= Magic',
  });

  section.addBlock(new Block({
    text: COLORS.FLASKS,
    border: COLORS.FLASKS,
    areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
    quality: `>= ${VARIABLES.FLASKS_MIN_QUALITY[mode]}`,
    font: 35,
    effect: new Effect(Effect.COLORS.CYAN, Effect.TEMPORARY),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.TRIANGLE,
    ),
  }));

  section.addBlock(new Block({
    visible: false,
  }));

  return section;
};
