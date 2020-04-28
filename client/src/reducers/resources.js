const initialState = {
  // RATES
  woodRate: 0,
  foodRate: 0,
  goldRate: 0,
  stoneRate: 0,
  // RESOURCE STARTING TOTALS
  woodCount: 200,
  foodCount: 200,
  goldCount: 50,
  stoneCount: 200,
  // RESOURCE GATHERERS
  woodGatherers: 0,
  foodGatherers: 0,
  goldGatherers: 0,
  stoneGatherers: 0,
};

const resources = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_WOOD_COUNT':
      return { ...state, woodCount: payload };
    case 'UPDATE_FOOD_COUNT':
      return { ...state, foodCount: payload };
    case 'UPDATE_GOLD_COUNT':
      return { ...state, goldCount: payload };
    case 'UPDATE_STONE_COUNT':
      return { ...state, stoneRate: payload };

    case 'UPDATE_WOOD_RATE':
      return { ...state, woodRate: payload };
    case 'UPDATE_FOOD_RATE':
      return { ...state, foodRate: payload };
    case 'UPDATE_GOLD_RATE':
      return { ...state, goldRate: payload };
    case 'UPDATE_STONE_RATE':
      return { ...state, stoneRate: payload };

    case 'UPDATE_WOOD_GATHERERS':
      return { ...state, woodGatherers: payload };
    case 'UPDATE_FOOD_GATHERERS':
      return { ...state, foodGatherers: payload };
    case 'UPDATE_GOLD_GATHERERS':
      return { ...state, goldGatherers: payload };
    case 'UPDATE_STONE_GATHERERS':
      return { ...state, stoneGatherers: payload };

    default:
      return state;
  }
};

export default resources;
