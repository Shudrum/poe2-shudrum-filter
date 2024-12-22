import Section from '../entities/section.js';
import Block from '../entities/block.js';
import Sound from '../entities/sound.js';
import { MINIMUM_AREA_LEVEL } from '../configuration.js';
import MapIcon from '../entities/map-icon.js';
import { DEBUG } from '../configuration.js';

export default () => {
  if (!DEBUG) return null;

  const section = new Section('Debug: 3 colors = not managed by the filter');

  section.addBlock(new Block({
    areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
    font: 40,
    text: '255 0 0',
    background: '0 0 255',
    border: '0 255 0',
    sound: new Sound(Sound.TYPES.VIBRANT_2),
    icon: new MapIcon(
      MapIcon.COLORS.PINK,
      MapIcon.SIZES.MEDIUM,
      MapIcon.SHAPES.UPSIDE_DOWN_HOUSE,
    ),
  }));

  return section;
};
