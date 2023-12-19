import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Text } from '../components/Text';
import { View } from '../components/View';
import { IMachine } from '../components/Machine';

import { useThemeStyle } from '../hooks/useThemeStyle';

export const MachineScreen = ({ route }) => { // Todo: typing
  const themeStyles = useThemeStyle();
  const { params: { item }} = route;
  const { title, type, imageUrl, inventory, address} = item as IMachine;

  const backgroundStyle = {
    backgroundColor: themeStyles.backgroundColor,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <ScrollView style={styles.details}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.addressText}>{address}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.addressText}>{type}</Text>
        </View>
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
  },
  details: {
    flexDirection: 'column',
  },
  title: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '500',
  },
  addressText: {
    fontSize: 16,
  },
  section: {
    width: '100%',
    paddingVertical: 5,
    justifyContent: 'center',
    paddingLeft: 8,
  }
});
