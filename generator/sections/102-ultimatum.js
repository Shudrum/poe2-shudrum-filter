import Section from '../entities/filter-components/section.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';

export default () => {
  const section = new Section('Event: Ultimatum');

  section.addBlock({
    type: 'Ultimatum',
    card: new Card(Card.THEMES.EVENTS, Card.TYPES.IMPORTANT, Card.SIZES.BIG),
    icon: new MapIcon(
      MapIcon.SIZES.MEDIUM,
      MapIcon.COLORS.PURPLE,
      MapIcon.SHAPES.HEXAGON,
    ),
    effect: new Effect(Effect.COLORS.PURPLE),
    sound: new Sound(Sound.TYPES.IMPORTANCE_7),
  });

  return section;
};
