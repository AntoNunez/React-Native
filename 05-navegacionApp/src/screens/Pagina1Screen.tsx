import { DrawerScreenProps } from '@react-navigation/drawer'

import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme'


interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir a Pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={{
        marginVertical:20,
        fontSize:20,
       
      }}>
        Navegar con argumentos</Text>

      <View style ={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor:'#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Anto'
          })}
        >
          <Icon
          name= 'body-outline'
          color='white'
          size={35}
          />
          <Text style={styles.botonGrandeText}>Anto</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={{
          ...styles.botonGrande,
          backgroundColor:'#FF9427'
        }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Ringo'
          })}
        >
          <Icon
          name= 'paw-outline'
          color='white'
          size={35}
          />
          <Text style={styles.botonGrandeText}>Ringo</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
