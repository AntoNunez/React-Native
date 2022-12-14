import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native'

interface Props {
    title: string;
    position?: "br" | "bl"
    onPress: () => void;

}

export const Fab = ({ title, onPress, position = "br" }: Props) => {

    const ios =()=>{
        return(
            <View
            style={
                (position === 'bl')
                    ? styles.fabLocationBL
                    : styles.fabLocationBR
            }
        >

            <TouchableOpacity
                activeOpacity={0.75}
                onPress={onPress}
               
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> {title}</Text>
                </View>

            </TouchableOpacity>
            
        </View>
        )

    }

    const android =()=>{
        return(
            <View
            style={
                (position === 'bl')
                    ? styles.fabLocationBL
                    : styles.fabLocationBR
            }
        >

            <TouchableNativeFeedback

                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> {title}</Text>
                </View>

            </TouchableNativeFeedback>
            
        </View>
        )
    }
    return(Platform.OS === 'ios') ? ios() : android();

}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 2,

    },
    fabText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"
    },
    fabLocationBR: {
        position: "absolute",
        bottom: 30,
        right: 30,
    },
    fabLocationBL: {
        position: "absolute",
        bottom: 30,
        left: 30,
    }
})