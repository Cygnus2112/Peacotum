import React from 'react';
import {
  useColorScheme,
  ColorSchemeName,
} from 'react-native';

const lightTheme = {
  color: '#4169e1',
  backgroundColor: '#efe7db',
}

const darkTheme = {
  color: 'white',
  backgroundColor: 'black',
}
// Todo: icon color, etc.

export const useThemeStyle = () => {
  const scheme: ColorSchemeName = useColorScheme();
  return scheme === 'dark' ? darkTheme : lightTheme;
}
