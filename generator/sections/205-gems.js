import Section from '../entities/section.js';
import Block from '../entities/block.js';

import MapIcon from '../entities/map-icon.js';
import Sound from '../entities/sound.js';
import Effect from '../entities/effect.js';
import { COLORS } from '../configuration.js';

const section = new Section('Gems');

// TODO: Spirit, Uncut and Skill gems should have a different display.
section.addBlock(new Block({
  type: ['Uncut Spirit Gem', 'Uncut Support Gem', 'Uncut Skill Gem'],
  text: COLORS.BLACK,
  border: COLORS.GEMS,
  background: COLORS.GEMS,
  font: 35,

  icon: new MapIcon(
    MapIcon.SIZES.BIG,
    MapIcon.COLORS.CYAN,
    MapIcon.SHAPES.CIRCLE,
  ),
  effect: new Effect(Effect.COLORS.CYAN),
  sound: new Sound(Sound.TYPES.GEMS),

  continue: true,
}));

// TODO: A proper loop should be defined to remove progressively the gems.
section.addBlock(new Block({
  type: 'Uncut Skill Gem',
  visible: false,
  areaLevel: '>= 70',
  itemLevel: '<= 16',
  sound: new Sound(Sound.NONE),
  icon: new MapIcon(MapIcon.NONE),
}));

export default section;
