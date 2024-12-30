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
    display: [true, false, false, { label: 'Charms', title: 'Miscellaneous' }],
  },
  flasks: {
    minimumQuality: [5, 10, 15, { label: 'Flasks minimum quality' }],
  },
  runes: {
    displayBasic: [true, false, false, { label: 'Basic runes' }],
  },
};

