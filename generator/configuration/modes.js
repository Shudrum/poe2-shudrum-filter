
export default {
  waystones: {
    hideStartingLevelGap: [4, 3, 2],
  },
  currencies: {
    shards: {
      chance: [true, true, false],
      regal: [true, true, false],
      transmutation: [true, false, false],
    },
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
      minimumWhetstoneQuality: [1, 7, 14],
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

