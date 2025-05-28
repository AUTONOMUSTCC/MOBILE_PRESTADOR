import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    //GERAL

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //HEADER

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

    //VIEW IMG 

    viewimg: {
        flex: 2/2,
        alignContent:'center',
        alignItems: 'center',
    },
    introducao:{
        width: 372,
        height: 205,
        contentFit: 'contain',
    },

    //VIEW INTRODUCAO
    ViewIntro:{
       alignContent: 'center',
       alignItems: 'center',
       flex:3/4,
       display:'flex',
    },
    titulo: {
        width: 327,
        textAlign: 'justify',
        fontSize:18,
        color: '#000',
    },
    texto: {
        color: '#36394A',
        fontFamily: 'Poppins, Regular',
        fontSize:16,
        width: 327,
        textAlign: 'justify',
    },

    //VIEW BUTTON

    btnContainer:{
        flex: 4/4,
        alignItems: 'center',
        justifyContent:'center',
        padding: 20,
    },
    button: {
        borderRadius: 10,
        width: 327,
        height: 52,
        backgroundColor: '#A0CEE1',
        color: '#000',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
    },
})