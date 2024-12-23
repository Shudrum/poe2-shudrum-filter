import { Section } from '../entities/filter/index.js';
import Sound from '../entities/sound.js';
import MapIcon from '../entities/map-icon.js';
import Card from '../entities/card.js';
import Effect from '../entities/effect.js';
import { global } from '../configuration/index.js';

export default () => {
  if (!global.debug) return null;

  const section = Section('Debug: 3 colors = not managed by the filter');

  section.addBlock({
    areaLevel: `>= ${global.startingAreaLevel}`,
    card: Card(Card.SIZES.BIG, Card.TYPES.IMPORTANT, Card.THEMES.ALERT),
    effect: new Effect(Effect.COLORS.GREEN),
    sound: new Sound(Sound.TYPES.VIBRANT_2),
    icon: new MapIcon(MapIcon.COLORS.PINK, MapIcon.SIZES.MEDIUM, MapIcon.SHAPES.UPSIDE_DOWN_HOUSE),
  });

  return section;
};
