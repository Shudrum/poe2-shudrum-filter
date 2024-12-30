import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import ItemDisplay, { BEAM, ICON, THEME } from '../entities/generators/item-display.js';
import Area from '../entities/generators/area.js';

export default ({ modeId }) => {
  const section = Section('Runes');

  const runes = {
    type: ['Rune'],
    display: ItemDisplay.LOW(THEME.RUNES, ICON.CIRCLE, BEAM.TEMPORARY),
    area: Area.FROM_STARTING_AREA,
  };

  if (modes.runes.displayBasic[modeId]) {
    section.addBlock({
      ...runes,
    });
  } else {
    section.addBlock({
      ...runes,
      visible: false,
      display: runes.display(ICON.NONE, BEAM.NONE),
    });
  }

  section.addBlock({
    ...runes,
    area: Area.UNDER_STARTING_AREA,
  });

  return section;
};
