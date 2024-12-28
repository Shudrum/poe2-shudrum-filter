import { Section } from '../entities/filter/index.js';
import { modes } from '../configuration/index.js';
import ItemDisplay, { BEAM, ICON, SOUND, THEME } from '../entities/generators/item-display.js';
import Area from '../entities/generators/area.js';

export default ({ modeId }) => {
  const section = Section('Currencies');

  //
  // Shards
  //

  section.addBlock({
    class: ['Currency'],
    type: ['Shard', 'Chance Shard'],
    area: Area.UNDER_STARTING_AREA,
    display: ItemDisplay.LOW(THEME.CURRENCIES, SOUND.SIMPLE_SIGNAL, BEAM.TEMPORARY, ICON.CROSS),
  });

  section.addBlock({
    class: ['Currency'],
    type: ['Chance Shard'],
    visible: modes.CurrenciesDisplayChanceShards[modeId],
    display: ItemDisplay.LOW(
      THEME.CURRENCIES,
      ...modes.CurrenciesDisplayChanceShards[modeId]
        ? [SOUND.SIMPLE_SIGNAL, BEAM.TEMPORARY, ICON.CROSS]
        : [],
    ),
  });

  section.addBlock({
    class: ['Currency'],
    type: ['Shard'],
    visible: modes.CurrenciesDisplayShards[modeId],
    display: ItemDisplay.LOW(
      THEME.CURRENCIES,
      ...modes.CurrenciesDisplayShards[modeId]
        ? [SOUND.SIMPLE_SIGNAL, BEAM.TEMPORARY, ICON.CROSS]
        : [],
    ),
  });

  //
  // Tier 3 currencies
  //

  const tier3Currencies = {
    class: ['Currency'],
    type: [
      'Orb of Transmutation',
      'Orb of Augmentation',
    ],
    display: ItemDisplay.LOW(THEME.CURRENCIES, BEAM.TEMPORARY, ICON.CROSS, SOUND.SIMPLE_SIGNAL),
  };

  if (!modes.CurrenciesDisplayTier3[modeId]) {
    section.addBlock({
      area: Area.FROM_STARTING_AREA,
      visible: false,
      ...tier3Currencies,
      display: tier3Currencies.display(BEAM.NONE, ICON.NONE, SOUND.NONE),
    });
  }

  section.addBlock(tier3Currencies);

  //
  // Upgrade tier 2
  //

  section.addBlock({
    class: ['Currency'],
    type: [
      'Arcanist\'s Etcher',
      'Armourer\'s Scrap',
      'Blacksmith\'s Whetstone',
      'Artificer\'s Orb',
    ],
    display: ItemDisplay.LOW(THEME.CURRENCIES, SOUND.SIMPLE_SIGNAL, BEAM.TEMPORARY, ICON.CROSS),
  });

  //
  // Upgrade tier 1
  //

  section.addBlock({
    class: ['Currency'],
    type: [
      'Lesser Jeweller\'s Orb',
      'Gemcutter\'s Prism',
      'Glassblower\'s Bauble',
    ],
    display: ItemDisplay.MEDIUM(THEME.CURRENCIES, SOUND.IMPORTANCE_6, BEAM.SHOW, ICON.CROSS),
  });

  //
  // Tier 2 currencies
  //

  section.addBlock({
    class: ['Currency'],
    type: [
      'Regal Orb',
      'Chaos Orb',
      'Exalted Orb',
      'Vaal Orb',
    ],
    display: ItemDisplay.IMPORTANT(THEME.CURRENCIES, SOUND.IMPORTANCE_2, ICON.STAR),
  });

  //
  // Tier 1 currencies
  //

  section.addBlock({
    class: ['Currency'],
    type: [
      'Orb of Chance',
      'Divine Orb',
      'Mirror',
      'Greater Jeweller\'s Orb',
      'Perfect Jeweller\'s Orb',
    ],
    display: ItemDisplay.CRITICAL(SOUND.IMPORTANCE_1, ICON.STAR),
  });

  //
  // All remaining currencies
  // This is more of a "currency security", and should not happen
  //

  section.addBlock({
    class: ['Currency'],
    display: ItemDisplay.MEDIUM(THEME.CURRENCIES),
  });

  return section;
};
