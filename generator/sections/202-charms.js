import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import { MINIMUM_AREA_LEVEL, COLORS, VARIABLES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Charms');

  section.setCommon({
    type: 'Charm',
  });

  section.addBlock(new Block({
    text: COLORS.CHARMS,
    border: COLORS.CHARMS,
    font: 30,
    effect: new Effect(Effect.COLORS.PURPLE, Effect.TEMPORARY),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.PURPLE,
      MapIcon.SHAPES.MOON,
    ),
  }));

  if (!VARIABLES.CHARMS_DISPLAY[mode]) {
    section.addBlock(new Block({
      areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
      visible: false,
    }));
  }

  return section;
};
