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

const GENERATORS_VALUES = [
  'display',
  'area',
];

export default function Block(definition) {
  const updatedDefinition = { ...definition };

  if (definition.class && !Array.isArray(definition.class)) {
    throw new Error('The "class" attribute must be an array.');
  }
  if (definition.type && !Array.isArray(definition.type)) {
    throw new Error('The "type" attribute must be an array.');
  }

  function arrayToList(array) {
    return array.map((entry) => `"${entry}"`).join(' ');
  }

  function ensureArray(key) {
    if (!updatedDefinition[key] || Array.isArray(updatedDefinition[key])) return;
    updatedDefinition[key] = [updatedDefinition[key]];
  }

  function getKeyValue(key) {
    if (PASCAL_CASE_VALUES.includes(key)) {
      return [`${pascalCase(key)} ${updatedDefinition[key]}`];
    }

    if (GENERATORS_VALUES.includes(key)) {
      return updatedDefinition[key].toText();
    }

    if (key === 'class') return [`Class ${arrayToList(updatedDefinition[key])}`];
    if (key === 'type') return [`BaseType ${arrayToList(updatedDefinition[key])}`];

    throw new Error(`Unknown key: "${key}"`);
  }

  ensureArray('class');
  ensureArray('type');

  const visible = typeof updatedDefinition.visible === 'boolean'
    ? updatedDefinition.visible
    : true;

  delete updatedDefinition.visible;

  const instance = {
    [Symbol.for('nodejs.util.inspect.custom')]() {
      return {
        entity: 'Block',
        definition,
        updatedDefinition,
        generatedText: instance.generate().join('\n'),
      };
    },
    generate() {
      const rows = Object.keys(updatedDefinition).reduce((prev, key) => {
        return [...prev, ...getKeyValue(key)];
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
