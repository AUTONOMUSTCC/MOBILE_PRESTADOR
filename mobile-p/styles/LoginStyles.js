import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flex: 3/5,
    },
    input: {
        display: 'flex',
        width: 327,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        textAlign: 'left',
    },

    //BOTAO
    buttonContainer:{
        flex: 4/4,
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
        flex:1/2,
        alignItems: 'end',
        justifyContent: 'end',
    },
    forgotBTN:{
        alignItems: 'end',
        justifyContent: 'end',
        alignContent: 'center',
        padding: '2%',
    },
    forgot: {
        fontWeight:'bold',
        color:'#A0CEE1',
        textAlign: 'end',
        
    },
})