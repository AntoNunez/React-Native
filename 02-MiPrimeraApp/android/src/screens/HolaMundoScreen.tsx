import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (

        <View style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
        }}>
            <Text style={{
                fontSize: 30,
                textAlign: 'center'
            }}>
                Hola Mundo!!
            </Text>
        </View>

    )
}
