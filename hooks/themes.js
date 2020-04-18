import { registerThemes } from 'react-native-themed-styles';

const light = {
  backgroundColor: '#FFE8E8',
  textColor: '#0B2033',
  resetColor: '#FA8334',
};
const dark = {
  backgroundColor: '#0B2033',
  textColor: '#FFE8E8',
  resetColor: '#FA8334',
};

const styleSheetFactory = registerThemes({ light, dark }, () => 'dark');

export { styleSheetFactory };
