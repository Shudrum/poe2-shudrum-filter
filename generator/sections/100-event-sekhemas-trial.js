import Section from '../entities/filter-components/section.js';
import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';

export default () => {
  const section = new Section('Event: Sekhemas trial');

  // Baryas and keys are important

  const important = {
    card: new Card(Card.THEMES.EVENTS, Card.TYPES.IMPORTANT, Card.SIZES.BIG),
    effect: new Effect(Effect.COLORS.PURPLE),
    sound: new Sound(Sound.TYPES.IMPORTANCE_7),
  };

  section.addBlock({
    type: 'Barya',
    ...important,
    icon: new MapIcon(MapIcon.SIZES.MEDIUM, MapIcon.COLORS.PURPLE, MapIcon.SHAPES.HEXAGON),
  });

  section.addBlock({
    type: ['Bronze Key', 'Silver Key', 'Gold Key'],
    ...important,
    icon: new MapIcon(MapIcon.SIZES.BIG, MapIcon.COLORS.PURPLE, MapIcon.SHAPES.STAR),
  });

  // Relics
  section.addBlock({
    class: 'Relic',
    card: new Card(Card.THEMES.EVENTS, Card.TYPES.OUTLINE, Card.SIZES.BIG),
    effect: new Effect(Effect.COLORS.PURPLE),
    icon: new MapIcon(MapIcon.SIZES.MEDIUM, MapIcon.COLORS.PURPLE, MapIcon.SHAPES.DIAMOND),
    sound: new Sound(Sound.TYPES.IMPORTANCE_8),
  });

  return section;
};
