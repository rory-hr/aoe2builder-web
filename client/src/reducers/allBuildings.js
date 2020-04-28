const allBuildings = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_ALL':
      return payload;
    default:
      return state;
  }
};

export default allBuildings;
