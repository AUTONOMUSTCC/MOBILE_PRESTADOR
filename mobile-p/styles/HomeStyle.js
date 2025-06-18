import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('window');
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
      width:'80%',
      height:'40%',
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
      width : width,
    },
    view1: {
      width: width * 0.9,
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
      width:32,
      height:32,
      alignContent:'center',
      alignItems:'center',
    },
    texto:{
      paddingTop:10,
      textAlign:'justify',
      color:'#666D80',
      fontSize:12,
    },
    // CARROUSEL

  slide: {
    height: heightTotal * 0.2,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  card:{
    height: heightTotal * 0.15,
    width: width * 0.8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A0CEE1',
  },
  image: {
    width: width * 0.8,
    height: 200,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    margin: 5,
  },

 });