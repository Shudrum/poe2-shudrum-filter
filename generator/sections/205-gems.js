import { Section } from '../entities/filter/index.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';

export default () => {
  const section = Section('Gems');

  // TODO: Spirit, Uncut and Skill gems should have a different display.
  section.addBlock({
    type: ['Uncut Spirit Gem', 'Uncut Support Gem', 'Uncut Skill Gem'],
    card: new Card(Card.THEMES.GEMS, Card.SIZES.MEDIUM, Card.TYPES.IMPORTANT),
    icon: new MapIcon(
      MapIcon.SIZES.BIG,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.CIRCLE,
    ),
    effect: new Effect(Effect.COLORS.CYAN),
    sound: new Sound(Sound.TYPES.GEMS),
  });

  // TODO: A proper loop should be defined to remove progressively the gems.
  section.addBlock({
    type: 'Uncut Skill Gem',
    visible: false,
    areaLevel: '>= 70',
    itemLevel: '<= 16',
    card: new Card(Card.THEMES.GEMS, Card.SIZES.MEDIUM, Card.TYPES.IMPORTANT),
  });

  return section;
};
