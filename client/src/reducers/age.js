const ages = {
  dark: 'dark',
  feudal: 'feudal',
  castle: 'castle',
  imperial: 'imperial',
};

const age = (state = 'dark', { type }) => {
  const { dark, feudal, castle, imperial } = ages;
  switch (type) {
    case 'DARK':
      return dark;
    case 'FEUDAL':
      return feudal;
    case 'CASTLE':
      return castle;
    case 'IMPERIAL':
      return imperial;
    default:
      return state;
  }
};

export default age;
