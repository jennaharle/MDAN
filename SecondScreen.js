import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomAppBar from './components/CustomAppBar';

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <CustomAppBar title="Second Screen" back={true} />
      <Text>Welcome to the Second Screen!</Text>
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

export default SecondScreen;