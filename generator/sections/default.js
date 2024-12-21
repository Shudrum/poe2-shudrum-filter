import Section from '../entities/section.js';
import Block from '../entities/block.js';

import { THEME } from '../configuration.js';

const section = new Section('Default');

section.addBlock(new Block({
  background: THEME.DEFAULT_BACKGROUND,
  continue: true,
}));

export default section;
