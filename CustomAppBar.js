import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CustomAppBar = ({ back, title }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomAppBar;