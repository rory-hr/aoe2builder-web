const time = (state = 0, { type, payload }) => {
  switch (type) {
    case 'UPDATE_TIME':
      return payload;
    default:
      return state;
  }
};

export default time;
