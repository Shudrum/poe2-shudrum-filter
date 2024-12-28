import { Section } from '../entities/filter/index.js';
import Area from '../entities/generators/area.js';

export default () => {
  const section = Section('Scrolls of wisdom');

  // Scrolls of wisdom are hidden

  section.addBlock({
    visible: false,
    type: ['Scroll of Wisdom'],
    area: Area.FROM_STARTING_AREA,
  });

  section.addBlock({
    type: ['Scroll of Wisdom'],
    area: Area.UNDER_STARTING_AREA,
  });

  return section;
};
