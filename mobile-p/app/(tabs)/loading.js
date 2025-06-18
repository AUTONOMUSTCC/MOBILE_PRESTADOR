import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import { Link } from 'expo-router';
import styles from '@/styles/IndexStyle';

//images
import logo from '@/assets/images/logoprestador.png';

// Estrutura da tela
export default function Loading() {
  return (
    <View style={styles.container}> 
      
      <View style={styles.imageContainer}>
       <Image source={logo} style={styles.logo} />
        <Text style={styles.logotext}>AUTONOM 
        <Text style={styles.us}>US</Text> 
        </Text>
       <Text style={styles.text}>Sua ponte entre demanda e solução</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Link href="/introduction" asChild>
          <Pressable style={styles.button}>
            <FontAwesome name="arrow-right" size={35} color="#25292e" style={styles.buttonIcon} />   
          </Pressable>
       </Link>
      </View> 
      
    
    </View>
    
  );
}
