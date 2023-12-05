import React, { useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Appearance,
  FlatList
} from 'react-native';
import { Section } from '../components/Section';
import { Toggle } from '../components/Toggle';
import {
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { View } from '../components/View';

import { useThemeStyle } from '../hooks/useThemeStyle';

const arr = new Array(8).fill(true);

export const HomeScreen = () => {
  const scheme = useColorScheme();
  console.log('scheme: ', scheme)
  const isDarkMode = scheme === 'dark';

  const themeStyles = useThemeStyle();
  console.log('them st ', themeStyles)

  const backgroundStyle = {
    backgroundColor: themeStyles.backgroundColor,
  };

  const toggleScheme = useCallback(() => {
    const newScheme = isDarkMode ? 'light' : 'dark';
    Appearance.setColorScheme(newScheme);
  }, [isDarkMode]);

  return (
    <View style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Toggle
            onToggle={toggleScheme}
            enabled={!isDarkMode}
          />
        </View>
      </ScrollView>
    </View>
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
