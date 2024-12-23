import { pascalCase } from 'change-case';

const PASCAL_CASE_VALUES = [
  'areaLevel',
  'itemLevel',
  'stackSize',
  'rarity',
  'quality',
  'waystoneTier',
  'setFontSize',
  'sockets',
];

const TO_STRING_VALUES = [
  'card',
  'icon',
  'effect',
  'sound',
];

export default function Block(definition) {
  function arrayToList(array) {
    return array.map((entry) => `"${entry}"`).join(' ');
  }

  function ensureArray(key) {
    if (!definition[key] || Array.isArray(definition[key])) return;
    definition[key] = [definition[key]];
  }

  function getKeyValue(key) {
    if (PASCAL_CASE_VALUES.includes(key)) {
      return `${pascalCase(key)} ${definition[key]}`;
    }

    if (TO_STRING_VALUES.includes(key)) {
      return `${definition[key]}`;
    }

    if (key === 'class') return `Class ${arrayToList(definition[key])}`;
    if (key === 'type') return `BaseType ${arrayToList(definition[key])}`;

    throw new Error(`Unknown key: "${key}"`);
  }

  ensureArray('class');
  ensureArray('type');

  const visible = typeof definition.visible === Boolean
    ? definition.visible
    : true;

  delete definition.visible;

  const instance = {
    generate() {
      const rows = Object.keys(definition).reduce((prev, key) => {
        return [...prev, ...getKeyValue(key).split('\n')];
      }, [])
        .filter(Boolean)
        .map((row) => `  ${row}`);

      return [
        visible ? 'Show' : 'Hide',
        ...rows,
      ].filter(Boolean);
    },
  };

  return instance;
}
