import { global } from '../../configuration/index.js';

export default function Area(comparison) {
  const instance = {
    [Symbol.for('nodejs.util.inspect.custom')]() {
      return { comparison };
    },
    toText() {
      return `AreaLevel ${comparison}`;
    },
  };

  return instance;
}

Area.FROM = (value) => Area(`>= ${value}`);
Area.UNDER = (value) => Area(`< ${value}`);

Area.FROM_STARTING_AREA = Area.FROM(global.startingAreaLevel);
Area.UNDER_STARTING_AREA = Area.UNDER(global.startingAreaLevel);
