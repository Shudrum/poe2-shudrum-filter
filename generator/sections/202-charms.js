import Section from '../entities/section.js';
import Block from '../entities/block.js';
import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import Card from '../entities/card.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = new Section('Charms');

  const common = {
    class: 'Charm',
    card: new Card(Card.THEMES.CHARMS, Card.SIZES.MEDIUM, Card.TYPES.OUTLINE),
  };

  if (modes.CharmsDisplay[modeId]) {
    section.addBlock(new Block({
      ...common,
      effect: new Effect(Effect.COLORS.PURPLE, Effect.TEMPORARY),
      icon: new MapIcon(
        MapIcon.SIZES.SMALL,
        MapIcon.COLORS.PURPLE,
        MapIcon.SHAPES.MOON,
      ),
    }));
  } else {
    section.addBlock(new Block({
      ...common,
      visible: false,
      areaLevel: `>= ${global.startingAreaLevel}`,
    }));
  }

  return section;
};
