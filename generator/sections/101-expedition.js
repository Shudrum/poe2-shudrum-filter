import { Section } from '../entities/filter/index.js';
import ItemDisplay, { ICON, THEME, SOUND } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Event: Expedition');

  section.addBlock({
    class: ['Currency'],
    type: ['Artifact'],
    display: ItemDisplay.LOW(THEME.EVENTS, ICON.DIAMOND, SOUND.IMPORTANCE_6),
  });

  section.addBlock({
    class: ['Currency'],
    type: ['Exotic Coinage'],
    display: ItemDisplay.MEDIUM(THEME.EVENTS, ICON.STAR, SOUND.IMPORTANCE_3),
  });

  return section;
};
