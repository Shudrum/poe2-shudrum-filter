import { Section } from '../entities/filter/index.js';
import { Card, Effect, MapIcon } from '../entities/generators/index.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Charms');

  const common = {
    class: 'Charm',
    card: Card(Card.THEMES.CHARMS, Card.SIZES.MEDIUM, Card.TYPES.OUTLINE),
  };

  if (modes.CharmsDisplay[modeId]) {
    section.addBlock({
      ...common,
      effect: Effect(Effect.COLORS.PURPLE, Effect.TEMPORARY),
      icon: MapIcon(MapIcon.SIZES.SMALL, MapIcon.COLORS.PURPLE, MapIcon.SHAPES.MOON),
    });
  } else {
    section.addBlock({
      ...common,
      visible: false,
      areaLevel: `>= ${global.startingAreaLevel}`,
    });
  }

  return section;
};
