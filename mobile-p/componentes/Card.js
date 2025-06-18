import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

const Agenda = require('@/assets/images/agenda.svg');

export const Cardcarrosel=()=> {
return(
<View styles={style.container}>
    <View styles={style.rigth}> 
        
    </View>
    <View style={style.left}>
    <Text >
        Agenda inteligente
    </Text>
    <Text>
        Preencha sua agenda com seus horários disponíveis e combine horários com os profissionais
    </Text>
    </View>
</View>
)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#77C4E4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rigth:{
        flex: '50%',
        alignContent: 'center'
    },
    icon:{
        position: 'absolute',
    },
    left:{
        flex: '50%',
        alignContent: 'center'
    },
})
export default Cardcarrosel;