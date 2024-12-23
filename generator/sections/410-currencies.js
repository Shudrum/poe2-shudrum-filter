import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';
import { modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Currencies');

  //
  // Shards
  //

  const shard = {
    card: Card(Card.THEMES.CURRENCY, Card.TYPES.OUTLINE, Card.SIZES.MEDIUM),
    effects: {
      sound: Sound(Sound.TYPES.IMPORTANCE_8),
      effect: Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
      icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.CROSS),
    },
  };

  section.addBlock({
    class: 'Currency',
    type: 'Chance Shard',
    card: shard.card,
    ...modes.CurrenciesDisplayChanceShards[modeId]
      ? shard.effects
      : { visible: false },
  });

  section.addBlock({
    class: 'Currency',
    type: 'Shard',
    card: shard.card,
    visible: modes.CurrenciesDisplayShards[modeId],
  });

  section.addBlock({
    class: 'Currency',
    type: [
      'Arcanist\'s Etcher',
      'Armourer\'s Scrap',
      'Blacksmith\'s Whetstone',
      'Artificer\'s Orb',
    ],
    sound: Sound(Sound.TYPES.IMPORTANCE_7),
    icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.CIRCLE),
  });

  section.addBlock({
    class: 'Currency',
    type: [
      'Lesser Jeweller\'s Orb',
      'Gemcutter\'s Prism',
      'Glassblower\'s Bauble',
    ],
    sound: Sound(Sound.TYPES.IMPORTANCE_6),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.CROSS),
  });

  section.addBlock({
    class: 'Currency',
    type: [
      'Orb of Transmutation',
      'Orb of Augmentation',
    ],
    ...modes.CurrenciesDisplayTier2[modeId]
      ? {
        sound: Sound(Sound.TYPES.IMPORTANCE_3),
        effect: Effect(Effect.COLORS.YELLOW, Effect.TEMPORARY),
        icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.CIRCLE),
      }
      : { visible: false },
  });

  section.addBlock({
    class: 'Currency',
    type: [
      'Regal Orb',
      'Chaos Orb',
      'Exalted Orb',
      'Vaal Orb',
    ],
    card: Card(Card.THEMES.CURRENCY, Card.TYPES.OUTLINE, Card.SIZES.BIG),
    sound: Sound(Sound.TYPES.IMPORTANCE_2),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.STAR),
  });

  section.addBlock({
    class: 'Currency',
    type: [
      'Divine Orb',
      'Mirror',
      'Greater Jeweller\'s Orb',
      'Perfect Jeweller\'s Orb',
    ],
    card: Card(Card.THEMES.ALERT, Card.SIZES.BIG, Card.TYPES.IMPORTANT),
    effect: Effect(Effect.COLORS.RED),
    sound: Sound(Sound.TYPES.IMPORTANCE_1),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.RED, MapIcon.SHAPES.STAR),
  });

  // All remaining currencies

  section.addBlock({
    class: 'Currency',
    card: Card(Card.THEMES.CURRENCY, Card.TYPES.IMPORTANT, Card.SIZES.MEDIUM),
    sound: Sound(Sound.TYPES.IMPORTANCE_4),
    effect: Effect(Effect.COLORS.YELLOW),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.YELLOW, MapIcon.SHAPES.STAR),
  });

  return section;
};
