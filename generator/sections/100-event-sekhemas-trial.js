import { Section } from '../entities/filter/index.js';
import ItemDisplay, { ICON, SOUND, THEME } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Event: Sekhemas trial');

  const baseEvent = [
    THEME.EVENTS,
    SOUND.IMPORTANCE_7,
  ];

  // Baryas and keys are important

  section.addBlock({
    type: ['Barya'],
    display: ItemDisplay.MEDIUM(...baseEvent, ICON.HEXAGON),
  });

  section.addBlock({
    type: ['Bronze Key', 'Silver Key'],
    display: ItemDisplay.MEDIUM(...baseEvent, ICON.STAR),
  });

  // Gold keys are more important

  section.addBlock({
    type: ['Gold Key'],
    display: ItemDisplay.IMPORTANT(...baseEvent, ICON.STAR),
  });

  // Relics

  section.addBlock({
    class: ['Relic'],
    display: ItemDisplay.MEDIUM(...baseEvent, ICON.DIAMOND, SOUND.IMPORTANCE_8),
  });

  return section;
};
