import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import Effect from '../entities/effect.js';
import { MINIMUM_AREA_LEVEL, THEME } from '../configuration.js';

const MIN_QUALITY = 1;

const section = new Section('Charms');

section.setCommon({
  type: 'Charm',
  areaLevel: `>= ${MINIMUM_AREA_LEVEL}`,
});

section.addBlock(new Block({
  text: THEME.COLOR_CHARMS,
  border: THEME.COLOR_CHARMS,
  font: 30,
  quality: `>= ${MIN_QUALITY}`,
  effect: new Effect(Effect.COLOR_PURPLE),
  icon: new MapIcon(
    MapIcon.SIZES.MEDIUM,
    MapIcon.COLORS.PURPLE,
    MapIcon.SHAPES.MOON,
  ),
}));

section.addBlock(new Block({
  visible: false,
  quality: `< ${MIN_QUALITY}`,
}));

export default section;
