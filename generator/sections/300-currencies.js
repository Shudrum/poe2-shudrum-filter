import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import Sound from '../entities/sound.js';
import Card from '../entities/card.js';
import { MINIMUM_AREA_LEVEL, COLORS, VARIABLES, THEMES } from '../configuration.js';

export default (mode) => {
  const section = new Section('Currencies');

  // Before we add the blocks for the scrolls of wisdom

  section.addBlock(new Block({
    visible: false,
    comment: `We hide all the scrolls of wisdom starging level ${MINIMUM_AREA_LEVEL}`,
    type: 'Scroll of Wisdom',
    areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
  }));

  section.addBlock(new Block({
    type: 'Scroll of Wisdom',
  }));

  // Then we add the other currencies

  section.setCommon({
    class: 'Currency',
  });

  section.addBlock(new Block({
    comment: 'Common',
    background: COLORS.CURRENCY,
    text: COLORS.BLACK,
    font: 30,
    sound: new Sound(Sound.TYPES.IMPORTANCE_4),
    effect: new Effect(Effect.COLORS.YELLOW),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.STAR,
    ),
    continue: true,
  }));

  const shardsSettings = {
    background: COLORS.DEFAULT_BACKGROUND,
    border: COLORS.CURRENCY,
    text: COLORS.CURRENCY,
    font: 30,
    sound: new Sound(Sound.TYPES.IMPORTANCE_8),
    effect: new Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CROSS,
    ),
  };

  section.addBlock(new Block({
    comment: 'Chance shard specific rule depending on modes.',
    type: 'Chance Shard',

    ...VARIABLES.CURRENCIES.DISPLAY_CHANCE_SHARDS[mode]
      ? shardsSettings
      : { visible: false },
  }));

  section.addBlock(new Block({
    comment: 'Shard',
    type: 'Shard',
    background: COLORS.DEFAULT_BACKGROUND,
    border: COLORS.CURRENCY,
    text: COLORS.CURRENCY,
    font: 30,
    sound: new Sound(Sound.TYPES.IMPORTANCE_8),
    effect: new Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CROSS,
    ),
    continue: true,
  }));

  if (!VARIABLES.CURRENCIES.DISPLAY_CHANCE_SHARDS[mode]) {
    section.addBlock(new Block({
      type: 'Chance Shard',
      visible: false,
      sound: new Sound(Sound.NONE),
      effect: new Effect(Effect.NONE),
      icon: new MapIcon(MapIcon.NONE),
    }));
  } else {
    // We must stop the propagation because of the all shards rule bellow
    section.addBlock(new Block({
      type: 'Chance Shard',
    }));
  }

  if (!VARIABLES.CURRENCIES.DISPLAY_SHARDS[mode]) {
    section.addBlock(new Block({
      type: 'Shard',
      visible: false,
      sound: new Sound(Sound.NONE),
      effect: new Effect(Effect.NONE),
      icon: new MapIcon(MapIcon.NONE),
    }));
  }

  section.addBlock(new Block({
    comment: 'Equipment upgrade',
    type: [
      'Arcanist\'s Etcher',
      'Armourer\'s Scrap',
      'Blacksmith\'s Whetstone',
      'Artificer\'s Orb',
    ],
    font: 30,
    sound: new Sound(Sound.TYPES.IMPORTANCE_7),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CIRCLE,
    ),
  }));

  section.addBlock(new Block({
    comment: 'Gem\'s and Flask\'s upgrades',
    type: [
      'Lesser Jeweller\'s Orb',
      'Gemcutter\'s Prism',
      'Glassblower\'s Bauble',
    ],
    font: 35,
    sound: new Sound(Sound.TYPES.IMPORTANCE_6),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CROSS,
    ),
  }));

  section.addBlock(new Block({
    comment: 'Tier 2',
    type: [
      'Orb of Transmutation',
      'Orb of Augmentation',
    ],
    ...VARIABLES.CURRENCIES.DISPLAY_TIER_2[mode]
      ? {
        font: 30,
        sound: new Sound(Sound.TYPES.IMPORTANCE_3),
        effect: new Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
        icon: new MapIcon(
          MapIcon.SIZES.SMALL,
          MapIcon.COLORS.YELLOW,
          MapIcon.SHAPES.CIRCLE,
        ),
      }
      : { visible: false },
  }));

  section.addBlock(new Block({
    comment: 'Tier 1',
    type: [
      'Regal Orb',
      'Chaos Orb',
      'Exalted Orb',
      'Vaal Orb',
    ],
    font: 45,
    sound: new Sound(Sound.TYPES.IMPORTANCE_2),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.STAR,
    ),
  }));

  section.addBlock(new Block({
    comment: 'Tier 0',
    type: [
      'Divine Orb',
      'Mirror',
      'Greater Jeweller\'s Orb',
      'Perfect Jeweller\'s Orb',
    ],
    card: new Card(THEMES.ALERT, Card.SIZES.BIG, Card.TYPES.IMPORTANT),
    effect: new Effect(Effect.COLORS.RED),
    sound: new Sound(Sound.TYPES.IMPORTANCE_1),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.RED,
      MapIcon.SHAPES.STAR,
    ),
  }));

  return section;
};
