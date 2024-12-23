import Section from '../entities/filter-components/section.js';
import Sound from '../entities/sound.js';
import MapIcon from '../entities/map-icon.js';
import { global } from '../configuration/index.js';

export default () => {
  if (!global.debug) return null;

  const section = new Section('Debug: 3 colors = not managed by the filter');

  section.addBlock({
    areaLevel: `>= ${global.startingAreaLevel}`,
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
  });

  return section;
};
