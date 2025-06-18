import styles from '@/styles/HomeStyle';
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, Text, TextInput, View } from "react-native";
//import * as NavigationBar from 'expo-navigation-bar';

//IMAGENS
const bell = require("@/assets/images/notification.png");
const eyeicon = require('@/assets/images/Vector.svg');
const criaricon = require('@/assets/images/criaricon.svg');

//CONSTS 
const { width } = Dimensions.get('window');
const data = [
  { id: '1', title: 'Slide 1'},
  { id: '2', title: 'Slide 2'},
  { id: '3', title: 'Slide 3'},
];  

export default function Home(){
    const [pesquisa, setpesquisa] = React.useState("");
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

   /* useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // Troca de slide a cada 3 segundos

    return () => clearInterval(interval);
    }, [currentIndex]);
*/
    const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
    };

    const renderItem = ({ item }) => (
    <View style={styles.slide}>
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    </View>
    );
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
                    <FlatList
                    ref={flatListRef}
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                />
                <View style={styles.pagination}>
                    {data.map((_, i) => (
                    <View
                        key={i}
                        style={[
                        styles.dot,
                        { opacity: i === currentIndex ? 1 : 0.3 }
                        ]}
                    />
                    ))}
                </View>

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
                        <Image source={eyeicon} style={styles.imgIcon}></Image>
                        <Text style={styles.texto}>Ver meus anúncios</Text>
                    </View>
                    <View className="3" style={styles.esquerda}>
                        <Image source={criaricon} style={styles.imgIcon}></Image>
                        <Text style={styles.texto}>Criar anúncio</Text>
                    </View>
                </View>

                <View className="CarouselServicos">
                    <View>

                    </View>
                    <View>

                    </View>
                </View>
            </View>
        </View>
    );
}