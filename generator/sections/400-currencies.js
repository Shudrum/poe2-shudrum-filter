import Section from '../entities/filter-components/section.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import Sound from '../entities/sound.js';
import Card from '../entities/card.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = new Section('Currencies');

  // Before we add the blocks for the scrolls of wisdom

  section.addBlock({
    type: 'Scroll of Wisdom',
    visible: false,
    comment: `We hide all the scrolls of wisdom starging level ${global.startingAreaLevel}`,
    areaLevel: `>= ${global.startingAreaLevel}`,
  });

  section.addBlock({
    type: 'Scroll of Wisdom',
  });

  // Then we add the other currencies

  const common = {
    class: 'Currency',
  };

  section.addBlock({
    ...common,
    comment: 'Common',
    card: new Card(Card.THEMES.CURRENCY, Card.TYPES.IMPORTANT, Card.SIZES.MEDIUM),
    sound: new Sound(Sound.TYPES.IMPORTANCE_4),
    effect: new Effect(Effect.COLORS.YELLOW),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.STAR,
    ),
    continue: true,
  });

  const shardsSettings = {
    card: new Card(Card.THEMES.CURRENCY, Card.TYPES.OUTLINE, Card.SIZES.MEDIUM),
    sound: new Sound(Sound.TYPES.IMPORTANCE_8),
    effect: new Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CROSS,
    ),
  };

  section.addBlock({
    ...common,
    comment: 'Chance shard specific rule depending on modes.',
    type: 'Chance Shard',
    ...modes.CurrenciesDisplayChanceShards[modeId]
      ? shardsSettings
      : { visible: false },
  });

  section.addBlock({
    ...common,
    comment: 'Shard',
    type: 'Shard',
    card: new Card(Card.THEMES.CURRENCY, Card.TYPES.OUTLINE, Card.SIZES.MEDIUM),
    sound: new Sound(Sound.TYPES.IMPORTANCE_8),
    effect: new Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CROSS,
    ),
    continue: true,
  });

  if (!modes.CurrenciesDisplayChanceShards[modeId]) {
    section.addBlock({
      ...common,
      type: 'Chance Shard',
      visible: false,
      sound: new Sound(Sound.NONE),
      effect: new Effect(Effect.NONE),
      icon: new MapIcon(MapIcon.NONE),
    });
  } else {
    // We must stop the propagation because of the all shards rule bellow
    section.addBlock({
      ...common,
      type: 'Chance Shard',
    });
  }

  if (!modes.CurrenciesDisplayShards[modeId]) {
    section.addBlock({
      ...common,
      type: 'Shard',
      visible: false,
      sound: new Sound(Sound.NONE),
      effect: new Effect(Effect.NONE),
      icon: new MapIcon(MapIcon.NONE),
    });
  }

  section.addBlock({
    ...common,
    comment: 'Equipment upgrade',
    type: [
      'Arcanist\'s Etcher',
      'Armourer\'s Scrap',
      'Blacksmith\'s Whetstone',
      'Artificer\'s Orb',
    ],
    sound: new Sound(Sound.TYPES.IMPORTANCE_7),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CIRCLE,
    ),
  });

  section.addBlock({
    ...common,
    comment: 'Gem\'s and Flask\'s upgrades',
    type: [
      'Lesser Jeweller\'s Orb',
      'Gemcutter\'s Prism',
      'Glassblower\'s Bauble',
    ],
    sound: new Sound(Sound.TYPES.IMPORTANCE_6),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.CROSS,
    ),
  });

  section.addBlock({
    ...common,
    comment: 'Tier 2',
    type: [
      'Orb of Transmutation',
      'Orb of Augmentation',
    ],
    ...modes.CurrenciesDisplayTier2[modeId]
      ? {
        sound: new Sound(Sound.TYPES.IMPORTANCE_3),
        effect: new Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
        icon: new MapIcon(
          MapIcon.SIZES.SMALL,
          MapIcon.COLORS.YELLOW,
          MapIcon.SHAPES.CIRCLE,
        ),
      }
      : { visible: false },
  });

  section.addBlock({
    ...common,
    comment: 'Tier 1',
    type: [
      'Regal Orb',
      'Chaos Orb',
      'Exalted Orb',
      'Vaal Orb',
    ],
    card: new Card(Card.THEMES.CURRENCY, Card.TYPES.OUTLINE, Card.SIZES.BIG),
    sound: new Sound(Sound.TYPES.IMPORTANCE_2),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.YELLOW,
      MapIcon.SHAPES.STAR,
    ),
  });

  section.addBlock({
    ...common,
    comment: 'Tier 0',
    type: [
      'Divine Orb',
      'Mirror',
      'Greater Jeweller\'s Orb',
      'Perfect Jeweller\'s Orb',
    ],
    card: new Card(Card.THEMES.ALERT, Card.SIZES.BIG, Card.TYPES.IMPORTANT),
    effect: new Effect(Effect.COLORS.RED),
    sound: new Sound(Sound.TYPES.IMPORTANCE_1),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.RED,
      MapIcon.SHAPES.STAR,
    ),
  });

  return section;
};
