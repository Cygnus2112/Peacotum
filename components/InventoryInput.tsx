import React, { PropsWithChildren, useState } from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';

import { Text } from './Text';
import { View } from './View';
import { useThemeStyle } from '../hooks/useThemeStyle';


type InventoryInputProps = PropsWithChildren<{
  quantity: number;
  onSave: () => void;
  onCancel: () => void;
}>;

export const InventoryInput = ({ quantity, onSave, onCancel }: InventoryInputProps) => {
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity.toString());
  return (
    <Modal onDismiss={onCancel}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Update Quantity
        </Text>
        <TextInput
          value={updatedQuantity}
          onChangeText={setUpdatedQuantity}
          inputMode="numeric"
          maxLength={2}
          style={styles.input}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    position: 'absolute',
    width: 200,
    height: 200,
    top: '25%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  input: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 22,
  }
});
