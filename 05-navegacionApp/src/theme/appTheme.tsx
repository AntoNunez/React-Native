import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6',
}


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 30
    },
    title:{
        fontSize: 20
    },
    botonGrande:{
        width: 100,
        height:100,
        backgroundColor:'red',
        borderRadius:20,
        alignItems:"center",
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeText:{
        color: 'white',
        fontSize: 18,
        fontWeight:'bold'
    },
    avatarContainer:{
        alignItems:'center'
    },
    Avatar:{
        width: 150,
        height:150,
        borderRadius:100,
    },
    menuContainer:{
        marginVertical:30,
        marginHorizontal:30,
        alignItems:'center',
    },
    menuBoton:{
        marginVertical:10
    },
    menuTexto:{
        fontSize:20
    }
})