import { Section } from '../entities/filter/index.js';
import ItemDisplay, { ICON, SOUND, THEME } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Event: Delirium');

  section.addBlock({
    type: ['Distilled', 'Simulacrum Splinter'],
    display: ItemDisplay.MEDIUM(THEME.EVENTS, SOUND.IMPORTANCE_6, ICON.KITE),
  });

  return section;
};
