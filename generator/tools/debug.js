import util from 'node:util';

export default function debug(element) {
  if (element.debug) {
    console.log('');
    console.log('DEBUG', util.inspect(element.debug(), false, null, true));
    console.log('');
  }
  return element;
}
