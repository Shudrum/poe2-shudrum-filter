import Section from '../entities/section.js';
import Block from '../entities/block.js';
import Card from '../entities/card.js';
import { global, modes } from '../configuration/index.js';

export default ({ modeId }) => {
  const section = new Section('Gold');

  const common = {
    class: 'Currency',
    type: 'Gold',
  };

  section.addBlock(new Block({
    ...common,
    areaLevel: `< ${global.startingAreaLevel}`,
    card: new Card(Card.SIZES.SMALL, Card.THEMES.GOLD),
  }));

  section.addBlock(new Block({
    ...common,
    areaLevel: `>= ${global.startingAreaLevel}`,
    stackSize: `< ${modes.GoldMinimumDisplayedAmount[modeId]}`,
    card: new Card(Card.SIZES.VALUE_15, Card.THEMES.GOLD),
  }));

  function generateValues(from, to) {
    const steps = 6;
    const stepSize = (to - from) / (steps - 1);
    return Array.from({ length: steps }, (_, i) => Math.round(from + i * stepSize));
  }

  generateValues(
    modes.GoldMinimumDisplayedAmount[modeId],
    modes.GoldCeilingDisplaySizeAmount[modeId],
  ).forEach((stackSize, i) => {
    section.addBlock(new Block({
      ...common,
      areaLevel: `>= ${global.startingAreaLevel}`,
      stackSize: `>= ${stackSize}`,
      ...i === 5
        ? { card: new Card(20 + i * 5, Card.THEMES.GOLD) }
        : { card: new Card(20 + i * 5, Card.THEMES.GOLD, Card.TYPES.OUTLINE) },
    }));
  });

  return section;
};
