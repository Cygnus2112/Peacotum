import React from 'react';
import {
  StyleSheet,
  Switch,
} from 'react-native';

import { View } from './View';

type ToggleProps = {
  onToggle: () => void;
  enabled: boolean;
};

export const Toggle = ({ onToggle, enabled }: ToggleProps) => {
  return (
    <View style={styles.container}>
      <Switch
        onValueChange={onToggle}
        value={enabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
