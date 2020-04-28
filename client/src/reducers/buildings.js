const buildings = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_BUILDING':
      return [...state, payload];
    case 'REMOVE_BUILDING':
      return state.filter(building => building.localId !== payload);
    default:
      return state;
  }
};

export default buildings;
