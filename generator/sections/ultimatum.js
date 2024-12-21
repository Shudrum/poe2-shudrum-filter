import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MinimapIcon from '../entities/minimap-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import { THEME } from '../configuration.js';

const section = new Section('Event: Ultimatum');

section.addBlock(new Block({
  type: 'Ultimatum',

  text: THEME.COLOR_WHITE,
  border: THEME.COLOR_EVENT,
  background: THEME.COLOR_EVENT,
  font: 40,

  icon: new MinimapIcon(
    MinimapIcon.SIZE_MEDIUM,
    MinimapIcon.COLOR_PURPLE,
    MinimapIcon.SHAPE_HEXAGON,
  ),
  effect: new Effect(Effect.COLOR_PURPLE),
  sound: new Sound(Sound.IMPORTANCE_7),
}));

export default section;
