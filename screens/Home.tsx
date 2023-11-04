import React, { useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Appearance,
} from 'react-native';
import { Section } from '../components/Section';
import { Toggle } from '../components/Toggle';
import {
  Colors,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const toggleScheme = useCallback(() => {
    const newScheme = isDarkMode ? 'light' : 'dark';
    Appearance.setColorScheme(newScheme);
  }, [isDarkMode]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Toggle
            onToggle={toggleScheme}
            enabled={!isDarkMode}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
