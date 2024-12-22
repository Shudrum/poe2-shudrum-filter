import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import Sound from '../entities/sound.js';
import Card from '../entities/card.js';
import { MINIMUM_AREA_LEVEL, COLORS, VARIABLES, THEMES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Waystones');

  section.setCommon({
    class: 'Waystone',
  });

  section.addBlock(new Block({
    comment: 'Common',
    card: new Card(THEMES.WAYSTONES, Card.SIZES.MEDIUM, Card.TYPES.OUTLINE),
    sound: new Sound(Sound.TYPES.WAYSTONE),
    effect: new Effect(Effect.COLORS.WHITE),
    continue: true,
  }));

  for (let waystoneTier = 1; waystoneTier <= 20; waystoneTier++) {
    section.addBlock(new Block({
      areaLevel: `== ${MINIMUM_AREA_LEVEL + (waystoneTier - 1)}`,
      waystoneTier: `>= ${waystoneTier}`,
      card: new Card(THEMES.WAYSTONES, Card.SIZES.BIG, Card.TYPES.IMPORTANT),
      icon: new MapIcon(
        MapIcon.SIZES.BIG,
        MapIcon.COLORS.WHITE,
        MapIcon.SHAPES.SQUARE,
      ),
    }));

    if (waystoneTier >= 2) {
      section.addBlock(new Block({
        areaLevel: `== ${MINIMUM_AREA_LEVEL + (waystoneTier - 1)}`,
        waystoneTier: `< ${waystoneTier}`,
        card: new Card(THEMES.WAYSTONES, Card.SIZES.MEDIUM, Card.TYPES.OUTLINE),
        effect: new Effect(Effect.COLORS.WHITE),
        icon: new MapIcon(
          MapIcon.SIZES.MEDIUM,
          MapIcon.COLORS.WHITE,
          MapIcon.SHAPES.SQUARE,
        ),
        continue: true,
      }));
    }

    if (waystoneTier >= VARIABLES.WAYSTONES.HIDE_GAP[mode] + 1) {
      section.addBlock(new Block({
        visible: false,
        areaLevel: `== ${MINIMUM_AREA_LEVEL + (waystoneTier - 1)}`,
        waystoneTier: `<= ${waystoneTier - VARIABLES.WAYSTONES.HIDE_GAP[mode]}`,
        card: new Card(THEMES.WAYSTONES, Card.SIZES.SMALL, Card.TYPES.OUTLINE),
        sound: new Sound(Sound.NONE),
        icon: new MapIcon(MapIcon.NONE),
      }));
    }
  }

  // TODO: There is super important loots to highlight here, like the Expedition
  //       Logbook
  section.addBlock(new Block({
    comment: 'Tablets',
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
    text: COLORS.WHITE,
    border: COLORS.TABLETS,
    background: COLORS.TABLETS,
    sound: new Sound(Sound.TYPES.IMPORTANCE_2),
    effect: new Effect(Effect.COLORS.PURPLE),
    font: 45,
  }));

  return section;
};
