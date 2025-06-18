import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import logo from '@/assets/images/logoprestador.png';

const Header = () => {
    return(
        <View style={styles.headerContainer}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.nome}>AUTONOM 
                <Text style={styles.us}> US </Text> 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 30,
        flex: 1/4,
        flexDirection: "row",
        alignItems: 'start',
        contentFit: 'top',
        
    },
    logo: {
        width: 25,
        height: 20.45,
        contentFit: 'contain',

    },
    nome: {
        width: 90,
        height: 20.45,
        color: '#000',
    },
    us: {
        width: 90,
        height: 20.45,
        color: '#A0CEE1',  
    },

})

export default Header;