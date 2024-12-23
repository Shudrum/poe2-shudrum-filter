import util from 'node:util';

export default function debug(element) {
  console.log('');
  console.log('DEBUG', util.inspect(element, false, null, true));
  console.log('');
  return element;
}
