import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //HEADER
    headerContainer: {
        padding: 30,
        flex: 1/5,
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
    
        fontSize: 13,
        color: '#000',
    },
    us:{
        fontSize: 13,
        color: '#A0CEE1',
    },
    //VIEW 2

    personagem: {
        width: 240,
        height: 198,
        contentFit: 'contain',
        ImageContentPosition: 'center',
    },
    
    view2container: {       
        alignContent: 'center',
        flex: 2/5,
        backgroundColor: '#fff',
    },

    //VIEW 3

    view3container: {
        alignContent: 'center',
        alignItems: 'center',
        flex: 3/5,
    },
    input: {
        backgroundColor: '#',
        width: 327,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },

    //BOTAO
    buttonContainer:{
        flex: 4/5,
        //flexDirection: "column",
        alignItems: 'center',
        justifyContent:'center',
        padding: 20,
    },
    button: {
        
        borderRadius: 56,
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
    //RECUPERAR SENHA
    
    forgotContainer: {
        flex:5/5,
        alignItems: 'end',
        justifyContent: 'end',
    },
    forgotBTN:{
        alignItems: 'end',
        justifyContent: 'end',
    },
    forgot: {
        fontWeight:'bold',
        color:'#A0CEE1',
        textAlign: 'end',
        
    },
})