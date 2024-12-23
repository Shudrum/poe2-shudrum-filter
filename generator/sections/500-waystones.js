import { Section } from '../entities/filter/index.js';
import { Area, Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Waystones');

  for (let waystoneTier = 0; waystoneTier < 20; waystoneTier++) {
    const common = {
      class: 'Waystone',
      area: Area.EQUAL(global.startingAreaLevel + (waystoneTier - 1)),

    };

    section.addBlock({
      ...common,
      waystoneTier: `>= ${waystoneTier}`,
      sound: Sound(Sound.TYPES.WAYSTONE),
      effect: Effect(Effect.COLORS.WHITE),
      card: Card(Card.THEMES.WAYSTONES, Card.SIZES.BIG, Card.TYPES.URGENT),
      icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.WHITE, MapIcon.SHAPES.SQUARE),
    });

    if (waystoneTier > 2) {
      section.addBlock({
        ...common,
        waystoneTier: `>= ${waystoneTier - 2}`,
        sound: Sound(Sound.TYPES.WAYSTONE),
        effect: Effect(Effect.COLORS.WHITE),
        card: Card(Card.THEMES.WAYSTONES, Card.SIZES.MEDIUM, Card.TYPES.IMPORTANT),
        icon: MapIcon(MapIcon.SIZES.MEDIUM, MapIcon.COLORS.WHITE, MapIcon.SHAPES.SQUARE),
      });
    }

    if (waystoneTier >= modes.WaystonesHideStartingLevelGap[modeId] + 1) {
      section.addBlock({
        ...common,
        waystoneTier: `>= ${waystoneTier - modes.WaystonesHideStartingLevelGap[modeId]}`,
        card: Card(Card.THEMES.WAYSTONES, Card.SIZES.SMALL, Card.TYPES.OUTLINE),
        effect: Effect(Effect.COLORS.WHITE, Effect.TEMPORARY),
      });
    }
  }

  // Remaining Waystones are hidden
  section.addBlock({
    class: 'Waystone',
    area: Area.FROM_STARTING_AREA,
    visible: false,
    card: Card(Card.THEMES.WAYSTONES, Card.SIZES.SMALL, Card.TYPES.OUTLINE),
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
    card: Card(Card.THEMES.TABLETS, Card.TYPES.IMPORTANT, Card.SIZES.BIG),
    sound: Sound(Sound.TYPES.IMPORTANCE_2),
    effect: Effect(Effect.COLORS.PURPLE),
  });

  return section;
};
