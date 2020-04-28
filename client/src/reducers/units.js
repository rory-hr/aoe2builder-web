const units = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_UNIT':
      return [...state, payload];
    case 'REMOVE_UNIT':
      return state.filter(unit => unit.localId !== payload);
    default:
      return state;
  }
};

export default units;
