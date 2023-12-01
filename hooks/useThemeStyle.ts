import {
  useColorScheme,
  ColorSchemeName,
} from 'react-native';

const lightTheme = {
  color: '#800080',
  backgroundColor: '#e9eae7',
}

const darkTheme = {
  color: '#e9eae7',
  backgroundColor: '#800080',
}
// Todo: icon color, etc.

export const useThemeStyle = () => {
  const scheme: ColorSchemeName = useColorScheme();
  return scheme === 'dark' ? darkTheme : lightTheme;
}
