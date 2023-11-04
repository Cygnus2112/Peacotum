import React from 'react';
import {
  StyleSheet,
  View,
  Switch,
} from 'react-native';

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
