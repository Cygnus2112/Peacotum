import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

import { Text } from './Text';
import { View } from './View';
import { useThemeStyle } from '../hooks/useThemeStyle';

export type Product = {
  name: string;
  type: string; // drink, snack, etc.
  sku: string;
  imageUrl: string;
  quantity: number;
}

export const ProductItem = ({ product }: { product: Product}) => {
  const { listItemColor, listItemBorderColor } = useThemeStyle();
  const textColor = {
    color: listItemColor,
  };
  const borderColor = {
    borderBottomColor: listItemBorderColor,
  }

  const { name, type, quantity } = product;

  return (
    <View style={[styles.product, borderColor]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../assets/vending-machine.jpeg')} // will change to imageUrl
          style={styles.image}
          height={50}
          width={50}
          resizeMode="contain"
        />
        <View>
          <Text style={[styles.title, textColor]}>
            { name }
          </Text>
          <Text style={[styles.type, textColor]}>
            { type }
          </Text>
        </View>
      </View>
      <Pressable>
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>
            { quantity.toString() }
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

type InventoryProps = PropsWithChildren<{
  inventory: Product[];
}>;

export const Inventory = ({ inventory }: InventoryProps) => {
  return (
    <View style={styles.container}>
      {inventory.map((item: Product) => {
        return <ProductItem product={item} />
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  image: {
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    marginRight: 5,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 5, 
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    overflow: 'hidden',
  },
  type: {
    fontSize: 14,
    fontWeight: '400',
  },
  product: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
  },
  quantity: {
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
