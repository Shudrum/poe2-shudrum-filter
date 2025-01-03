import { Section } from '../entities/filter/index.js';
import { global, modes } from '../configuration/index.js';
import Area from '../entities/generators/area.js';
import ItemDisplay, { BEAM, ICON, SOUND, THEME } from '../entities/generators/item-display.js';

export default ({ modeId }) => {
  const section = Section('Waystones');

  for (let waystoneTier = 1; waystoneTier <= 15; waystoneTier++) {
    const common = {
      class: ['Waystone'],
      area: waystoneTier === 15
        ? Area.FROM(global.startingAreaLevel + (waystoneTier - 1))
        : Area.EQUAL(global.startingAreaLevel + (waystoneTier - 1)),
    };

    section.addBlock({
      ...common,
      waystoneTier: `>= ${waystoneTier}`,
      display: ItemDisplay.IMPORTANT(THEME.WAYSTONES, ICON.SQUARE, SOUND.WAYSTONE),
    });

    if (waystoneTier > 2) {
      section.addBlock({
        ...common,
        waystoneTier: `>= ${waystoneTier - 2}`,
        display: ItemDisplay.MEDIUM(THEME.WAYSTONES, ICON.SQUARE, SOUND.WAYSTONE),
      });
    }

    if (waystoneTier >= modes.waystones.hideStartingLevelGap[modeId] + 1) {
      section.addBlock({
        ...common,
        waystoneTier: `>= ${waystoneTier - modes.waystones.hideStartingLevelGap[modeId]}`,
        display: ItemDisplay.LOW(THEME.WAYSTONES, BEAM.TEMPORARY, ICON.SQUARE, SOUND.WAYSTONE),
      });
    }
  }

  // Before the end game, display all Waystones
  section.addBlock({
    class: ['Waystone'],
    area: Area.UNDER_STARTING_AREA,
    display: ItemDisplay.MEDIUM(THEME.WAYSTONES, BEAM.SHOW, ICON.SQUARE, SOUND.WAYSTONE),
  });

  // Remaining Waystones are hidden
  section.addBlock({
    class: ['Waystone'],
    area: Area.FROM_STARTING_AREA,
    visible: false,
    display: ItemDisplay.LOW(THEME.WAYSTONES),
  });

  // TODO: There is super important loots to highlight here, like the Expedition
  //       Logbook
  section.addBlock({
    type: [
      'Simulacrum',
      'Tablet',
      'Breachstone',
      'Cowardly Fate',
      'Deadly Fate',
      'Victorious Fate',
      'Expedition Logbook',
      'Test of',
    ],
    display: ItemDisplay.IMPORTANT(THEME.EVENTS, SOUND.TABLET, ICON.SQUARE),
  });

  return section;
};
