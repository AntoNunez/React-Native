import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
<Icon name="rocket" size={30} color="#900" />;

export const Tab1Screen = () => {

  useEffect(() =>{

    console.log("Tab1Screen effect")
  },[])

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
        <Icon name="airplane-outline" size={30} color="#900" />
        </Text>
    </View>
  )
}
