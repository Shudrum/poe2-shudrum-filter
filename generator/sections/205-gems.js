import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon, Sound } from '../entities/generators/index.js';

export default () => {
  const section = Section('Gems');

  // TODO: Spirit, Uncut and Skill gems should have a different display.
  section.addBlock({
    type: ['Uncut Spirit Gem', 'Uncut Support Gem', 'Uncut Skill Gem'],
    card: Card(Card.THEMES.GEMS, Card.SIZES.MEDIUM, Card.TYPES.IMPORTANT),
    icon: MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.CIRCLE,
    ),
    effect: Effect(Effect.COLORS.CYAN),
    sound: Sound(Sound.TYPES.GEMS),
  });

  // TODO: A proper loop should be defined to remove progressively the gems.
  section.addBlock({
    type: 'Uncut Skill Gem',
    visible: false,
    areaLevel: '>= 70',
    itemLevel: '<= 16',
    card: Card(Card.THEMES.GEMS, Card.SIZES.MEDIUM, Card.TYPES.IMPORTANT),
  });

  return section;
};
