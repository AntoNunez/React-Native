import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreens } from '../screens/SettingsScreens';
//import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon  from 'react-native-vector-icons/Ionicons';




const Drawer = createDrawerNavigator();



export const MenuLateral = ()=> {

  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
    }}
    drawerContent={(props)=><MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreens"  component={SettingsScreens} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) =>{
  return (
  
    <DrawerContentScrollView>
      {/*Parte del Avatar */}
      <View style={styles.avatarContainer}>
        <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
        }}
        style={styles.Avatar}
        />
      </View>

      {/*Opciones de menu */}
          <View style={styles.menuContainer}>

            <TouchableOpacity 
            style={{
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('Tabs')}
            >
              <Icon name={'compass-outline'} size={20} color='black' />
              <Text style={styles.menuTexto}> Navegacion</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{
              ...styles.menuBoton,
            flexDirection:'row'
            }}
            onPress={() => navigation.navigate('SettingsScreens')}
            >
              <Icon name={'cog-outline'} size={20} color='black' />
              <Text style={styles.menuTexto}> Ajustes</Text>
            </TouchableOpacity>

          </View>

    </DrawerContentScrollView>




  );
}