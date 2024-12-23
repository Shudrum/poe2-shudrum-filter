import { Section } from '../entities/filter/index.js';
import { global } from '../configuration/index.js';

export default () => {
  const section = Section('Scrolls of wisdom');

  // Scrolls of wisdom are hidden

  section.addBlock({
    visible: false,
    type: 'Scroll of Wisdom',
    areaLevel: `>= ${global.startingAreaLevel}`,
  });

  section.addBlock({
    type: 'Scroll of Wisdom',
  });

  return section;
};
