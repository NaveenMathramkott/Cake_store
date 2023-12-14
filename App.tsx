/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerStack from './src/screens/DrawerStack';

const App = () => {
  const Drawer = createDrawerNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'red' : 'blue',
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTitle: false,
          }}>
          <Drawer.Screen name="home" component={DrawerStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
