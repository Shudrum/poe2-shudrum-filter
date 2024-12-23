import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';

// TODO: Spirit, Uncut and Skill gems should have a different display.
// TODO: A proper loop should be defined to remove progressively the gems.

// Area 77 / T12 / 17

export default () => {
  const section = Section('Gems');

  section.addBlock({
    type: ['Uncut Support Gem'],
    card: Card(Card.THEMES.GEMS, Card.SIZES.MEDIUM, Card.TYPES.OUTLINE),
    icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.CYAN, MapIcon.SHAPES.CIRCLE),
    effect: Effect(Effect.COLORS.CYAN, Effect.TEMPORARY),
    sound: Sound(Sound.TYPES.GEMS),
  });

  section.addBlock({
    type: ['Uncut Spirit Gem'],
    card: Card(Card.THEMES.GEMS, Card.SIZES.BIG, Card.TYPES.IMPORTANT),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.CYAN, MapIcon.SHAPES.CIRCLE),
    effect: Effect(Effect.COLORS.CYAN),
    sound: Sound(Sound.TYPES.GEMS),
  });

  section.addBlock({
    type: ['Uncut Skill Gem'],
    card: Card(Card.THEMES.GEMS, Card.SIZES.MEDIUM, Card.TYPES.IMPORTANT),
    icon: MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.CYAN, MapIcon.SHAPES.CIRCLE),
    effect: Effect(Effect.COLORS.CYAN),
    sound: Sound(Sound.TYPES.GEMS),
  });

  section.addBlock({
    type: 'Uncut Skill Gem',
    visible: false,
    areaLevel: '>= 70',
    itemLevel: '<= 16',
    card: Card(Card.THEMES.GEMS, Card.SIZES.MEDIUM, Card.TYPES.IMPORTANT),
  });

  return section;
};
