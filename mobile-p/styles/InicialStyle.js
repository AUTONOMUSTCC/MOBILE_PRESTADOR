import { StyleSheet, Dimensions } from 'react-native';

const widthTotal = Dimensions.get('screen').width;
const heightTotal = Dimensions.get('screen').height;
export default StyleSheet.create({ 
    container: {
      display:'flex',
      width: widthTotal,
      height: heightTotal,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#A0CEE1',
    },
    pesquisaContainer: {
      flex:1/10,
      width:'100%',
      backgroundColor: '#A0CEE1',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputPesquisa:{
      width:282,
      height:38,
      backgroundColor: '#fff',
      borderRadius: 8,
      fontSize:10,

    },
    bellimg: {
      width:35,
      height:35,
      contentFit: 'contain',
    },
    body: {
      flex:6/7,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius:35,
      width: '100%',
    },
    view1: {
      width: '90%',
      flex:1/10,
    },
    text:{
      fontFamily: 'Poppins',
      fontSize: 12,
    },

    //View controlPOSTS
    viewcontrolPOSTS:{
      alignItems:'center',
      flex:1/10,
      width: '90%',
      flexDirection: 'row',
      borderStyle:'solid',
      borderColor: '#BFBFBF',
      borderWidth: 2,
      borderRadius: 9,
    },
    direita:{
      alignItems:'center',
      justifyContent:'center',
      flex:1/3,
      flexDirection: 'column',
    },
    textotop:{
      padding:10,
      color:'#666D80',
      textAlign: 'left',
      fontSize:10,
    },
    centro:{
      alignItems:'center',
      flex:1/3,
      flexDirection: 'column',
    },
    esquerda:{
      alignItems:'center',
      flex:1/3,
      flexDirection: 'column',
    },
    imgIcon :{
      paddingTop:5,
      width:22,
      height:22,
      contentFit: 'contain',
      alignContent:'center',
      alignItems:'center',
    },
    texto:{
      paddingTop:10,
      textAlign:'justify',
      color:'#666D80',
      fontSize:8,
    },


 });