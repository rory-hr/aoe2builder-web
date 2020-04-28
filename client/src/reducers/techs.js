const techs = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_TECH':
      return [...state, payload];
    case 'REMOVE_TECH':
      return state.filter(tech => tech.localId !== payload);
    default:
      return state;
  }
};

export default techs;
