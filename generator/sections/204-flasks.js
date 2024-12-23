import { Section } from '../entities/filter/index.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = Section('Flasks');

  const common = {
    type: 'Flask',
    rarity: '<= Magic',
    card: Card(Card.THEMES.FLASKS, Card.SIZES.MEDIUM, Card.TYPES.OUTLINE),
  };

  section.addBlock({
    ...common,
    quality: `>= ${modes.FlasksMinimumQuality[modeId]}`,
    effect: new Effect(Effect.COLORS.CYAN, Effect.TEMPORARY),
    icon: new MapIcon(
      MapIcon.SIZES.SMALL,
      MapIcon.COLORS.CYAN,
      MapIcon.SHAPES.TRIANGLE,
    ),
  });

  section.addBlock({
    ...common,
    areaLevel: `>= ${global.startingAreaLevel}`,
    visible: false,
  });

  section.addBlock({
    ...common,
    areaLevel: `< ${global.startingAreaLevel}`,
  });

  return section;
};
