import { Section } from '../entities/filter/index.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import Sound from '../entities/sound.js';
import Card from '../entities/card.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Waystones');

  for (let waystoneTier = 1; waystoneTier <= 20; waystoneTier++) {
    section.addBlock({
      class: 'Waystone',
      areaLevel: `== ${global.startingAreaLevel + (waystoneTier - 1)}`,
      waystoneTier: `>= ${waystoneTier}`,
      sound: Sound(Sound.TYPES.WAYSTONE),
      effect: Effect(Effect.COLORS.WHITE),
      card: Card(Card.THEMES.WAYSTONES, Card.SIZES.BIG, Card.TYPES.IMPORTANT),
      icon: MapIcon(
        MapIcon.SIZES.BIG,
        MapIcon.COLORS.WHITE,
        MapIcon.SHAPES.SQUARE,
      ),
    });

    if (waystoneTier >= modes.WaystonesHideStartingLevelGap[modeId] + 1) {
      section.addBlock({
        class: 'Waystone',
        visible: false,
        areaLevel: `== ${global.startingAreaLevel + (waystoneTier - 1)}`,
        waystoneTier: `<= ${waystoneTier - modes.WaystonesHideStartingLevelGap[modeId]}`,
        card: Card(Card.THEMES.WAYSTONES, Card.SIZES.SMALL, Card.TYPES.OUTLINE),
      });
    }

    if (waystoneTier >= 2) {
      section.addBlock({
        class: 'Waystone',
        areaLevel: `== ${global.startingAreaLevel + (waystoneTier - 1)}`,
        waystoneTier: `< ${waystoneTier}`,
        card: Card(Card.THEMES.WAYSTONES, Card.SIZES.MEDIUM, Card.TYPES.OUTLINE),
        effect: Effect(Effect.COLORS.WHITE, Effect.TEMPORARY),
        icon: MapIcon(
          MapIcon.SIZES.MEDIUM,
          MapIcon.COLORS.WHITE,
          MapIcon.SHAPES.SQUARE,
        ),
      });
    }
  }

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
    card: Card(Card.THEMES.TABLETS, Card.TYPES.IMPORTANT, Card.SIZES.BIG),
    sound: Sound(Sound.TYPES.IMPORTANCE_2),
    effect: Effect(Effect.COLORS.PURPLE),
  });

  return section;
};
