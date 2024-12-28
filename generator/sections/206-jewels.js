import { Section } from '../entities/filter/index.js';
import ItemDisplay, { BEAM, ICON, THEME } from '../entities/generators/item-display.js';

export default () => {
  const section = Section('Jewels');

  section.addBlock({
    class: ['Jewel'],
    rarity: '<= Rare',
    display: ItemDisplay.MEDIUM(THEME.JEWELS, BEAM.TEMPORARY, ICON.PENTAGON),
  });

  return section;
};
