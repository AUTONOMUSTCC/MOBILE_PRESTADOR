import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
//import Button from '@/componentes/Button';
import { Link } from 'expo-router';
import styles from '@/styles/IndexStyle';

const logo = require('@/assets/images/logoprestador.png');
//const nome = require('@/assets/images/nomeLogo.png');

// Estrutura da tela
export default function Index() {
  return (
    <View style={styles.container}> 
      
      <View style={styles.imageContainer}>
       <Image source={logo} style={styles.logo} />
        <Text style={styles.nome}>AUTONOM 
        <Text style={styles.us}>US</Text> 
        </Text>
       <Text style={styles.text}>Sua ponte entre demanda e solução</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Link href="/introPrestador" asChild>
          <Pressable style={styles.button}>
            <FontAwesome name="arrow-right" size={35} color="#25292e" style={styles.buttonIcon} />   
          </Pressable>
       </Link>
      </View> 
      
    
    </View>
    
  );
}
