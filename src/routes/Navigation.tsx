import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Navigation = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="card-search" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home-variant-outline" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Story"
        component={StoryScreen}
        options={{
          tabBarLabel: 'Story',
          tabBarIcon: ({color}) => (
            <Icon name="book-open-blank-variant" color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
