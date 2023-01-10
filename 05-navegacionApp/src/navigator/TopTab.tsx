import React from'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../components/ChatScreen';
import { ContactScreen } from '../components/ContactScreen';
import { AlbumsScreen } from '../components/AlbumsScreens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator =() => {

    const {top:paddingTop}= useSafeAreaInsets()
  return (
    <Tab.Navigator
    style={{paddingTop}}
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
    
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline'
              break;
            case 'Contact':
              iconName = 'people-outline'
              break;
            case 'Albums':
              iconName = 'albums-outline'
              break;
          }
          return <Icon name={iconName} size={20} color={color} />
        },
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle:{
            backgroundColor:colores.primary
        },
        tabBarStyle:{
           shadowColor:'transparent',
            elevation:0
        }
    })}
    
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}

