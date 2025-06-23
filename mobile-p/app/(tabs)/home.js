import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import styles from "@/styles/HomeStyle";
import Carrousel from "@/componentes/carrouselCards";
import CarrouselPop from "@/componentes/carrouselPopular";
import CarrouselCategorias from "@/componentes/carrouselCategorias";

// Imagens
const bell = require("@/assets/images/notification.png");
const eyeicon = require("@/assets/images/viewsicone.png");
const createicon = require("@/assets/images/criaricone.png");

const HomeScreen = () => {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 0, alignItems: "center" }}
    >
      <View style={styles.pesquisaContainer}>
          <TextInput
            style={styles.inputPesquisa}
            placeholder="Pesquise uma categoria"
            onChangeText={setPesquisa}
            value={pesquisa}
          />

        <Image source={bell} style={styles.bellimg} />
      </View>

      {/* Corpo da tela */}
      <View style={styles.body}>
        <View style={styles.view1}>
          <Text style={styles.text}>Nossas ferramentas</Text>
          <Carrousel />
        </View>

        <View style={styles.viewcontrolPOSTS}>
          <View style={styles.direita}>
            <Text style={styles.textotop}>Suas postagens:</Text>
            <Text contentContainerStyle={{fontWeight: "bold"}}>3</Text>
          </View>
          <View style={styles.centro}>
            <Image source={eyeicon} style={styles.imgIcon} />
            <Text style={styles.texto} >Ver meus anúncios</Text>
          </View>
          <View style={styles.esquerda}>
            <Image source={createicon} style={styles.imgIcon} />
            <Text style={styles.texto}>Criar anúncio</Text>
          </View>
        </View>

        <View style={styles.CarouselServicos}>
          <Text style={styles.text}>Serviços mais populares</Text>
          <CarrouselPop />
        </View>

        <View style={styles.CarouselCategorias}>
          <Text style={styles.text}>Todas as categorias</Text>
          <CarrouselCategorias />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
