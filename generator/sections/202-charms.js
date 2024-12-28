import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import ItemDisplay, { THEME } from '../entities/generators/item-display.js';
import Area from '../entities/generators/area.js';

export default ({ modeId }) => {
  const section = Section('Charms');

  const charms = {
    class: ['Charm'],
    display: ItemDisplay.LOW(THEME.CHARMS),
  };

  if (modes.CharmsDisplay[modeId]) {
    section.addBlock(charms);
  } else {
    section.addBlock({
      area: Area.UNDER_STARTING_AREA,
      ...charms,
    });
    section.addBlock({
      visible: false,
      area: Area.FROM_STARTING_AREA,
      ...charms,
    });
  }

  return section;
};
