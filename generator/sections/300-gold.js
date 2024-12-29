import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import Area from '../entities/generators/area.js';
import ItemDisplay, { SIZE, THEME, TYPE } from '../entities/generators/item-display.js';

const STEPS = 5;

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
    stackSize: `< ${modes.currencies.gold.minimumDisplayedAmount[modeId]}`,
    display: ItemDisplay(THEME.GOLD, SIZE.TINY),
  });

  function generateValues(from, to) {
    function easing(x) {
      // EaseInQuad
      return x * x;
    }

    return Array.from(
      { length: STEPS },
      (_, i) => Math.round(easing(i / (STEPS - 1)) * (to - from)) + from,
    );
  }

  generateValues(
    modes.currencies.gold.minimumDisplayedAmount[modeId],
    modes.currencies.gold.ceilingDisplaySizeAmount[modeId],
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
