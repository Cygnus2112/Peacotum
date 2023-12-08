import React from 'react';
import {
  Text as RNText,
  StyleProp,
  TextStyle,
  TextProps,
} from 'react-native';

import { useThemeStyle } from '../hooks/useThemeStyle';

type ITextProps = {
  style?: StyleProp<TextStyle>;
  children: any;
  props?: TextProps;
  numberOfLines?: number;
};

export const Text = ({ style, children, numberOfLines }: ITextProps) => {
  const themeStyles = useThemeStyle();

  const textStyle = {
    color: themeStyles.color,
  };

  return (
    <RNText style={[textStyle, style]} numberOfLines={numberOfLines}>
      { children }
    </RNText>
  );
}
