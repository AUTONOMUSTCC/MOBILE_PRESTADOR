import styles from '@/styles/InicialStyle';
import React from "react";
import { Image, Text, TextInput, View } from "react-native";

//IMAGENS
const bell = require("@/assets/images/notification.png");
const visuicon = require('@/assets/images/visualizacaoICON.png');
const criaricon = require('@/assets/images/criarICON.png');


export default function Inicial(){
    const [pesquisa, setpesquisa] = React.useState("");

    return(
        <View style={styles.container}>
            <View className='pesquisar' style={styles.pesquisaContainer}>
                <TextInput
                style={styles.inputPesquisa}
                placeholder="Pesquise uma categoria"
                onChangeText={setpesquisa}
                value={pesquisa}
                />
                <Image source={bell} style={styles.bellimg}></Image>
            </View>

            <View className="body" style={styles.body}> 
                <View style={styles.view1}>
                    <Text style={styles.text}>Nossas ferramentas</Text>
                </View>
                <View className="carrusel">
                    
                </View>
                <View className="controlPOSTS" style={styles.viewcontrolPOSTS}>
                    <View className="1" style={styles.direita} >
                        <View className="text" >
                            <Text style={styles.textotop}> Suas postagens: </Text>
                        </View>
                        <View>
                            <Text>3</Text>
                        </View>
                    </View>
                    <View className="2" style={styles.centro}>
                        <Image source={visuicon} style={styles.imgIcon}></Image>
                        <Text style={styles.texto}>Ver meus anúncios</Text>
                    </View>
                    <View className="3" style={styles.esquerda}>
                        <Image source={criaricon} style={styles.imgIcon}></Image>
                        <Text style={styles.texto}>Criar anúncio</Text>
                    </View>
                </View>

                <View className="CarouselServiços">
                    <View>

                    </View>
                    <View>

                    </View>
                </View>
            </View>
        </View>
    );
}