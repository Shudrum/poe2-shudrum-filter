import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import { MINIMUM_AREA_LEVEL, COLORS, VARIABLES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Salvageables');

  const common = {
    areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
    rarity: '<= Rare',
    font: 30,
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.GREY,
      MapIcon.SHAPES.CIRCLE,
    ),
    text: COLORS.CURRENCY,
    border: COLORS.CURRENCY,
  };

  section.addBlock(new Block({
    ...common,
    quality: `>= ${VARIABLES.SALVAGEABLE_MIN_QUALITY[mode]}`,
  }));

  section.addBlock(new Block({
    ...common,
    sockets: '> 0',
  }));

  return section;
};
