import { Section } from '../entities/filter/index.js';
import { global } from '../configuration/index.js';
import Area from '../entities/generators/area.js';
import ItemDisplay, { ICON, SOUND, THEME } from '../entities/generators/item-display.js';

export default () => {
  if (!global.debug) return null;

  const section = Section('Debug: 3 colors = not managed by the filter');

  section.addBlock({
    area: Area.FROM_STARTING_AREA,
    display: ItemDisplay.MEDIUM(THEME.ALERT, SOUND.VIBRANT_2, ICON.UPSIDE_DOWN_HOUSE),
  });

  return section;
};
