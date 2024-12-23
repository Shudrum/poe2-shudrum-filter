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
  const updatedDefinition = { ...definition };

  function arrayToList(array) {
    return array.map((entry) => `"${entry}"`).join(' ');
  }

  function ensureArray(key) {
    if (!updatedDefinition[key] || Array.isArray(updatedDefinition[key])) return;
    updatedDefinition[key] = [updatedDefinition[key]];
  }

  function getKeyValue(key) {
    if (PASCAL_CASE_VALUES.includes(key)) {
      return `${pascalCase(key)} ${updatedDefinition[key]}`;
    }

    if (TO_STRING_VALUES.includes(key)) {
      return `${updatedDefinition[key]}`;
    }

    if (key === 'class') return `Class ${arrayToList(updatedDefinition[key])}`;
    if (key === 'type') return `BaseType ${arrayToList(updatedDefinition[key])}`;

    throw new Error(`Unknown key: "${key}"`);
  }

  ensureArray('class');
  ensureArray('type');

  const visible = typeof updatedDefinition.visible === 'boolean'
    ? updatedDefinition.visible
    : true;

  delete updatedDefinition.visible;

  const instance = {
    generate() {
      const rows = Object.keys(updatedDefinition).reduce((prev, key) => {
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
