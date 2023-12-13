import {
  useColorScheme,
  ColorSchemeName,
} from 'react-native';

const lightTheme = {
  color: '#800080',
  backgroundColor: '#e9eae7',
  listItemColor: 'rgba(0, 0, 0, 0.7)',
  listItemBorderColor: 'rgba(0, 0, 0, 0.1)',
}

const darkTheme = {
  color: '#e9eae7',
  backgroundColor: '#800080',
  listItemColor: '#e9eae7',
  listItemBorderColor: 'rgba(255,255,255, 0.2)',
}
// Todo: icon color, etc.

export const useThemeStyle = () => {
  const scheme: ColorSchemeName = useColorScheme();
  return scheme === 'dark' ? darkTheme : lightTheme;
}
