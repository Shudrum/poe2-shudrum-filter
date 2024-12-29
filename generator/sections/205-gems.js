import { Section } from '../entities/filter/index.js';
import Area from '../entities/generators/area.js';
import ItemDisplay, { BEAM, ICON, SOUND, THEME } from '../entities/generators/item-display.js';

// TODO: Spirit, Uncut and Skill gems should have a different display.
// TODO: A proper loop should be defined to remove progressively the gems.

// Area 67 / 14 - Boss 15
// Area 75 / 16
// Area 76 / 17
// Area 77 / 17
// Area 78 / 18

export default () => {
  const section = Section('Gems');

  section.addBlock({
    type: ['Uncut Support Gem'],
    display: ItemDisplay.LOW(THEME.GEMS, BEAM.TEMPORARY, ICON.CIRCLE, SOUND.GEMS),
  });

  section.addBlock({
    type: ['Uncut Spirit Gem'],
    display: ItemDisplay.MEDIUM(THEME.GEMS, BEAM.SHOW, ICON.CIRCLE, SOUND.GEMS),
  });

  section.addBlock({
    type: ['Uncut Skill Gem'],
    area: Area.FROM_STARTING_AREA,
    display: ItemDisplay.LOW(THEME.GEMS, BEAM.TEMPORARY, ICON.CIRCLE, SOUND.GEMS),
  });

  section.addBlock({
    type: ['Uncut Skill Gem'],
    visible: false,
    area: Area.FROM(70),
    itemLevel: '<= 16',
    display: ItemDisplay.MEDIUM(THEME.GEMS, BEAM.SHOW, ICON.CIRCLE, SOUND.GEMS),
  });

  return section;
};
