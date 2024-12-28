import { Section } from '../entities/filter/index.js';
import ItemDisplay, { ICON, SOUND, THEME } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Event: Breach');

  section.addBlock({
    type: ['Breach'],
    display: ItemDisplay.MEDIUM(THEME.EVENTS, SOUND.IMPORTANCE_6, ICON.KITE),
  });

  return section;
};
