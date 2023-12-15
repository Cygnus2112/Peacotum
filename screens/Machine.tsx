import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Text } from '../components/Text';
import { MachineListItem, IMachine } from '../components/Machine';

import { useThemeStyle } from '../hooks/useThemeStyle';

export const MachineScreen = () => {
  const themeStyles = useThemeStyle();

  const backgroundStyle = {
    backgroundColor: themeStyles.backgroundColor,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <ScrollView>
        <Text>Machine Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
  }
});
