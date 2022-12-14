import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxObjectModelScreen } from './android/src/screens/BoxObjectModelScreen'

//import { ContadorScreen } from './android/src/screens/ContadorScreen'
//import { HolaMundoScreen } from './android/src/screens/HolaMundoScreen'

export const App = () => {
  return (
    <SafeAreaView>

      {/*<HolaMundoScreen/>
      <ContadorScreen/>*/}
  <BoxObjectModelScreen/>
    </SafeAreaView>
  )
}
