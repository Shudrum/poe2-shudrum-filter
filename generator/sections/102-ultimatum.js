import { Section } from '../entities/filter/index.js';
import ItemDisplay, { ICON, SOUND, THEME } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Event: Ultimatum');

  section.addBlock({
    type: ['Ultimatum'],
    display: ItemDisplay.MEDIUM(THEME.EVENTS, SOUND.IMPORTANCE_7, ICON.HEXAGON),
  });

  return section;
};
