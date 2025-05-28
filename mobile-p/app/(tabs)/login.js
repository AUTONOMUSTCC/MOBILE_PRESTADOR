import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import React from "react";
import { Pressable, Text, TextInput, View, Alert } from "react-native";
import styles from "@/styles/LoginStyles";



//IMAGENS
const logo = require("@/assets/images/logoprestador.png");
const personagem = require("@/assets/images/CharacterLogin.png");

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const router = useRouter();
  
  const TESTE = () => {
    
    if (email === 'admin' && senha === '123') {
     router.push('/inicial');
    } else {
     erro();
    }
    
  }; 

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
       <Image source={logo} style={styles.logo} />
       <Text style={styles.nome}>AUTONOM 
         <Text style={styles.us}> US </Text> 
       </Text>
      </View> 
      
      <View style={styles.view2container}>
        <Image source={personagem} style={styles.personagem} />
      </View>

      <View style={styles.view3container}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          placeholder="Senha"
        />
        <View style={styles.forgotContainer}>
          <Pressable style={styles.forgotBTN}>
            <Text style={styles.forgot}>ESQUECI MINHA SENHA</Text>
          </Pressable>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={TESTE} >          
            <Text style={styles.text}>ENTRAR</Text>          
          </Pressable>
        </View>
      </View>

      
    </View>
  );
}
function erro() {
  return (
  Alert.alert('Atenção', 'Usuário ou senha inválidos')
);
}
