import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../pages/Home';
import Bookmark from '../pages/Bookmark';
import Like from '../pages/Like';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#0652DD', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
        tabBarShowLabel: false, // Hide the labels under the icons
        headerShown: false, // Hide the header for all screens
        tabBarStyle: {
          height: 70, // Increase the height of the tab bar
          borderTopLeftRadius: 15, // Rounded corners
          borderTopRightRadius: 15, // Rounded corners
          position: 'absolute', // Make sure the tab bar is placed correctly
          backgroundColor: '#fff', // Background color of the tab bar
          elevation: 5, // Shadow for Android
          shadowColor: '#000', // Shadow color for iOS
          shadowOffset: {width: 0, height: 10}, // Shadow offset for iOS
          shadowOpacity: 0.25, // Shadow opacity for iOS
          shadowRadius: 10, // Shadow radius for iOS
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Bookmark':
              iconName = focused
                ? 'ticket-confirmation'
                : 'ticket-confirmation-outline';
              break;
            case 'Like':
              iconName = focused ? 'cards-heart' : 'cards-heart-outline';
              break;
            case 'Profile':
              iconName = focused ? 'account' : 'account-outline';
              break;
            default:
              iconName = 'circle';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Like" component={Like} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
