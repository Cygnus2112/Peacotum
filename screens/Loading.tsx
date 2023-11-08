import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';

export const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loading}>
        <Text style={styles.loadingText}>
          Loading
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
