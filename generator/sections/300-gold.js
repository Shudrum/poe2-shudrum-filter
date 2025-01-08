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
    stackSize: `< ${modes.currencies.gold.minimumDisplayedAmount[modeId]}`,
    display: ItemDisplay(THEME.GOLD, SIZE.TINY),
  });

  const goldDisplays = [
    [SIZE.SIZE_45, TYPE.OUTLINE],
    [SIZE.SIZE_43, TYPE.NORMAL],
    [SIZE.SIZE_41, TYPE.NORMAL],
    [SIZE.SIZE_39, TYPE.NORMAL],
    [SIZE.SIZE_37, TYPE.NORMAL],
    [SIZE.SIZE_35, TYPE.NORMAL],
    [SIZE.SIZE_33, TYPE.NORMAL],
    [SIZE.SIZE_31, TYPE.NORMAL],
    [SIZE.SIZE_29, TYPE.NORMAL],
    [SIZE.SIZE_27, TYPE.NORMAL],
    [SIZE.SIZE_25, TYPE.NORMAL],
  ];

  function generateValues(from, to) {
    function easing(x) {
      // EaseInQuad
      return x * x;
    }

    return Array.from(
      { length: goldDisplays.length },
      (_, i) => Math.round(easing(i / (goldDisplays.length - 1)) * (to - from)) + from,
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
      display: ItemDisplay(THEME.GOLD, ...goldDisplays[i]),
    });
  });

  return section;
};
