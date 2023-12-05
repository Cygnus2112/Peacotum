import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DELAY = 10000;

export const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Root' as never);   // Todo: add nav prop type
    }, DELAY);

    return () => {
      clearTimeout(timeout);
    }
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loading}>
        <Text style={styles.loadingText}>
          Peacotum
        </Text>
        <ActivityIndicator
          size={'large'}
          style={styles.spinner}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  loading: {
    top: '30%',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
  },
  spinner: {
    marginTop: 15,
    color: 'black',
  },
});
