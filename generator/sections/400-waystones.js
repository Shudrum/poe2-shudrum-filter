import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import Sound from '../entities/sound.js';
import { MINIMUM_AREA_LEVEL, COLORS, VARIABLES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Waystones');

  section.setCommon({
    class: 'Waystone',
  });

  section.addBlock(new Block({
    comment: 'Common',
    background: COLORS.WAYSTONES,
    border: COLORS.WAYSTONES,
    text: COLORS.WHITE,
    sound: new Sound(Sound.TYPES.WAYSTONE),
    effect: new Effect(Effect.COLORS.WHITE),
    continue: true,
  }));

  for (let waystoneTier = 1; waystoneTier <= 20; waystoneTier++) {
    section.addBlock(new Block({
      areaLevel: `== ${MINIMUM_AREA_LEVEL + waystoneTier}`,
      waystoneTier: `>= ${waystoneTier}`,
      font: 45,
      icon: new MapIcon(
        MapIcon.SIZES.BIG,
        MapIcon.COLORS.WHITE,
        MapIcon.SHAPES.SQUARE,
      ),
    }));

    if (waystoneTier >= 2) {
      section.addBlock(new Block({
        areaLevel: `== ${MINIMUM_AREA_LEVEL + waystoneTier}`,
        waystoneTier: `< ${waystoneTier}`,
        font: 30,
        effect: new Effect(Effect.COLORS.WHITE, Effect.TEMPORARY),
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
        areaLevel: `== ${MINIMUM_AREA_LEVEL + waystoneTier}`,
        waystoneTier: `<= ${waystoneTier - VARIABLES.WAYSTONES.HIDE_GAP[mode]}`,
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
