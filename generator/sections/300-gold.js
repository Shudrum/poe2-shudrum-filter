import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import Area from '../entities/generators/area.js';
import ItemDisplay, { SIZE, THEME, TYPE } from '../entities/generators/item-display.js';

export default ({ modeId }) => {
  const section = Section('Gold');

  const gold = {
    class: ['Currency'],
    type: ['Gold'],
  };

  section.addBlock({
    ...gold,
    area: Area.UNDER_STARTING_AREA,
    display: ItemDisplay(THEME.GOLD, SIZE.SMALL),
  });

  section.addBlock({
    ...gold,
    visible: false,
    area: Area.FROM_STARTING_AREA,
    stackSize: `< ${modes.GoldMinimumDisplayedAmount[modeId]}`,
    display: ItemDisplay(THEME.GOLD, SIZE.TINY),
  });

  function generateValues(from, to) {
    const steps = 6;
    const stepSize = (to - from) / (steps - 1);
    return Array.from({ length: steps }, (_, i) => Math.round(from + i * stepSize));
  }

  generateValues(
    modes.GoldMinimumDisplayedAmount[modeId],
    modes.GoldCeilingDisplaySizeAmount[modeId],
  ).reverse().forEach((stackSize, i) => {
    section.addBlock({
      ...gold,
      area: Area.FROM_STARTING_AREA,
      stackSize: `>= ${stackSize}`,
      display: ItemDisplay(THEME.GOLD, [
        SIZE.BIG,
        SIZE.MEDIUM,
        SIZE.SMALL,
        SIZE.SMALLEST,
        SIZE.TINY,
      ][i], i === 0 ? TYPE.OUTLINE : TYPE.NORMAL),
    });
  });

  return section;
};
