import { Section } from '../entities/filter/index.js';
import ItemDisplay, { ICON, SOUND, THEME } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Uniques');

  section.addBlock({
    rarity: 'Unique',
    display: ItemDisplay.IMPORTANT(THEME.UNIQUES, ICON.STAR, SOUND.UNIQUE),
  });

  return section;
};
