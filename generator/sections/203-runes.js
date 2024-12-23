import Section from '../entities/section.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = new Section('Runes');

  const common = {
    type: 'Rune',
    card: new Card(Card.THEMES.RUNES, Card.SIZES.MEDIUM, Card.TYPES.OUTLINE),
    areaLevel: `>= ${global.startingAreaLevel}`,
  };

  if (modes.RunesDisplayBasic[modeId]) {
    section.addBlock({
      ...common,
      effect: new Effect(Effect.COLORS.CYAN, Effect.TEMPORARY),
      icon: new MapIcon(
        MapIcon.SIZES.SMALL,
        MapIcon.COLORS.CYAN,
        MapIcon.SHAPES.CIRCLE,
      ),
    });
  } else {
    section.addBlock({
      ...common,
      areaLevel: `>= ${global.startingAreaLevel}`,
      visible: false,
    });
  }

  section.addBlock({
    ...common,
    areaLevel: `< ${global.startingAreaLevel}`,
  });

  return section;
};
