import Section from '../entities/section.js';
import Block from '../entities/block.js';
import { MINIMUM_AREA_LEVEL, COLORS, VARIABLES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Gold');

  section.setCommon({
    type: 'Gold',
  });

  section.addBlock(new Block({
    text: COLORS.GOLD,
    font: 25,
    continue: true,
  }));

  section.addBlock(new Block({
    visible: false,
    areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
    stackSize: `< ${VARIABLES.MIN_GOLD_TO_DISPLAY[mode]}`,
  }));

  [
    [1000, 45, true],
    [750, 40],
    [500, 35],
    [250, 30],
    [100, 25],
    [50, 20],
  ].forEach(([stackSize, setFontSize, showBorder]) => {
    section.addBlock(new Block({
      stackSize: `>= ${stackSize}`,
      setFontSize,
      ...showBorder && { border: COLORS.GOLD },
    }));
  });

  return section;
};
