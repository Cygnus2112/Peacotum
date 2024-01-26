import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Text } from './Text';
import { View } from './View';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const Section = ({children, title}: SectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>
      <Text style={styles.sectionDescription}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
