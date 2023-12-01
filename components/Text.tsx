import React from 'react';
import {
  Text as RNText,
  StyleProp,
  TextStyle
} from 'react-native';

import { useThemeStyle } from '../hooks/useThemeStyle';

type TextProps = {
  style?: StyleProp<TextStyle>;
  children: any;
};

export const Text = ({ style, children }: TextProps) => {
  const themeStyles = useThemeStyle();

  const textStyle = {
    color: themeStyles.color,
  };

  return (
    <RNText style={[textStyle, style]}>
      { children }
    </RNText>
  );
}
