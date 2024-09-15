import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomAppBar from './components/CustomAppBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomAppBar title="Home" />
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;