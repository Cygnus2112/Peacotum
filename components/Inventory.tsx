import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { View } from './View';
import { ProductItem } from './ProductItem';

export type Product = {
  id: number;
  name: string;
  type: string; // drink, snack, etc.
  sku: string;
  imageUrl: string;
  quantity: number;
}

type InventoryUpdateData = {
  id: number;
  quantity: number;
}

type InventoryProps = PropsWithChildren<{
  inventory: Product[];
  onSaveInventory: (data: InventoryUpdateData) => void;
}>;

export const Inventory = ({ inventory, onSaveInventory }: InventoryProps) => {
  return (
    <View style={styles.container}>
      {inventory.map((item: Product) => {
        return (
          <ProductItem
            product={item}
            onSaveInventory={onSaveInventory}
            key={item.id.toString()}
           />
        )
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
});
