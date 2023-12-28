import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Appearance,
  FlatList
} from 'react-native';
import { Toggle } from '../components/Toggle';
import { View } from '../components/View';
import { MachineListItem, IMachine } from '../components/Machine';

import { useThemeStyle } from '../hooks/useThemeStyle';

const data: IMachine = {
  id: 0,
  title: 'Civic Center Lobby',
  address: '1234 Fake Avenue, Ste #100, Los Angeles, CA',
  type: 'Snack',
  imageUrl: 'fakeurl',
  inventory: [
    {
      id: 0,
      name: 'Coca-Cola',
      type: 'beverage',
      imageUrl: 'asdfasdf',
      sku: 'asdfasdf',
      quantity: 6,
    },
    {
      id: 1,
      name: 'Diet Coke',
      type: 'beverage',
      imageUrl: 'asdfasdf',
      sku: 'asdfasdf',
      quantity: 4,
    },
    {
      id: 2,
      name: 'Gatorade - Lemon-Lime',
      type: 'beverage',
      imageUrl: 'asdfasdf',
      sku: 'asdfasdf',
      quantity: 7,
    },
    {
      id: 3,
      name: 'Gatorade - Orange',
      type: 'beverage',
      imageUrl: 'asdfasdf',
      sku: 'asdfasdf',
      quantity: 2,
    },
  ],
}

const data2: IMachine = {
  id: 1,
  title: 'Cedars Waiting Room',
  address: '1234 Fake Avenue, Ste #100, Los Angeles, CA',
  type: 'Beverage',
  imageUrl: 'fakeurl',
  inventory: [],
}

const machines = [data, data2];

export const HomeScreen = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const themeStyles = useThemeStyle();

  const backgroundStyle = {
    backgroundColor: themeStyles.backgroundColor,
  };

  const toggleScheme = useCallback(() => {
    const newScheme = isDarkMode ? 'light' : 'dark';
    Appearance.setColorScheme(newScheme);
  }, [isDarkMode]);

  return (
    <View style={[styles.container, backgroundStyle]}>
      <View>
        <Toggle
          onToggle={toggleScheme}
          enabled={!isDarkMode}
        />
      </View>
      <FlatList
        contentContainerStyle={backgroundStyle}
        data={machines}
        renderItem={({item, index}) => {
          return <MachineListItem machine={item} key={index.toString()} />
        }}
      />
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
