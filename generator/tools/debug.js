import util from 'node:util';

if (process.env.NODE_ENV === 'development') {
  global.DEBUG = (element) => {
    console.log('');
    console.log('DEBUG', util.inspect(element, false, null, true));
    console.log('');
    return element;
  };
}
