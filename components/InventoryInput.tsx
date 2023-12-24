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
  productName: string;
}>;

export const InventoryInput = ({ quantity, onSave, onCancel, productName }: InventoryInputProps) => {
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity.toString());
  return (
    <Modal onRequestClose={onCancel} transparent={true} animationType="fade">
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Update Quantity
          </Text>
          <Text style={styles.product}>
            {productName}
          </Text>
          <TextInput
            value={updatedQuantity}
            onChangeText={setUpdatedQuantity}
            inputMode="numeric"
            maxLength={2}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={onCancel}
            >
              <Text>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={onSave}
            >
              <Text style={styles.saveText}>
                Save
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: 200,
    height: 200,
    top: '35%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    paddingTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  product: {
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 15,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 75,
    height: 30,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  saveText: {
    fontWeight: '600',
  },
});
