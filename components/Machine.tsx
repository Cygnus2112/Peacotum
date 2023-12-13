import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

import { Text } from './Text';
import { View } from './View';
import { useThemeStyle } from '../hooks/useThemeStyle';

type Product = {
  name: string;
  type: string; // drink, snack, etc.
  sku: string;
  imageUrl: string;
  quantity: number;
}

export type IMachine = {
  type: string; // type of vending machine
  imageUrl: string; // if no url, default to logo
  title: string; // this will likely be an address
  address: string;
  inventory: Product[];
}

type MachineProps = PropsWithChildren<{
  machine: IMachine;
}>;

export const MachineListItem = ({ machine }: MachineProps) => {
  const { title, type, address } = machine;
  const { listItemColor, listItemBorderColor } = useThemeStyle();
  const textColor = {
    color: listItemColor,
  };
  const borderColor = {
    borderBottomColor: listItemBorderColor,
  }

  return (
    <View style={[styles.container, borderColor]}>
      <Image
        source={require('../assets/vending-machine.jpeg')} // will change to imageUrl
        style={styles.image}
        height={50}
        width={50}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={[styles.title, textColor]} numberOfLines={1}>
          {title}
        </Text>
        <Text style={[styles.address, textColor]} numberOfLines={1}>
          {address}
        </Text>
        <Text style={[styles.type, textColor]}>
          {type}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  image: {
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'white',
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 5, 
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    overflow: 'hidden',
  },
  address: {
    fontSize: 14,
    overflow: 'hidden',
  },
  type: {
    fontSize: 14,
    fontWeight: '400',
  },
});
