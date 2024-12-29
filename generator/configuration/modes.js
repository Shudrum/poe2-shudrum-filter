/* eslint-disable @stylistic/js/max-len */

export default {
  waystones: {
    hideStartingLevelGap: [6, 4, 2],
  },
  currencies: {
    displayChanceShards: [true, true, false],
    displayShards: [true, false, false],
    displayTier3: [true, true, false],
    gold: {
      minimumDisplayedAmount: [100, 200, 300],
      ceilingDisplaySizeAmount: [1500, 2000, 2500],
    },
  },
  equipment: {
    salavageable: {
      minimumArmourerQuality: [1, 5, 10],
      minimumArcanistQuality: [1, 5, 10],
      minimumWhetstoneQuality: [1, 5, 10],
      minimumSockets: [1, 2, 2],
    },
  },
  charms: {
    display: [true, true, false, { label: 'Charms', title: 'Miscellaneous' }],
  },
  flasks: {
    minimumQuality: [5, 10, 15, { label: 'Flasks minimum quality' }],
  },
  runes: {
    displayBasic: [true, true, false, { label: 'Basic runes' }],
  },

  // WaystonesHideStartingLevelGap: [6, 4, 2, { label: 'Waystones maximum lower gap', title: 'Waystone' }],

  // CurrenciesDisplayChanceShards: [true, true, false, { label: 'Chance shards', title: 'Currencies' }],
  // CurrenciesDisplayShards: [true, false, false, { label: 'Shards' }],
  // CurrenciesDisplayTier3: [true, true, false, { label: 'Tier 3 currencies' }],
  // GoldMinimumDisplayedAmount: [100, 200, 300, { label: 'Gold starting value' }],
  // GoldCeilingDisplaySizeAmount: [1500, 2000, 2500],

  // EquipmentMinimumMagicItemLevel: [65, 65, 65, { label: 'Minimum magic items levels', title: 'Equipment' }],
  // EquipmentMinimumRareItemLevel: [65, 65, 65, { label: 'Minimum rare items levels' }],
  // EquipmentMinimumBaseNormalItemLevel: [65, 65, 65, { label: 'Minimum white base items levels' }],
  // EquipmentMinimumSalvageableQuality: [1, 5, 10, { label: 'Minimum salvageable item quality' }],
  // EquipmentMinimumSalvageableSockets: [1, 2, 2, { label: 'Minimum salvageable item sockets' }],

  // CharmsDisplay: [true, true, false, { label: 'Charms', title: 'Miscellaneous' }],
  // FlasksMinimumQuality: [5, 10, 15, { label: 'Flasks minimum quality' }],
  // RunesDisplayBasic: [true, true, false, { label: 'Basic runes' }],
};

