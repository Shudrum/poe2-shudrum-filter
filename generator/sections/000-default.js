import Section from '../entities/section.js';
import Block from '../entities/block.js';
import hexToFilterColor from '../tools/hex-to-filter-color.js';
import { global } from '../configuration/index.js';

export default () => {
  const section = new Section('Default');

  section.addBlock(new Block({
    background: hexToFilterColor(global.primaryColors.black),
    continue: true,
  }));

  return section;
};
