import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from '../routes/Navigation';

const DrawerStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="navigation"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="navigation" component={Navigation} />
    </Stack.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({});
