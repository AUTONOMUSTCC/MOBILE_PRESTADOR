import logo from '@/assets/images/logoprestador.png';
import { Image, StyleSheet, Text, View ,Dimensions} from "react-native";
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;


const Header = () => {
    return(
        <View style={styles.headerContainer}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.nome}>AUTONOM<Text style={styles.us}>US</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: widthTotal,
        height: heightTotal * 0.05,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent:'center',
        contentFit: 'top',    
        position: 'absolute',
        top: 0,

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
        margin: 0,
    },
    us: {
        width: 90,
        height: 20.45,
        color: '#A0CEE1',  
    },

})

export default Header;