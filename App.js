import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './HomeScreen'; // Muokkaa polkua tarpeen mukaan
import SecondScreen from './SecondScreen'; // Muokkaa polkua tarpeen mukaan
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}