import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

import { Text } from './Text';
import { View } from './View';
import { useThemeStyle } from '../hooks/useThemeStyle';
import { InventoryInput } from './InventoryInput';

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

type ProductItemProps = {
  product: Product;
  onSaveInventory: (data: InventoryUpdateData) => void;
}

export const ProductItem = ({ product, onSaveInventory }: ProductItemProps) => {
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const { listItemColor, listItemBorderColor } = useThemeStyle();
  const textColor = {
    color: listItemColor,
  };
  const borderColor = {
    borderBottomColor: listItemBorderColor,
  }

  const { id, name, type, quantity } = product;

  const handleQuantityPress = () => {
    setShowQuantityModal(true);
  }

  const handleSave = useCallback((quantity: number) => {
    onSaveInventory({
      id,
      quantity
    });
  }, [onSaveInventory]);

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
      <Pressable onPress={handleQuantityPress}>
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>
            { quantity.toString() }
          </Text>
        </View>
      </Pressable>
      {showQuantityModal && (
        <InventoryInput
          quantity={quantity}
          onCancel={() => setShowQuantityModal(false)}
          onSave={handleSave}
          productName={name}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    marginRight: 5,
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
