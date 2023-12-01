import React from 'react';
import {
  View as RNView,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { useThemeStyle } from '../hooks/useThemeStyle';

type ViewProps = {
  style?: StyleProp<ViewStyle>;
  children: any;
};

export const View = ({ style, children }: ViewProps) => {
  const themeStyles = useThemeStyle();

  const backgroundStyle = {
    backgroundColor: themeStyles.backgroundColor,
  };

  return (
    <RNView style={[backgroundStyle, style]}>
      { children }
    </RNView>
  );
}
