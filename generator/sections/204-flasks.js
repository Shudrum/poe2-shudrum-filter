import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import ItemDisplay, { BEAM, ICON, THEME } from '../entities/generators/item-display.js';
import Area from '../entities/generators/area.js';

export default ({ modeId }) => {
  const section = Section('Flasks');

  const flasks = {
    type: ['Flask'],
    rarity: '<= Magic',
    display: ItemDisplay.LOW(THEME.FLASKS, BEAM.TEMPORARY, ICON.TRIANGLE),
  };

  section.addBlock({
    ...flasks,
    quality: `>= ${modes.FlasksMinimumQuality[modeId]}`,
  });

  section.addBlock({
    ...flasks,
    area: Area.FROM_STARTING_AREA,
    visible: false,
    display: flasks.display(BEAM.NONE, ICON.NONE),
  });

  section.addBlock({
    ...flasks,
    area: Area.UNDER_STARTING_AREA,
  });

  return section;
};
